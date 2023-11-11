export enum BlockComponentTypes {
    Inventory = "minecraft:inventory",
    LavaContainer = "minecraft:lavaContainer",
    Piston = "minecraft:piston",
    PotionContainer = "minecraft:potionContainer",
    RecordPlayer = "minecraft:recordPlayer",
    Sign = "minecraft:sign",
    SnowContainer = "minecraft:snowContainer",
    WaterContainer = "minecraft:waterContainer",
}

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

export enum EasingType {
    InBack = "InBack",
    InBounce = "InBounce",
    InCirc = "InCirc",
    InCubic = "InCubic",
    InElastic = "InElastic",
    InExpo = "InExpo",
    InOutBack = "InOutBack",
    InOutBounce = "InOutBounce",
    InOutCirc = "InOutCirc",
    InOutCubic = "InOutCubic",
    InOutElastic = "InOutElastic",
    InOutExpo = "InOutExpo",
    InOutQuad = "InOutQuad",
    InOutQuart = "InOutQuart",
    InOutQuint = "InOutQuint",
    InOutSine = "InOutSine",
    InQuad = "InQuad",
    InQuart = "InQuart",
    InQuint = "InQuint",
    InSine = "InSine",
    Linear = "Linear",
    OutBack = "OutBack",
    OutBounce = "OutBounce",
    OutCirc = "OutCirc",
    OutCubic = "OutCubic",
    OutElastic = "OutElastic",
    OutExpo = "OutExpo",
    OutQuad = "OutQuad",
    OutQuart = "OutQuart",
    OutQuint = "OutQuint",
    OutSine = "OutSine",
    Spring = "Spring",
}

export enum EntityComponentTypes {
    AddRider = "minecraft:addrider",
    Ageable = "minecraft:ageable",
    Breathable = "minecraft:breathable",
    CanClimb = "minecraft:can_climb",
    CanFly = "minecraft:can_fly",
    CanPowerJump = "minecraft:can_power_jump",
    Color = "minecraft:color",
    Equippable = "minecraft:equippable",
    FireImmune = "minecraft:fire_immune",
    FloatsInLiquid = "minecraft:floats_in_liquid",
    FlyingSpeed = "minecraft:flying_speed",
    FrictionModifier = "minecraft:friction_modifier",
    GroundOffset = "minecraft:ground_offset",
    Healable = "minecraft:healable",
    Health = "minecraft:health",
    Inventory = "minecraft:inventory",
    IsBaby = "minecraft:is_baby",
    IsCharged = "minecraft:is_charged",
    IsChested = "minecraft:is_chested",
    IsDyeable = "minecraft:is_dyeable",
    IsHiddenWhenInvisible = "minecraft:is_hidden_when_invisible",
    IsIgnited = "minecraft:is_ignited",
    IsIllagerCaptain = "minecraft:is_illager_captain",
    IsSaddled = "minecraft:is_saddled",
    IsShaking = "minecraft:is_shaking",
    IsSheared = "minecraft:is_sheared",
    IsStackable = "minecraft:is_stackable",
    IsStunned = "minecraft:is_stunned",
    IsTamed = "minecraft:is_tamed",
    Item = "minecraft:item",
    LavaMovement = "minecraft:lava_movement",
    Leashable = "minecraft:leashable",
    MarkVariant = "minecraft:mark_variant",
    MountTaming = "minecraft:tamemount",
    Movement = "minecraft:movement",
    MovementAmphibious = "minecraft:movement.amphibious",
    MovementBasic = "minecraft:movement.basic",
    MovementFly = "minecraft:movement.fly",
    MovementGeneric = "minecraft:movement.generic",
    MovementGlide = "minecraft:movement.glide",
    MovementHover = "minecraft:movement.hover",
    MovementJump = "minecraft:movement.jump",
    MovementSkip = "minecraft:movement.skip",
    MovementSway = "minecraft:movement.sway",
    NavigationClimb = "minecraft:navigation.climb",
    NavigationFloat = "minecraft:navigation.float",
    NavigationFly = "minecraft:navigation.fly",
    NavigationGeneric = "minecraft:navigation.generic",
    NavigationHover = "minecraft:navigation.hover",
    NavigationWalk = "minecraft:navigation.walk",
    Npc = "minecraft:npc",
    OnFire = "minecraft:onfire",
    PushThrough = "minecraft:push_through",
    Rideable = "minecraft:rideable",
    Riding = "minecraft:riding",
    Scale = "minecraft:scale",
    SkinId = "minecraft:skin_id",
    Strength = "minecraft:strength",
    Tameable = "minecraft:tameable",
    UnderwaterMovement = "minecraft:underwater_movement",
    Variant = "minecraft:variant",
    WantsJockey = "minecraft:wants_jockey",
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

/**
 * An enumeration describing initialization cause of an entity.
 */
export enum EntityInitializationCause {
    /**
     * Case when an entity is created as child of other entity or entities,
     * e.g., cows making a cow or slimes making smaller slimes after dying.
     */
    Born = "Born",
    /**
     * Case when an entity is created by an event, e.g., a Wandering trader
     * spawning llamas.
     */
    Event = "Event",
    /**
     * Case when an entity is loaded into the world.
     */
    Loaded = "Loaded",
    /**
     * Case when an entity is naturally spawned in the world.
     */
    Spawned = "Spawned",
    /**
     * Case when an entity is transformed into another entity.
     */
    Transformed = "Transformed",
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

export enum ItemComponentTypes {
    Cooldown = "minecraft:cooldown",
    Durability = "minecraft:durability",
    Enchants = "minecraft:enchantments",
    Food = "minecraft:food",
}

/**
 * Describes how an an item can be moved within a container.
 */
export enum ItemLockMode {
    /**
     * The item cannot be dropped or crafted with.
     */
    inventory = "inventory",
    /**
     * The item has no container restrictions.
     */
    none = "none",
    /**
     * The item cannot be moved from its slot, dropped or crafted with.
     */
    slot = "slot",
}

/**
 * Enum containing the different phases of the moon based on the current
 * day. Obtain the current MoonPhase using world.getMoonPhase.
 *
 * The fullness of the moon controls various mob behaviors such as the
 * number of slimes that spawn in Swamp biomes, the chance skeletons and
 * zombies have to spawn with armor, as well as the chance for spiders to
 * spawn with certain status effects.
 */
export enum MoonPhase {
    /**
     * The brightest moon phase. During this phase, cats have a 50% chance
     * of spawning as black cats.
     */
    FullMoon = 0,
    /**
     * The phase following the Full Moon.
     */
    WaningGibbous = 1,
    /**
     * The phase following the Waxing Crescent.
     */
    FirstQuarter = 2,
    /**
     * The phase following the Last Quarter.
     */
    WaningCrescent = 3,
    /**
     * The darkest moon phase.
     */
    NewMoon = 4,
    /**
     * The phase following the New Moon.
     */
    WaxingCrescent = 5,
    /**
     * The phase following the Waning Gibbous.
     */
    LastQuarter = 6,
    /**
     * The phase following the First Quarter.
     */
    WaxingGibbous = 7,
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
