/**
 * Contains information regarding an event that impacts a specific block.
 */
export class BlockEvent {
    protected constructor();
    /**
     * Block impacted by this event.
     */
    readonly block: Block;
    /**
     * Dimension that contains the block that is the subject of
     * this event.
     */
    readonly dimension: Dimension;
}

/**
 * Contains information regarding an explosion that has
 * occurred for a specific block.
 */
export class BlockExplodeAfterEvent extends BlockEvent {
    protected constructor();
    /**
     * Description of the block that has exploded.
     */
    readonly explodedBlockPermutation: BlockPermutation;
    /**
     * Optional source of the explosion.
     */
    readonly source?: Entity;
}

/**
 * Manages callbacks that are connected to when an explosion
 * occurs, as it impacts individual blocks.
 */
export class BlockExplodeAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: BlockExplodeAfterEvent) => void): (arg: BlockExplodeAfterEvent) => void;
    unsubscribe(callback: (arg: BlockExplodeAfterEvent) => void): void;
}

/**
 * Contains information regarding an event where a player places a block.
 */
export class BlockPlaceAfterEvent extends BlockEvent {
    protected constructor();
    /**
     * Player that placed the block for this event.
     */
    readonly player: Player;
}

/**
 * Manages callbacks that are connected to when a block is placed.
 */
export class BlockPlaceAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: BlockPlaceAfterEvent) => void): (arg: BlockPlaceAfterEvent) => void;
    unsubscribe(callback: (arg: BlockPlaceAfterEvent) => void): void;
}

/**
 * Contains information related to changes to a button push.
 * @example buttonPushAfterEvent.ts
 * ```typescript
 * // set up a button on cobblestone
 * let cobblestone = overworld.getBlock(targetLocation);
 * let button = overworld.getBlock({ x: targetLocation.x, y: targetLocation.y + 1, z: targetLocation.z });
 *
 * if (cobblestone === undefined || button === undefined) {
 *   log("Could not find block at location.");
 *   return -1;
 * }
 *
 * cobblestone.setPermutation(mc.BlockPermutation.resolve("cobblestone"));
 * button.setPermutation(mc.BlockPermutation.resolve("acacia_button").withState("facing_direction", 1)); // up
 *
 * mc.world.afterEvents.buttonPush.subscribe((buttonPushEvent: mc.ButtonPushAfterEvent) => {
 *   let eventLoc = buttonPushEvent.block.location;
 *
 *   if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y + 1 && eventLoc.z === targetLocation.z) {
 *     log("Button push event at tick " + mc.system.currentTick + " Power:" + buttonPushEvent.block.getRedstonePower());
 *   }
 * });
 * ```
 */
export class ButtonPushAfterEvent extends BlockEvent {
    protected constructor();
    /**
     * Optional source that triggered the button push.
     */
    readonly source: Entity;
}

/**
 * Manages callbacks that are connected to when a button is pushed.
 */
export class ButtonPushAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: ButtonPushAfterEvent) => void): (arg: ButtonPushAfterEvent) => void;
    unsubscribe(callback: (arg: ButtonPushAfterEvent) => void): void;
}

/**
 * An event that fires as players enter chat messages.
 */
export class ChatSendAfterEvent {
    protected constructor();
    /**
     * Message that is being broadcast. In a beforeChat event handler,
     * _message_ can be updated with edits before the message is displayed
     * to players.
     */
    message: string;
    /**
     * Player that sent the chat message.
     */
    sender: Player;
    /**
     * If true, this message is directly targeted to one or more
     * players (i.e., is not broadcast.)
     */
    sendToTargets: boolean;
    /**
     * List of players that will receive this message.
     */
    getTargets(): Player[];
}

/**
 * Manages callbacks that are connected to chat messages being sent.
 */
export class ChatSendAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: ChatSendAfterEvent) => void): (arg: ChatSendAfterEvent) => void;
    unsubscribe(callback: (arg: ChatSendAfterEvent) => void): void;
}

/**
 * An event that fires as players enter chat messages.
 */
export class ChatSendBeforeEvent extends ChatSendAfterEvent {
    protected constructor();
    /**
     * If set to true in a beforeChat event handler, this message is not
     * broadcast out.
     */
    cancel: boolean;
    /**
     * Sets an updated list of players that will receive this message.
     * @param players
     * Updated array of players that should receive this message.
     */
    setTargets(players: Player[]): void;
}

/**
 * Manages callbacks that are connected to an event that fires
 * before chat messages are sent.
 */
export class ChatSendBeforeEventSignal {
    protected constructor();
    subscribe(callback: (arg: ChatSendBeforeEvent) => void): (arg: ChatSendBeforeEvent) => void;
    unsubscribe(callback: (arg: ChatSendBeforeEvent) => void): void;
}

/**
 * Contains information related to firing of a data driven entity event -
 * for example, the `minecraft:ageable_grow_up` event on a chicken.
 */
export class DataDrivenEntityTriggerAfterEvent {
    protected constructor();
    /**
     * Entity that the event triggered on.
     */
    readonly entity: Entity;
    /**
     * Name of the data driven event being triggered.
     */
    readonly id: string;
    /**
     * A list of modifications to component state that are the effect of
     * this triggered event.
     */
    getModifiers(): DefinitionModifier[];
}

/**
 * Contains event registration related to firing of a data driven entity
 * event - for example, the `minecraft:ageable_grow_up` event on a chicken.
 */
export class DataDrivenEntityTriggerAfterEventSignal {
    protected constructor();
    subscribe(
        callback: (arg: DataDrivenEntityTriggerAfterEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg: DataDrivenEntityTriggerAfterEvent) => void;
    unsubscribe(callback: (arg: DataDrivenEntityTriggerAfterEvent) => void): void;
}

/**
 * Contains information related to firing of a data driven
 * entity event - for example, the `minecraft:ageable_grow_up`
 * event on a chicken.
 */
export class DataDrivenEntityTriggerBeforeEvent extends DataDrivenEntityTriggerAfterEvent {
    protected constructor();
    /**
     * If set to true, this entity event is not triggered.
     */
    cancel: boolean;
    /**
     * Changes a list of modifications to component state that are the
     * effect of this triggered event.
     * @param modifiers
     * An updated list of modifications to component state.
     */
    setModifiers(modifiers: DefinitionModifier[]): void;
}

/**
 * Contains information related to firing of a data driven
 * entity event - for example, the `minecraft:ageable_grow_up`
 * event on a chicken.
 */
export class DataDrivenEntityTriggerBeforeEventSignal {
    protected constructor();
    subscribe(callback: (arg: DataDrivenEntityTriggerBeforeEvent) => void,
              options?: EntityDataDrivenTriggerEventOptions
             ): (arg: DataDrivenEntityTriggerBeforeEvent) => void;
    unsubscribe(callback: (arg: DataDrivenEntityTriggerBeforeEvent) => void): void;
}

/**
 * Contains information related to changes to an effect - like poison -
 * being added to an entity.
 */
export class EffectAddAfterEvent {
    protected constructor();
    /**
     * Additional properties and details of the effect.
     */
    effect: Effect;
    /**
     * Entity that the effect is being added to.
     */
    entity: Entity;
}

/**
 * Manages callbacks that are connected to when an effect is added to an
 * entity.
 */
export class EffectAddAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: EffectAddAfterEvent) => void,
              options?: EntityEventOptions
             ): (arg: EffectAddAfterEvent) => void;
    unsubscribe(callback: (arg: EffectAddAfterEvent) => void): void;
}

/**
 * Contains information related to changes to an effect - like poison -
 * being added to an entity.
 */
export class EffectAddBeforeEvent extends {
    protected constructor();
    /**
     * When set to `true` will cancel the event.
     */
    cancel: boolean;
    /**
     * Effect duration.
     */
    duration: number;
    /**
     * The type of the effect that is being added.
     */
    readonly effectType: string;
    /**
     * Entity that the effect is being added to.
     */
    readonly entity: Entity;
}

