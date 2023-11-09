import React from "react";
import styledSpecies from "./Species.module.css";

export default function Species({ species, handleSpecies, handleAllSpecies }) {
  return (
  <div>
    <h2>Species</h2>
    {species.map((especie, id) => 
      (<button key={id} onClick={handleSpecies} value={especie}>
          {especie}
      </button>)
    )}
    <button onClick={handleAllSpecies}>All Animals</button>
  </div>
  )}
