/**
 * Base type for components associated with blocks.
 */
export class BlockComponent extends Component {
    protected constructor();
    /** Block instance that this component pertains to. */
    readonly block: Block;
}

/**
 * Represents the inventory of a block in the world. Used with
 * blocks like chests.
 *
 * @example place_items_in_chest.js
 * ```javascript
 * import { world, MinecraftBlockTypes, Items, ItemStack } from "@minecraft/server";
 * // Fetch block
 * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
 * // Make it a chest
 * block.setType(MinecraftBlockTypes.chest);
 * // Get the inventory
 * const inventoryComponent = block.getComponent("inventory");
 * const inventoryContainer = inventoryComponent.container;
 * // Set slot 0 to a stack of 10 apples
 * inventoryContainer.setItem(0, new ItemStack(Items.apple, 10, 0));
 * ```
 */
export class BlockInventoryComponent extends BlockComponent {
    protected constructor();
    /**
     * The container which holds an {@link @minecraft/server.ItemStack}.
     */
    readonly container: Container;
    static readonly componentId = "minecraft:inventory";
}

/**
 * Represents a fluid container block that currently contains lava.
 */
export class BlockLavaContainerComponent extends BlockLiquidContainerComponent {
    protected constructor();
    static readonly componentId = "minecraft:lavaContainer";
}

/**
 * For blocks that can contain a liquid (e.g., a cauldron), this is a base
 * component for liquid containers.
 */
export class BlockLiquidContainerComponent extends BlockComponent {
    protected constructor();
    /**
     * Relative fill level of the liquid container.
     */
    fillLevel: number;
    /**
     * Returns true if this reference to a liquid container is still valid
     * and contains the liquid of the type you have a reference for (for
     * example, if the block is unloaded, no longer a liquid container or
     * contains lava when you have a potion container component,
     * isValidLiquid will not be true.)
     */
    isValidLiquid(): boolean;
}

/**
 * When present, this block has piston-like behavior. Contains additional
 * properties for discovering block piston state.
 */
export class BlockPistonComponent extends BlockComponent {
    protected constructor();
    /**
     * Whether the piston is fully expanded.
     */
    readonly isExpanded: boolean;
    /**
     * Whether the piston is in the process of expanding.
     */
    readonly isExpanding: boolean;
    /**
     * Whether the piston is in the process of expanding or
     * retracting.
     */
    readonly isMoving: boolean;
    /**
     * Whether the piston is fully retracted.
     */
    readonly isRetracted: boolean;
    /**
     * Whether the piston is in the process of retracting.
     */
    readonly isRetracting: boolean;
    /**
     * Retrieves a set of blocks that this piston is connected with.
     */
    getAttachedBlocks(): Vector3[];
    static readonly componentId = "minecraft:piston";
}

/**
 * Represents a fluid container block that currently contains a potion.
 */
export class BlockPotionContainerComponent extends BlockLiquidContainerComponent {
    protected constructor();
    /**
     * Sets the potion type based on an item stack.
     */
    setPotionType(itemStack: ItemStack): void;
    static readonly componentId = "minecraft:potionContainer";
}

/**
 * Represents a block that can play a record.
 */
export class BlockRecordPlayerComponent extends BlockComponent {
    protected constructor();
    /**
     * Clears the currently playing record of this record-playing block.
     */
    clearRecord(): void;
    /**
     * Returns true if the record-playing block is currently playing a
     * record.
     */
    isPlaying(): boolean;
    /**
     * Sets and plays a record based on an item type.
     */
    setRecord(recordItemType: ItemType): void;
    static readonly componentId = "minecraft:recordPlayer";
}

/**
 * Represents a block that can display text on it.
 */
