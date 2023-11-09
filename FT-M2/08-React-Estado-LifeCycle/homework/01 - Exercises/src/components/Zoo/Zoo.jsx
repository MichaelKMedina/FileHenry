import React from "react";
// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
import styledZoo from "./Zoo.module.css";

export default function Zoo() {
  const [zoo, setZoo] = React.useState({
    zooName: '', 
    animals: [], 
    species: [], 
    allAnimals: []
  });

  const handleInputChange = (event) =>{
    setZoo({...zoo,
      zooName: event.target.value,
    })
  };

  React.useEffect(() => {
    fetch('http://localhost:3001/zoo')
    .then((res) => res.json())
    .then((data) =>
        setZoo({
          ...zoo,
          animals: data.animals,
          species: data.species,
          allAnimals: data.animals
        })
      )
      .catch((error) => console.log(error));
  }, []);

  const handleSpecies = (event) => {
    const especie = event.target.value;
    setZoo({...zoo,
      animals: zoo.animals.filter((animal) => animal.specie === especie),
    })
  };
  
  
  const handleAllSpecies = () =>{
    setZoo({
      ...zoo,
      animals: zoo.allAnimals,
    })
  };
  
  console.log(zoo.animals)
  return (
    <div>
      <label>Zoo name:</label>
      <input 
        type='text' 
        value={zoo.zooName} 
        onChange={handleInputChange} />
      <h1>{zoo.zooName}</h1>
      <Species 
        species={zoo.species} 
        handleSpecies={handleSpecies} 
        handleAllSpecies={handleAllSpecies}/>
      {zoo.animals.map((animal) =>
        (<Animals animal={animal}/>))}
    </div>
    );
}