/**
 * Manages callbacks that are connected to when an effect is added to an
 * entity.
 */
export class EffectAddBeforeEventSignal {
    protected constructor();
    subscribe(callback: (arg: EffectAddBeforeEvent) => void): (arg: EffectAddBeforeEvent) => void;
    unsubscribe(callback: (arg: EffectAddBeforeEvent) => void): void;
}

/**
 * Contains information related to the death of an entity in the game.
 */
export class EntityDieAfterEvent {
    protected constructor();
    /**
     * If specified, provides more information on the source of damage that
     * caused the death of this entity.
     */
    readonly damageCause: EntityDamageCause;
    /**
     * Now-dead entity object.
     */
    readonly deadEntity: Entity;
}

/**
 * Manages callbacks that are connected to when an entity dies.
 */
export class EntityDieAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: EntityDieAfterEvent) => void,
              options?: EntityEventOptions
             ): (arg: EntityDieAfterEvent) => void;
    unsubscribe(callback: (arg: EntityDieAfterEvent) => void): void;
}

/**
 * Contains information related to an entity when its health
 * changes. Warning: don't change the health of an entity in this event, or
 * it will cause an infinite loop!
 */
export class EntityHealthChangedAfterEvent {
    /**
     * Entity whose health changed.
     */
    readonly entity: Entity;
    /**
     * New health value of the entity.
     */
    readonly newValue: number;
    /**
     * Old health value of the entity.
     */
    readonly oldValue: number;
}

/**
 * Manages callbacks that are connected to when the health of an entity
 * changes.
 */
export class EntityHealthChangedAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: EntityHealthChangedAfterEvent) => void,
              options?: EntityEventOptions
             ): (arg: EntityHealthChangedAfterEvent) => void;
    unsubscribe(callback: (arg: EntityHealthChangedAfterEvent) => void): void;
}

/**
 * Contains information related to an entity hitting a block.
 */
export class EntityHitBlockAfterEvent {
    protected constructor();
    /**
     * Face of the block that was hit.
     */
    readonly blockFace: Direction;
    /**
     * Entity that made the attack.
     */
    readonly damagingEntity: Entity;
    /**
     * Block that was hit by the attack.
     */
    readonly hitBlock: Block;
}

/**
 * Contains information related to an entity hitting (melee attacking)
 * another entity.
 */
export class EntityHitEntityAfterEvent {
    protected constructor();
    /**
     * Entity that made a hit/melee attack.
     */
    readonly damagingEntity: Entity;
    /**
     * Entity that was hit by the attack.
     */
    readonly hitEntity: Entity;
}

/**
 * Manages callbacks that are connected to when an entity hits a block.
 */
export class EntityHitBlockAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: EntityHitBlockAfterEvent) => void,
              options?: EntityEventOptions
             ): (arg: EntityHitBlockAfterEvent) => void;
    unsubscribe(callback: (arg: EntityHitBlockAfterEvent) => void): void;
}

/**
 * Manages callbacks that are connected to when an entity makes a melee
 * attack on another entity.
 */
export class EntityHitEntityAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: EntityHitEntityAfterEvent) => void,
              options?: EntityEventOptions
             ): (arg: EntityHitEntityAfterEvent) => void;
    unsubscribe(callback: (arg: EntityHitEntityAfterEvent) => void): void;
}

/**
 * Contains information related to an entity getting hurt by another
 * entity.
 */
export class EntityHurtAfterEvent {
    protected constructor();
    /**
     * Describes the amount of damage caused.
     */
    readonly damage: number;
    /**
     * Source information on the entity that may have applied this damage.
     */
    readonly damageSource: EntityDamageSource;
    /**
     * Entity that was hurt.
     */
    readonly hurtEntity: Entity;
}

/**
 * Manages callbacks that are connected to when an entity is hurt.
 */
export class EntityHurtAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: EntityHurtAfterEvent) => void,
              options?: EntityEventOptions
             ): (arg: EntityHurtAfterEvent) => void;
    unsubscribe(callback: (arg: EntityHurtAfterEvent) => void): void;
}

/**
 * Contains data related to an entity loaded within the world. This could
 * happen when an unloaded chunk is reloaded, or when an entity changes
 * dimensions.
 */
export class EntityLoadAfterEvent {
    protected constructor();
    /**
     * Entity that was loaded.
     */
    entity: Entity;
}

/**
 * Registers a script-based event handler for handling what happens when an
 * entity loads.
 */
export class EntityLoadAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: EntityLoadAfterEvent) => void): (arg: EntityLoadAfterEvent) => void;
    unsubscribe(callback: (arg: EntityLoadAfterEvent) => void): void;
}

/**
 * Data for an event that happens when an entity is removed from the world
 * (for example, the entity is unloaded because it is not close to
 * players.)
 */
export class EntityRemoveAfterEvent {
    protected constructor();
    /**
     * Id of the entity that was removed.
     */
    readonly removedEntityId: string;
    /**
     * Identifier of the type of the entity removed - for example,
     * `minecraft:skeleton`.
     */
    readonly typeId: string;
}

/**
 * Allows registration for an event that fires when an entity is removed
 * from the game (for example, unloaded, or a few seconds after they are
 * dead.)
 */
export class EntityRemoveAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: EntityRemoveAfterEvent) => void,
              options?: EntityEventOptions
             ): (arg: EntityRemoveAfterEvent) => void;
    unsubscribe(callback: (arg: EntityRemoveAfterEvent) => void): void;
}

/**
 * Data for an event that happens when an entity is being removed from the
 * world (for example, the entity is unloaded because it is not close to
 * players.)
 */
export class EntityRemoveBeforeEvent {
    protected constructor();
    /**
     * Reference to an entity that is being removed.
     */
    readonly removedEntity: Entity;
}

/**
 * Allows registration for an event that fires when an entity is being
 * removed from the game (for example, unloaded, or a few seconds after
 * they are dead.)
 */
export class EntityRemoveBeforeEventSignal {
    protected constructor();
    subscribe(callback: (arg: EntityRemoveBeforeEvent) => void): (arg: EntityRemoveBeforeEvent) => void;
    unsubscribe(callback: (arg: EntityRemoveBeforeEvent) => void): void;
}

/**
 * Contains data related to an entity spawning within the world.
 * @example runEntitySpawnEvent.ts
 * ```typescript
 * // register a new function that is called when a new entity is created.
 * mc.world.afterEvents.entitySpawn.subscribe((entityEvent: mc.EntitySpawnAfterEvent) => {
 *   if (entityEvent && entityEvent.entity) {
 *     log(`New entity of type '${entityEvent.entity.typeId}' created!`, 1);
 *   } else {
 *     log(`The entity event didn't work as expected.`, -1);
 *   }
 * });
 *
 * mc.system.runTimeout(() => {
 *   createOldHorse(log, targetLocation);
 * }, 20);
 * ```
 */
export class EntitySpawnAfterEvent {
    protected constructor();
    /**
     * Initialization cause (Spawned, Born ...).
     */
    readonly cause: EntityInitializationCause;
    /**
     * Entity that was spawned.
     */
    readonly entity: Entity;
}

/**
 * Registers a script-based event handler for handling what happens when an
 * entity spawns.
 */
export class EntitySpawnAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: EntitySpawnAfterEvent) => void): (arg: EntitySpawnAfterEvent) => void;
    unsubscribe(callback: (arg: EntitySpawnAfterEvent) => void): void;
}

/**
 * Contains information regarding an explosion that has happened.
 */
export class ExplosionAfterEvent {
    /**
     * Dimension where the explosion has occurred.
     */
    readonly dimension: Dimension;
    /**
     * Optional source of the explosion.
     */
    readonly source?: Entity;
    /**
     * A collection of blocks impacted by this explosion event.
     */
    getImpactedBlocks(): Block[];
    protected constructor();
}