export class BlockSignComponent extends BlockComponent {
    protected constructor();
    /**
     * Whether or not players can edit the sign. This happens if a sign has
     * had a honeycomb used on it or `setWaxed` was called on the sign.
     */
    readonly isWaxed: boolean;
    /**
     * Returns the RawText of the sign if `setText` was called with a
     * RawMessage or a RawText object, otherwise returns `undefined`.
     * @param side
     * The side of the sign to read the message from. If not provided, this
     * will return the message from the front side of the sign.
     */
    getRawText(side?: SignSide): RawText | undefined;
    /**
     * Returns the text of the sign if `setText` was called with a string,
     * otherwise returns `undefined`.
     * @param side
     * The side of the sign to read the message from. If not provided, this
     * will return the message from the front side of the sign.
     */
    getText(side?: SignSide): string | undefined;
    /**
     * Gets the dye that is on the text or `undefined` if the sign has not
     * been dyed.
     * @param side
     * The side of the sign to read the dye from. If not provided, this
     * will return the dye on the front side of the sign.
     */
    getTextDyeColor(side?: SignSide): DyeColor | undefined;
    /**
     * Sets the text of the sign component.
     * @param message
     * The message to set on the sign. If set to a string, then call
     * `getText` to read that string. If set to a RawMessage, then calling
     * `getRawText` will return a RawText. If set to a RawText, then calling
     * `getRawText` will return the same object that was passed in.
     * @param side
     * The side of the sign the message will be set on. If not provided,
     * the message will be set on the front side of the sign.
     *
     * @example SetRawMessage.ts
     * ```typescript
     * const helloWorldMessage: RawMessage = { text: 'Hello World' };
     * sign.setText(helloWorldMessage);
     * // Sign text will be saved as a RawText
     * const result: RawText = sign.getRawText();
     * JSON.stringify(result); // { rawtext: [{ text: 'Hello World' }] };
     * ```
     *
     * @example SetRawText.ts
     * ```typescript
     * const helloWorldText: RawText = { rawtext: [{ text: 'Hello World' }] };
     * sign.setText(helloWorldText);
     * // There will be no data transformation unlike calling setText with a RawMessage
     * const result: RawText = sign.getRawText();
     * JSON.stringify(result); // { rawtext: [{ text: 'Hello World' }] };
     * ```
     *
     * @example SetString.ts
     * ```typescript
     * // Set sign to say 'Hello'
     * sign.setText('Hello');
     * sign.getText(); // 'Hello'
     * ```
     */
    setText(message: RawMessage | RawText | string, side?: SignSide): void;
    /**
     * Sets the dye color of the text.
     * @param color
     * The dye color to apply to the sign or `undefined` to clear the dye on
     * the sign.
     * @param side
     * The side of the sign the color will be set on. If not provided, the
     * color will be set on the front side of the sign.
     */
    setTextDyeColor(color?: DyeColor, side?: SignSide): void;
    /**
     * Makes it so players cannot edit this sign.
     */
    setWaxed(): void;
    static readonly componentId = "minecraft:sign";
}

/**
 * Represents a fluid container block that currently contains snow.
 */
export class BlockSnowContainerComponent extends BlockLiquidContainerComponent {
    protected constructor();
    static readonly componentId = "minecraft:snowContainer";
}

/**
 * Represents a fluid container block that currently contains water.
 */
export class BlockWaterContainerComponent extends BlockLiquidContainerComponent {
    protected constructor();
    /**
     * Adds an item and colors the water based on a dye item type.
     */
    addDye(itemType: ItemType): void;
    /**
     * Retrieves a custom base color used for the sign text.
     */
    getCustomColor(): Color;
    /**
     * Sets a custom base color used for the sign text.
     */
    setCustomColor(color: Color): void;
    static readonly componentId = "minecraft:waterContainer";
}

/**
 * Base class for downstream Component implementations.
 */
export class Component {
    protected constructor();
    /**
     * Identifier of the component.
     */
    readonly typeId: string;
    /**
     * Returns whether the component is valid. A component is considered
     * valid if its owner is valid, in addition to any addition to any
     * additional validation required by the component.
     */
    isValid(): boolean;
}

/**
 * When added, this component makes the entity spawn with a rider of the
 * specified entityType.
 */
export class EntityAddRiderComponent extends EntityComponent {
    protected constructor();
    /**
     * The type of entity that is added as a rider for this entity when
     * spawned under certain conditions.
     */
    readonly entityType: string;
    /**
     * Optional spawn event to trigger on the rider when that rider is
     * spawned for this entity.
     */
    readonly spawnEvent: string;
    static readonly componentId = "minecraft:addrider";
}

/**
 * Adds a timer for the entity to grow up. It can be accelerated by giving
 * the entity the items it likes as defined by feedItems.
 */
export class EntityAgeableComponent extends EntityComponent {
    protected constructor();
    /**
     * Amount of time before the entity grows up, -1 for always a baby.
     */
    readonly duration: number;
    /**
     * Event to run when this entity grows up.
     */
    readonly growUp: Trigger;
    /**
     * List of items that the entity drops when it grows up.
     */
    getDropItems(): string[];
    /**
     * List of items that can be fed to the entity. Includes `item` for the
     * item name and `growth` to define how much time it grows up by.
     */
    getFeedItems(): EntityDefinitionFeedItem[];
    static readonly componentId = "minecraft:ageable";
}

/**
 * This is a base abstract class for any entity component that centers
 * around a number and can have a minimum, maximum, and default defined
 * value.
 */
export class EntityAttributeComponent extends EntityComponent {
    protected constructor();
    /**
     * The current value of the attribute for the entity.
     */
    readonly currentValue: number;
    /**
     * Returns the default defined value for this attribute.
     */
    readonly defaultValue: number;
    /**
     * Returns the effective max of this attribute given any other ambient
     * components or factors.
     */
    readonly effectiveMax: number;
    /**
     * Returns the effective min of this attribute given any other ambient
     * components or factors.
     */
    readonly effectiveMin: number;
    /**
     * Resets the current value of this attribute to the defined default value.
     */
    resetToDefaultValue(): void;
    /**
     * Resets the current value of this attribute to the maximum defined value.
     */
    resetToMaxValue(): void;
    /**
     * Resets the current value of this attribute to the minimum defined value.
     */
    resetToMinValue(): void;
    /**
     * Sets the current value of this attribute.
     */
    setCurrentValue(value: number): boolean;
}

