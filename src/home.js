// @flow

import React from "react";
import inject from "@stylexjs/dev-runtime";
import { useState } from "react";
import { POKEMONS } from "./pokemon";
import { useNavigate } from "react-router-dom";
import * as stylex from "@stylexjs/stylex";

inject({
  classNamePrefix: "x",
  dev: true,
  test: false,
});

const styles = stylex.create({
  root: {
    width: "100%",
    maxWidth: 800,
    minHeight: 40,
  },
});

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
    <div style={styles.root}>
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
