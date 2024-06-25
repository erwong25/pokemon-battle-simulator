// @flow

import type { Pokemon } from "./pokemon.js";

export default function moveSelector(activeOpponentPokemon: Pokemon): number {
  return Math.floor(Math.random() * activeOpponentPokemon.moves.length);
}