/**
 * Base class for a family of entity movement events.
 */
export class EntityBaseMovementComponent extends EntityComponent {
    protected constructor();
    /**
     * The maximum number in degrees the entity can turn per tick.
     */
    readonly maxTurn: number;
}

/**
 * Defines what blocks this entity can breathe in and gives them the
 * ability to suffocate.
 */
export class EntityBreathableComponent extends EntityComponent {
    protected constructor();
    /**
     * If true, this entity can breathe in air.
     */
    readonly breathesAir: boolean;
    /**
     * If true, this entity can breathe in lava.
     */
    readonly breathesLava: boolean;
    /**
     * If true, this entity can breathe in solid blocks.
     */
    readonly breathesSolids: boolean;
    /**
     * If true, this entity can breathe in water.
     */
    readonly breathesWater: boolean;
    /**
     * If true, this entity will have visible bubbles while in
     * water.
     */
    readonly generatesBubbles: boolean;
    /**
     * Time in seconds to recover breath to maximum.
     */
    readonly inhaleTime: number;
    /**
     * Time in seconds between suffocation damage.
     */
    readonly suffocateTime: number;
    /**
     * Time in seconds the entity can hold its breath.
     */
    readonly totalSupply: number;
    /**
     * List of blocks this entity can breathe in, in addition to the
     * separate properties for classes of blocks.
     */
    getBreatheBlocks(): BlockPermutation[];
    /**
     * List of blocks this entity can't breathe in.
     */
    getNonBreatheBlocks(): BlockPermutation[];
    /**
     * Sets the current air supply of the entity.
     * @param value
     * New air supply for the entity.
     */
    setAirSupply(value: number): void;
    static readonly componentId = "minecraft:breathable";
}

/**
 * When added, this component signifies that the entity can climb up
 * ladders.
 */
export class EntityCanClimbComponent extends EntityComponent {
    protected constructor();
    static readonly componentId = "minecraft:can_climb";
}

/**
 * When added, this component signifies that the entity can fly, and the
 * pathfinder won't be restricted to paths where a solid block is required
 * underneath it.
 */
export class EntityCanFlyComponent extends EntityComponent {
    protected constructor();
    static readonly componentId = "minecraft:can_fly";
}

/**
 * When added, this component signifies that the entity can power jump like
 * the horse does within Minecraft.
 */
export class EntityCanPowerJumpComponent extends EntityComponent {
    protected constructor();
    static readonly componentId = "minecraft:can_power_jump";
}

/**
 * Defines the entity's color. Only works on certain entities that have
 * predefined color values (sheep, llama, shulker).
 */
export class EntityColorComponent extends EntityComponent {
    protected constructor();
    /**
     * The palette color value of the entity.
     */
    value: number;
    static readonly componentId = "minecraft:color";
}

/**
 * Base class for downstream entity components.
 */
export class EntityComponent extends Component {
    protected constructor();
    /**
     * The entity that owns this component.
     */
    readonly entity: Entity;
}

/**
 * Provides access to a mob's equipment slots. This component exists for
 * all mob entities.
 * @example givePlayerElytra.ts
 * ```typescript
 * let players = mc.world.getAllPlayers();
 *
 * const equipment = players[0].getComponent("equipment_inventory") as mc.EntityEquipmentInventoryComponent;
 * equipment.setEquipment(mc.EquipmentSlot.chest, new mc.ItemStack("minecraft:elytra"));
 *
 * log("Player given Elytra");
 * ```
 * @example givePlayerEquipment.ts
 * ```typescript
 * let players = mc.world.getAllPlayers();
 *
 * const armorStandLoc = { x: targetLocation.x, y: targetLocation.y, z: targetLocation.z + 4 };
 * let armorStand = players[0].dimension.spawnEntity("armor_stand", armorStandLoc);
 *
 * const equipmentCompPlayer = players[0].getComponent("equipment_inventory") as mc.EntityEquipmentInventoryComponent;
 * equipmentCompPlayer.setEquipment(mc.EquipmentSlot.head, new mc.ItemStack("minecraft:golden_helmet"));
 * equipmentCompPlayer.setEquipment(mc.EquipmentSlot.chest, new mc.ItemStack("minecraft:iron_chestplate"));
 * equipmentCompPlayer.setEquipment(mc.EquipmentSlot.legs, new mc.ItemStack("minecraft:diamond_leggings"));
 * equipmentCompPlayer.setEquipment(mc.EquipmentSlot.feet, new mc.ItemStack("minecraft:netherite_boots"));
 * equipmentCompPlayer.setEquipment(mc.EquipmentSlot.mainhand, new mc.ItemStack("minecraft:wooden_sword"));
 * equipmentCompPlayer.setEquipment(mc.EquipmentSlot.offhand, new mc.ItemStack("minecraft:shield"));
 *
 * const equipmentCompArmorStand = armorStand.getComponent(
 *   "equipment_inventory"
 * ) as mc.EntityEquipmentInventoryComponent;
 * equipmentCompArmorStand.setEquipment(mc.EquipmentSlot.head, new mc.ItemStack("minecraft:golden_helmet"));
 * equipmentCompArmorStand.setEquipment(mc.EquipmentSlot.chest, new mc.ItemStack("minecraft:iron_chestplate"));
 * equipmentCompArmorStand.setEquipment(mc.EquipmentSlot.legs, new mc.ItemStack("minecraft:diamond_leggings"));
 * equipmentCompArmorStand.setEquipment(mc.EquipmentSlot.feet, new mc.ItemStack("minecraft:netherite_boots"));
 * equipmentCompArmorStand.setEquipment(mc.EquipmentSlot.mainhand, new mc.ItemStack("minecraft:wooden_sword"));
 * equipmentCompArmorStand.setEquipment(mc.EquipmentSlot.offhand, new mc.ItemStack("minecraft:shield"));
 * ```
 */
