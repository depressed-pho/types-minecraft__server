export enum BlockVolumeIntersection {
    Disjoint   = 0,
    Contains   = 1,
    Intersects = 2,
}

export enum CompoundBlockVolumeAction {
    Add      = 0,
    Subtract = 1,
}

/**
 * Represents a direction for expressing relative position or
 * facing.
 */
export enum Direction {
    /**
     * Represents an object located or facing in the down (z - 1)
     * direction.
     */
    Down = "Down",
    /**
     * Represents an object located or facing in the east (x + 1)
     * direction.
     */
    East = "East",
    /**
     * Represents an object located or facing in the north (z - 1)
     * direction.
     */
    North = "North",
    /**
     * Represents an object located or facing in the south (z + 1)
     * direction.
     */
    South = "South",
    /**
     * Represents an object located or facing in the up (z + 1)
     * direction.
     */
    Up = "Up",
    /**
     * Represents an object located or facing in the west (x - 1)
     * direction.
     */
    West = "West",
}

/**
 * An enumeration for the locations where scoreboard objectives
 * can be displayed.
 */
export enum DisplaySlotId {
    /**
     * Score for an objective is displayed below a player's nametag.
     */
    BelowName = "BelowName",
    /**
     * This objective and respective list of players is shown on the Pause
     * menu.
     */
    List = "List",
    /**
     * The objective is shown on the right-hand side of the screen.
     */
    SideBar = "SideBar",
}

export enum DyeColor {
    black     = "black",
    blue      = "blue",
    brown     = "brown",
    cyan      = "cyan",
    gray      = "gray",
    green     = "green",
    lightBlue = "lightBlue",
    lime      = "lime",
    magenta   = "magenta",
    orange    = "orange",
    pink      = "pink",
    purple    = "purple",
    red       = "red",
    silver    = "silver",
    white     = "white",
    yellow    = "yellow",
}

export enum EntityDamageCause {
    anvil           = "anvil",
    blockExplosion  = "blockExplosion",
    charging        = "charging",
    contact         = "contact",
    drowning        = "drowning",
    entityAttack    = "entityAttack",
    entityExplosion = "entityExplosion",
    fall            = "fall",
    fallingBlock    = "fallingBlock",
    fire            = "fire",
    fireTick        = "fireTick",
    fireworks       = "fireworks",
    flyIntoWall     = "flyIntoWall",
    freezing        = "freezing",
    lava            = "lava",
    lightning       = "lightning",
    magic           = "magic",
    magma           = "magma",
    none            = "none",
    override        = "override",
    piston          = "piston",
    projectile      = "projectile",
    stalactite      = "stalactite",
    stalagmite      = "stalagmite",
    starve          = "starve",
    suffocation     = "suffocation",
    suicide         = "suicide",
    temperature     = "temperature",
    thorns          = "thorns",
    void            = "void",
    wither          = "wither",
}

export enum EntityLifetimeState {
    /**
     * Corresponding object is loaded.
     */
    Loaded = "Loaded",
    /**
     * Corresponding object is now unloaded.
     */
    Unloaded = "Unloaded",
}

export enum EquipmentSlot {
    Chest    = "Chest",
    Feet     = "Feet",
    Head     = "Head",
    Legs     = "Legs",
    Mainhand = "Mainhand",
    Offhand  = "Offhand",
}

/**
 * Represents the type of fluid for use within a fluid containing block,
 * like a cauldron.
 */
export enum FluidType {
    /**
     * Represents lava as a type of fluid.
     */
    Lava = "Lava",
    /**
     * Represents a potion as a type of fluid.
     */
    Potion = "Potion",
    /**
     * Represents powder snow as a type of fluid.
     */
    PowderSnow = "PowderSnow",
    /**
     * Represents water as a type of fluida.
     */
    Water = "Water",
}

/**
 * Represents a game mode for the current world experience.
 */
export enum GameMode {
    /**
     * World is in a more locked-down experience, where blocks may not be
     * manipulated.
     */
    adventure = "adventure",
    /**
     * World is in a full creative mode. In creative mode, the player has
     * all the resources available in the item selection tabs and the
     * survival selection tab. They can also destroy blocks instantly
     * including those which would normally be indestructible. Command and
     * structure blocks can also be used in creative mode. Items also do
     * not lose durability or disappear.
     */
    creative = "creative",
    /**
     * World is in spectator mode. In spectator mode, spectators are always
     * flying and cannot become grounded. Spectators can pass through solid
     * blocks and entities without any collisions, and cannot use items or
     * interact with blocks or mobs. Spectators cannot be seen by mobs or
     * other players, except for other spectators; spectators appear as a
     * transparent floating head.
     */
    spectator = "spectator",
    /**
     * World is in a survival mode, where players can take damage and
     * entities may not be peaceful. Survival mode is where the player must
     * collect resources, build structures while surviving in their
     * generated world. Activities can, over time, chip away at player
     * health and hunger bar.
     */
    survival = "survival",
}

export enum ItemLockMode {
    inventory = "inventory",
    none      = "none",
    slot      = "slot",
}

/**
 * Used for specifying a sort order for how to display an objective and its
 * list of participants.
 */
export enum ObjectiveSortOrder {
    /**
     * Objective participant list is displayed in ascending (e.g., A-Z)
     * order.
     */
    Ascending = 0,
    /**
     * Objective participant list is displayed in descending (e.g., Z-A)
     * order.
     */
    Descending = 1,
}

/**
 * Contains objectives and participants for the scoreboard.
 */
export enum ScoreboardIdentityType {
    /**
     * This scoreboard participant is tied to an entity.
     */
    Entity = "Entity",
    /**
     * This scoreboard participant is tied to a pseudo player entity -
     * typically this is used to store scores as data or as abstract
     * progress.
     */
    FakePlayer = "FakePlayer",
    /**
     * This scoreboard participant is tied to a player.
     */
    Player = "Player",
}

export enum ScriptEventSource {
    Block       = "Block",
    Entity      = "Entity",
    NPCDialogue = "NPCDialogue",
    Server      = "Server",
}

/**
 * Represents a side of a sign.
 */
export enum SignSide {
    /**
     * The back of the sign.
     */
    Back = "Back",
    /**
     * The front of the sign.
     */
    Front = "Front",
}

/**
 * Provides numeric values for common periods in the Minecraft day.
 */
export enum TimeOfDay {
    Day      = 1000,
    Noon     = 6000,
    Sunset   = 12000,
    Night    = 13000,
    Midnight = 18000,
    Sunrise  = 23000,
}

/**
 * An enumeration with the reason that a watchdog is deciding
 * to terminate execution of a behavior packs' script.
 */
export enum WatchdogTerminateReason {
    /**
     * Script runtime for a behavior pack is terminated due to
     * non-responsiveness from script (a hang or infinite loop).
     */
    Hang = "Hang",
    /**
     * Script runtime for a behavior pack is terminated due to a stack
     * overflow (a long, and potentially infinite) chain of function calls.
     */
    StackOverflow = "StackOverflow",
}

export enum WeatherType {
    Clear   = "Clear",
    Rain    = "Rain",
    Thunder = "Thunder",
}
