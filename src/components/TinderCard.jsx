import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./tinderCard.css";
import axios from "./axios";

function TinderCards() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get("/tinder/card");
      setPeople(req.data);
    };
    fetchData();
  }, []);
  const swiped = (direction, nameToDelete) => {
    console.log(`removing: ${nameToDelete}`);
  };
  const outOfFrame = (name) => {
    console.log(`${name} left the screen!`);
  };
  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            key={person.name}
            className="swipe"
            preventSwipe={(["up"], ["down"])}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.imgUrl})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