export class EntityEquipmentInventoryComponent {
    protected constructor();
    /**
     * Gets the equipped item for the given EquipmentSlot.
     * @param equipmentslot
     * The equipment slot. e.g. `head`, `chest`, `offhand`.
     * @returns
     * Returns the item equipped to the given EquipmentSlot. If empty,
     * returns `undefined`.
     */
    getEquipment(equipmentSlot: EquipmentSlot): ItemStack | undefined;
    /**
     * Gets the ContainerSlot corresponding to the given EquipmentSlot.
     * @param equipmentslot
     * The equipment slot. e.g. `head`, `chest`, `offhand`.
     * @returns
     * Returns the ContainerSlot corresponding to the given EquipmentSlot.
     */
    getEquipmentSlot(equipmentSlot: EquipmentSlot): ContainerSlot;
    /**
     * Replaces the item in the given EquipmentSlot.
     * @param equipmentslot
     * The equipment slot. e.g. `head`, `chest`, `offhand`.
     * @param itemStack
     * The item to equip. If `undefined`, clears the slot.
     */
    setEquipment(equipmentSlot: EquipmentSlot, itemStack?: ItemStack): void;
    static readonly componentId = "minecraft:equipment_inventory";
}

/**
 * When added, this component signifies that this entity doesn't take
 * damage from fire.
 */
export class EntityFireImmuneComponent extends EntityComponent {
    protected constructor();
    static readonly componentId = "minecraft:fire_immune";
}

/**
 * When added, this component signifies that this entity can float in
 * liquid blocks.
 */
export class EntityFloatsInLiquidComponent extends EntityComponent {
    protected constructor();
    static readonly componentId = "minecraft:floats_in_liquid";
}

/**
 * Represents the flying speed of an entity.
 */
export class EntityFlyingSpeedComponent extends EntityComponent {
    protected constructor();
    /**
     * Speed while flying value of the entity.
     */
    value: number;
    static readonly componentId = "minecraft:flying_speed";
}

/**
 * Defines how much friction affects this entity.
 */
export class EntityFrictionModifierComponent extends EntityComponent {
    protected constructor();
    /**
     * The higher the number, the more the friction affects this entity. A
     * value of 1.0 means regular friction, while 2.0 means twice as much.
     */
    value: number;
    static readonly componentId = "minecraft:friction_modifier";
}

/**
 * Sets the offset from the ground that the entity is actually at.
 */
export class EntityGroundOffsetComponent extends EntityComponent {
    protected constructor();
    /**
     * The value of the entity's offset from the terrain, in blocks.
     */
    value: number;
    static readonly componentId = "minecraft:ground_offset";
}

/**
 * Defines the interactions with this entity for healing it.
 */
export class EntityHealableComponent extends EntityComponent {
    protected constructor();
    /**
     * A set of filters for when these Healable items would apply.
     */
    readonly filters: FilterGroup;
    /**
     * Determines if an item can be used regardless of the entity being at
     * full health.
     */
    readonly forceUse: boolean;
    /**
     * A set of items that can specifically heal this entity.
     */
    getFeedItems(): FeedItem[];
    static readonly componentId = 'minecraft:healable';
}

/**
 * Defines the health properties of an entity.
 */
export class EntityHealthComponent extends EntityAttributeComponent {
    protected constructor();
    static readonly componentId = "minecraft:health";
}

/**
 * Defines this entity's inventory properties.
 */
export class EntityInventoryComponent extends EntityComponent {
    protected constructor();
    /**
     * Number of slots that this entity can gain per extra strength.
     */
    readonly additionalSlotsPerStrength: number;
    /**
     * If `true`, the contents of this inventory can be removed by a
     * hopper.
     */
    readonly canBeSiphonedFrom: boolean;
    /**
     * Defines the container for this entity.
     */
    readonly container: Container;
    /**
     * Type of container this entity has.
     */
    readonly containerType: string;
    /**
     * Number of slots the container has.
     */
    readonly inventorySize: number;
    /**
     * If true, the entity will not drop it's inventory on death.
     */
    readonly private: boolean;
    /**
     * If true, the entity's inventory can only be accessed by its owner or
     * itself.
     */
    readonly restrictToOwner: boolean;
    static readonly componentId = 'minecraft:inventory';
}

