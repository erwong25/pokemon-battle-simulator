// @flow

import type { Type } from "./types.js";

export const TypeEffectiveness = Object.freeze({
  NOT_VERY_EFFECTIVE: 0.5,
  SUPER_EFFECTIVE: 2,
  NO_EFFECT: 0,
  DEFAULT: 1,
});

export const typeEffectivenessMap: Map<Type, Map<Type, number>> = new Map([
  [
    "Normal",
    new Map([
      ["Rock", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Steel", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Ghost", TypeEffectiveness.NO_EFFECT],
    ]),
  ],
  [
    "Fighting",
    new Map([
      ["Normal", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Rock", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Steel", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Ice", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Dark", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Flying", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Poison", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Bug", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Psychic", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Fairy", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Ghost", TypeEffectiveness.NO_EFFECT],
    ]),
  ],
  [
    "Flying",
    new Map([
      ["Fighting", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Bug", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Grass", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Rock", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Electric", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Steel", TypeEffectiveness.NOT_VERY_EFFECTIVE],
    ]),
  ],
  [
    "Poison",
    new Map([
      ["Grass", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Fairy", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Poison", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Ground", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Rock", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Ghost", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Steel", TypeEffectiveness.NO_EFFECT],
    ]),
  ],
  [
    "Ground",
    new Map([
      ["Poison", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Rock", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Steel", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Fire", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Electric", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Bug", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Grass", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Flying", TypeEffectiveness.NO_EFFECT],
    ]),
  ],
  [
    "Rock",
    new Map([
      ["Flying", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Bug", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Fire", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Ice", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Fighting", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Ground", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Steel", TypeEffectiveness.NOT_VERY_EFFECTIVE],
    ]),
  ],
  [
    "Bug",
    new Map([
      ["Grass", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Psychic", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Dark", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Fighting", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Flying", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Poison", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Ghost", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Steel", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Fire", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Fairy", TypeEffectiveness.NOT_VERY_EFFECTIVE],
    ]),
  ],
  [
    "Ghost",
    new Map([
      ["Ghost", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Psychic", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Dark", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Normal", TypeEffectiveness.NO_EFFECT],
    ]),
  ],
  [
    "Steel",
    new Map([
      ["Rock", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Ice", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Fairy", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Steel", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Fire", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Water", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Electric", TypeEffectiveness.NOT_VERY_EFFECTIVE],
    ]),
  ],
  [
    "Fire",
    new Map([
      ["Bug", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Steel", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Grass", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Ice", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Rock", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Fire", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Water", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Dragon", TypeEffectiveness.NOT_VERY_EFFECTIVE],
    ]),
  ],
  [
    "Water",
    new Map([
      ["Ground", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Rock", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Fire", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Water", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Grass", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Dragon", TypeEffectiveness.NOT_VERY_EFFECTIVE],
    ]),
  ],
  [
    "Grass",
    new Map([
      ["Ground", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Rock", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Water", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Flying", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Poison", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Bug", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Steel", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Fire", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Grass", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Dragon", TypeEffectiveness.NOT_VERY_EFFECTIVE],
    ]),
  ],
  [
    "Electric",
    new Map([
      ["Flying", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Water", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Grass", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Electric", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Dragon", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Ground", TypeEffectiveness.NO_EFFECT],
    ]),
  ],
  [
    "Psychic",
    new Map([
      ["Fighting", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Poison", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Steel", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Psychic", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Dark", TypeEffectiveness.NO_EFFECT],
    ]),
  ],
  [
    "Ice",
    new Map([
      ["Flying", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Ground", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Grass", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Dragon", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Steel", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Fire", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Water", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Ice", TypeEffectiveness.NOT_VERY_EFFECTIVE],
    ]),
  ],
  [
    "Dragon",
    new Map([
      ["Dragon", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Steel", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Fairy", TypeEffectiveness.NO_EFFECT],
    ]),
  ],
  [
    "Dark",
    new Map([
      ["Ghost", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Psychic", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Fighting", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Dark", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Fairy", TypeEffectiveness.NOT_VERY_EFFECTIVE],
    ]),
  ],
  [
    "Fairy",
    new Map([
      ["Fighting", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Dragon", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Dark", TypeEffectiveness.SUPER_EFFECTIVE],
      ["Poison", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Steel", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Fire", TypeEffectiveness.NOT_VERY_EFFECTIVE],
    ]),
  ],
]);
