import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ itemsToDisplay, onSearch, onSubmit }) {
  return (
    <main>
      <NewPlantForm itemsToDisplay={itemsToDisplay} onSubmit={onSubmit} />
      <Search onSearch={onSearch}/>
      <PlantList itemsToDisplay={itemsToDisplay}/>
    </main>
  );
}

export default PlantPage;