/**
 * When added, this component signifies that this entity is a baby.
 */
export class EntityIsBabyComponent extends EntityComponent {
    protected constructor();
    static readonly componentId = 'minecraft:is_baby';
}

/**
 * When added, this component signifies that this entity is charged.
 */
export class EntityIsChargedComponent extends EntityComponent {
    protected constructor();
    static readonly componentId = 'minecraft:is_charged';
}

/**
 * When added, this component signifies that this entity is currently
 * carrying a chest.
 */
export class EntityIsChestedComponent extends EntityComponent {
    protected constructor();
    static readonly componentId = 'minecraft:is_chested';
}

/**
 * When added, this component signifies that dyes can be used on this
 * entity to change its color.
 */
export class EntityIsDyableComponent extends EntityComponent {
    protected constructor();
    static readonly componentId = 'minecraft:is_dyeable';
}

/**
 * When added, this component signifies that this entity can hide from
 * hostile mobs while invisible.
 */
export class EntityIsHiddenWhenInvisibleComponent extends EntityComponent {
    protected constructor();
    static readonly componentId = 'minecraft:is_hidden_when_invisible';
}

/**
 * When added, this component signifies that this entity this currently on
 * fire.
 */
export class EntityIsIgnitedComponent extends EntityComponent {
    protected constructor();
    static readonly componentId = 'minecraft:is_ignited';
}

/**
 * When added, this component signifies that this entity is an illager
 * captain.
 */
export class EntityIsIllagerCaptainComponent extends EntityComponent {
    protected constructor();
    static readonly componentId = 'minecraft:is_illager_captain';
}

/**
 * When added, this component signifies that this entity is currently
 * saddled.
 */
export class EntityIsSaddledComponent extends EntityComponent {
    protected constructor();
    static readonly componentId = 'minecraft:is_saddled';
}

/**
 * When added, this component signifies that this entity is currently
 * shaking.
 */
export class EntityIsShakingComponent extends EntityComponent {
    protected constructor();
    static readonly componentId = 'minecraft:is_shaking';
}

/**
 * When added, this component signifies that this entity is currently
 * sheared.
 */
export class EntityIsShearedComponent extends EntityComponent {
    protected constructor();
    static readonly componentId = 'minecraft:is_sheared';
}

/**
 * When added, this component signifies that this entity can be stacked.
 */
export class EntityIsStackableComponent extends EntityComponent {
    protected constructor();
    static readonly componentId = 'minecraft:is_stackable';

}

/**
 * When added, this component signifies that this entity is currently
 * stunned.
 */
export class EntityIsStunnedComponent extends EntityComponent {
    protected constructor();
    static readonly componentId = 'minecraft:is_stunned';
}

/**
 * When added, this component signifies that this entity is currently
 * tamed.
 */
export class EntityIsTamedComponent extends EntityComponent {
    protected constructor();
    static readonly componentId = 'minecraft:is_tamed';
}

/**
 * If added onto the entity, this indicates that the entity represents a
 * free-floating item in the world. Lets you retrieve the actual item stack
 * contents via the `itemStack` property.
 * @example testThatEntityIsFeatherItem.ts
 * ```typescript
 * const overworld = mc.world.getDimension("overworld");
 *
 * const items = overworld.getEntities({
 *   location: targetLocation,
 *   maxDistance: 20,
 * });
 *
 * for (const item of items) {
 *   const itemComp = item.getComponent("item") as mc.EntityItemComponent;
 *
 *   if (itemComp) {
 *     if (itemComp.itemStack.typeId.endsWith("feather")) {
 *       log("Success! Found a feather", 1);
 *     }
 *   }
 * }
 * ```
 */
export class EntityItemComponent extends EntityComponent {
    protected constructor();
    /**
     * Item stack represented by this entity in the world.
     */
    readonly itemStack: ItemStack;
    static readonly componentId = 'minecraft:item';
}

/**
 * Defines the base movement speed in lava of this entity.
 */
export class EntityLavaMovementComponent extends EntityAttributeComponent {
    protected constructor();
    static readonly componentId = "minecraft:lava_movement";
}

/**
 * Allows this entity to be leashed and defines the conditions and events
 * for this entity when is leashed.
 */
export class EntityLeashableComponent extends EntityComponent {
    protected constructor();
    /**
     * Distance in blocks at which the "spring" effect starts acting to
     * keep this entity close to the entity that leashed it.
     */
    readonly softDistance: number;
    /**
     * Leashes this entity to another entity.
     * @param leashHolder
     * The entity to leash this entity to.
     */
    leash(leashHolder: Entity): void;
    /**
     * Unleashes this entity if it is leashed to another entity.
     */
    unleash(): void;
    static readonly componentId = 'minecraft:leashable';
}

/**
 * Additional variant value. Can be used to further differentiate variants.
 */
export class EntityMarkVariantComponent extends EntityComponent {
    protected constructor();
    /**
     * The identifier of the variant. By convention, 0 is the identifier of
     * the base entity.
     */
    value: number;
    static readonly componentId = 'minecraft:mark_variant';
}