/**
 * Manages callbacks that are connected to when an explosion occurs.
 */
export class ExplosionAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: ExplosionAfterEvent) => void): (arg: ExplosionAfterEvent) => void;
    unsubscribe(callback: (arg: ExplosionAfterEvent) => void): void;
}

/**
 * Contains information regarding an explosion that has happened.
 */
export class ExplosionBeforeEvent extends ExplosionAfterEvent {
    protected constructor();
    /**
     * If set to true, cancels the explosion event.
     */
    cancel: boolean;
    /**
     * Updates a collection of blocks impacted by this explosion event.
     */
    setImpactedBlocks(blocks: Block[]): void;
}

/**
 * Manages callbacks that are connected to before an explosion occurs.
 */
export class ExplosionBeforeEventSignal {
    protected constructor();
    subscribe(callback: (arg: ExplosionBeforeEvent) => void): (arg: ExplosionBeforeEvent) => void;
    unsubscribe(callback: (arg: ExplosionBeforeEvent) => void): void;
}

/**
 * Contains information related to a chargeable item completing being
 * charged.
 */
export class ItemCompleteUseAfterEvent {
    protected constructor();
    /**
     * Returns the item stack that has completed charging.
     */
    readonly itemStack: ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly source: Entity;
    /**
     * Returns the time, in ticks, for the remaining duration left
     * before the charge completes its cycle.
     */
    readonly useDuration: number;
}

/**
 * Manages callbacks that are connected to the completion of charging for a
 * chargeable item.
 */
export class ItemCompleteUseAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: ItemCompleteUseAfterEvent) => void): (arg: ItemCompleteUseAfterEvent) => void;
    unsubscribe(callback: (arg: ItemCompleteUseAfterEvent) => void): void;
}

/**
 * Manages callbacks that are connected to an item's definition and
 * components changing.
 */
export class ItemDefinitionAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: ItemDefinitionTriggeredAfterEvent) => void): (arg: ItemDefinitionTriggeredAfterEvent) => void;
    unsubscribe(callback: (arg: ItemDefinitionTriggeredAfterEvent) => void): void;
}

/**
 * Manages callbacks that are connected to an item's definition and
 * components changing.
 */
export class ItemDefinitionBeforeEventSignal {
    protected constructor();
    subscribe(callback: (arg: ItemDefinitionTriggeredBeforeEvent) => void): (arg: ItemDefinitionTriggeredBeforeEvent) => void;
    unsubscribe(callback: (arg: ItemDefinitionTriggeredBeforeEvent) => void): void;
}

/**
 * Contains information related to a custom item having a data definition
 * change being triggered.
 */
export class ItemDefinitionTriggeredAfterEvent {
    protected constructor();
    /**
     * Name of the data-driven item event that is triggering this
     * change.
     */
    readonly eventName: string;
    /**
     * The impacted item stack that is being used.
     */
    readonly itemStack: ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly source?: Entity;
}

/**
 * Contains information related to a triggering of a custom
 * item definition change.
 */
export class ItemDefinitionTriggeredBeforeEvent extends ItemDefinitionTriggeredAfterEvent {
    protected constructor();
    /**
     * If set to true, will cancel the application of this item definition
     * change.
     */
    cancel: boolean;
}

/**
 * Contains information related to a chargeable item when the player has
 * finished using the item and released the build action.
 */
export class ItemReleaseUseAfterEvent {
    protected constructor();
    /**
     * Returns the item stack that triggered this item event.
     */
    readonly itemStack: ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly source: Entity;
    /**
     * Returns the time, in ticks, for the remaining duration left before
     * the charge completes its cycle.
     */
    readonly useDuration: number;
}

/**
 * Manages callbacks that are connected to the releasing of charging for a
 * chargeable item.
 */
export class ItemReleaseUseAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: ItemReleaseUseAfterEvent) => void): (arg: ItemReleaseUseAfterEvent) => void;
    unsubscribe(callback: (arg: ItemReleaseUseAfterEvent) => void): void;
}

/**
 * Contains information related to a chargeable item starting to be
 * charged.
 */
export class ItemStartUseAfterEvent {
    protected constructor();
    /**
     * The impacted item stack that is starting to be charged.
     */
    readonly itemStack: ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly source: Entity;
    /**
     * Returns the time, in ticks, for the remaining duration left
     * before the charge completes its cycle.
     */
    readonly useDuration: number;
}

/**
 * Manages callbacks that are connected to the start of charging for a
 * chargeable item.
 */
export class ItemStartUseAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: ItemStartUseAfterEvent) => void): (arg: ItemStartUseAfterEvent) => void;
    unsubscribe(callback: (arg: ItemStartUseAfterEvent) => void): void;
}

/**
 * Contains information related to an item being used on a block. This
 * event fires when a player presses the the Use Item / Place Block button
 * to successfully use an item or place a block. Note: This event cannot be
 * used with Hoe or Axe items.
 */
export class ItemStartUseOnAfterEvent {
    protected constructor();
    /**
     * The block that the item is used on.
     */
    readonly block: Block;
    /**
     * The face of the block that an item is being used on.
     */
    readonly blockFace: Direction;
    /**
     * The impacted item stack that is starting to be used.
     */
    readonly itemStack: ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly source: Entity;
}

/**
 * Manages callbacks that are connected to an item starting being used on a
 * block event.
 */
export class ItemStartUseOnAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: ItemStartUseOnAfterEvent) => void): (arg: ItemStartUseOnAfterEvent) => void;
    unsubscribe(callback: (arg: ItemStartUseOnAfterEvent) => void): void;
}

/**
 * Contains information related to a chargeable item has finished an items
 * use cycle, or when the player has released the use action with the item.
 */
export class ItemStopUseAfterEvent {
    protected constructor();
    /**
     * The impacted item stack that is stopping being charged.
     */
    readonly itemStack: ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly source: Entity;
    /**
     * Returns the time, in ticks, for the remaining duration left
     * before the charge completes its cycle.
     */
    readonly useDuration: number;
}

/**
 * Manages callbacks that are connected to the stopping of charging for an
 * item that has a registered `minecraft:chargeable` component.
 */
export class ItemStopUseAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: ItemStopUseAfterEvent) => void): (arg: ItemStopUseAfterEvent) => void;
    unsubscribe(callback: (arg: ItemStopUseAfterEvent) => void): void;
}

/**
 * Contains information related to an item that has stopped being used on a
 * block. This event fires when a player successfully uses an item or
 * places a block by pressing the Use Item / Place Block button. If
 * multiple blocks are placed, this event will only occur once at the
 * beginning of the block placement. Note: This event cannot be used with
 * Hoe or Axe items.
 */
export class ItemStopUseOnAfterEvent {
    protected constructor();
    /**
     * The block that the item is used on.
     */
    readonly block: Block;
    /**
     * The impacted item stack that is being used on a block.
     */
    readonly itemStack: ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly source: Entity;
}

/**
 * Manages callbacks that are connected to an item stops used on a block
 * event.
 */
export class ItemStopUseOnAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: ItemStopUseOnAfterEvent) => void): (arg: ItemStopUseOnAfterEvent) => void;
    unsubscribe(callback: (arg: ItemStopUseOnAfterEvent) => void): void;
}

/**
 * Contains information related to an item being used. This event fires
 * when an item is successfully used by a player.
 */
export class ItemUseAfterEvent {
    protected constructor();
    /**
     * The impacted item stack that is being used.
     */
    readonly itemStack: ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly source: Entity;
}

/**
 * Manages callbacks that are connected to an item use event.
 */
export class ItemUseAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: ItemUseAfterEvent) => void): (arg: ItemUseAfterEvent) => void;
    unsubscribe(callback: (arg: ItemUseAfterEvent) => void): void;
}

