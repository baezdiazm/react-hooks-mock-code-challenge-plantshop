import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ itemsToDisplay }) {

  const allPlants = itemsToDisplay.map((plant) => {
    return (
      <PlantCard key={plant.id} plant={plant}/>
    )
  })
  return (
    <ul className="cards">{allPlants}</ul>
  );
}

export default PlantList;