/**
 * Contains options for taming a rideable entity based on the entity that
 * mounts it.
 */
export class EntityMountTamingComponent extends EntityComponent {
    protected constructor();
    /**
     * Sets this rideable entity as tamed.
     * @param showParticles
     * Whether to show effect particles when this entity is tamed.
     */
    setTamed(showParticles: boolean): void;
    static readonly componentId = 'minecraft:tamemount';
}

/**
 * When added, this movement control allows the mob to swim in water and
 * walk on land.
 */
export class EntityMovementAmphibiousComponent extends EntityBaseMovementComponent {
    protected constructor();
    static readonly componentId = 'minecraft:movement.amphibious';
}

/**
 * This component accents the movement of an entity.
 */
export class EntityMovementBasicComponent extends EntityBaseMovementComponent {
    protected constructor();
    static readonly componentId = 'minecraft:movement.basic';
}

/**
 * Defines the general movement speed of this entity.
 */
export class EntityMovementComponent extends EntityAttributeComponent {
    protected constructor();
    static readonly componentId = "minecraft:movement";
}

/**
 * When added, this move control causes the mob to fly.
 */
export class EntityMovementFlyComponent extends EntityBaseMovementComponent {
    protected constructor();
    static readonly componentId = "minecraft:movement.fly";
}

/**
 * When added, this move control allows a mob to fly, swim, climb, etc.
 */
export class EntityMovementGenericComponent extends EntityBaseMovementComponent {
    protected constructor();
    static readonly componentId = "minecraft:movement.generic";
}

/**
 * When added, this movement control allows the mob to glide.
 */
export class EntityMovementGlideComponent extends EntityBaseMovementComponent {
    protected constructor();
    /**
     * Speed in effect when the entity is turning.
     */
    readonly speedWhenTurning: number;
    /**
     * Start speed during a glide.
     */
    readonly startSpeed: number;
    static readonly componentId = "minecraft:movement.glide";
}

/**
 * When added, this move control causes the mob to hover.
 */
export class EntityMovementHoverComponent extends EntityBaseMovementComponent {
    protected constructor();
    static readonly componentId = "minecraft:movement.hover";
}

/**
 * Move control that causes the mob to jump as it moves with a specified
 * delay between jumps.
 */
export class EntityMovementJumpComponent extends EntityBaseMovementComponent {
    protected constructor();
    static readonly componentId = "minecraft:movement.jump";
}

/**
 * When added, this move control causes the mob to hop as it moves.
 */
export class EntityMovementSkipComponent extends EntityBaseMovementComponent {
    protected constructor();
    static readonly componentId = "minecraft:movement.skip";
}

/**
 * When added, this move control causes the mob to sway side to side giving
 * the impression it is swimming.
 */
export class EntityMovementSwayComponent extends EntityBaseMovementComponent {
    protected constructor();
    /**
     * Amplitude of the sway motion.
     */
    readonly swayAmplitude: number;
    /**
     * Amount of sway frequency.
     */
    readonly swayFrequency: number;
    static readonly componentId = "minecraft:movement.sway";
}

/**
 * Allows this entity to generate paths that include vertical walls (for
 * example, like Minecraft spiders do.)
 */
export class EntityNavigationClimbComponent extends EntityNavigationComponent {
    protected constructor();
    static readonly componentId = 'minecraft:navigation.climb';
}

/**
 * Allows this entity to generate paths that include vertical walls (for
 * example, like Minecraft spiders do.)
 */
export class EntityNavigationComponent extends EntityComponent {
    protected constructor();
    /**
     * Tells the pathfinder to avoid blocks that cause damage when finding
     * a path.
     */
    readonly avoidDamageBlocks: boolean;
    /**
     * Tells the pathfinder to avoid portals (like nether portals) when
     * finding a path.
     */
    readonly avoidPortals: boolean;
    /**
     * Whether or not the pathfinder should avoid tiles that are exposed to
     * the sun when creating paths.
     */
    readonly avoidSun: boolean;
    /**
     * Tells the pathfinder to avoid water when creating a path.
     */
    readonly avoidWater: boolean;
    /**
     * Tells the pathfinder whether or not it can jump out of water (like a
     * dolphin).
     */
    readonly canBreach: boolean;
    /**
     * Tells the pathfinder that it can path through a closed door and
     * break it.
     */
    readonly canBreakDoors: boolean;
    /**
     * Tells the pathfinder whether or not it can float.
     */
    readonly canFloat: boolean;
    /**
     * Tells the pathfinder whether or not it can jump up blocks.
     */
    readonly canJump: boolean;
    /**
     * Tells the pathfinder that it can path through a closed door assuming
     * the AI will open the door.
     */
    readonly canOpenDoors: boolean;
    /**
     * Tells the pathfinder that it can path through a closed iron door
     * assuming the AI will open the door.
     */
    readonly canOpenIronDoors: boolean;
    /**
     * Whether a path can be created through a door.
     */
    readonly canPassDoors: boolean;
    /**
     * Tells the pathfinder that it can start pathing when in the air.
     */
    readonly canPathFromAir: boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the surface of
     * the lava.
     */
    readonly canPathOverLava: boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the surface of
     * the water.
     */
    readonly canPathOverWater: boolean;
    /**
     * Tells the pathfinder whether or not it will be pulled down by
     * gravity while in water.
     */
    readonly canSink: boolean;
    /**
     * Tells the pathfinder whether or not it can path anywhere through
     * water and plays swimming animation along that path.
     */
    readonly canSwim: boolean;
    /**
     * Tells the pathfinder whether or not it can walk on the ground
     * outside water.
     */
    readonly canWalk: boolean;
    /**
     * Tells the pathfinder whether or not it can travel in lava like
     * walking on ground.
     */
    readonly canWalkInLava: boolean;
    /**
     * Tells the pathfinder whether or not it can walk on the ground or go
     * underwater.
     */
    readonly isAmphibious: boolean;
}

