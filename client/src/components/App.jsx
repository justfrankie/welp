import React, { useState, useEffect } from "react";
import Axios from "axios";
import RestaurantsList from "./RestaurantsList.jsx";

const App = () => {
  const [restaurantChoice, setRestaurantChoice] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = () => {
    Axios.get("/api/all")
      .then((results) => {
        setRestaurants(results.data);
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
    // TODO rename better method name
    if (restaurant.length < 1) {
      window.alert("Please enter at least one character.");
    } else {
      Axios.post("/api/create", {
        restaurant: restaurant.toString(),
      })
        .then(() => setRestaurant(null)) // might work with just null value
        .catch((err) => console.err(err));
    }
  };

  const handleClearClick = () => {
    Axios.delete("/api/all")
      .then(() => setRestaurant(null))
      .catch((err) => console.err(err));
  };

  const randomizeRestaurants = () => {
    return restaurants[Math.floor(Math.random() * restaurants.length)]
      .restaurant;
  };

  const handleRandom = (e) => {
    e.preventDefault();
    setRestaurantChoice(randomizeRestaurants());
  };

  const handleDeleteOne = (paramId) => {
    Axios.delete(`/api/deleteOne/${paramId}`) // utilizing req.params
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
              style={{ color: "rgb(83 177 89)" }}
              href={`https://www.google.com/search?q=${restaurantChoice}+near+me`}
              id="restaurantChoiceResultText"
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
      <h5>For those "idk, whatever you want to eat" moments.</h5>
      <div className="formContainerWrapper">
        <form>
          <input
            placeholder="Restaurant"
            name="restaurant"
            onChange={(e) => handleInputChange(e)}
            className="inputBar"
          ></input>
          <button onClick={handleAddRestaurantClick} id="addButton">
            Add
          </button>
          <button onClick={handleClearClick} id="clearButton">
            Clear
          </button>
          {renderMainModule()}
          {restaurants.length < 1 ? renderEmptyMessage() : <></>}
          <button onClick={(e) => handleRandom(e)} id="randomButton">
            Pick for me!
          </button>
        </form>
      </div>
    </>
  );
};

export default App;
