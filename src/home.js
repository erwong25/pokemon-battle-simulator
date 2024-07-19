// @flow

import React from "react";
// import styleXPlugin from "@stylexjs/babel-plugin";
import { useState } from "react";
import { POKEMONS } from "./pokemon";
import { useNavigate } from "react-router-dom";

function Home(): React.Node {
  const pokemonList = Object.keys(POKEMONS);
  const navigate = useNavigate();
  const [roster, setRoster] = useState<Array<string>>([]);
  console.log(roster);
  roster.forEach((item) => {
    console.log(typeof item);
    console.log(POKEMONS[item].staticSprite);
  });
  return (
    <div>
      {roster.map((item) => (
        <div id={item}>
          <img src={POKEMONS[item].staticSprite} />
        </div>
      ))}
      <button
        onClick={() => {
          navigate("/about/" + roster.join(","));
        }}
      >
        Start Battle
      </button>
      {roster.length == 0 ? (
        <h1>Choose your starting pokemon</h1>
      ) : roster.length < 6 ? (
        <h1>Choose your next pokemon</h1>
      ) : null}
      {roster.length < 6 &&
        pokemonList
          .filter((pokemon) => !roster.includes(pokemon))
          .map((item) => (
            <div>
              <img src={POKEMONS[item].staticSprite} />
              <button
                onClick={() => {
                  setRoster([...roster, item]);
                }}
              >
                {POKEMONS[item].name}
              </button>
            </div>
          ))}
    </div>
  );
}

export default Home;