/**
 * Allows this entity to generate paths by flying around the air like the
 * regular Ghast.
 */
export class EntityNavigationFloatComponent extends EntityNavigationComponent {
    protected constructor();
    static readonly componentId = 'minecraft:navigation.float';
}

/**
 * Allows this entity to generate paths in the air (for example, like
 * Minecraft parrots do.)
 */
export class EntityNavigationFlyComponent extends EntityNavigationComponent {
    protected constructor();
    static readonly componentId = 'minecraft:navigation.fly';
}

/**
 * Allows this entity to generate paths by walking, swimming, flying and/or
 * climbing around and jumping up and down a block.
 */
export class EntityNavigationGenericComponent extends EntityNavigationComponent {
    protected constructor();
    static readonly componentId = 'minecraft:navigation.generic';
}

/**
 * Allows this entity to generate paths in the air (for example, like the
 * Minecraft Bees do.) Keeps them from falling out of the skies and doing
 * predictive movement.
 */
export class EntityNavigationHoverComponent extends EntityNavigationComponent {
    protected constructor();
    static readonly componentId = 'minecraft:navigation.hover';
}

/**
 * Allows this entity to generate paths by walking around and jumping up
 * and down a block like regular mobs.
 */
export class EntityNavigationWalkComponent extends EntityNavigationComponent {
    protected constructor();
    static readonly componentId = 'minecraft:navigation.walk';

}

/**
 * When present on an entity, this entity is on fire.
 */
export class EntityOnFireComponent extends EntityComponent {
    protected constructor();
    /**
     * The number of ticks remaining before the fire goes out.
     */
    readonly onFireTicksRemaining: number;
    static readonly componentId = "minecraft:onfire";
}

/**
 * Sets the distance through which the entity can push through.
 */
export class EntityPushThroughComponent extends EntityComponent {
    protected constructor();
    /**
     * The value of the entity's push-through, in blocks.
     */
    value: number;
    static readonly componentId = 'minecraft:push_through';
}

/**
 * When added, this component adds the capability that an entity can be
 * ridden by another entity.
 */
export class EntityRideableComponent extends EntityComponent {
    protected constructor();
    /**
     * Zero-based index of the seat that can used to control this entity.
     */
    readonly controllingSeat: number;
    /**
     * Determines whether interactions are not supported if the entity is
     * crouching.
     */
    readonly crouchingSkipInteract: boolean;
    /**
     * Set of text that should be displayed when a player is looking to
     * ride on this entity (commonly with touch-screen controls).
     */
    readonly interactText: string;
    /**
     * If true, this entity will pull in entities that are in the correct
     * family types into any available seat.
     */
    readonly pullInEntities: boolean;
    /**
     * If true, this entity will be picked when looked at by the rider.
     */
    readonly riderCanInteract: boolean;
    /**
     * Number of seats for riders defined for this entity.
     */
    readonly seatCount: number;
    /**
     * Adds an entity to this entity as a rider.
     * @param rider
     * Entity that will become the rider of this entity.
     * @returns
     * True if the rider entity was successfully added.
     */
    addRider(rider: Entity): boolean;
    /**
     * Ejects the specified rider of this entity.
     * @param rider
     * Entity that should be ejected from this entity.
     */
    ejectRider(rider: Entity): void;
    /**
     * Ejects all riders of this entity.
     */
    ejectRiders(): void;
    /**
     * A string-list of entity types that this entity can support as
     * riders.
     */
    getFamilyTypes(): string[];
    /**
     * Gets a list of the all the entities currently riding this entity.
     */
    getRiders(): Entity[];
    /**
     * Gets a list of positions and number of riders for each position for
     * entities riding this entity.
     */
    getSeats(): Seat[];
    static readonly componentId = "minecraft:rideable";
}

/**
 * This component is added to any entity when it is riding another entity.
 */
export class EntityRidingComponent extends EntityComponent {
    protected constructor();
    /**
     * The entity this entity is currently riding on.
     */
    readonly entityRidingOn: Entity;
    static readonly componentId = "minecraft:riding";
}

/**
 * Sets the entity's visual size.
 */
