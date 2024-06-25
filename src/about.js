// @flow

import React from "react";
import { useState } from "react";
import computeDamage from "./damageCalculations";
import { POKEMONS } from "./pokemon.js";
import type { CombatOutcome } from "./damageCalculations";
import combatText from "./combatText";
import moveSelector from "./moveSelector";
import calculateMaxHP from "./calculateMaxHP";
import { useParams, Link } from "react-router-dom";

function App(): React$MixedElement {
  const params = useParams();
  const startingPlayerPokemon = params.id;
  const startingOpponentPOkemon = Math.floor(
    Math.random() * Object.keys(POKEMONS).length
  );
  const [damageDealt, setDamageDealt] = useState<CombatOutcome>(0);
  const [damageReceived, setDamageReceived] = useState<CombatOutcome>(0);
  const [activePlayerPokemon, setActivePlayerPokemon] = useState(
    POKEMONS[startingPlayerPokemon]
  );
  const [activePlayerHP, setActivePlayerHP] = useState(
    calculateMaxHP(POKEMONS[startingPlayerPokemon])
  );
  const [activeOpponentPokemon, setActiveOpponentPokemon] = useState(
    POKEMONS[Object.keys(POKEMONS)[startingOpponentPOkemon]]
  );
  const [activeOpponentHP, setActiveOpponentHP] = useState(
    calculateMaxHP(POKEMONS[Object.keys(POKEMONS)[startingOpponentPOkemon]])
  );
  const [activePlayerMove, setActivePlayerMove] = useState<string>("");
  const [activeOpponentMove, setActiveOpponentMove] = useState<string>("");
  const [playerRosterHP, setPlayerRosterHP] = useState(
    new Map([
      //   [
      //     POKEMONS[startingPlayerPokemon],
      //     calculateMaxHP(POKEMONS[startingPlayerPokemon]),
      //   ],
      [POKEMONS.ARTICUNO, 500],
    ])
  );
  //   const [opponentRosterHP, setOpponentRosterHP] = useState(
  //     new Map([[
  //       POKEMONS[Object.keys(POKEMONS)[startingOpponentPOkemon]],
  //       POKEMONS[Object.keys(POKEMONS)[startingOpponentPOkemon]].stats.maxHp * 2 +
  //         110,
  //     ]])
  //   );
  function tester() {
    console.log(...playerRosterHP.keys());
    console.log(POKEMONS.ARTICUNO);
  }

  return (
    <div>
      <div style={{ display: "flex" }}>
        <img
          src={activePlayerPokemon.staticSprite}
          style={{ transform: "scaleX(-1)" }}
        />
        <img src={activePlayerPokemon.animatedSprite} />
        <img src={activeOpponentPokemon.staticSprite} />
        <img src={activeOpponentPokemon.animatedSprite} />
      </div>
      <p></p>
      <p>
        {activePlayerPokemon.name}: {activePlayerHP}
      </p>
      <p>
        {activeOpponentPokemon.name}: {activeOpponentHP}
      </p>
      {combatText(
        activePlayerPokemon.name,
        activeOpponentPokemon.name,
        activePlayerMove,
        damageDealt
      )}
      {combatText(
        activeOpponentPokemon.name,
        activePlayerPokemon.name,
        activeOpponentMove,
        damageReceived
      )}
      {activePlayerHP <= 0 && <p>{activePlayerPokemon.name} fainted</p>}
      <p>
        {activePlayerPokemon.moves.map((item) => (
          <button
            onClick={() => {
              tester();
              const opponentMove =
                activeOpponentPokemon.moves[
                  moveSelector(activeOpponentPokemon)
                ];
              setActiveOpponentMove(opponentMove.name);
              setActivePlayerMove(item.name);
              const attackDamage = computeDamage(
                item,
                activePlayerPokemon,
                activeOpponentPokemon
              );
              if (attackDamage === "Miss") {
                setDamageDealt("Miss");
              } else if (attackDamage === "No effect") {
                setDamageDealt("No effect");
              } else {
                setDamageDealt(attackDamage);
                setActiveOpponentHP(activeOpponentHP - attackDamage);
                if (activeOpponentHP - attackDamage <= 0) {
                  setActiveOpponentPokemon(POKEMONS.ARTICUNO);
                }
              }
              const opponentDamage = computeDamage(
                opponentMove,
                activeOpponentPokemon,
                activePlayerPokemon
              );
              if (opponentDamage === "Miss") {
                setDamageReceived("Miss");
              } else if (opponentDamage === "No effect") {
                setDamageReceived("No effect");
              } else {
                setDamageReceived(opponentDamage);
                setActivePlayerHP(activePlayerHP - opponentDamage);
              }
            }}
          >
            {item.name}
          </button>
        ))}
        {
          <button
            onClick={() => {
              setActivePlayerPokemon(POKEMONS.GENGAR);
              if (!playerRosterHP.has(POKEMONS.GENGAR)) {
                setPlayerRosterHP(
                  playerRosterHP.set(
                    POKEMONS.GENGAR,
                    calculateMaxHP(POKEMONS.GENGAR)
                  )
                );
              }
            }}
          >
            Switch {activePlayerPokemon.name}
          </button>
        }
      </p>
      <Link to="/">Reset</Link>
    </div>
  );
}

export default App;