/**
 * Contains information related to an item being used.
 */
export class ItemUseBeforeEvent extends ItemUseAfterEvent {
    protected constructor();
    /**
     * If set to true, this will cancel the item use behavior.
     */
    cancel: boolean;
}

/**
 * Manages callbacks that fire before an item is used.
 */
export class ItemUseBeforeEventSignal {
    protected constructor();
    subscribe(callback: (arg: ItemUseBeforeEvent) => void): (arg: ItemUseBeforeEvent) => void;
    unsubscribe(callback: (arg: ItemUseBeforeEvent) => void): void;
}

/**
 * Contains information related to an item being used on a block. This
 * event fires when an item is successfully used on a block by a player.
 */
export class ItemUseOnAfterEvent {
    protected constructor();
    /**
     * The block that the item is used on.
     */
    readonly block: Block;
    /**
     * The face of the block that an item is being used on.
     */
    readonly blockFace: Direction;
    /**
     * Location relative to the bottom north-west corner of the block where
     * the item is placed.
     */
    readonly faceLocation: Vector3;
    /**
     * The impacted item stack that is being used on a block.
     */
    readonly itemStack: ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly source: Entity;
}

/**
 * Manages callbacks that are connected to an item being used on a block
 * event.
 */
export class ItemUseOnAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: ItemUseOnAfterEvent) => void): (arg: ItemUseOnAfterEvent) => void;
    unsubscribe(callback: (arg: ItemUseOnAfterEvent) => void): void;
}

/**
 * Contains information related to an item being used on a block.
 */
export class ItemUseOnBeforeEvent extends ItemUseOnAfterEvent {
    protected constructor();
    /**
     * If set to true, this will cancel the item use behavior.
     */
    cancel: boolean;
}

/**
 * Manages callbacks that fire before an item being used on a block event.
 */
export class ItemUseOnBeforeEventSignal {
    protected constructor();
    subscribe(callback: (arg: ItemUseOnBeforeEvent) => void): (arg: ItemUseOnBeforeEvent) => void;
    unsubscribe(callback: (arg: ItemUseOnBeforeEvent) => void): void;
}

/**
 * Contains information related to changes to a lever activating or
 * deactivating.
 * @example leverActivateEvent.ts
 * ```typescript
 * // set up a lever
 * let cobblestone = overworld.getBlock(targetLocation);
 * let lever = overworld.getBlock({ x: targetLocation.x, y: targetLocation.y + 1, z: targetLocation.z });
 *
 * if (cobblestone === undefined || lever === undefined) {
 *   log("Could not find block at location.");
 *   return -1;
 * }
 *
 * cobblestone.setPermutation(mc.BlockPermutation.resolve("cobblestone"));
 * lever.setPermutation(mc.BlockPermutation.resolve("lever").withState("lever_direction", "up_north_south")); // up
 *
 * mc.world.afterEvents.leverActivate.subscribe((leverActivateEvent: mc.LeverActionAfterEvent) => {
 *   let eventLoc = leverActivateEvent.block.location;
 *
 *   if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y + 1 && eventLoc.z === targetLocation.z) {
 *     log(
 *       "Lever activate event at tick " +
 *         mc.system.currentTick +
 *         " Power:" +
 *         leverActivateEvent.block.getRedstonePower()
 *     );
 *   }
 * });
 * ```
 */
export class LeverActionAfterEvent extends BlockEvent {
    protected constructor();
    /**
     * True if the lever is activated (that is, transmitting power).
     */
    readonly isPowered: boolean;
    /**
     * Optional player that triggered the lever activation.
     */
    readonly player: Player;
}

/**
 * Manages callbacks that are connected to lever moves (activates or
 * deactivates).
 */
export class LeverActionAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: LeverActionAfterEvent) => void): (arg: LeverActionAfterEvent) => void;
    unsubscribe(callback: (arg: LeverActionAfterEvent) => void): void;
}

/**
 * A specific currently-internal event used for passing messages from
 * client to server.
 */
export class MessageReceiveAfterEvent {
    protected constructor();
    readonly id: string;
    readonly message: string;
    readonly player: Player;
}

/**
 * Returns additional data about a /scriptevent command invocation. The
 * maximum message length is 2048 characters.
 */
export class ScriptEventCommandMessageAfterEvent {
    protected constructor();
    /**
     * Identifier of this ScriptEvent command message.
     */
    readonly id: string;
    /**
     * If this command was initiated via an NPC, returns the entity that
     * initiated the NPC dialogue.
     */
    readonly initiator?: Entity;
    /**
     * Optional additional data passed in with the script event command.
     */
    readonly message: string;
    /**
     * Source block if this command was triggered via a block (e.g., a
     * commandblock.)
     */
    readonly sourceBlock?: Block;
    /**
     * Source entity if this command was triggered by an entity (e.g., a
     * NPC).
     */
    readonly sourceEntity?: Entity;
    /**
     * Returns the type of source that fired this command.
     */
    readonly sourceType: ScriptEventSource;
}

/**
 * Allows for registering an event handler that responds to inbound
 * `/scriptevent` commands.
 */
export class ScriptEventCommandMessageAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: ScriptEventCommandMessageAfterEvent) => void,
              options?: ScriptEventMessageFilterOptions
             ): (arg: ScriptEventCommandMessageAfterEvent) => void;
    unsubscribe(callback: (arg: ScriptEventCommandMessageAfterEvent) => void): void;
}

/**
 * Manages callbacks that are connected to messages passing to a
 * server. This event is not currently fully implemented, and should not be
 * used.
 */
export class ServerMessageAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: MessageReceiveAfterEvent) => void): (arg: MessageReceiveAfterEvent) => void;
    unsubscribe(callback: (arg: MessageReceiveAfterEvent) => void): void;
}

/**
 * Provides a set of events that fire within the broader scripting system
 * within Minecraft.
 */
export class SystemAfterEvents {
    /**
     * An event that fires when a `/scriptevent` command is executed. This
     * provides a way for commands and other systems to trigger behavior
     * within script.
     */
    readonly scriptEventReceive: ScriptEventCommandMessageAfterEventSignal;
}

export class SystemBeforeEvents {
    /**
     * This event fires before a the performance watchdog terminates
     * scripting execution due to exceeding a performance
     * boundary. Depending on the configuration of the runtime environment,
     * this event can be canceled. For example, on certain dedicated server
     * environments the ability to override termination events may be
     * disabled.
     */
    readonly watchdogTerminate: WatchdogTerminateBeforeEventSignal;
}

/**
 * Contains information related to changes to a piston expanding or
 * retracting.
 * @example pistonAfterEvent.ts
 * ```typescript
 * // set up a couple of piston blocks
 * let piston = overworld.getBlock(targetLocation);
 * let button = overworld.getBlock({ x: targetLocation.x, y: targetLocation.y + 1, z: targetLocation.z });
 *
 * if (piston === undefined || button === undefined) {
 *   log("Could not find block at location.");
 *   return -1;
 * }
 *
 * piston.setPermutation(mc.BlockPermutation.resolve("piston").withState("facing_direction", 3)); // south
 * button.setPermutation(mc.BlockPermutation.resolve("acacia_button").withState("facing_direction", 1)); // up
 *
 * mc.world.afterEvents.pistonActivate.subscribe((pistonEvent: mc.PistonActivateAfterEvent) => {
 *   let eventLoc = pistonEvent.piston.block.location;
 *
 *   if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y && eventLoc.z === targetLocation.z) {
 *     log(
 *       "Piston event at " +
 *         mc.system.currentTick +
 *         (pistonEvent.piston.isMoving ? " Moving" : "") +
 *         (pistonEvent.piston.isExpanding ? " Expanding" : "") +
 *         (pistonEvent.piston.isExpanded ? " Expanded" : "") +
 *         (pistonEvent.piston.isRetracting ? " Retracting" : "") +
 *         (pistonEvent.piston.isRetracted ? " Retracted" : "")
 *     );
 *   }
 * });
 * ```
 */