export class EntityScaleComponent extends EntityComponent {
    protected constructor();
    /**
     * The value of the scale. 1.0 means the entity will appear at the
     * scale they are defined in their model. Higher numbers make the
     * entity bigger.
     */
    value: number;
    static readonly componentId = 'minecraft:scale';
}

/**
 * Skin Id value. Can be used to differentiate skins, such as base skins
 * for villagers.
 */
export class EntitySkinIdComponent extends EntityComponent {
    protected constructor();
    /**
     * The identifier of the skin. By convention, 0 is the identifier of
     * the base skin.
     */
    value: number;
    static readonly componentId = 'minecraft:skin_id';
}

/**
 * Defines the entity's strength to carry items.
 */
export class EntityStrengthComponent extends EntityComponent {
    protected constructor();
    /**
     * Maximum strength of this entity, as defined in the entity type
     * definition.
     */
    readonly max: number;
    /**
     * Current strength value of this entity, after any effects or
     * component updates are applied.
     */
    readonly value: number;
    static readonly componentId = 'minecraft:strength';
}

/**
 * Defines the rules for a mob to be tamed by the player.
 */
export class EntityTameableComponent extends EntityComponent {
    protected constructor();
    /**
     * The chance of taming the entity with each item use between 0.0 and
     * 1.0, where 1.0 is 100%.
     */
    readonly probability: number;
    /**
     * Returns a set of items that can be used to tame this entity.
     */
    getTameItems(): string[];
    /**
     * Tames this entity.
     * @returns
     * Returns true if the entity was tamed.
     */
    tame(): boolean;
    static readonly componentId = 'minecraft:tameable';
}

/**
 * Defines the general movement speed underwater of this entity.
 */
export class EntityUnderwaterMovementComponent extends EntityAttributeComponent {
    protected constructor();
    static readonly componentId = "minecraft:underwater_movement";
}

/**
 * Used to differentiate the component group of a variant of an entity from
 * others. (e.g. ocelot, villager).
 */
export class EntityVariantComponent extends EntityComponent {
    protected constructor();
    /**
     * The identifier of the variant. By convention, 0 is the identifier of
     * the base entity.
     */
    readonly value: number;
    static readonly componentId = 'minecraft:variant';
}

/**
 * When added, this component signifies that this entity wants to become a
 * jockey.
 */
export class EntityWantsJockeyComponent extends EntityComponent {
    protected constructor();
    static readonly componentId = 'minecraft:wants_jockey';
}

/**
 * Base class for item components.
 */
export class ItemComponent extends Component {
    protected constructor();
}

/**
 * When present on an item, this item has a cooldown effect when used by
 * entities.
 */
export class ItemCooldownComponent extends ItemComponent {
    protected constructor();
    /**
     * Represents the cooldown category that this item is associated with.
     */
    readonly cooldownCategory: string;
    /**
     * Amount of time, in ticks, that remain for this item cooldown.
     */
    readonly cooldownTicks: number;
    /**
     * Starts a new cooldown period for this item.
     */
    startCooldown(player: Player): void;
    static readonly componentId = 'minecraft:cooldown';
}

/**
 * When present on an item, this item can take damage in the process of
 * being used. Note that this component only applies to data-driven items.
 */
export class ItemDurabilityComponent extends ItemComponent {
    protected constructor();
    /**
     * Returns the current damage level of this particular item.
     */
    damage: number;
    /**
     * Represents the amount of damage that this item can take before
     * breaking.
     */
    readonly maxDurability: number;
    /**
     * Returns the maximum chance that this item would be damaged using the
     * damageRange property, given an unbreaking level.
     * @param unbreaking
     * Unbreaking factor to consider in factoring the damage
     * chance. Incoming unbreaking parameter must be greater than 0.
     */
    getDamageChance(unbreaking?: number): number;
    /**
     * A range of numbers that describes the chance of the item losing
     * durability.
     */
    getDamageRange(): NumberRange;
    static readonly componentId = 'minecraft:durability';
}

/**
 * When present on an item, this item has applied enchantment effects. Note
 * that this component only applies to data-driven items.
 */
export class ItemEnchantsComponent extends ItemComponent {
    protected constructor();
    /**
     * Returns a collection of the enchantments applied to this item stack.
     */
    enchantments: EnchantmentList;
    /**
     * Removes all enchantments applied to this item stack.
     */
    removeAllEnchantments(): void;
    static readonly componentId = 'minecraft:enchantments';
}

/**
 * When present on an item, this item is consumable by entities. Note that
 * this component only applies to data-driven items.
 */
export class ItemFoodComponent extends ItemComponent {
    protected constructor();
    /**
     * If true, the player can always eat this item (even when not hungry).
     */
    readonly canAlwaysEat: boolean;
    /**
     * Represents how much nutrition this food item will give an entity
     * when eaten.
     */
    readonly nutrition: number;
    /**
     * When an item is eaten, this value is used according to this formula
     * (nutrition * saturation_modifier * 2) to apply a saturation buff.
     */
    readonly saturationModifier: number;
    /**
     * When specified, converts the active item to the one specified by
     * this property.
     */
    readonly usingConvertsTo: string;
    static readonly componentId = 'minecraft:food';
}
