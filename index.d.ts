// Type definitions for Minecraft Bedrock Edition script APIs 1.3.0-beta
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */
/**
 * Contains many types related to manipulating a Minecraft
 * world, including entities, blocks, dimensions, and more.
 *
 * Manifest Details
 * ```json
 * {
 *   "module_name": "@minecraft/server",
 *   "version": "1.3.0-beta"
 * }
 * ```
 */

/// <reference types="./classes.d.ts" />
/// <reference types="./classes/components.d.ts" />
/// <reference types="./classes/events.d.ts" />
/// <reference types="./enums.d.ts" />
/// <reference types="./errors.d.ts" />
/// <reference types="./interfaces.d.ts" />

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