export class PistonActivateAfterEvent extends BlockEvent {
    protected constructor();
    /**
     * True if the piston is the process of expanding.
     */
    readonly isExpanding: boolean;
    /**
     * Contains additional properties and details of the piston.
     */
    readonly piston: BlockPistonComponent;
}

/**
 * Manages callbacks that are connected to piston activations.
 */
export class PistonActivateAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: PistonActivateAfterEvent) => void): (arg: PistonActivateAfterEvent) => void;
    unsubscribe(callback: (arg: PistonActivateAfterEvent) => void): void;
}

/**
 * Contains information related to changes before a piston
 * expands or retracts.
 * @example pistonBeforeEvent.ts
 * ```typescript
 * // set up a couple of piston blocks
 * let piston = overworld.getBlock(targetLocation);
 * let button = overworld.getBlock({ x: targetLocation.x, y: targetLocation.y + 1, z: targetLocation.z });
 *
 * if (piston === undefined || button === undefined) {
 *   log("Could not find block at location.");
 *   return -1;
 * }
 *
 * piston.setPermutation(mc.BlockPermutation.resolve("piston").withState("facing_direction", 3)); // south
 * button.setPermutation(mc.BlockPermutation.resolve("acacia_button").withState("facing_direction", 1)); // up
 *
 * const uncanceledPistonLoc = {
 *   x: Math.floor(targetLocation.x) + 2,
 *   y: Math.floor(targetLocation.y),
 *   z: Math.floor(targetLocation.z) + 2,
 * };
 *
 * // this is our control.
 * let uncanceledPiston = overworld.getBlock(uncanceledPistonLoc);
 * let uncanceledButton = overworld.getBlock({
 *   x: uncanceledPistonLoc.x,
 *   y: uncanceledPistonLoc.y + 1,
 *   z: uncanceledPistonLoc.z,
 * });
 *
 * if (uncanceledPiston === undefined || uncanceledButton === undefined) {
 *   log("Could not find block at location.");
 *   return -1;
 * }
 *
 * uncanceledPiston.setPermutation(mc.BlockPermutation.resolve("piston").withState("facing_direction", 3)); // south
 * uncanceledButton.setPermutation(
 *   mc.BlockPermutation.resolve("acacia_button").withState("facing_direction", 1) // up
 * );
 *
 * mc.world.beforeEvents.pistonActivate.subscribe((pistonEvent: mc.PistonActivateBeforeEvent) => {
 *   let eventLoc = pistonEvent.piston.block.location;
 *   if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y && eventLoc.z === targetLocation.z) {
 *     log("Cancelling piston event");
 *     pistonEvent.cancel = true;
 *   }
 * });
 * ```
 */
export class PistonActivateBeforeEvent extends PistonActivateAfterEvent {
    protected constructor();
    /**
     * If this is set to true within an event handler, the piston
     * activation is canceled.
     */
    cancel: boolean;
}

/**
 * Manages callbacks that are connected to an event that fires before a
 * piston is activated.
 */
export class PistonActivateBeforeEventSignal {
    protected constructor();
    subscribe(callback: (arg: PistonActivateBeforeEvent) => void): (arg: PistonActivateBeforeEvent) => void;
    unsubscribe(callback: (arg: PistonActivateBeforeEvent) => void): void;
}

/**
 * Contains information regarding an event after a player breaks a block.
 */
export class PlayerBreakBlockAfterEvent extends BlockEvent {
    protected constructor();
    /**
     * Returns permutation information about this block before it
     * was broken.
     */
    readonly brokenBlockPermutation: BlockPermutation;
    /**
     * The item stack that was used to break the block after the block was
     * broken, or undefined if empty hand.
     */
    readonly itemStackAfterBreak?: ItemStack;
    /**
     * The item stack that was used to break the block before the block was
     * broken, or undefined if empty hand.
     */
    readonly itemStackBeforeBreak?: ItemStack;
    /**
     * Player that broke the block for this event.
     */
    readonly player: Player;
}

/**
 * Manages callbacks that are connected to when a block is
 * broken.
 */
export class PlayerBreakBlockAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: PlayerBreakBlockAfterEvent) => void,
              options?: BlockEventOptions
             ): (arg: PlayerBreakBlockAfterEvent) => void
    unsubscribe(callback: (arg: PlayerBreakBlockAfterEvent) => void): void;
}

/**
 * Contains information regarding an event before a player breaks a block.
 */
export class PlayerBreakBlockBeforeEvent extends BlockEvent {
    protected constructor();
    /**
     * If set to true, cancels the block break event.
     */
    cancel: boolean;
    /**
     * The item stack that is being used to break the block, or undefined
     * if empty hand.
     */
    itemStack?: ItemStack;
    /**
     * Player breaking the block for this event.
     */
    readonly player: Player;
}

/**
 * Manages callbacks that are connected to before a player breaks a block.
 */
export class PlayerBreakBlockBeforeEventSignal {
    protected constructor();
    subscribe(callback: (arg: PlayerBreakBlockBeforeEvent) => void,
              options?: BlockEventOptions
             ): (arg: PlayerBreakBlockBeforeEvent) => void;
    unsubscribe(callback: (arg: PlayerBreakBlockBeforeEvent) => void): void;
}

/**
 * Contains information related to changes to a player's dimension having
 * been changed.
 */
export class PlayerDimensionChangeAfterEvent {
    protected constructor();
    /**
     * The dimension the player is changing from.
     */
    readonly fromDimension: Dimension;
    /**
     * The location the player was at before changing dimensions.
     */
    readonly fromLocation: Vector3;
    /**
     * Handle to the player that is changing dimensions.
     */
    readonly player: Player;
    /**
     * The dimension that the player is changing to.
     */
    readonly toDimension: Dimension;
    /**
     * The location the player will spawn to after changing dimensions.
     */
    readonly toLocation: Vector3;
}

/**
 * Manages callbacks that are connected to successful player dimension
 * changes.
 */
export class PlayerDimensionChangeAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: PlayerDimensionChangeAfterEvent) => void): (arg: PlayerDimensionChangeAfterEvent) => void;
    unsubscribe(callback: (arg: PlayerDimensionChangeAfterEvent) => void): void;
}

/**
 * Contains information regarding an event after a player interacts with a
 * block.
 */
export class PlayerInteractWithBlockAfterEvent {
    protected constructor();
    /**
     * The block that will be interacted with.
     */
    readonly block: Block;
    /**
     * The face of the block that is being interacted with.
     */
    readonly blockFace: Direction;
    /**
     * Location relative to the bottom north-west corner of the block where
     * the item is placed.
     */
    readonly faceLocation: Vector3;
    /**
     * The item stack that is being used in the interaction, or `undefined`
     * if empty hand.
     */
    readonly itemStack?: ItemStack;
    /**
     * Source Player for this event.
     */
    readonly player: Player;
}

/**
 * Manages callbacks that are connected to after a player interacts with a
 * block.
 */
export class PlayerInteractWithBlockAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: PlayerInteractWithBlockAfterEvent) => void): (arg: PlayerInteractWithBlockAfterEvent) => void;
    unsubscribe(callback: (arg: PlayerInteractWithBlockAfterEvent) => void): void;
}

/**
 * Contains information regarding an event before a player interacts with a
 * block.
 */
export class PlayerInteractWithBlockBeforeEvent extends PlayerInteractWithBlockAfterEvent {
    protected constructor();
    /**
     * If set to true the interaction will be cancelled.
     */
    cancel: boolean;
}

/**
 * Manages callbacks that are connected to before a player interacts with a
 * block.
 */
