// @flow strict
// @format

import "./App.css";
import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import computeDamage from "./damageCalculations";
import { POKEMONS } from "./pokemon.js";
import type { CombatOutcome } from "./damageCalculations";

function moveSelector(): number {
  return Math.floor(Math.random() * POKEMONS.GENGAR.moves.length);
}

function App(): React$MixedElement {
  const [damageDealt, setDamageDealt] = useState<CombatOutcome>(0);
  const [damageReceived, setDamageReceived] = useState<CombatOutcome>(0);
  const [activePlayerPokemon, setActivePlayerPokemon] = useState(
    POKEMONS.NIDORINO
  );
  const [activePlayerHP, setActivePlayerHP] = useState(
    POKEMONS.NIDORINO.stats.maxHp * 2 + 110
  );
  const [activeOpponentPokemon, setActiveOpponentPokemon] = useState(
    POKEMONS.GENGAR
  );
  const [gengarHP, setGengarHP] = useState(
    POKEMONS.GENGAR.stats.maxHp * 2 + 110
  );
  const [nidorinoMove, setNidorinoMove] = useState<string>("");
  const [gengarMove, setGengarMove] = useState<string>("");

  function activePlayerText(): React.Node {
    if (nidorinoMove !== "") {
      if (damageDealt === "Miss") {
        return <p>Miss</p>;
      } else if (damageDealt === "No effect") {
        return <p>No effect</p>;
      } else {
        return (
          <p>
            {activePlayerPokemon.name} used {nidorinoMove}!{" "}
            {activeOpponentPokemon.name} took {damageDealt} damage.
          </p>
        );
      }
    }
  }

  function activeOpponentText(): React.Node {
    if (gengarMove !== "") {
      if (damageReceived === "Miss") {
        return <p>Miss</p>;
      } else if (damageReceived === "No effect") {
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

  function combatText(): React.Node {
    if (gengarMove !== "") {
      if (damageReceived === "Miss") {
        return <p>Miss</p>;
      } else if (damageReceived === "No effect") {
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
        <div style={{ display: "flex" }}>
          <img
            src={activePlayerPokemon.staticSprite}
            style={{ transform: "scaleX(-1)" }}
          />
          <img src={activePlayerPokemon.animatedSprite} />
          <img src={activeOpponentPokemon.staticSprite} />
          <img src={activeOpponentPokemon.animatedSprite} />
        </div>
        <p>Nidorino: {activePlayerHP}</p>
        <p>Gengar: {gengarHP}</p>
        {activePlayerText()}
        {activeOpponentText()}
        {combatText(activePlayerPokemon, nidorinoMove)}
        {combatText()}
        {activePlayerHP <= 0 && <p>Nidorino fainted</p>}
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
                if (attackDamage === "Miss") {
                  setDamageDealt("Miss");
                } else if (attackDamage === "No effect") {
                  setDamageDealt("No effect");
                } else {
                  setDamageDealt(attackDamage);
                  setGengarHP(gengarHP - attackDamage);
                  if (gengarHP - attackDamage <= 0) {
                    setActiveOpponentPokemon(POKEMONS.ARTICUNO);
                  }
                }
                const opponentDamage = computeDamage(
                  opponentMove,
                  POKEMONS.GENGAR,
                  POKEMONS.NIDORINO
                );
                if (opponentDamage === "Miss") {
                  setDamageDealt("Miss");
                } else if (opponentDamage === "No effect") {
                  setDamageDealt("No effect");
                } else {
                  setDamageReceived(opponentDamage);
                  setActivePlayerHP(activePlayerHP - opponentDamage);
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
                setActivePlayerPokemon(POKEMONS.GENGAR);
              }}
            >
              {activePlayerPokemon.name}
            </button>
          }
        </p>
      </header>
    </div>
  );
}

export default App;
