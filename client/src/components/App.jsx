import React from "react";
import Axios from "axios";
import RestaurantsList from "./RestaurantsList.jsx";

class App extends React.Component {
  // TODO: convert to functional component
  constructor(props) {
    // TODO: use react hooks for state management
    super(props);
    this.state = {
      displayChoice: false,
      restaurants: [],
      restaurant: "",
    };
    this.getDataFromDatabase = this.getDataFromDatabase.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleRandom = this.handleRandom.bind(this);
    this.renderMainModule = this.renderMainModule.bind(this);
  }

  componentDidMount() {
    this.getDataFromDatabase();
  }

  getDataFromDatabase() {
    // TODO rename better method name
    Axios.get("/api/all")
      .then((results) => {
        this.setState({
          restaurants: results.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleChange(e) {
    e.preventDefault(); // preventing page from refreshing on form submission

    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleAddClick() {
    // TODO rename better method name
    if (this.state.restaurant.length < 1) {
      window.alert("Please enter at least one character.");
    } else {
      let { restaurant } = this.state;
      Axios.post("/api/create", {
        restaurant: restaurant,
      })
        .then(() => this.setState({ restaurant: "" })) // sets state back to blank to force re-render
        .catch((err) => console.err(err));
    }
  }

  handleClearClick() {
    Axios.delete("/api/all")
      .then(() => this.setState({ restaurant: "" })) // sets state back to blank to force re-render
      .catch((err) => console.err(err));
  }

  handleRandom(e) {
    e.preventDefault();
    this.setState({
      displayChoice: !this.state.displayChoice,
    });
  }

  handleDeleteOne(id) {
    Axios.delete(`/api/deleteOne/${id}`) // utilizing req.params
      .then(() => this.getDataFromDatabase())
      .catch((err) => console.error(err));
  }

  renderMainModule() {
    const randomizeRestaurants = (restaurants) => {
      return restaurants[Math.floor(Math.random() * restaurants.length)]
        .restaurant;
    };
    const renderViews = () => {
      if (this.state.displayChoice) {
        return (
          <>
            <div id="choiceText">Your choice is: </div>
            <h1 style={{ color: "rgb(83 177 89)" }}>
              {randomizeRestaurants(this.state.restaurants)}
            </h1>
          </>
        );
      } else if (!this.state.restaurants.length) {
        return (
          <>
            <h3 style={{ padding: "25px 0" }}>
              Add restaurants to get started!
            </h3>
          </>
        );
      } else {
        return (
          <RestaurantsList
            restaurants={this.state.restaurants}
            handleDeleteOne={this.handleDeleteOne.bind(this)}
          />
        );
      }
    };
    return (
      <div>
        <form>
          <input
            placeholder="Restaurant"
            name="restaurant"
            onChange={this.handleChange.bind(this)}
            className="inputBar"
          ></input>
          <button onClick={this.handleAddClick.bind(this)} id="addButton">
            Add
          </button>
          <button onClick={this.handleClearClick.bind(this)} id="clearButton">
            Clear
          </button>
          {renderViews()}
          <button onClick={(e) => this.handleRandom(e)} id="randomButton">
            Go!
          </button>
        </form>
      </div>
    );
  }

  render() {
    return (
      <>
        <div className="navBarTop">
          <div className="navJustify">
            <a className="navText">Home</a>
            <a className="navText">Profile</a>
          </div>
        </div>
        <h1 className="headerText">Welp, can't decide?</h1>
        <h5>For those "idk, whatever you want to eat" moments.</h5>
        {this.renderMainModule()}
      </>
    );
  }
}

export default App;