export class PlayerInteractWithBlockBeforeEventSignal {
    protected constructor();
    subscribe(callback: (arg: PlayerInteractWithBlockBeforeEvent) => void): (arg: PlayerInteractWithBlockBeforeEvent) => void;
    unsubscribe(callback: (arg: PlayerInteractWithBlockBeforeEvent) => void): void;
}

/**
 * Contains information regarding an event after a player interacts with an
 * entity.
 */
export class PlayerInteractWithEntityAfterEvent {
    protected constructor();
    /**
     * The item stack that is being used in the interaction, or undefined
     * if empty hand.
     */
    readonly itemStack?: ItemStack;
    /**
     * Source Player for this event.
     */
    readonly player: Player;
    /**
     * The entity that will be interacted with.
     */
    readonly target: Entity;
}

/**
 * Manages callbacks that are connected to after a player interacts with an
 * entity.
 */
export class PlayerInteractWithEntityAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: PlayerInteractWithEntityAfterEvent) => void): (arg: PlayerInteractWithEntityAfterEvent) => void;
    unsubscribe(callback: (arg: PlayerInteractWithEntityAfterEvent) => void): void;
}

/**
 * Contains information regarding an event before a player interacts with
 * an entity.
 */
export class PlayerInteractWithEntityBeforeEvent extends PlayerInteractWithEntityAfterEvent {
    protected constructor();
    /**
     * If set to true the interaction will be cancelled.
     */
    cancel: boolean;
}

/**
 * Manages callbacks that are connected to before a player interacts with
 * an entity.
 */
export class PlayerInteractWithEntityBeforeEventSignal {
    protected constructor();
    subscribe(callback: (arg: PlayerInteractWithEntityBeforeEvent) => void): (arg: PlayerInteractWithEntityBeforeEvent) => void;
    unsubscribe(callback: (arg: PlayerInteractWithEntityBeforeEvent) => void): void;
}

/**
 * Contains information regarding a player that has joined. See {@link
 * @minecraft/server.PlayerSpawnAfterEvent} for more detailed information
 * that could be returned after the first time a player has spawned within
 * the game.
 */
export class PlayerJoinAfterEvent {
    protected constructor();
    /**
     * Opaque string identifier of the player that joined the game.
     */
    readonly playerId: string;
    /**
     * Name of the player that has joined.
     */
    readonly playerName: string;
}

/**
 * Manages callbacks that are connected to a player joining the world.
 */
export class PlayerJoinAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: PlayerJoinAfterEvent) => void): (arg: PlayerJoinAfterEvent) => void;
    unsubscribe(callback: (arg: PlayerJoinAfterEvent) => void): void;
}

/**
 * Contains information regarding a player that has left the world.
 */
export class PlayerLeaveAfterEvent {
    protected constructor();
    /**
     * Opaque string identifier of the player that has left the event.
     */
    readonly playerId: string;
    /**
     * Player that has left the world.
     */
    readonly playerName: string;
}

/**
 * Manages callbacks that are connected to a player leaving the world.
 */
export class PlayerLeaveAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: PlayerLeaveAfterEvent) => void): (arg: PlayerLeaveAfterEvent) => void;
    unsubscribe(callback: (arg: PlayerLeaveAfterEvent) => void): void;
}

export class PlayerLeaveBeforeEvent {
    protected constructor();
    readonly player: Player;
}

export class PlayerLeaveBeforeEventSignal {
    protected constructor();
    subscribe(callback: (arg: PlayerLeaveBeforeEvent) => void): (arg: PlayerLeaveBeforeEvent) => void;
    unsubscribe(callback: (arg: PlayerLeaveBeforeEvent) => void): void;
}

/**
 * Contains information regarding an event where a player places a block.
 */
export class PlayerPlaceBlockAfterEvent extends BlockEvent {
    protected constructor();
    /**
     * Player that placed the block for this event.
     */
    readonly player: Player;
}

/**
 * Manages callbacks that are connected to when a block is placed by a
 * player.
 */
export class PlayerPlaceBlockAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: PlayerPlaceBlockAfterEvent) => void,
              options?: BlockEventOptions): (arg: PlayerPlaceBlockAfterEvent) => void;
    unsubscribe(callback: (arg: PlayerPlaceBlockAfterEvent) => void): void;
}

/**
 * Contains information regarding an event before a player places a block.
 */
export class PlayerPlaceBlockBeforeEvent extends BlockEvent {
    /**
     * If set to true, cancels the block place event.
     */
    cancel: boolean;
    /**
     * The face of the block that the new block is being placed on.
     */
    readonly face: Direction;
    /**
     * Location relative to the bottom north-west corner of the block where
     * the new block is being placed onto.
     */
    readonly faceLocation: Vector3;
    /**
     * The item being used to place the block.
     */
    itemStack: ItemStack;
    /**
     * Player that is placing the block for this event.
     */
    readonly player: Player;
}

/**
 * Manages callbacks that are connected to before a block is placed by a
 * player.
 */
export class PlayerPlaceBlockBeforeEventSignal {
    protected constructor();
    subscribe(callback: (arg: PlayerPlaceBlockBeforeEvent) => void,
              options?: BlockEventOptions
             ): (arg: PlayerPlaceBlockBeforeEvent) => void;
    unsubscribe(callback: (arg: PlayerPlaceBlockBeforeEvent) => void): void;
}

/**
 * An event that contains more information about a player spawning.
 */
export class PlayerSpawnAfterEvent {
    protected constructor();
    /**
     * If true, this is the initial spawn of a player after joining the
     * game.
     */
    readonly initialSpawn: boolean;
    /**
     * Object that represents the player that joined the game.
     */
    readonly player: Player;
}

/**
 * Registers an event when a player is spawned (or re-spawned after death)
 * and fully ready within the world.
 */
export class PlayerSpawnAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: PlayerSpawnAfterEvent) => void): (arg: PlayerSpawnAfterEvent) => void;
    unsubscribe(callback: (arg: PlayerSpawnAfterEvent) => void): void;
}

/**
 * Contains information related to changes to a pressure plate pop.
 */
export class PressurePlatePopAfterEvent extends BlockEvent {
    protected constructor();
    /**
     * The redstone power of the pressure plate before it was popped.
     */
    readonly previousRedstonePower: number;
    /**
     * The redstone power of the pressure plate at the time of the pop.
     */
    readonly redstonePower: number;
}

/**
 * Manages callbacks that are connected to when a pressure plate is popped.
 */
export class PressurePlatePopAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: PressurePlatePopAfterEvent) => void): (arg: PressurePlatePopAfterEvent) => void;
    unsubscribe(callback: (arg: PressurePlatePopAfterEvent) => void): void;
}

/**
 * Contains information related to changes to a pressure plate push.
 */
export class PressurePlatePushAfterEvent extends BlockEvent {
    protected constructor();
    /**
     * The redstone power of the pressure plate before it was pushed.
     */
    readonly previousRedstonePower: number;
    /**
     * The redstone power of the pressure plate at the time of the push.
     */
    readonly redstonePower: number;
    /**
     * Source that triggered the pressure plate push.
     */
    readonly source: Entity;
}

/**
 * Manages callbacks that are connected to when a pressure plate is pushed.
 */
export class PressurePlatePushAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: PressurePlatePushAfterEvent) => void): (arg: PressurePlatePushAfterEvent) => void;
    unsubscribe(callback: (arg: PressurePlatePushAfterEvent) => void): void;
}

/**
 * Contains information related to a projectile hitting a block.
 */
export class ProjectileHitBlockAfterEvent {
    protected constructor();
    /**
     * Dimension where this projectile hit took place.
     */
    readonly dimension: Dimension;
    /**
     * Direction vector of the projectile as it hit a block.
     */
    readonly hitVector: Vector3;
    /**
     * Location where the projectile hit occurred.
     */
    readonly location: Vector3;
    /**
     * Entity for the projectile that hit a block.
     */
    readonly projectile: Entity;
    /**
     * Optional source entity that fired the projectile.
     */
    readonly source: Entity;
    /**
     * Contains additional information about the block that was hit by the
     * projectile.
     */
    getBlockHit(): BlockHitInformation;
}

