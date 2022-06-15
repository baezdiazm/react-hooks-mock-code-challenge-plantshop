import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch(`http://localhost:6001/plants`)
    .then(res => res.json())
    .then(data => setPlants(data))
  }, [])

  const itemsToDisplay = plants.filter((plant) => {
    if (search === "") {
      return plants
    } else {
      return plant.name.toLowerCase().includes(search.toLowerCase())
    }
  })

  function handleSubmit(data) {
    console.log(data)
    fetch(`http://localhost:6001/plants`, 
    {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(d => setPlants([...plants, d]))
  }

  return (
    <div className="app">
      <Header />
      <PlantPage itemsToDisplay={itemsToDisplay} onSearch={setSearch} onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
