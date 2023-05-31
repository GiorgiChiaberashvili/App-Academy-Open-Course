import React from "react";
import bulbasaurimg from "./src/images/bulbasaur.jpg"
import "./Showcase.css"

function Showcase() {
  const favPokemon = "Bulbasaur";
  const pokeCharacteristics = {
    type: "Grass",
    move: "Vine Whip"
  };
  return (
    <div className ="showcase-container">
      <h1>{favPokemon}'s Showcase Component</h1>
      <img src = {bulbasaurimg} alt = {favPokemon} />
      <h2>
        
        {favPokemon} type is 
        <span className = "type-style"> {pokeCharacteristics.type} </span>
        and one of their moves is <span className = "move-style">{pokeCharacteristics.move}</span>
        
      </h2>
    </div>
  );
}

export default Showcase;