/**
 * Manages callbacks that are connected to when a projectile hits a block.
 */
export class ProjectileHitBlockAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: ProjectileHitBlockAfterEvent) => void): (arg: ProjectileHitBlockAfterEvent) => void;
    unsubscribe(callback: (arg: ProjectileHitBlockAfterEvent) => void): void;
}

/** * Contains information related to a projectile hitting an * entity.
 */
export class ProjectileHitEntityAfterEvent {
    protected constructor();
    /**
     * Dimension where this projectile hit took place.
     */
    readonly dimension: Dimension;
    /**
     * Direction vector of the projectile as it hit an entity.
     */
    readonly hitVector: Vector3;
    /**
     * Location where the projectile hit occurred.
     */
    readonly location: Vector3;
    /**
     * Entity for the projectile that hit an entity.
     */
    readonly projectile: Entity;
    /**
     * Optional source entity that fired the projectile.
     */
    readonly source: Entity;
    /**
     * Contains additional information about an entity that was hit.
     */
    getEntityHit(): EntityHitInformation;
}

/**
 * Manages callbacks that are connected to when a projectile hits an
 * entity.
 */
export class ProjectileHitEntityAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: ProjectileHitEntityAfterEvent) => void): (arg: ProjectileHitEntityAfterEvent) => void;
    unsubscribe(callback: (arg: ProjectileHitEntityAfterEvent) => void): void;
}

/**
 * Contains information related to changes to a target block hit.
 */
export class TargetBlockHitAfterEvent extends BlockEvent {
    protected constructor();
    /**
     * The position where the source hit the block.
     */
    readonly hitVector: Vector3;
    /**
     * The redstone power before the block is hit.
     */
    readonly previousRedstonePower: number;
    /**
     * The redstone power at the time the block is hit.
     */
    readonly redstonePower: number;
    /**
     * Optional source that hit the target block.
     */
    readonly source: Entity;
}

/**
 * Manages callbacks that are connected to when a target block is hit.
 */
export class TargetBlockHitAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: TargetBlockHitAfterEvent) => void): (arg: TargetBlockHitAfterEvent) => void;
    unsubscribe(callback: (arg: TargetBlockHitAfterEvent) => void): void;
}

/**
 * Contains information related to changes to a trip wire trip.
 * @example tripWireTripEvent.ts
 * ```typescript
 * // set up a tripwire
 * let redstone = overworld.getBlock({ x: targetLocation.x, y: targetLocation.y - 1, z: targetLocation.z });
 * let tripwire = overworld.getBlock(targetLocation);
 *
 * if (redstone === undefined || tripwire === undefined) {
 *   log("Could not find block at location.");
 *   return -1;
 * }
 *
 * redstone.setPermutation(mc.BlockPermutation.resolve("redstone_block"));
 * tripwire.setPermutation(mc.BlockPermutation.resolve("tripwire"));
 *
 * mc.world.afterEvents.tripWireTrip.subscribe((tripWireTripEvent: mc.TripWireTripAfterEvent) => {
 *   let eventLoc = tripWireTripEvent.block.location;
 *
 *   if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y && eventLoc.z === targetLocation.z) {
 *     log(
 *       "Tripwire trip event at tick " +
 *         mc.system.currentTick +
 *         (tripWireTripEvent.sources.length > 0 ? " by entity " + tripWireTripEvent.sources[0].id : "")
 *     );
 *   }
 * });
 * ```
 */
export class TripWireTripAfterEvent extends BlockEvent {
    protected constructor();
    /**
     * Whether or not the block has redstone power.
     */
    readonly isPowered: boolean;
    /**
     * The sources that triggered the trip wire to trip.
     */
    readonly sources: Entity[];
}

/**
 * Manages callbacks that are connected to when a trip wire is tripped.
 */
export class TripWireTripAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: TripWireTripAfterEvent) => void): (arg: TripWireTripAfterEvent) => void;
    unsubscribe(callback: (arg: TripWireTripAfterEvent) => void): void;
}

/**
 * Contains information related to a script watchdog termination.
 */
export class WatchdogTerminateBeforeEvent {
    protected constructor();
    /**
     * If set to true, cancels the termination of the script runtime. Note
     * that depending on server configuration settings, cancellation of the
     * termination may not be allowed.
     */
    cancel: boolean;
    /**
     * Contains the reason why a script runtime is to be terminated.
     */
    readonly terminateReason: WatchdogTerminateReason;
}

/**
 * Manages callbacks that are connected to a callback that will be called
 * when a script runtime is being terminated due to a violation of the
 * performance watchdog system.
 */
export class WatchdogTerminateBeforeEventSignal {
    protected constructor();
    subscribe(callback: (arg: WatchdogTerminateBeforeEvent) => void): (arg: WatchdogTerminateBeforeEvent) => void;
    unsubscribe(callback: (arg: WatchdogTerminateBeforeEvent) => void): void;
}

/**
 * Contains information related to changes in weather in the environment.
 */
export class WeatherChangeAfterEvent {
    protected constructor();
    /**
     * Dimension in which the weather has changed.
     */
    readonly dimension: string;
    /**
     * Whether it is lightning after the change in weather.
     */
    readonly lightning: boolean;
    /**
     * Whether it is raining after the change in weather.
     */
    readonly raining: boolean;
}

/**
 * Manages callbacks that are connected to weather changing.
 */
export class WeatherChangeAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: WeatherChangeAfterEvent) => void): (arg: WeatherChangeAfterEvent) => void;
    unsubscribe(callback: (arg: WeatherChangeAfterEvent) => void): void;
}

/**
 * Contains information and methods that can be used at the initialization
 * of the scripting environment for a World.
 */
export class WorldInitializeAfterEvent {
    protected constructor();
}

/**
 * Manages callbacks that are run at the initialization of the scripting
 * environment for a World. Do note that this event may run multiple times
 * within a session in the case that the `/reload` command is used.
 */
export class WorldInitializeAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: WorldInitializeAfterEvent) => void): (arg: WorldInitializeAfterEvent) => void;
    unsubscribe(callback: (arg: WorldInitializeAfterEvent) => void): void;
}

/**
 * Contains a set of events that are available across the scope of the
 * World.
 */
