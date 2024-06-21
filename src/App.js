// @flow
// @format

import "./App.css";
import React from "react";
import { useState } from "react";
import computeDamage from "./damageCalculations";
import { POKEMONS } from "./pokemon.js";

function moveSelector() {
  return Math.floor(Math.random() * POKEMONS.GENGAR.moves.length);
}

function App(): React$MixedElement {
  const [damageDealt, setDamageDealt] = useState(0);
  const [damageReceived, setDamageReceived] = useState(0);
  const [nidorinoHP, setNidorinoHP] = useState(POKEMONS.NIDORINO.stats.maxHp);
  const [gengarHP, setGengarHP] = useState(POKEMONS.GENGAR.stats.maxHp);
  const [nidorinoMove, setNidorinoMove] = useState("");
  const [gengarMove, setGengarMove] = useState("");
  const [activePokemon, setActivePokemon] = useState(POKEMONS.NIDORINO);

  function nidorinoText() {
    if (nidorinoMove !== "") {
      if (damageDealt == "Miss") {
        return <p>Miss</p>;
      } else if (damageDealt == "No effect") {
        return <p>No effect</p>;
      } else {
        return (
          <p>
            Nidorino used {nidorinoMove}! Gengar took {damageDealt} damage.
          </p>
        );
      }
    }
  }

  function gengarText() {
    if (gengarMove !== "") {
      if (damageReceived == "Miss") {
        return <p>Miss</p>;
      } else if (damageReceived == "No effect") {
        return <p>No effect</p>;
      } else {
        return (
          <p>
            Gengar used {gengarMove}! Nidorino took {damageReceived} damage.
          </p>
        );
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={activePokemon.staticSprite} />
        <img src={activePokemon.animatedSprite} />
        <img src={POKEMONS.GENGAR.staticSprite} />
        <img src={POKEMONS.GENGAR.animatedSprite} />
        <p>Nidorino: {nidorinoHP}</p>
        <p>Gengar: {gengarHP}</p>
        {nidorinoText()}
        {gengarText()}
        {nidorinoHP <= 0 && <p>Nidorino fainted</p>}
        <p>
          {POKEMONS.NIDORINO.moves.map((item) => (
            <button
              onClick={() => {
                const opponentMove = POKEMONS.GENGAR.moves[moveSelector()];
                setGengarMove(opponentMove.name);
                setNidorinoMove(item.name);
                const attackDamage = computeDamage(
                  item,
                  POKEMONS.NIDORINO,
                  POKEMONS.GENGAR
                );
                if (attackDamage == "Miss") {
                  setDamageDealt("Miss");
                } else if (attackDamage == "No effect") {
                  setDamageDealt("No effect");
                } else {
                  setDamageDealt(attackDamage);
                  setGengarHP(gengarHP - attackDamage);
                }
                const opponentDamage = computeDamage(
                  opponentMove,
                  POKEMONS.GENGAR,
                  POKEMONS.NIDORINO
                );
                if (opponentDamage == "Miss") {
                  setDamageDealt("Miss");
                } else if (opponentDamage == "No effect") {
                  setDamageDealt("No effect");
                } else {
                  setDamageReceived(opponentDamage);
                  setNidorinoHP(nidorinoHP - opponentDamage);
                }
              }}
            >
              {item.name}
            </button>
            //   {POKEMONS.map((item) => (
            //     <button
            //       onClick={() => {

            //       }}
            //     >
            //       {item.name}
            //     </button>
          ))}
          {
            <button
              onClick={() => {
                setActivePokemon(POKEMONS.GENGAR);
              }}
            >
              {activePokemon.name}
            </button>
          }
        </p>
      </header>
    </div>
  );
}

export default App;
