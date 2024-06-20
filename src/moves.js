// @flow

import type { Type } from "./types.js";

export type DamageCategory = "Physical" | "Special";

export type Move = {
  name: string,
  type: Type,
  power: number,
  accuracy: number, // as decimal
  damageCategory: DamageCategory,
};

export const POISON_JAB: Move = {
  name: "Poison Jab",
  type: "Poison",
  power: 80,
  accuracy: 100,
  damageCategory: "Physical",
};

export const HORN_ATTACK: Move = {
  name: "Horn Attack",
  type: "Normal",
  power: 65,
  accuracy: 1,
  damageCategory: "Physical",
};

export const DRILL_RUN: Move = {
  name: "Drill Run",
  type: "Ground",
  power: 80,
  accuracy: 0.95,
  damageCategory: "Physical",
};

export const SHADOW_BALL: Move = {
  name: "Shadow Ball",
  type: "Ghost",
  power: 80,
  accuracy: 1,
  damageCategory: "Special",
};

export const POLTERGEIST: Move = {
  name: "Poltergeist",
  type: "Ghost",
  power: 110,
  accuracy: 0.9,
  damageCategory: "Special",
};

export const LICK: Move = {
  name: "Lick",
  type: "Ghost",
  power: 30,
  accuracy: 1,
  damageCategory: "Physical",
};

export const MOVES = {
  POISON_JAB,
  HORN_ATTACK,
  DRILL_RUN,
  SHADOW_BALL,
  POLTERGEIST,
  LICK,
};
