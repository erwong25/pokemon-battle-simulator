// @flow
// @format

import "./App.css";
import React from "react";
import { useState } from "react";
import computeDamage from "./damageCalculations";
import { GENGAR, NIDORINO } from "./pokemon.js";

function moveSelector() {
  console.log(GENGAR.moves.length);
  return Math.floor(Math.random() * GENGAR.moves.length);
}

function App(): React$MixedElement {
  const [damageDealt, setDamageDealt] = useState(0);
  const [damageReceived, setDamageReceived] = useState(0);
  const [nidorinoHP, setNidorinoHP] = useState(NIDORINO.stats.maxHp);
  const [gengarHP, setGengarHP] = useState(GENGAR.stats.maxHp);
  const [nidorinoMove, setNidorinoMove] = useState("");
  const [gengarMove, setGengarMove] = useState("");

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
        <img src="https://img.pokemondb.net/artwork/large/nidorino.jpg" />
        <img src="https://www.vhv.rs/dpng/d/424-4249873_pokemon-crystal-gengar-sprite-hd-png-download.png" />
        <p>Nidorino: {nidorinoHP}</p>
        <p>Gengar: {gengarHP}</p>
        {nidorinoText()}
        {gengarText()}
        {nidorinoHP <= 0 && <p>Nidorino fainted</p>}
        <p>
          {NIDORINO.moves.map((item) => (
            <button
              onClick={() => {
                const opponentMove = GENGAR.moves[moveSelector()];
                setGengarMove(opponentMove.name);
                setNidorinoMove(item.name);
                const attackDamage = computeDamage(item, NIDORINO, GENGAR);
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
                  GENGAR,
                  NIDORINO
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
          ))}
        </p>
      </header>
    </div>
  );
}

export default App;
