/// <reference types="./classes.d.ts" />

/**
 * How many times the server ticks per in-game day.
 */
export const TicksPerDay = 24000;

/**
 * How many times the server ticks per second of real time.
 */
export const TicksPerSecond = 20;

/**
 * A class that provides system-level events and functions.
 */
export const system: System;

/**
 * A class that wraps the state of a world - a set of
 * dimensions and the environment of Minecraft.
 */
export const world: World;
