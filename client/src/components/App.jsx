import React from 'react';
import Axios from 'axios';
import List from './List.jsx'

class App extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        displayChoice: false,
        restaurants: [],
        restaurant: ''
    }
    this.getDataFromDatabase =   this.getDataFromDatabase.bind(this)
    this.handleAddClick = this.handleAddClick.bind(this)
    this.handleRandom = this.handleRandom.bind(this)
  }

  componentDidMount(){
      this.getDataFromDatabase();
  }

  getDataFromDatabase(){
      Axios.get('/api/all')
      .then((results) => {
          this.setState({
              restaurants: results.data
          })
      })
      .catch((err) => { console.error(err)})
  }

  handleChange(e){
    e.preventDefault() // preventing page from refreshing on form submission

    this.setState({
        [e.target.name]: e.target.value
    })
  }

  handleAddClick(){
      if (this.state.restaurant.length < 1){
          window.alert('Please enter at least one character.')
      } else {
        let { restaurant } = this.state;
        Axios.post("/api/create", {
          restaurant: restaurant,
        })
          .then(() => this.setState({ restaurant: "" })) // sets state back to blank to force re-render
          .catch((err) => console.err(err));
      }
  }

  handleClearClick(){
    let {restaurant} = this.state
      Axios.delete('/api/all')
      .then(() => this.setState({restaurant: ''})) // sets state back to blank to force re-render
      .catch(err => console.err(err))
  }

  handleRandom(e){
    e.preventDefault();
    this.setState({
        displayChoice: !this.state.displayChoice
    })
  }

  handleDeleteOne(id){
    Axios.delete(`/api/deleteOne/${id}`) // utilizing req.params
    .then(() =>  this.getDataFromDatabase()) // calls a get request after each successful delete
    .catch(err => console.error(err))
  }

    render(){
        if (this.state.displayChoice){
            return (
                <div>
                    <form>
                        <input placeholder="Restaurant" name="restaurant" onChange={this.handleChange.bind(this)} className="inputBar"></input>
                        <button onClick={this.handleAddClick.bind(this)} id="addButton">Add</button>
                        <button onClick={this.handleClearClick.bind(this)} id="clearButton">Clear</button>
                        <div id="choiceText">Your choice is: </div>
                        <h1 style={{"color":"rgb(83 177 89)"}}>{this.state.restaurants[Math.floor(Math.random() * this.state.restaurants.length)].restaurant}</h1>
                        <button onClick={(e) => this.handleRandom(e)} id="randomButton">Go!</button>
                    </form>
                </div>
            )
        } else if (!this.state.restaurants.length){
            return (
                <div>
                    <form>
                        <input placeholder="Restaurant" name="restaurant" onChange={this.handleChange.bind(this)} className="inputBar"></input>
                        <button onClick={this.handleAddClick.bind(this)} id="addButton">Add</button>
                        <button onClick={this.handleClearClick.bind(this)} id="clearButton">Clear</button>
                        <h3 style={{"padding":"25px 0"}}>Add restaurants to get started!</h3>
                        <button onClick={(e) => this.handleRandom(e)} id="randomButton">Go!</button>
                    </form>
                </div>
            )
        } else {
            return (
                <div>
                    <form>
                        <input placeholder="Restaurant" name="restaurant" onChange={this.handleChange.bind(this)} className="inputBar"></input>
                        <button onClick={this.handleAddClick.bind(this)} id="addButton">Add</button>
                        <button onClick={this.handleClearClick.bind(this)} id="clearButton">Clear</button>
                         <List restaurants={this.state.restaurants} handleDeleteOne={this.handleDeleteOne.bind(this)} />
                        <button onClick={(e) => this.handleRandom(e) } id="randomButton">Go!</button>
                    </form>
                </div>
            )
        }
    }
}

export default App;