export class WorldAfterEvents {
    protected constructor();
    /**
     * This event fires for each BlockLocation destroyed by an
     * explosion. It is fired after the blocks have already been destroyed.
     */
    readonly blockExplode: BlockExplodeAfterEventSignal;
    /**
     * This event fires when a button is pushed.
     */
    readonly buttonPush: ButtonPushAfterEventSignal;
    /**
     * This event is triggered after a chat message has been broadcast or
     * sent to players.
     */
    readonly chatSend: ChatSendAfterEventSignal;
    /**
     * This event is fired when an entity event has been triggered
     * that will update the component definition state of an
     * entity.
     */
    readonly dataDrivenEntityTriggerEvent: DataDrivenEntityTriggerAfterEventSignal;
    /**
     * This event fires when an effect, like poisoning, is added to an
     * entity.
     */
    readonly effectAdd: EffectAddAfterEventSignal;
    /**
     * This event fires when an entity dies.
     */
    readonly entityDie: EntityDieAfterEventSignal;
    /**
     * This event fires when the health of an entity changes.
     */
    readonly entityHealthChanged: EntityHealthChangedAfterEventSignal;
    /**
     * This event fires when an entity hits (that is, melee attacks) a
     * block.
     */
    readonly entityHitBlock: EntityHitBlockAfterEventSignal;
    /**
     * This event fires when an entity hits (that is, melee attacks)
     * another entity.
     */
    readonly entityHitEntity: EntityHitEntityAfterEventSignal;
    /**
     * This event fires when an entity is hurt (takes damage).
     */
    readonly entityHurt: EntityHurtAfterEventSignal;
    /**
     * Fires when an entity is loaded.
     */
    readonly entityLoad: EntityLoadAfterEventSignal;
    /**
     * This event fires when an entity is removed from the world (for
     * example, the entity is unloaded because it is not close to players.)
     */
    readonly entityRemove: EntityRemoveAfterEventSignal;
    /**
     * This event fires when an entity is spawned.
     */
    readonly entitySpawn: EntitySpawnAfterEventSignal;
    /**
     * This event is fired after an explosion occurs.
     */
    readonly explosion: ExplosionAfterEventSignal;
    /**
     * This event fires when a chargeable item completes charging.
     */
    readonly itemCompleteUse: ItemCompleteUseAfterEventSignal;
    /**
     * For custom items, this event is triggered when the fundamental set
     * of defined components for the item change.  Note that this event is
     * only fired for custom data-driven items.
     */
    readonly itemDefinitionEvent: ItemDefinitionAfterEventSignal;
    /**
     * This event fires when a chargeable item is released from charging.
     */
    readonly itemReleaseUse: ItemReleaseUseAfterEventSignal;
    /**
     * This event fires when a chargeable item starts charging.
     */
    readonly itemStartUse: ItemStartUseAfterEventSignal;
    /**
     * This event fires when a player successfully uses an item or places a
     * block by pressing the Use Item / Place Block button. If multiple
     * blocks are placed, this event will only occur once at the beginning
     * of the block placement. Note: This event cannot be used with Hoe or
     * Axe items.
     */
    readonly itemStartUseOn: ItemStartUseOnAfterEventSignal;
    /**
     * This event fires when a chargeable item stops charging.
     */
    readonly itemStopUse: ItemStopUseAfterEventSignal;
    /**
     * This event fires when any particular item is ending being used by an
     * entity or player.
     */
    readonly itemStopUseOn: ItemStopUseOnAfterEventSignal;
    /**
     * This event fires when any particular item is used by an entity or
     * player.
     */
    readonly itemUse: ItemUseAfterEventSignal;
    /**
     * This event fires when any particular item is used on a block by an
     * entity or player.
     */
    readonly itemUseOn: ItemUseOnAfterEventSignal;
    /**
     * This event fires when a lever activates or is deactivated.
     */
    readonly leverAction: LeverActionAfterEventSignal;
    /**
     * This event is an internal implementation detail, and is otherwise
     * not currently functional.
     */
    readonly messageReceive: ServerMessageAfterEventSignal;
    /**
     * This event fires when a piston expands or retracts.
     */
    readonly pistonActivate: PistonActivateAfterEventSignal;
    /**
     * This event fires for a block that is broken by a player.
     */
    readonly playerBreakBlock: PlayerBreakBlockAfterEventSignal;
    /**
     * Fires when a player moved to a different dimension.
     */
    readonly playerDimensionChange: PlayerDimensionChangeAfterEventSignal;
    /**
     * An event for when a player interacts with a block.
     */
    readonly playerInteractWithBlock: PlayerInteractWithBlockAfterEventSignal
    /**
     * This event fires when a player interacts with an entity.
     */
    readonly playerInteractWithEntity: PlayerInteractWithEntityAfterEventSignal;
    /**
     * This event fires when a player joins a world. See also {@link
     * @minecraft/server.WorldAfterEvents.playerSpawn} for another related
     * event you can trap for when a player is spawned the first time
     * within a world.
     */
    readonly playerJoin: PlayerJoinAfterEventSignal;
    /**
     * This event fires when a player leaves a world.
     */
    readonly playerLeave: PlayerLeaveAfterEventSignal;
    /**
     * This event fires for a block that is placed by a player.
     */
    readonly playerPlaceBlock: PlayerPlaceBlockAfterEventSignal;
    /**
     * This event fires when a player spawns or respawns. Note that an
     * additional flag within this event will tell you whether the player
     * is spawning right after join vs. a respawn.
     */
    readonly playerSpawn: PlayerSpawnAfterEventSignal;
    /**
     * This event fires when a pressure plate is popped.
     */
    readonly pressurePlatePop: PressurePlatePopAfterEventSignal;
    /**
     * This event fires when a pressure plate is pushed.
     */
    readonly pressurePlatePush: PressurePlatePushAfterEventSignal;
    /**
     * This event fires when a projectile hits a block.
     */
    readonly projectileHitBlock: ProjectileHitBlockAfterEventSignal;
    /**
     * This event fires when a projectile hits an entity.
     */
    readonly projectileHitEntity: ProjectileHitEntityAfterEventSignal;
    /**
     * This event fires when a target block is hit.
     */
    readonly targetBlockHit: TargetBlockHitAfterEventSignal;
    /**
     * This event fires when a trip wire is tripped.
     */
    readonly tripWireTrip: TripWireTripAfterEventSignal;
    /**
     * This event will be triggered when the weather changes within
     * Minecraft.
     */
    readonly weatherChange: WeatherChangeAfterEventSignal;
    /**
     * This event fires when the script environment is initialized on a
     * World.
     */
    readonly worldInitialize: WorldInitializeAfterEventSignal;
}

/**
 * A set of events that fire before an actual action occurs. In most cases,
 * you can potentially cancel or modify the impending event. Note that in
 * before events any APIs that modify gameplay state will not function and
 * will throw an error. (e.g., {@link
 * @minecraft/server.Dimension.spawnEntity})
 */
export class WorldBeforeEvents {
    /**
     * This event fires before a chat message is broadcast or
     * delivered. The event can be canceled, and the message can
     * also be updated.
     */
    readonly chatSend: ChatSendBeforeEventSignal;
    /**
     * This event is fired before the triggering of an entity event that
     * updates the component definition state of an entity.  Within this
     * event, you can cancel or shape the impacted components and event
     * triggers.
     */
    readonly dataDrivenEntityTriggerEvent: DataDrivenEntityTriggerBeforeEventSignal;
    /**
     * This event is triggered after an event has been added to an entity.
     */
    readonly effectAdd: EffectAddBeforeEventSignal;
    /**
     * Fires before an entity is removed from the world (for example,
     * unloaded or removed after being killed.)
     */
    readonly entityRemove: EntityRemoveBeforeEventSignal;
    /**
     * This event is fired before an explosion occurs.
     */
    readonly explosion: ExplosionBeforeEventSignal;
    /**
     * For custom items, this event is triggered before the set of defined
     * components for the item change in response to a triggered
     * event. Note that this event is only fired for custom data-driven
     * items.
     */
    readonly itemDefinitionEvent: ItemDefinitionBeforeEventSignal;
    /**
     * This event fires before an item is used by an entity or player.
     */
    readonly itemUse: ItemUseBeforeEventSignal;
    /**
     * This event fires before an item is used on a block by an entity or
     * player.
     */
    readonly itemUseOn: ItemUseOnBeforeEventSignal;
    /**
     * Fires before a piston extends or retracts.
     */
    readonly pistonActivate: PistonActivateBeforeEventSignal;
    /**
     * This event fires before a block is broken by a player.
     */
    readonly playerBreakBlock: PlayerBreakBlockBeforeEventSignal;
    /**
     * Fires before a player interacts with a block.
     */
    readonly playerInteractWithBlock: PlayerInteractWithBlockBeforeEventSignal;
    /**
     * Fires before a player interacts with an entity.
     */
    readonly playerInteractWithEntity: PlayerInteractWithEntityBeforeEventSignal;
    /**
     * Fires when a player leaves the game.
     */
    readonly playerLeave: PlayerLeaveBeforeEventSignal;
    /**
     * This event fires before a block is placed by a player.
     */
    readonly playerPlaceBlock: PlayerPlaceBlockBeforeEventSignal;
}
