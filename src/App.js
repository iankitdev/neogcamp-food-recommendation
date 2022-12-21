import React from "react";
import "./styles.css";
import { useState } from "react";

const foodDB = {
  Indian: [
    { name: "Chole-Bhature", rating: "5/5" },
    { name: "Masala-Dosa", rating: "4.5/5" },
    { name: "Kadhai-Paneer", rating: "4.5/5" }
  ],

  Korean: [
    { name: "Kimchi", rating: "5/5" },
    { name: "Red Rice Cakes", rating: "4.5/5" },
    { name: "Bibimbap", rating: "4/5" }
  ],

  Chinese: [
    { name: "Chow Mein", rating: "5/5" },
    { name: "Dumplings", rating: "4.5/5" },
    { name: "Kung Pao Chicken", rating: "4/5" }
  ],

  Italian: [
    { name: "Pizza", rating: "5/5" },
    { name: "Lasagne", rating: "4.5/5" },
    { name: "Risotto", rating: "4/5" }
  ],

  Vietnamese: [
    { name: "Pho", rating: "5/5" },
    { name: "Cha Ca", rating: "4.5/5" },
    { name: "Cao Lau", rating: "4/5" }
  ]
};

export default function App() {
  const [selectedCuisine, setCuisine] = useState("Vietnamese");
  function cuisineClickHandler(cuisine) {
    setCuisine(cuisine);
  }
  return (
    <div className="App">
      <h1>🍜 Food Recommendation App</h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Here are some very famous Cuisine. Select a Cuisine below and choose
        your desired Dish from the list.{" "}
      </p>

      <div>
        {Object.keys(foodDB).map((cuisine) => (
          <button
            onClick={() => cuisineClickHandler(cuisine)}
            style={{
              cursor: "pointer",
              margin: "1rem 0.3rem",
              border: "1px solid black",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              background: "#E5E7EB"
            }}
          >
            {cuisine}
          </button>
        ))}
      </div>
      <hr />
      <div
        style={{
          textAlign: "left",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <ul
          style={{
            paddingInlineStart: "0"
          }}
        >
          {foodDB[selectedCuisine].map((food) => (
            <li
              key={food.name}
              style={{
                listStyle: "none",
                margin: "1rem 0rem",
                width: "70%",
                border: "1px solid #D1D5DB",
                borderRadius: "0.5rem",
                padding: "1rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {food.name} </div>
              <div style={{ fontSize: "smaller" }}> {food.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
