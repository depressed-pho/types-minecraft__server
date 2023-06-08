/**
 * Manages callbacks that are connected to when a block is
 * broken.
 */
export class BlockBreakAfterEventSignal extends IBlockBreakAfterEventSignal {
    protected constructor();
}

/**
 * Contains information regarding an event where a player
 * breaks a block.
 */
export class BlockBreakAfterEvent extends BlockEvent {
    protected constructor();
    /**
     * Returns permutation information about this block before it
     * was broken.
     */
    readonly brokenBlockPermutation: BlockPermutation;
    /**
     * Player that broke the block for this event.
     */
    readonly player: Player;
}

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
export class BlockExplodeEventSignal extends IBlockExplodeAfterEventSignal {
    protected constructor();
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
export class BlockPlaceAfterEventSignal extends IBlockPlaceAfterEventSignal {
    protected constructor();
}

/**
 * Contains information related to changes to a button push.
 * @example buttonPushEvent.ts
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
export class ButtonPushEvent extends BlockEvent {
    protected constructor();
    /**
     * Optional source that triggered the button push.
     */
    readonly source: Entity;
}

/**
 * Manages callbacks that are connected to when a button is pushed.
 */
export class ButtonPushAfterEventSignal extends IButtonPushAfterEventSignal {
    protected constructor();
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
export class ChatSendAfterEventSignal extends IChatSendAfterEventSignal {
    protected constructor();
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
export class ChatSendBeforeEventSignal extends IChatSendBeforeEventSignal {
    protected constructor();
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
export class DataDrivenEntityTriggerAfterEventSignal extends IDataDrivenEntityTriggerAfterEventSignal {
    protected constructor();
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
export class DataDrivenEntityTriggerBeforeEventSignal extends IDataDrivenEntityTriggerBeforeEventSignal {
    protected constructor();
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
     * Additional variant number for the effect.
     */
    effectState: number;
    /**
     * Entity that the effect is being added to.
     */
    entity: Entity;
}

/**
 * Manages callbacks that are connected to when an effect is added to an
 * entity.
 */
export class EffectAddAfterEventSignal extends IEffectAddAfterEventSignal {
    protected constructor();
}

/**
 * Contains information related to the death of an entity in the game.
 */
export class EntityDieEvent {
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
export class EntityDieAfterEventSignal extends IEntityDieAfterEventSignal {
    protected constructor();
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
export class EntityHealthChangedAfterEventSignal extends IEntityHealthChangedAfterEventSignal {
    protected constructor();
}

/**
 * Contains information related to an entity hitting (melee attacking)
 * another entity.
 */
export class EntityHitAfterEvent {
    protected constructor();
    /**
     * Entity that made a hit/melee attack.
     */
    readonly entity: Entity;
    /**
     * Block that was hit by the attack, or `undefined` if the hit attack
     * did not hit a block. If both `hitEntity` and `hitBlock` are
     * `undefined`, then the entity basically swiped into the air.
     */
    readonly hitBlock?: Block;
    /**
     * Entity that was hit by the attack, or `undefined` if the hit attack
     * did not hit an entity. If both `hitEntity` and `hitBlock` are
     * `undefined`, then the entity basically swiped into the air.
     */
    readonly hitEntity?: Entity;
}

/**
 * Manages callbacks that are connected to when an entity makes a melee
 * attack on another entity.
 */
export class EntityHitAfterEventSignal extends IEntityHitAfterEventSignal {
    protected constructor();
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
export class EntityHurtAfterEventSignal extends IEntityHurtAfterEventSignal {
    protected constructor();
}

/**
 * Data for an event that happens when an entity is removed from the world
 * (for example, the entity is unloaded because it is not close to
 * players.)
 */
export class EntityRemovedAfterEvent {
    protected constructor();
    /**
     * Reference to an entity that was removed.
     */
    readonly removedEntity: string;
}

/**
 * Manages callbacks that are connected to when an entity is removed from
 * the world (for example, the entity is unloaded because it is not close
 * to players.)
 */
export class EntityRemovedAfterEventSignal extends IEntityRemovedAfterEventSignal {
    protected constructor();
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
     * Entity that was spawned.
     */
    readonly entity: Entity;
}

/**
 * Registers a script-based event handler for handling what happens when an
 * entity spawns.
 */
export class EntitySpawnAfterEventSignal extends IEntitySpawnAfterEventSignal {
    protected constructor();
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
    getImpactedBlocks(): Vector3[];
    protected constructor();
}

/**
 * Manages callbacks that are connected to when an explosion occurs.
 */
export class ExplosionAfterEventSignal extends IExplosionAfterEventSignal {
    protected constructor();
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
    setImpactedBlocks(blocks: Vector3[]): void;
}

/**
 * Manages callbacks that are connected to before an explosion occurs.
 */
export class ExplosionBeforeEventSignal extends IExplosionBeforeEventSignal {
    protected constructor();
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires when blocks are broken.
 */
export class IBlockBreakAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: BlockBreakAfterEvent) => void): (arg: BlockBreakAfterEvent) => void;
    unsubscribe(callback: (arg: BlockBreakAfterEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires when an explosion occurs.
 */
export class IBlockExplodeAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: BlockExplodeAfterEvent) => void): (arg: BlockExplodeAfterEvent) => void;
    unsubscribe(callback: (arg: BlockExplodeAfterEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires after a block is placed.
 */
export class IBlockPlaceAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: BlockPlaceAfterEvent) => void): (arg: BlockPlaceAfterEvent) => void;
    unsubscribe(callback: (arg: BlockPlaceAfterEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires when a button is pushed.
 */
export class IButtonPushAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: ButtonPushAfterEvent) => void): (arg: ButtonPushAfterEvent) => void;
    unsubscribe(callback: (arg: ButtonPushAfterEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires when a chat message is sent.
 */
export class IChatSendAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: ChatSendAfterEvent) => void): (arg: ChatSendAfterEvent) => void;
    unsubscribe(callback: (arg: ChatSendAfterEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires before a chat message is sent.
 */
export class IChatSendBeforeEventSignal {
    protected constructor();
    subscribe(callback: (arg: ChatSendBeforeEvent) => void): (arg: ChatSendBeforeEvent) => void;
    unsubscribe(callback: (arg: ChatSendBeforeEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires when an entities' definition is triggered to change.
 */
export class IDataDrivenEntityTriggerEventSignal {
    protected constructor();
    subscribe(
        callback: (arg: DataDrivenEntityTriggerAfterEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg: DataDrivenEntityTriggerAfterEvent) => void;
    unsubscribe(callback: (arg: DataDrivenEntityTriggerAfterEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires before an entities' definition is scheduled to change via a
 * triggered event.
 */
export class IDataDrivenEntityTriggerBeforeEventSignal {
    protected constructor();
    subscribe(callback: (arg: DataDrivenEntityTriggerBeforeEvent) => void,
              options?: EntityDataDrivenTriggerEventOptions
             ): (arg: DataDrivenEntityTriggerBeforeEvent) => void;
    unsubscribe(callback: (arg: DataDrivenEntityTriggerBeforeEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires when an effect is added to an entity.
 */
export class IEffectAddAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: EffectAddAfterEvent) => void,
              options?: EntityEventOptions
             ): (arg: EffectAddAfterEvent) => void;
    unsubscribe(callback: (arg: EffectAddAfterEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires when an entity dies.
 */
export class IEntityDieAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: EntityDieAfterEvent) => void,
              options?: EntityEventOptions
             ): (arg: EntityDieAfterEvent) => void;
    unsubscribe(callback: (arg: EntityDieAfterEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires when the health of an entity changes.
 */
export class IEntityHealthChangedAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: EntityHealthChangedAfterEvent) => void,
              options?: EntityEventOptions
             ): (arg: EntityHealthChangedAfterEvent) => void;
    unsubscribe(callback: (arg: EntityHealthChangedAfterEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires when an entity hits (melee attacks) another entity.
 */
export class IEntityHitAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: EntityHitAfterEvent) => void,
              options?: EntityEventOptions
             ): (arg: EntityHitAfterEvent) => void;
    unsubscribe(callback: (arg: EntityHitAfterEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires when an entity is hurt.
 */
export class IEntityHurtAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: EntityHurtAfterEvent) => void,
              options?: EntityEventOptions
             ): (arg: EntityHurtAfterEvent) => void;
    unsubscribe(callback: (arg: EntityHurtAfterEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires when an entity is removed from the world (for example, the
 * entity is unloaded because it is not close to players.)
 */
export class IEntityRemovedAfterEventSignal {
    subscribe(callback: (arg: EntityRemovedAfterEvent) => void,
              options?: EntityEventOptions
             ): (arg: EntityRemovedAfterEvent) => void;
    unsubscribe(callback: (arg: EntityRemovedAfterEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires after an entity is spawned.
 */
export class IEntitySpawnAfterEventSignal {
    subscribe(callback: (arg: EntitySpawnAfterEvent) => void): (arg: EntitySpawnAfterEvent) => void;
    unsubscribe(callback: (arg: EntitySpawnAfterEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires after an explosion occurs.
 */
export class IExplosionAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: ExplosionAfterEvent) => void): (arg: ExplosionAfterEvent) => void;
    unsubscribe(callback: (arg: ExplosionAfterEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires before an explosion begins.
 */
export class IExplosionBeforeEventSignal {
    protected constructor();
    subscribe(callback: (arg: ExplosionBeforeEvent) => void): (arg: ExplosionBeforeEvent) => void;
    unsubscribe(callback: (arg: ExplosionBeforeEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires after the completion of charging for a chargeable item.
 */
export class IItemCompleteUseAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: ItemCompleteUseAfterEvent) => void): (arg: ItemCompleteUseAfterEvent) => void;
    unsubscribe(callback: (arg: ItemCompleteUseAfterEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires after an items' definition has changed.
 */
export class IItemDefinitionAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: ItemDefinitionTriggeredAfterEvent) => void): (arg: ItemDefinitionTriggeredAfterEvent) => void;
    unsubscribe(callback: (arg: ItemDefinitionTriggeredAfterEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires before an items' definition changes.
 */
export class IItemDefinitionBeforeEventSignal {
    protected constructor();
    subscribe(callback: (arg: ItemDefinitionTriggeredBeforeEvent) => void): (arg: ItemDefinitionTriggeredBeforeEvent) => void;
    unsubscribe(callback: (arg: ItemDefinitionTriggeredBeforeEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires after a chargeable item is released from charging.
 */
export class IItemReleaseUseAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: ItemReleaseUseAfterEvent) => void): (arg: ItemReleaseUseAfterEvent) => void;
    unsubscribe(callback: (arg: ItemReleaseUseAfterEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires after a chargeable item starts charging.
 */
export class IItemStartUseAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: ItemStartUseAfterEvent) => void): (arg: ItemStartUseAfterEvent) => void;
    unsubscribe(callback: (arg: ItemStartUseAfterEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires when an item is starting to be used on a block.
 */
export class IItemStartUseOnAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: ItemStartUseOnAfterEvent) => void): (arg: ItemStartUseOnAfterEvent) => void;
    unsubscribe(callback: (arg: ItemStartUseOnAfterEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires when a chargeable item stops charging.
 */
export class IItemStopUseAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: ItemStopUseAfterEvent) => void): (arg: ItemStopUseAfterEvent) => void;
    unsubscribe(callback: (arg: ItemStopUseAfterEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires when an item has stopped being used on a block.
 */
export class IItemStopUseOnAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: ItemStopUseOnAfterEvent) => void): (arg: ItemStopUseOnAfterEvent) => void;
    unsubscribe(callback: (arg: ItemStopUseOnAfterEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires after an item is used.
 */
export class IItemUseAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: ItemUseAfterEvent) => void): (arg: ItemUseAfterEvent) => void;
    unsubscribe(callback: (arg: ItemUseAfterEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires before an item is used.
 */
export class IItemUseBeforeEventSignal {
    protected constructor();
    subscribe(callback: (arg: ItemUseBeforeEvent) => void): (arg: ItemUseBeforeEvent) => void;
    unsubscribe(callback: (arg: ItemUseBeforeEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires after an item is used on a block.
 */
export class IItemUseOnAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: ItemUseOnAfterEvent) => void): (arg: ItemUseOnAfterEvent) => void;
    unsubscribe(callback: (arg: ItemUseOnAfterEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires before an item is being used on a block.
 */
export class IItemUseOnBeforeEventSignal {
    protected constructor();
    subscribe(callback: (arg: ItemUseOnBeforeEvent) => void): (arg: ItemUseOnBeforeEvent) => void;
    unsubscribe(callback: (arg: ItemUseOnBeforeEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires after a lever is used.
 */
export class ILeverActionAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: LeverActionAfterEvent) => void): (arg: LeverActionAfterEvent) => void;
    unsubscribe(callback: (arg: LeverActionAfterEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires when /script event command is called.
 */
export class IScriptEventCommandMessageAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: ScriptEventCommandMessageAfterEvent) => void,
              options?: ScriptEventMessageFilterOptions
             ): (arg: ScriptEventCommandMessageAfterEvent) => void;
    unsubscribe(callback: (arg: ScriptEventCommandMessageAfterEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires after a server message is sent. Note that this event is for
 * internal use only.
 */
export class IServerMessageAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: MessageReceiveAfterEvent) => void): (arg: MessageReceiveAfterEvent) => void;
    unsubscribe(callback: (arg: MessageReceiveAfterEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires after a piston is activated.
 */
export class IPistonActivateAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: PistonActivateAfterEvent) => void): (arg: PistonActivateAfterEvent) => void;
    unsubscribe(callback: (arg: PistonActivateAfterEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires before a piston is activated.
 */
export class IPistonActivateBeforeEventSignal {
    protected constructor();
    subscribe(callback: (arg: PistonActivateBeforeEvent) => void): (arg: PistonActivateBeforeEvent) => void;
    unsubscribe(callback: (arg: PistonActivateBeforeEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires after a player joins a world.
 */
export class IPlayerJoinAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: PlayerJoinAfterEvent) => void): (arg: PlayerJoinAfterEvent) => void;
    unsubscribe(callback: (arg: PlayerJoinAfterEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires after a player leaves a world.
 */
export class IPlayerLeaveAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: PlayerLeaveAfterEvent) => void): (arg: PlayerLeaveAfterEvent) => void;
    unsubscribe(callback: (arg: PlayerLeaveAfterEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires after a player spawns.
 */
export class IPlayerSpawnAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: PlayerSpawnAfterEvent) => void): (arg: PlayerSpawnAfterEvent) => void;
    unsubscribe(callback: (arg: PlayerSpawnAfterEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires when a pressure plate is popped.
 */
export class IPressurePlatePopAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: PressurePlatePopAfterEvent) => void): (arg: PressurePlatePopAfterEvent) => void;
    unsubscribe(callback: (arg: PressurePlatePopAfterEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires when a pressure plate is pushed.
 */
export class IPressurePlatePushAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: PressurePlatePushAfterEvent) => void): (arg: PressurePlatePushAfterEvent) => void;
    unsubscribe(callback: (arg: PressurePlatePushAfterEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires after a projectile hits a target.
 */
export class IProjectileHitAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: ProjectileHitAfterEvent) => void): (arg: ProjectileHitAfterEvent) => void;
    unsubscribe(callback: (arg: ProjectileHitAfterEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires when a target block is hit.
 */
export class ITargetBlockHitAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: TargetBlockHitAfterEvent) => void): (arg: TargetBlockHitAfterEvent) => void;
    unsubscribe(callback: (arg: TargetBlockHitAfterEvent) => void): void;
}

/**
 * Provides an adaptable interface for callers to subscribe to an event
 * that fires when a trip wire is tripped.
 */
export class ITripWireTripAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: TripWireTripAfterEvent) => void): (arg: TripWireTripAfterEvent) => void;
    unsubscribe(callback: (arg: TripWireTripAfterEvent) => void): void;
}

/**
 * An event that fires before the watchdog is about to terminate a world
 * because various performance metrics for scripting have exceeded a
 * threshold.
 */
export class IWatchdogTerminateBeforeEventSignal {
    protected constructor();
    subscribe(callback: (arg: WatchdogTerminateBeforeEvent) => void): (arg: WatchdogTerminateBeforeEvent) => void;
    unsubscribe(callback: (arg: WatchdogTerminateBeforeEvent) => void): void;
}

/**
 * An event that fires after the weather has changed.
 */
export class IWeatherChangeAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: WeatherChangeAfterEvent) => void): (arg: WeatherChangeAfterEvent) => void;
    unsubscribe(callback: (arg: WeatherChangeAfterEvent) => void): void;
}

/**
 * An event that fires when a world is first initialized or loaded.
 */
export class IWorldInitializeAfterEventSignal {
    protected constructor();
    subscribe(callback: (arg: WorldInitializeAfterEvent) => void): (arg: WorldInitializeAfterEvent) => void;
    unsubscribe(callback: (arg: WorldInitializeAfterEvent) => void): void;
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
export class ItemCompleteUseAfterEventSignal extends IItemCompleteUseAfterEventSignal {
    protected constructor();
}

/**
 * Manages callbacks that are connected to an item's definition and
 * components changing.
 */
export class ItemDefinitionAfterEventSignal extends IItemDefinitionAfterEventSignal {
    protected constructor();
}

/**
 * Manages callbacks that are connected to an item's definition and
 * components changing.
 */
export class ItemDefinitionBeforeEventSignal extends IItemDefinitionBeforeEventSignal {
    protected constructor();
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
    readonly source: Entity;
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
export class ItemReleaseUseAfterEventSignal extends IItemReleaseUseAfterEventSignal {
    protected constructor();
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
export class ItemStartUseAfterEventSignal extends IItemStartUseAfterEventSignal {
    protected constructor();
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
export class ItemStartUseOnAfterEventSignal extends IItemStartUseOnAfterEventSignal {
    protected constructor();
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
export class ItemStopUseAfterEventSignal extends IItemStopUseAfterEventSignal {
    protected constructor();
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
export class ItemStopUseOnAfterEventSignal extends IItemStopUseOnAfterEventSignal {
    protected constructor();
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
    readonly item: ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly source: Entity;
}

/**
 * Manages callbacks that are connected to an item use event.
 */
export class ItemUseAfterEventSignal extends IItemUseAfterEventSignal {
    protected constructor();
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
export class ItemUseBeforeEventSignal extends IItemUseBeforeEventSignal {
    protected constructor();
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
export class ItemUseOnAfterEventSignal extends IItemUseOnAfterEventSignal {
    protected constructor();
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
export class ItemUseOnBeforeEventSignal extends IItemUseOnBeforeEventSignal {
    protected constructor();
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
export class LeverActionAfterEventSignal extends ILeverActionAfterEventSignal {
    protected constructor();
}

/**
 * A specific currently-internal event used for passing messages from
 * client to server.
 */
class MessageReceiveAfterEvent {
    protected constructor();
    readonly id: string;
    readonly message: string;
    readonly player: Player;
}

/**
 * Returns additional data about a /scriptevent command invocation.
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
export class ScriptEventCommandMessageAfterEventSignal extends IScriptEventCommandMessageAfterEventSignal {
    protected constructor();
}

/**
 * Manages callbacks that are connected to messages passing to a
 * server. This event is not currently fully implemented, and should not be
 * used.
 */
export class ServerMessageAfterEventSignal extends IServerMessageAfterEventSignal {
    protected constructor();
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
export class PistonActivateAfterEventSignal extends IPistonActivateAfterEventSignal {
    protected constructor();
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
export class PistonActivateBeforeEventSignal extends IPistonActivateBeforeEventSignal {
    protected constructor();
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
export class PlayerJoinAfterEventSignal extends IPlayerJoinAfterEventSignal {
    protected constructor();
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
export class PlayerLeaveAfterEventSignal extends IPlayerLeaveAfterEventSignal {
    protected constructor();
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
export class PlayerSpawnAfterEventSignal extends IPlayerSpawnAfterEventSignal {
    protected constructor();
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
export class PressurePlatePopAfterEventSignal extends IPressurePlatePopAfterEventSignal {
    protected constructor();
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
export class PressurePlatePushAfterEventSignal extends IPressurePlatePushAfterEventSignal {
    protected constructor();
}

/**
 * Contains information related to a projectile hitting an
 * entity or block.
 */
export class ProjectileHitEvent {
    protected constructor();
    /**
     * Dimension where this projectile hit took place.
     */
    readonly dimension: Dimension;
    /**
     * Direction vector of the projectile as it hit a block/entity.
     */
    readonly hitVector: Vector3;
    /**
     * Location where the projectile hit occurred.
     */
    readonly location: Vector3;
    /**
     * Entity for the projectile that hit a block/entity.
     */
    readonly projectile: Entity;
    /**
     * Optional source entity that fired the projectile.
     */
    readonly source: Entity;
    /**
     * Contains additional information about the block that was hit by the
     * projectile, or `undefined` if the projectile did not hit a block.
     */
    getBlockHit(): BlockHitInformation | undefined;
    /**
     * Contains additional information about an entity that was hit.
     */
    getEntityHit(): EntityHitInformation | undefined;
}

/**
 * Manages callbacks that are connected to when a projectile hits an entity
 * or block.
 */
export class ProjectileHitAfterEventSignal extends IProjectileHitAfterEventSignal {
    protected constructor();
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
export class TargetBlockHitAfterEventSignal extends ITargetBlockHitAfterEventSignal {
    protected constructor();
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
export class TripWireTripAfterEventSignal extends ITripWireTripAfterEventSignal {
    protected constructor();
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
export class WatchdogTerminateBeforeEventSignal extends IWatchdogTerminateBeforeEventSignal {
    protected constructor();
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
export class WeatherChangeAfterEventSignal extends IWeatherChangeAfterEventSignal {
    protected constructor();
}

/**
 * Contains information and methods that can be used at the initialization
 * of the scripting environment for a World. Also, use the supplied
 * propertyRegistry object to register any dynamic properties, within the
 * scope of the World Initialize execution.
 * @example propertyRegistration.js
 * ```typescript
 * import { DynamicPropertiesDefinition, MinecraftEntityTypes, world } from "@minecraft/server";
 *
 * world.afterEvents.worldInitialize.subscribe((e) => {
 *   let def = new DynamicPropertiesDefinition();
 *
 *   def.defineNumber("rpgStrength");
 *   def.defineString("rpgRole", 16);
 *   def.defineBoolean("rpgIsHero");
 *
 *   e.propertyRegistry.registerEntityTypeDynamicProperties(def, MinecraftEntityTypes.skeleton);
 * });
 * ```
 */
export class WorldInitializeAfterEvent {
    protected constructor();
    /**
     * Contains methods for scripts to initialize and register dynamic
     * properties they may wish to use within a world.
     */
    readonly propertyRegistry: PropertyRegistry;
}

/**
 * Manages callbacks that are run at the initialization of the scripting
 * environment for a World. Do note that this event may run multiple times
 * within a session in the case that the `/reload` command is used.
 */
export class WorldInitializeAfterEventSignal extends IWorldInitializeAfterEventSignal {
    protected constructor();
}

/**
 * Contains a set of events that are available across the scope of the
 * World.
 */
export class WorldAfterEvents {
    protected constructor();
    /**
     * This event fires for a block that is broken by a player.
     */
    readonly blockBreak: BlockBreakAfterEventSignal;
    /**
     * This event fires for each BlockLocation destroyed by an
     * explosion. It is fired after the blocks have already been destroyed.
     */
    readonly blockExplode: BlockExplodeAfterEventSignal;
    /**
     * This event fires for a block that is placed by a player.
     */
    readonly blockPlace: BlockPlaceAfterEventSignal;
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
     * This event fires when an entity hits (makes a melee attack) and
     * potentially impacts another entity or block.
     */
    readonly entityHit: EntityHitAfterEventSignal;
    /**
     * This event fires when an entity is hurt (takes damage).
     */
    readonly entityHurt: EntityHurtAfterEventSignal;
    /**
     * This event fires when an entity is removed from the world (for
     * example, the entity is unloaded because it is not close to players.)
     */
    readonly entityRemoved: EntityRemovedAfterEventSignal;
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
    readonly leverActivate: LeverActionAfterEventSignal;
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
     * This event fires when a player joins a world. See also {@link
     * @minecraft/server.Events.playerSpawn} for another related event you
     * can trap for when a player is spawned the first time within a world.
     */
    readonly playerJoin: PlayerJoinAfterEventSignal;
    /**
     * This event fires when a player leaves a world.
     */
    readonly playerLeave: PlayerLeaveAfterEventSignal;
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
     * This event fires when a projectile hits an entity or block.
     */
    readonly projectileHit: ProjectileHitAfterEventSignal;
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
     * World. In addition, you can register dynamic properties within the
     * scope of a world Initialize event.
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
}
