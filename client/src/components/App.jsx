import React, { useState, useEffect } from "react";
import axios from "axios";
import RestaurantsList from "./RestaurantsList.jsx";

const App = () => {
  const [restaurantChoice, setRestaurantChoice] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = () => {
    axios.get("/api/all")
      .then((results) => {
        setRestaurants([...restaurants, results.data]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleInputChange = (e) => {
    e.preventDefault(); // preventing page from refreshing on form submission

    setRestaurant(e.target.value);
  };

  const handleAddRestaurantClick = () => {
    if (restaurant.length < 1) {
      window.alert("Please enter at least one character.");
    } else {
      axios.post("/api/create", {
        restaurant: restaurant.toString(),
      })
        .then(() => setRestaurant(null))
        .catch((err) => console.err(err));
    }
  };

  const handleClearClick = () => {
    axios.delete("/api/all")
      .then(() => axios.get("/"))
      .catch((err) => console.err(err));
  };

  const randomizeRestaurants = () => {
    return restaurants[Math.floor(Math.random() * restaurants.length)]
      .restaurant;
  };

  const handleRandomClick = () => {
    setRestaurantChoice(randomizeRestaurants());
  };

  const handleDeleteOne = (paramId) => {
    axios.delete(`/api/deleteOne/${paramId}`) // utilizing req.params
      .then(() => getRestaurants())
      .catch((err) => console.error(err));
  };

  const renderMainModule = () => {
    if (restaurantChoice) {
      return (
        <>
          <div className="restaurantChoiceWrapper">
            <p id="restaurantChoiceText">Your choice is: </p>
            <a
              href={`https://www.google.com/search?q=${restaurantChoice}+near+me`}
              id="restaurantChoiceResultText"
              alt="Link to Google Search"
              target={"_blank"}
            >
              {restaurantChoice}
            </a>
          </div>
          <button
            onClick={() => setRestaurantChoice(null)}
            id="backToListButton"
          >
            Back to list
          </button>
        </>
      );
    } else {
      return (
        <RestaurantsList
          restaurants={restaurants}
          handleDeleteOne={handleDeleteOne}
        />
      );
    }
  };

  const renderEmptyMessage = () => {
    return (
      <>
        <h3 style={{ marginBottom: "3rem" }}>
          Add a restaurant to get started!
        </h3>
      </>
    );
  };

  return (
    <>
      <h1 className="headerText">Welp, can't decide?</h1>
      <p className="subHeaderText">For those "idk, whatever you want to eat" moments.</p>
      <div className="formContainerWrapper">
        <form>
          <input
            placeholder="Restaurant"
            name="restaurant"
            onChange={(e) => handleInputChange(e)}
            className="inputBar"
          ></input>
          <div className="buttonContainer">
          <button onClick={handleAddRestaurantClick} id="addButton" type="submit">
            Add
          </button>
          <button onClick={handleClearClick} id="clearButton" type="button">
            Clear
          </button>
          </div>
         
          {renderMainModule()}
          {restaurants.length < 1 ? renderEmptyMessage() : <></>}
          <button onClick={handleRandomClick} id="randomButton">
            Pick for me!
          </button>
        </form>
      </div>
    </>
  );
};

export default App;
