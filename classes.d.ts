/// <reference path="./enums.d.ts" />
/// <reference path="./interfaces.d.ts" />

/**
 * Represents a block in a dimension. A block represents a unique X, Y, and
 * Z within a dimension and get/sets the state of the block at that
 * location.
 */
export class Block {
    protected constructor();
    /**
     * Returns the dimension that the block is within.
     */
    readonly dimension: Dimension;
    /**
     * Returns or sets whether this block has a liquid on it.
     */
    isWaterlogged: boolean;
    /**
     * Coordinates of the specified block.
     */
    readonly location: Vector3;
    /**
     * Additional block configuration data that describes the
     * block.
     */
    readonly permutation: BlockPermutation;
    /**
     * Gets the type of block.
     */
    readonly type: BlockType;
    /**
     * Identifier of the type of block for this block.
     */
    readonly typeId: string;
    /**
     * X coordinate of the block.
     */
    readonly x: number;
    /**
     * Y coordinate of the block.
     */
    readonly y: number;
    /**
     * Z coordinate of the block.
     */
    readonly z: number;
    /**
     * Checks to see whether it is valid to place the specified block type
     * or block permutation, on a specified face on this block.
     * @param blockToPlace
     * Block type or block permutation to check placement for.
     * @param faceToPlaceOn
     * Optional specific face of this block to check placement against.
     * @return
     * Returns `true` if the block type or permutation can be placed on
     * this block, else `false`.
     */
    canPlace(blockToPlace: BlockPermutation | BlockType, faceToPlaceOn?: Direction): boolean;
    /**
     * Gets additional configuration properties (a component) for
     * specific capabilities of particular blocks - for example, an
     * inventory component of a chest block.
     * @param componentName
     * Identifier of the component. If a namespace is not
     * specified, `minecraft:` is assumed.
     * @returns
     * Returns the component object if it is present on the
     * particular block.
     */
    getComponent(componentName: string): BlockComponent | undefined;
    /**
     * Creates a prototype item stack based on this block that can be used
     * with {@link @minecraft/server.Container}/{@link
     * @minecraft/server.ContainerSlot} APIs.
     * @param amount
     * Number of instances of this block to place in the item stack.
     * @param withData
     * Whether additional data facets of the item stack are included.
     */
    getItemStack(amount?: number, withData?: boolean): ItemStack;
    /**
     * Returns the net redstone power of this block.
     * @returns
     * `undefined` if redstone power is not applicable to this block.
     */
    getRedstonePower(): number | undefined;
    /**
     * Returns a set of tags for a block.
     */
    getTags(): string[];
    /**
     * Checks to see if the permutation of this block has a
     * specific tag.
     * @param tag
     * Tag to check for.
     * @returns
     * Returns `true` if the permutation of this block has the tag,
     * else `false`.
     * @example check_block_tags.js
     * ```typescript
     * import { world } from "minecraft/server";
     *
     * // Fetch the block
     * const block = world.getDimension("overworld").getBlock({x: 1, y: 2, z: 3});
     *
     * console.log(`Block is dirt: ${block.hasTag("dirt")}`);
     * console.log(`Block is wood: ${block.hasTag("wood")}`);
     * console.log(`Block is stone: ${block.hasTag("stone")}`);
     * ```
     */
    hasTag(tag: string): boolean;
    /**
     * Returns true if this block is an air block (i.e., empty space).
     */
    isAir(): boolean;
    /**
     * Returns true if this block is a liquid block - (e.g., a water block
     * and a lava black are liquid, while an air block and a stone block
     * are not).
     */
    isLiquid(): boolean;
    /**
     * Returns true if this block is solid and impassible - (e.g., a
     * cobblestone block and a diamond block are solid, while a ladder
     * block and a fence block are not).
     */
    isSolid(): boolean;
    /**
     * Returns true if this reference to a block is still valid (for
     * example, if the block is unloaded, references to that block will no
     * longer be valid.)
     */
    isValid(): boolean;
    /**
     * Sets the block in the dimension to the state of the
     * permutation.
     * @param permutation
     * Permutation that contains a set of property states for the
     * Block.
     */
    setPermutation(permutation: BlockPermutation): void;
    /**
     * Sets the type of block.
     * @param blockType
     * Identifier of the type of block to apply - for example,
     * `minecraft:powered_repeater`.
     */
    setType(blockType: BlockType): void;
    /**
     * Tries to set the block in the dimension to the state of the
     * permutation by first checking if the placement is valid.
     * @param permutation
     * Permutation that contains a set of property states for the Block.
     * @returns
     * `true` if the block permutation data was successfully set, else
     * `false`.
     */
    trySetPermutation(permutation: BlockPermutation): boolean;
}

/**
 * Holds information for expressing the net size of a volume of blocks.
 */
export class BlockAreaSize {
    /**
     * X size (west to east) component of this block area.
     */
    x: number;
    /**
     * Y size (down to up) of this block area size.
     */
    y: number;
    /**
     * Z size (south to north) of this block area size.
     */
    z: number;
    /**
     * Creates a new BlockAreaSize object.
     */
    constructor(x: number, y: number, z: number);
    /**
     * Tests whether this block area size is equal to another BlockAreaSize
     * object.
     */
    equals(other: BlockAreaSize): boolean;
}

/**
 * A BlockLocationIterator returns the next block location of the block
 * volume across which it is iterating.
 *
 * The BlockLocationIterator is used to abstract the shape of the block
 * volume it was fetched from (so it can represent all the block locations
 * that make up rectangles, cubes, spheres, lines and complex shapes).
 *
 * Each iteration pass returns the next valid block location in the parent
 * shape.
 *
 * Unless otherwise specified by the parent shape - the
 * BlockLocationIterator will iterate over a 3D space in the order of
 * increasing X, followed by increasing Z followed by increasing Y.
 *
 * (Effectively stepping across the XZ plane, and when all the locations in
 * that plane are exhausted, increasing the Y coordinate to the next XZ
 * slice)
 */
export class BlockLocationIterator implements IterableIterator<Vector3> {
    protected constructor();
    [Symbol.iterator](): Iterator<Vector3>;
    next(): IteratorResult<Vector3>;
}

/**
 * Contains the combination of type {@link @minecraft/server.BlockType} and
 * properties (also sometimes called block state) which describe a block
 * (but does not belong to a specific {@link @minecraft/server.Block}).
 * @example addBlockColorCube.ts
 * ```typescript
 * const allColorNames: string[] = [
 *   "white",
 *   "orange",
 *   "magenta",
 *   "light_blue",
 *   "yellow",
 *   "lime",
 *   "pink",
 *   "gray",
 *   "silver",
 *   "cyan",
 *   "purple",
 *   "blue",
 *   "brown",
 *   "green",
 *   "red",
 *   "black",
 * ];
 *
 * const cubeDim = 7;
 *
 * let colorIndex = 0;
 *
 * for (let x = 0; x <= cubeDim; x++) {
 *   for (let y = 0; y <= cubeDim; y++) {
 *     for (let z = 0; z <= cubeDim; z++) {
 *       colorIndex++;
 *       overworld
 *         .getBlock({ x: targetLocation.x + x, y: targetLocation.y + y, z: targetLocation.z + z })
 *         ?.setPermutation(
 *           mc.BlockPermutation.resolve("minecraft:wool", {
 *             color: allColorNames[colorIndex % allColorNames.length],
 *           })
 *         );
 *     }
 *   }
 * }
 * ```
 * @example addTranslatedSign.ts
 * ```typescript
 * const players = mc.world.getPlayers();
 *
 * const dim = players[0].dimension;
 *
 * const signBlock = dim.getBlock(targetLocation);
 *
 * if (!signBlock) {
 *   log("Could not find a block at specified location.");
 *   return -1;
 * }
 * let signPerm = mc.BlockPermutation.resolve("minecraft:standing_sign", { ground_sign_direction: 8 });
 *
 * signBlock.setPermutation(signPerm);
 *
 * const signComponent = signBlock.getComponent("minecraft:sign") as mc.BlockSignComponent;
 *
 * signComponent.setText({ translate: "item.skull.player.name", with: [players[0].name] });
 * ```
 */
export class BlockPermutation {
    protected constructor();
    /**
     * The {@link @minecraft/server.BlockType} that the permutation has.
     */
    readonly type: BlockType;
    /**
     * Creates a copy of this permutation.
     */
    clone(): BlockPermutation;
    /**
     * Returns all available block states associated with this block.
     */
    getAllStates(): Record<string, boolean | number | string>;
    /**
     * Retrieves a prototype item stack based on this block permutation
     * that can be used with item {@link
     * @minecraft/server.Container}/{@link @minecraft/ContainerSlot} APIs.
     * @param amount
     * Number of instances of this block to place in the prototype item stack.
     */
    getItemStack(amount?: number): ItemStack;
    /**
     * Gets a state for the permutation.
     * @returns
     * Returns the state if the permutation has it, else `undefined`.
     */
    getState(stateName: string): boolean | number | string | undefined;
    /**
     * Returns all tags associated with the block.
     */
    getTags(): string[];
    /**
     * Checks to see if the permutation has a specific tag.
     * @returns
     * Returns `true` if the permutation has the tag, else `false`.
     * @example check_block_tags.js
     * ```typescript
     *        import { world } from "mojang-minecraft";
     *
     *        // Fetch the block
     *        const block = world.getDimension("overworld").getBlock({x: 1, y: 2, z: 3});
     *        const blockPerm = block.getPermutation();
     *
     *        console.log(`Block is dirt: ${blockPerm.hasTag("dirt")}`);
     *        console.log(`Block is wood: ${blockPerm.hasTag("wood")}`);
     *        console.log(`Block is stone: ${blockPerm.hasTag("stone")}`);
     *
     * ```
     */
    hasTag(tag: string): boolean;
    /**
     * Returns a boolean whether a specified permutation matches this
     * permutation. If states is not specified, matches checks against the
     * set of types more broadly.
     */
    matches(blockName: string, states?: Record<string, boolean | number | string>): boolean;
    /**
     * Returns a derived BlockPermutation with a specific property set.
     */
    withState(name: string, value: boolean | number | string): BlockPermutation;
    /**
     * Given a type identifier and an optional set of properties, will
     * return a BlockPermutation object that is usable in other block APIs
     * (e.g., {@link @minecraft/server.Block.setPermutation}).
     */
    static resolve(blockName: string, states?: Record<string, boolean | number | string>): BlockPermutation;
}

/**
 * Enumerates all {@link @minecraft/server.BlockStateType}s.
 */
export class BlockStates {
    protected constructor();
    /**
     * Retrieves a specific block state instance.
     */
    static "get"(stateName: string): BlockStateType;
    /**
     * Retrieves a set of all available block states.
     */
    static getAll(): BlockStateType[];
}

/**
 * Represents a configurable state value of a block instance. For example,
 * the facing direction of stairs is accessible as a block state.
 */
export class BlockStateType {
    protected constructor();
    /**
     * Identifier of the block state.
     */
    readonly id: string;
    /**
     * A set of valid values for the block state.
     */
    readonly validValues: (boolean | number | string)[];
}

/**
 * The type (or template) of a block. Does not contain permutation data
 * (state) other than the type of block it represents. This type was
 * introduced as of version 1.17.10.21.
 */
export class BlockType {
    protected constructor();
    /**
     * Represents whether this type of block can be waterlogged.
     */
    readonly canBeWaterlogged: boolean;
    /**
     * Block type name - for example, `minecraft:acacia_stairs`.
     */
    readonly id: string;
}

/**
 * Block Volume Utils is a utility class that provides a number of useful
 * functions for the creation and utility of {@link
 * @minecraft/server.BlockVolume} objects.
 */
export class BlockVolumeUtils {
    protected constructor();
    /**
     * Check to see if the given location is directly adjacent to the outer
     * surface of a BlockVolume.
     * @param volume
     * The volume to test against
     * @param pos
     * The world block location to test
     * @returns
     * If the location is either inside or more than 0 blocks away, the
     * function will return `false`. If the location is directly contacting
     * the outer surface of the BlockVolume, the function will return
     * `true`. If the location is either inside or more than 0 blocks away,
     * the function will return `false`. If the location is directly
     * contacting the outer surface of the BlockVolume, the function will
     * return `true`.
     */
    static doesLocationTouchFaces(volume: BlockVolume, pos: Vector3): boolean;
    /**
     * Check to see if a two block volumes are directly adjacent and two
     * faces touch.
     * @param volume
     * The volume to test against
     * @param other
     * The volume to test
     * @returns
     * If the outer faces of both block volumes touch and are directly
     * adjacent at any point, return `true`.
     */
    static doesVolumeTouchFaces(volume: BlockVolume, other: BlockVolume): boolean;
    /**
     * Test the equality of two block volumes.
     * @returns
     * Return true if two block volumes are identical.
     */
    static equals(volume: BlockVolume, other: BlockVolume): boolean;
    /**
     * Fetch a {@link @minecraft/server.BlockLocationIterator} that
     * represents all of the block world locations within the specified
     * volume.
     */
    static getBlockLocationIterator(volume: BlockVolume): BlockLocationIterator;
    /**
     * Return a {@link @minecraft/server.BoundingBox} object which
     * represents the validated min and max coordinates of the volume.
     */
    static getBoundingBox(volume: BlockVolume): BoundingBox;
    /**
     * Return the capacity (volume) of the BlockVolume (WDH).
     */
    static getCapacity(volume: BlockVolume): number;
    /**
     * Get the largest corner position of the volume (guaranteed to be >=
     * min).
     */
    static getMax(volume: BlockVolume): Vector3;
    /**
     * Get the smallest corner position of the volume (guaranteed to be <=
     * max).
     */
    static getMin(volume: BlockVolume): Vector3;
    /**
     * Get a {@link @minecraft/server.Vector3} object where each component
     * represents the number of blocks along that axis.
     */
    static getSpan(volume: BlockVolume): Vector3;
    /**
     * Return an enumeration which represents the intersection between two
     * BlockVolume objects.
     */
    static intersects(volume: BlockVolume, other: BlockVolume): BlockVolumeIntersection;
    /**
     * Check to see if a given world block location is inside a
     * BlockVolume.
     */
    static isInside(volume: BlockVolume, pos: Vector3): boolean;
    /**
     * Move a BlockVolume by a specified amount.
     * @returns
     * Returns a new BlockVolume object which represents the new volume.
     */
    static translate(volume: BlockVolume, delta: Vector3): BlockVolume;
}

/**
 * Bounding Box Utils is a utility class that provides a number of useful
 * functions for the creation and utility of {@link
 * @minecraft/server.BoundingBox} objects.
 */
export class BoundingBoxUtils {
    protected constructor();
    /**
     * Create a validated instance of a {@link
     * @minecraft/server.BoundingBox} where the min and max components are
     * guaranteed to be (min <= max).
     * @param min
     * A corner world location.
     * @param max
     * A corner world location diametrically opposite
     */
    static createValid(min: Vector3, max: Vector3): BoundingBox;
    /**
     * Expand a {@link @minecraft/server.BoundingBox} by a given amount
     * along each axis.
     *
     * Sizes can be negative to perform contraction.
     *
     * Note: corners can be inverted if the contraction size is greater
     * than the span, but the min/max relationship will remain correct.
     * @returns
     * Return a new {@link @minecraft/server.BoundingBox} object
     * representing the changes.
     */
    static dilate(box: BoundingBox, size: Vector3): BoundingBox;
    /**
     * Check if two {@link @minecraft/server.BoundingBox} objects are identical.
     */
    static equals(box: BoundingBox, other: BoundingBox): boolean;
    /**
     * Expand the initial box object bounds to include the 2nd box
     * argument. The resultant {@link @minecraft/server.BoundingBox} object
     * will be a BoundingBox which exactly encompasses the two boxes.
     * @returns
     * A new {@link @minecraft/server.BoundingBox} instance representing
     * the smallest possible bounding box which can encompass both.
     */
    static expand(box: BoundingBox, other: BoundingBox): BoundingBox;
    /**
     * Calculate the center block of a given {@link
     * @minecraft/server.BoundingBox} object.
     *
     * Note that {@link @minecraft/server.BoundingBox} objects represent
     * whole blocks, so the center of boxes which have odd numbered bounds
     * are not mathematically centered, i.e. a BoundingBox( 0,0,0 -> 3,3,3
     * ) would have a center of (1,1,1) (not (1.5, 1.5, 1.5) as
     * expected).
     */
    static getCenter(box: BoundingBox): Vector3;
    /**
     * Calculate the BoundingBox which represents the union area of two
     * intersecting BoundingBoxes.
     */
    static getIntersection(box: BoundingBox, other: BoundingBox): BoundingBox | undefined;
    /**
     * Get the Span of each of the BoundingBox Axis components.
     */
    static getSpan(box: BoundingBox): Vector3;
    /**
     * Check to see if two BoundingBox objects intersect.
     */
    static intersects(box: BoundingBox, other: BoundingBox): boolean;
    /**
     * Check to see if a given coordinate is inside a BoundingBox.
     */
    static isInside(box: BoundingBox, pos: Vector3): boolean;
    /**
     * Check to see if a BoundingBox is valid (i.e. (min <= max)).
     */
    static isValid(box: BoundingBox): boolean;
    /**
     * Move a BoundingBox by a given amount.
     * @returns
     * Return a new BoundingBox object which represents the change.
     */
    static translate(box: BoundingBox, delta: Vector3): BoundingBox;
}

/**
 * Contains return data on the result of a command execution.
 */
export class CommandResult {
    protected constructor();
    /**
     * If the command operates against a number of entities, blocks, or
     * items, this returns the number of successful applications of this
     * command.
     */
    readonly successCount: number;
}

/**
 * The Compound Block Volume is a collection of individual block volume
 * definitions which, as a collection, define a larger volume of (sometimes
 * non-contiguous) irregular shapes.
 *
 * This class is loosely based on the concept of CSG (Computational Solid
 * Geometry) and allows a user to create complex volumes by building a
 * stack of volumes and voids to make a larger single volume.
 *
 * For example - normally a creator would create a hollow cube by creating
 * 6 "wall" surfaces for each face.
 *
 * With a Compound Block Volume, a creator can define a hollow cube by
 * creating a single outer solid cube, and then defining a further single
 * 'void' cube inside the larger one.
 *
 * Similarly, the Compound Block Volume can represent irregular shaped
 * volumes (e.g. a tree consists of a trunk and lots of leaf cubes which
 * are not necessarily contiguously placed)
 */
export class CompoundBlockVolume {
    /**
     * Return the 'capacity' of the bounding rectangle which represents the
     * collection of volumes in the stack.
     */
    readonly capacity: number;
    /**
     * Return the number of volumes (positive and negative) in the volume stack.
     */
    readonly volumeCount: number;
    /**
     * Create a CompoundBlockVolume object.
     */
    constructor();
    /**
     * Clear the contents of the volume stack.
     */
    clear(): void;
    /**
     * Fetch a Block Location Iterator for the Compound Block Volume. This
     * iterator will allow a creator to iterate across all of the selected
     * volumes within the larger bounding area.
     *
     * Areas of a volume which have been overridden by a subtractive volume
     * will not be included in the iterator step.
     *
     * (i.e. if you push a cube to the stack, and then push a subtractive
     * volume to the same location, then the iterator will step over the
     * initial volume because it is considered negative space).
     */
    getBlockLocationIterator(): BlockLocationIterator;
    /**
     * Get the largest bounding box that represents a container for all of
     * the volumes on the stack.
     */
    getBoundingBox(): BoundingBox;
    /**
     * Get the max block location of the outermost bounding rectangle which
     * represents the volumes on the stack.
     */
    getMax(): Vector3;
    /**
     * Get the min block location of the outermost bounding rectangle which
     * represents the volumes on the stack.
     */
    getMin(): Vector3;
    /**
     * Return a boolean representing whether or not a given block location
     * is inside a positive block volume.
     *
     * E.g. if the stack contains a large cube followed by a slightly
     * smaller negative cube, and the test location is within the negative
     * cube - the function will return false because it's not 'inside' a
     * volume (it IS inside the bounding rectangle, but it is not inside a
     * positively defined location).
    */
    isInside(delta: Vector3): boolean;
    /**
     * Inspect the last entry pushed to the volume stack without affecting
     * the stack contents.
     * @returns
     * Returns undefined if the stack is empty.
     */
    peekLastVolume(): CompoundBlockVolumeItem | undefined;
    /**
     * Remove the last entry from the volume stack. This will reduce the
     * stack size by one.
     */
    popVolume(): boolean;
    /**
     * Push a volume item to the stack. The volume item contains an
     * 'action' parameter which determines whether this volume is a
     * positive or negative space.
     */
    pushVolume(item: CompoundBlockVolumeItem): void;
    /**
     * If the volume stack is empty, this function will push the specified
     * item to the stack.
     *
     * If the volume stack is NOT empty, this function will replace the
     * last item on the stack with the new item.
     */
    replaceOrAddLastVolume(item: CompoundBlockVolumeItem): boolean;
    /**
     * Move the root block location of the volume by a given amount. This
     * effectively adds the specified delta to the block location of all of
     * the volumes in the stack
     */
    translate(delta: Vector3): void;
}

/**
 * Represents a container that can hold sets of items. Used with entities
 * such as Players, Chest Minecarts, Llamas, and more.
 */
export class Container {
    protected constructor();
    /**
     * Contains a count of the slots in the container that are empty.
     */
    readonly emptySlotsCount: number;
    /**
     * The number of slots in this container. For example, a standard
     * single-block chest has a size of 27. Note, a player's inventory
     * container contains a total of 36 slots, 9 hotbar slots plus 27
     * inventory slots.
     */
    readonly size: number;
    /**
     * Adds an item to the container. The item is placed in the first
     * available slot(s) and can be stacked with existing items of the same
     * type. Note, use {@link setItem} if you wish to set the item in a
     * particular slot.
     */
    addItem(itemStack: ItemStack): void;
    /**
     * Clears all inventory items in the container.
     */
    clearAll(): void;
    /**
     * Gets an @minecraft/server.ItemStack of the item at the specified
     * slot. If the slot is empty, returns `undefined`. This method does
     * not change or clear the contents of the specified slot. To get a
     * reference to a particular slot, see {@link getSlot}.
     * @throws
     * Throws if the container is invalid or if the `slot` index is out of
     * bounds.
     * @example getItem.ts
     * ```typescript
     * // Get a copy of the first item in the player's hotbar
     * const inventory = player.getComponent("inventory") as EntityInventoryComponent;
     * const itemStack = inventory.container.getItem(0);
     * ```
     */
    getItem(slot: number): ItemStack | undefined;
    /**
     * Returns a container slot. This acts as a reference to a slot at the
     * given index for this container.
     * @param slot
     * The index of the slot to return. This index must be within the
     * bounds of the container.
     * @throws
     * Throws if the container is invalid or if the `slot` index is out of
     * bounds.
     */
    getSlot(slot: number): ContainerSlot;
    /**
     * Returns whether a container object (or the entity or block that this
     * container is associated with) is still available for use in this
     * context.
     */
    isValid(): boolean;
    /**
     * Moves an item from one slot to another, potentially across
     * containers.
     * @param fromSlot
     * Zero-based index of the slot to transfer an item from, on this
     * container.
     * @param toSlot
     * Zero-based index of the slot to transfer an item to, on
     * `toContainer`.
     * @param toContainer
     * Target container to transfer to. Note this can be the same container
     * as the source.
     * @throws
     * Throws if either this container or `toContainer` are invalid or if the
     * `fromSlot` or `toSlot` indices out of bounds.
     *
     * @example moveItem.ts
     * ```typescript
     * // Move an item from the first slot of fromPlayer's inventory to the fifth slot of toPlayer's inventory
     * const fromInventory = fromPlayer.getComponent('inventory') as EntityInventoryComponent;
     * const toInventory = toPlayer.getComponent('inventory') as EntityInventoryComponent;
     * fromInventory.container.moveItem(0, 4, toInventory.container);
     * ```
     */
    moveItem(fromSlot: number, toSlot: number, toContainer: Container): void;
    /**
     * Sets an item stack within a particular slot.
     * @param slot
     * Zero-based index of the slot to set an item at.
     * @param itemStack
     * Stack of items to place within the specified slot. Setting itemStack
     * to `undefined` will clear the slot.
     */
    setItem(slot: number, itemStack?: ItemStack): void;
    /**
     * Swaps items between two different slots within containers.
     * @param slot
     * Zero-based index of the slot to swap from this container.
     * @param otherSlot
     * Zero-based index of the slot to swap with.
     * @param otherContainer
     * Target container to swap with. Note this can be the same
     * container as this source.
     * @throws
     * Throws if either this container or `otherContainer` are invalid or if
     * the `slot` or `otherSlot` are out of bounds.
     *
     * @example swapItems.ts
     * ```typescript
     * // Swaps an item between slots 0 and 4 in the player's inventory
     * const inventory = fromPlayer.getComponent('inventory') as EntityInventoryComponent;
     * inventory.container.swapItems(0, 4, inventory);
     * ```
     */
    swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean;
    /**
     * Moves an item from one slot to another, potentially across
     * containers.
     * @param fromSlot
     * Zero-based index of the slot to move from, on this container.
     * @param toContainer
     * Target container to transfer to. Note this can be the same
     * container as the source.
     *
     * @example transferItem.ts
     * ```typescript
     * // Transfer an item from the first slot of fromPlayer's inventory to toPlayer's inventory
     * const fromInventory = fromPlayer.getComponent('inventory') as EntityInventoryComponent;
     * const toInventory = toPlayer.getComponent('inventory') as EntityInventoryComponent;
     * fromInventory.container.transferItem(0, toInventory.container);
     * ```
     */
    transferItem(fromSlot: number, toContainer: Container): boolean;
}

/**
 * Represents a slot within a broader container (e.g., entity inventory.)
 */
export class ContainerSlot {
    protected constructor();
    /**
     * Number of the items in the stack. Valid values range between
     * 1-255. The provided value will be clamped to the item's maximum
     * stack size.
     * @throws
     * Throws if the value is outside the range of 1-255.
     */
    amount: number;
    /**
     * Returns whether the item is stackable. An item is considered
     * stackable if the item's maximum stack size is greater than 1 and the
     * item does not contain any custom data or properties.
     * @throws
     * Throws if the slot's container is invalid.
     */
    readonly isStackable: boolean;
    /**
     * Gets or sets whether the item is kept on death.
     * @throws
     * Throws if the slot's container is invalid.
     */
    keepOnDeath: boolean;
    /**
     * Gets or sets the item's lock mode. The default value is {@link
     * @minecraft/server.ItemLockMode.none}.
     * @throws
     * Throws if the slot's container is invalid.
     */
    lockMode: ItemLockMode;
    /**
     * The maximum stack size. This value varies depending on the type of
     * item. For example, torches have a maximum stack size of 64, while
     * eggs have a maximum stack size of 16.
     * @throws
     * Throws if the slot's container is invalid.
     */
    readonly maxAmount: number;
    /**
     * Given name of this stack of items. The name tag is displayed when
     * hovering over the item. Setting the name tag to an empty string or
     * `undefined` will remove the name tag.
     * @throws
     * Throws if the slot's container is invalid. Also throws if the length
     * exceeds 255 characters.
     */
    nameTag?: string;
    /**
     * The type of the item.
     * @throws
     * Throws if the slot's container is invalid.
     */
    readonly type: ItemType;
    /**
     * Identifier of the type of items for the stack. If a namespace is not
     * specified, `minecraft:` is assumed. Examples include `wheat` or
     * `apple`.
     * @throws
     * Throws if the slot's container is invalid.
     */
    readonly typeId?: string;
    /**
     * Creates an exact copy of the item stack, including any custom data
     * or properties.
     * @returns
     * Returns a copy of the item in the slot. Returns `undefined` if the
     * slot is empty.
     */
    getItem(): ItemStack | undefined;
    /**
     * Returns the lore value - a secondary display string - for an
     * ItemStack.
     * @returns
     * An array of lore strings. If the item does not have lore, returns an
     * empty array.
     * @throws
     * Throws if the slot's container is invalid.
     */
    getLore(): string[];
    /**
     * Returns all tags for the item in the slot.
     * @returns
     * Returns all tags for the item in the slot. Return an empty array if
     * the the slot is empty.
     */
    getTags(): string[];
    /**
     * Returns whether the item in the slot slot has the given tag.
     * @returns
     * Returns false when the slot is empty or the item in the slot does
     * not have the given tag.
     */
    hasTag(tag: string): boolean;
    /**
     * Returns whether this item stack can be stacked with the given
     * `itemStack`. This is determined by comparing the item type and any
     * custom data and properties associated with the item stacks. The
     * amount of each item stack is not taken into consideration.
     * @throws
     * Throws if the slot's container is invalid.
     */
    isStackableWith(itemStack: ItemStack): boolean;
    /**
     * Returns whether the ContainerSlot is valid. The container slot is
     * valid if the container exists and is loaded, and the slot index is
     * valid.
     */
    isValid(): boolean;
    /**
     * The list of block types this item can break in Adventure mode. The
     * block names are displayed in the item's tooltip. Setting the value
     * to `undefined` will clear the list.
     * @throws
     * Throws if the slot's container is invalid. Also throws if any of the
     * provided block identifiers are invalid.
     */
    setCanDestroy(blockIdentifiers?: string[]): void;
    /**
     * The list of block types this item can be placed on in Adventure
     * mode. This is only applicable to block items. The block names are
     * displayed in the item's tooltip. Setting the value to `undefined`
     * will clear the list.
     * @throws
     * Throws if the slot's container is invalid. Also throws if any of the
     * provided block identifiers are invalid.
     */
    setCanPlaceOn(blockIdentifiers?: string[]): void;
    /**
     * Sets the given ItemStack in the slot, replacing any existing item.
     */
    setItem(itemStack?: ItemStack): void;
    /**
     * Sets the lore value - a secondary display string - for an ItemStack.
     * @param loreList
     * A list of lore strings. Setting this argument to `undefined` will
     * clear the lore.
     * @throws
     * Throws if the slot's container is invalid.
     */
    setLore(loreList?: string[]): void;
}

/**
 * Contains a set of updates to the component definition state
 * of an entity.
 */
export class DefinitionModifier {
    /**
     * Constructor for a new DefinitionModifier.
     */
    constructor();
    /**
     * Retrieves the list of component groups that will be added via this
     * definition modification.
     */
    getComponentGroupsToAdd(): string[];
    /**
     * Retrieves the list of component groups that will be removed via this
     * definition modification.
     */
    getComponentGroupsToRemove(): string[];
    /**
     * Retrieves the list of entity definition events that will be fired
     * via this update.
     */
    getTriggers(): Trigger[];
    /**
     * Updates the list of component groups that will be added via this
     * definition modification.
     */
    setComponentGroupsToAdd(newGroups: string[]): void;
    /**
     * Updates the list of component groups that will be removed via this
     * definition modification.
     */
    setComponentGroupsToRemove(removedGroups: string[]): void;
    /**
     * Updates the list of entity definition events that will be fired via
     * this update.
     */
    setTriggers(newTriggers: Trigger[]): void;
}

/**
 * A class that represents a particular dimension (e.g., The End) within a
 * world.
 */
export class Dimension {
    protected constructor();
    /**
     * Identifier of the dimension.
     */
    readonly id: string;
    /**
     * Creates an explosion at the specified location.
     * @param location
     * The location of the explosion.
     * @param radius
     * Radius, in blocks, of the explosion to create.
     * @param explosionOptions
     * Additional configurable options for the explosion.
     * @example createExplosion.ts
     * ```typescript
     * overworld.createExplosion(targetLocation, 10, new mc.ExplosionOptions());
     * ```
     * @example createFireAndWaterExplosions.ts
     * ```typescript
     * const overworld = mc.world.getDimension("overworld");
     *
     * const explosionLoc = { x: targetLocation.x + 0.5, y: targetLocation.y + 0.5, z: targetLocation.z + 0.5};
     *
     * log("Creating an explosion of radius 15 that causes fire.");
     * overworld.createExplosion(explosionLoc, 15, { causesFire: true });
     *
     * const belowWaterLoc = { x: targetLocation.x + 3, y: targetLocation.y + 1,z: targetLocation.z + 3};
     *
     * log("Creating an explosion of radius 10 that can go underwater.");
     * overworld.createExplosion(belowWaterLoc, 10, { allowUnderwater: true });
     * ```
     * @example createNoBlockExplosion.ts
     * ```typescript
     * const overworld = mc.world.getDimension("overworld");
     *
     * const explodeNoBlocksLoc = {
     *   x: Math.floor(targetLocation.x + 1),
     *   y: Math.floor(targetLocation.y + 2),
     *   z: Math.floor(targetLocation.z + 1)
     * };
     *
     * log("Creating an explosion of radius 15 that does not break blocks.");
     * overworld.createExplosion(explodeNoBlocksLoc, 15, { breaksBlocks: false });
     * ```
     */
    createExplosion(location: Vector3, radius: number, explosionOptions: ExplosionOptions): void;
    /**
     * Fills an area between begin and end with block of type block.
     * @param begin
     * The lower northwest starting corner of the area.
     * @param end
     * The upper southeast ending corner of the area.
     * @param block
     * Type of block to fill the volume with.
     * @param options
     * A set of additional options, such as a matching block to potentially
     * replace this fill block with.
     * @returns
     * Returns number of blocks placed.
     */
    fillBlocks(begin: Vector3, end: Vector3, block: BlockPermutation | BlockType, options?: BlockFillOptions): number;
    /**
     * Returns a block instance at the given location. This method
     * was introduced as of version 1.17.10.21.
     * @param location
     * The location at which to return a block.
     * @returns
     * Block at the specified location, or `undefined` if asking for a
     * block at an unloaded chunk.
     */
    getBlock(location: Vector3): Block | undefined;
    /**
     * Gets the first block that intersects with a vector emanating
     * from a location.
     * @param location
     * Location from where to initiate the ray check.
     * @param direction
     * Vector direction to cast the ray.
     * @param options
     * Additional options for processing this raycast query.
     */
    getBlockFromRay(location: Vector3, direction: Vector3, options?: BlockRaycastOptions): Block;
    /**
     * Returns a set of entities based on a set of conditions defined via
     * the EntityQueryOptions set of filter criteria.
     * @param options
     * Additional options that can be used to filter the set of entities
     * returned.
     * @example bounceSkeletons.ts
     * ```typescript
     * let mobs = ["creeper", "skeleton", "sheep"];
     *
     * // create some sample mob data
     * for (let i = 0; i < 10; i++) {
     *   overworld.spawnEntity(mobs[i % mobs.length], targetLocation);
     * }
     *
     * let eqo: mc.EntityQueryOptions = {
     *   type: "skeleton",
     * };
     *
     * for (let entity of overworld.getEntities(eqo)) {
     *   entity.applyKnockback(0, 0, 0, 1);
     * }
     * ```
     * @example tagsQuery.ts
     * ```typescript
     * let mobs = ["creeper", "skeleton", "sheep"];
     *
     * // create some sample mob data
     * for (let i = 0; i < 10; i++) {
     *   let mobTypeId = mobs[i % mobs.length];
     *   let entity = overworld.spawnEntity(mobTypeId, targetLocation);
     *   entity.addTag("mobparty." + mobTypeId);
     * }
     *
     * let eqo: mc.EntityQueryOptions = {
     *   tags: ["mobparty.skeleton"],
     * };
     *
     * for (let entity of overworld.getEntities(eqo)) {
     *   entity.kill();
     * }
     * ```
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
    getEntities(options?: EntityQueryOptions): Entity[];
    /**
     * Returns a set of entities at a particular location.
     * @param location
     * The location at which to return entities.
     * @returns
     * Zero or more entities at the specified location.
     */
    getEntitiesAtBlockLocation(location: Vector3): Entity[];
    /**
     * Gets entities that intersect with a specified vector emanating from
     * a location.
     * @param options
     * Additional options for processing this raycast query.
     */
    getEntitiesFromRay(location: Vector3, direction: Vector3, options?: EntityRaycastOptions): Entity[];
    /**
     * Returns a set of players based on a set of conditions defined via
     * the EntityQueryOptions set of filter criteria.
     */
    getPlayers(options?: EntityQueryOptions): Player[];
    /**
     * Runs a particular command asynchronously from the context of the
     * broader dimension. Note that there is a maximum queue of 128
     * asynchronous commands that can be run in a given tick.
     * @param commandString
     * Command to run. Note that command strings should not start
     * with slash.
     * @returns
     * For commands that return data, returns a CommandResult with
     * an indicator of command results.
     * @throws
     * Throws an exception if the command fails due to incorrect parameters
     * or command syntax, or in erroneous cases for the command. Note that
     * in many cases, if the command does not operate (e.g., a target
     * selector found no matches), this method will not throw an exception.
     */
    runCommandAsync(commandString: string): Promise<CommandResult>;
    /**
     * Sets the current weather within the dimesion.
     */
    setWeather(weatherType: WeatherType): void;
    /**
     * Creates a new entity (e.g., a mob) at the specified location.
     * @param identifier
     * Identifier of the type of entity to spawn. If no namespace is
     * specified, `minecraft:` is assumed.
     * @param location
     * The location at which to create the entity.
     * @returns
     * Newly created entity at the specified location.
     * @example createOldHorse.ts
     * ```typescript
     * const overworld = mc.world.getDimension("overworld");
     *
     * log("Create a horse and triggering the 'ageable_grow_up' event, ensuring the horse is created as an adult");
     * overworld.spawnEntity("minecraft:horse<minecraft:ageable_grow_up>", targetLocation);
     * ```
     * @example quickFoxLazyDog.ts
     * ```typescript
     * const overworld = mc.world.getDimension("overworld");
     *
     * const fox = overworld.spawnEntity("minecraft:fox", {
     *   x: targetLocation.x + 1,
     *   y: targetLocation.y + 2,
     *   z: targetLocation.z + 3,
     * });
     *
     * fox.addEffect("speed", 10, {
     *   amplifier: 2,
     * });
     * log("Created a fox.");
     *
     * const wolf = overworld.spawnEntity("minecraft:wolf", {
     *   x: targetLocation.x + 4,
     *   y: targetLocation.y + 2,
     *   z: targetLocation.z + 3,
     * });
     * wolf.addEffect("slowness", 10, {
     *   amplifier: 2,
     * });
     * wolf.isSneaking = true;
     * log("Created a sneaking wolf.", 1);
     * ```
     * @example triggerEvent.ts
     * ```typescript
     * const creeper = overworld.spawnEntity("minecraft:creeper", targetLocation);
     *
     * creeper.triggerEvent("minecraft:start_exploding_forced");
     * ```
     */
    spawnEntity(identifier: string, location: Vector3): Entity;
    /**
     * Creates a new item stack as an entity at the specified location.
     * @param location
     * The location at which to create the item stack.
     * @returns
     * Newly created item stack entity at the specified location.
     * @example itemStacks.ts
     * ```typescript
     * const overworld = mc.world.getDimension("overworld");
     *
     * const oneItemLoc = { x: targetLocation.x + targetLocation.y + 3, y: 2, z: targetLocation.z + 1 };
     * const fiveItemsLoc = { x: targetLocation.x + 1, y: targetLocation.y + 2, z: targetLocation.z + 1 };
     * const diamondPickaxeLoc = { x: targetLocation.x + 2, y: targetLocation.y + 2, z: targetLocation.z + 4 };
     *
     * const oneEmerald = new mc.ItemStack(mc.MinecraftItemTypes.emerald, 1);
     * const onePickaxe = new mc.ItemStack(mc.MinecraftItemTypes.diamondPickaxe, 1);
     * const fiveEmeralds = new mc.ItemStack(mc.MinecraftItemTypes.emerald, 5);
     *
     * log(`Spawning an emerald at (${oneItemLoc.x}, ${oneItemLoc.y}, ${oneItemLoc.z})`);
     * overworld.spawnItem(oneEmerald, oneItemLoc);
     *
     * log(`Spawning five emeralds at (${fiveItemsLoc.x}, ${fiveItemsLoc.y}, ${fiveItemsLoc.z})`);
     * overworld.spawnItem(fiveEmeralds, fiveItemsLoc);
     *
     * log(`Spawning a diamond pickaxe at (${diamondPickaxeLoc.x}, ${diamondPickaxeLoc.y}, ${diamondPickaxeLoc.z})`);
     * overworld.spawnItem(onePickaxe, diamondPickaxeLoc);
     * ```
     * @example spawnItem.ts
     * ```typescript
     * const featherItem = new mc.ItemStack(mc.MinecraftItemTypes.feather, 1);
     *
     * overworld.spawnItem(featherItem, targetLocation);
     * log(`New feather created at ${targetLocation.x}, ${targetLocation.y}, ${targetLocation.z}!`);
     * ```
     */
    spawnItem(itemStack: ItemStack, location: Vector3): Entity;
    /**
     * Creates a new particle emitter at a specified location in the world.
     * @param effectName
     * Identifier of the particle to create.
     * @param location
     * The location at which to create the particle emitter.
     * @param molangVariables
     * A set of additional, customizable variables that can be adjusted for
     * this particle emitter.
     * @returns
     * Newly created entity at the specified location.
     * @example spawnParticle.ts
     * ```typescript
     * for (let i = 0; i < 100; i++) {
     *   const molang = new mc.MolangVariableMap();
     *
     *   molang.setColorRGB("variable.color", { red: Math.random(), green: Math.random(), blue: Math.random(), alpha: 1 });
     *
     *   let newLocation = {
     *     x: targetLocation.x + Math.floor(Math.random() * 8) - 4,
     *     y: targetLocation.y + Math.floor(Math.random() * 8) - 4,
     *     z: targetLocation.z + Math.floor(Math.random() * 8) - 4,
     *   };
     *   overworld.spawnParticle("minecraft:colored_flame_particle", newLocation, molang);
     * }
     * ```
     */
    spawnParticle(effectName: string, location: Vector3, molangVariables: MolangVariableMap): void;
}

/**
 * Class used in conjunction with {@link
 * @minecraft/server.PropertyRegistry} to define dynamic properties that
 * can be used on entities of a specified type or at the global World-
 * level.
 */
export class DynamicPropertiesDefinition {
    /**
     * Creates a new DynamicPropertiesDefinition for use within a
     * WorldInitialize event.
     */
    constructor();
    /**
     * Defines a new boolean dynamic property.
     */
    defineBoolean(identifier: string, defaultValue?: boolean): void;
    /**
     * Defines a new number dynamic property.
     */
    defineNumber(identifier: string, defaultValue?: number): void;
    /**
     * Defines a new string dynamic property.
     */
    defineString(identifier: string, maxLength: number, defaultValue?: string): void;
}

/**
 * Represents an effect - like poison - that has been added to an Entity.
 */
export class Effect {
    protected constructor();
    /**
     * Gets an amplifier that may have been applied to this effect.  Sample
     * values range typically from 0 to 4. Example: The effect 'Jump Boost
     * II' will have an amplifier value of 1.
     */
    readonly amplifier: number;
    /**
     * Gets the player-friendly name of this effect.
     */
    readonly displayName: string;
    /**
     * Gets the entire specified duration, in ticks, of this effect. There
     * are 20 ticks per second. Use {@link
     * @minecraft/server.TicksPerSecond} constant to convert between ticks
     * and seconds.
     */
    readonly duration: number;
    /**
     * Gets the type id of this effect.
     */
    readonly typeId: string;
    /**
     * Returns whether an effect instance is available for use in this
     * context.
     */
    isValid(): boolean;
}

/**
 * Represents a type of effect - like poison - that can be applied to an
 * entity.
 */
export class EffectType {
    protected constructor();
    /**
     * Identifier name of this effect type.
     */
    getName(): string;
}

/**
 * Represents a type of effect - like poison - that can be applied to an
 * entity.
 */
export class EffectTypes {
    /**
     * Effect type for the given identifier.
     * @returns
     * Effect type for the given identifier or `undefined` if the effect
     * does not exist.
     */
    static "get"(identifier: string): EffectType | undefined;
    /**
     * Gets all effects.
     */
    static getAll(): EffectType[];
}

/**
 * This class represents a specific leveled enchantment that is applied to
 * an item.
 */
export class Enchantment {
    /**
     * The level of this enchantment instance.
     */
    level: number;
    /**
     * The enchantment type of this instance.
     */
    readonly type: EnchantmentType;
    /**
     * Creates a new particular type of enchantment configuration.
     * @example diamondAwesomeSword.ts
     * ```typescript
     * const diamondAwesomeSword = new mc.ItemStack(mc.MinecraftItemTypes.diamondSword, 1);
     * let players = mc.world.getAllPlayers();
     *
     * diamondAwesomeSword.setLore(["§c§lDiamond Sword of Awesome§r", "+10 coolness", "§p+4 shiny§r"]);
     *
     * // hover over/select the item in your inventory to see the lore.
     * const inventory = players[0].getComponent("inventory") as mc.EntityInventoryComponent;
     * inventory.container.setItem(0, diamondAwesomeSword);
     *
     * let item = inventory.container.getItem(0);
     *
     * if (item) {
     *   let enchants = item.getComponent("minecraft:enchantments") as mc.ItemEnchantsComponent;
     *   let knockbackEnchant = new mc.Enchantment("knockback", 3);
     *   enchants.enchantments.addEnchantment(knockbackEnchant);
     * }
     * ```
     * @example ironFireSword.ts
     * ```typescript
     * const ironFireSword = new mc.ItemStack(mc.MinecraftItemTypes.diamondSword, 1);
     * let players = mc.world.getAllPlayers();
     *
     * let fireAspectEnchant = new mc.Enchantment("fire_aspect", 3);
     * let enchants = ironFireSword.getComponent("minecraft:enchantments") as mc.ItemEnchantsComponent;
     * let addedFire = enchants.enchantments.addEnchantment(fireAspectEnchant);
     *
     * if (!addedFire) {
     *   log("Could not add fire aspect.");
     *   return -1;
     * }
     *
     * const inventory = players[0].getComponent("inventory") as mc.EntityInventoryComponent;
     * inventory.container.setItem(0, ironFireSword);
     * ```
     */
    constructor(enchantmentType: EnchantmentType | string, level?: number);
}

/**
 * This class represents a collection of enchantments that can be applied
 * to an item.
 */
export class EnchantmentList implements IterableIterator<Enchantment> {
    /**
     * The item slot/type that this collection is applied to.
     */
    readonly slot: number;
    /**
     * Creates a new EnchantmentList.
     */
    constructor(enchantmentSlot: number);
    [Symbol.iterator](): Iterator<Enchantment>;
    /**
     * Attempts to add the enchantment to this collection. Returns `true`
     * if successful.
     */
    addEnchantment(enchantment: Enchantment): boolean;
    /**
     * Returns whether or not the provided EnchantmentInstance can be added
     * to this collection.
     */
    canAddEnchantment(enchantment: Enchantment): boolean;
    /**
     * Returns an enchantment associated with a type.
     */
    getEnchantment(enchantmentType: EnchantmentType | string): Enchantment;
    /**
     * If this collection has an EnchantmentInstance with type,
     * returns the level of the enchantment. Returns 0 if not
     * present.
     */
    hasEnchantment(enchantmentType: EnchantmentType | string): number;
    next(): IteratorResult<Enchantment>;
    /**
     * Removes an EnchantmentInstance with type from this collection if
     * present.
     */
    removeEnchantment(enchantmentType: EnchantmentType | string): void;
}

/**
 * This enum represents the item slot or type that an
 * enchantment can be applied to.
 */
// tslint:disable-next-line:no-unnecessary-class
export class EnchantmentSlot {
    protected constructor();
    static readonly all          = -1;
    static readonly armorFeet    = 4;
    static readonly armorHead    = 1;
    static readonly armorLegs    = 8;
    static readonly armorTorso   = 2;
    static readonly axe          = 512;
    static readonly bow          = 32;
    static readonly carrotStick  = 8192;
    static readonly cosmeticHead = 262144;
    static readonly crossbow     = 65536;
    static readonly elytra       = 16384;
    static readonly fishingRod   = 4096;
    static readonly flintsteel   = 256;
    static readonly gArmor       = 15;
    static readonly gDigging     = 3648;
    static readonly gTool        = 131520;
    static readonly hoe          = 64;
    static readonly none         = 0;
    static readonly pickaxe      = 1024;
    static readonly shears       = 128;
    static readonly shield       = 131072;
    static readonly shovel       = 2048;
    static readonly spear        = 32768;
    static readonly sword        = 16;
}

/**
 * Contains information on a type of enchantment.
 */
export class EnchantmentType {
    protected constructor();
    /**
     * The name of the enchantment type.
     */
    readonly id: string;
    /**
     * The maximum level this type of enchantment can have.
     */
    readonly maxLevel: number;
}

/**
 * Provides a list of enchantment types.
 */
export class EnchantmentTypes {
    protected constructor();
    /**
     * Retrieves an enchantment with the specified identifier.
     * @returns
     * If available, returns an EnchantmentType object that represents the
     * specified enchantment.
     */
    static "get"(enchantmentId: string): EnchantmentType | undefined;
}

/**
 * Represents the state of an entity (a mob, the player, or other moving
 * objects like minecarts) in the world.
 */
export class Entity {
    protected constructor();
    /**
     * Dimension that the entity is currently within.
     */
    readonly dimension: Dimension;
    /**
     * The distance an entity has fallen. The value is reset when the
     * entity is teleported. The value is always 1 when gliding with
     * Elytra.
     */
    readonly fallDistance: number;
    /**
     * Unique identifier of the entity. This identifier is intended to be
     * consistent across loads of a world instance. No meaning should be
     * inferred from the value and structure of this unique identifier - do
     * not parse or interpret it.
     */
    readonly id: string;
    /**
     * Whether the entity is touching a climbable block. For example, a
     * player next to a ladder or a spider next to a stone wall.
     */
    readonly isClimbing: boolean;
    /**
     * Whether the entity has a fall distance greater than 0, or greater
     * than 1 while gliding.
     */
    readonly isFalling: boolean;
    /**
     * Whether any part of the entity is inside a water block.
     */
    readonly isInWater: boolean;
    /**
     * Whether the entity is on top of a solid block.
     */
    readonly isOnGround: boolean;
    /**
     * Whether the entity is sneaking - that is, moving more slowly and
     * more quietly.
     */
    isSneaking: boolean;
    /**
     * Whether the entity is sprinting. For example, a player using the
     * sprint action, an ocelot running away or a pig boosting with Carrot
     * on a Stick.
     */
    readonly isSprinting: boolean;
    /**
     * Whether the entity is in the swimming state. For example, a player
     * using the swim action or a fish in water.
     */
    readonly isSwimming: boolean;
    /**
     * Whether the entity reference that you have is valid or not. For
     * example, an entity may be unloaded if it moves into a chunk that is
     * unloaded, but may be reactivated if the chunk it is within gets
     * reloaded.
     */
    readonly lifetimeState: EntityLifetimeState;
    /**
     * Current location of the entity.
     */
    readonly location: Vector3;
    /**
     * Given name of the entity.
     */
    nameTag: string;
    /**
     * Returns a scoreboard identity that represents this entity.
     */
    readonly scoreboardIdentity?: ScoreboardIdentity;
    /**
     * Retrieves or sets an entity that is used as the target of AI-related
     * behaviors, like attacking.
     */
    target: Entity;
    /**
     * Unique identifier of the type of the entity - for example,
     * 'minecraft:skeleton'.
     */
    readonly typeId: string;
    /**
     * Adds an effect, like poison, to the entity.
     * @param effectType
     * Type of effect to add to the entity.
     * @param duration
     * Amount of time, in ticks, for the effect to apply. There are 20
     * ticks per second. Use {@link @minecraft/server.TicksPerSecond}
     * constant to convert between ticks and seconds. The value must be
     * within the range [0, 20000000].
     * @param options
     * Additional options for the effect.
     * @example addEffect.js
     * ```typescript
     * const villagerId = 'minecraft:villager_v2<minecraft:ageable_grow_up>';
     * const villagerLoc: mc.Vector3 = { x: 1, y: 2, z: 1 };
     * const villager = test.spawn(villagerId, villagerLoc);
     * const duration = 20;
     *
     * villager.addEffect(EffectTypes.get('poison'), duration, { amplifier: 1 });
     * ```
     * @example quickFoxLazyDog.ts
     * ```typescript
     * const overworld = mc.world.getDimension("overworld");
     *
     * const fox = overworld.spawnEntity("minecraft:fox", {
     *   x: targetLocation.x + 1,
     *   y: targetLocation.y + 2,
     *   z: targetLocation.z + 3,
     * });
     *
     * fox.addEffect("speed", 10, {
     *   amplifier: 2,
     * });
     * log("Created a fox.");
     *
     * const wolf = overworld.spawnEntity("minecraft:wolf", {
     *   x: targetLocation.x + 4,
     *   y: targetLocation.y + 2,
     *   z: targetLocation.z + 3,
     * });
     * wolf.addEffect("slowness", 10, {
     *   amplifier: 2,
     * });
     * wolf.isSneaking = true;
     * log("Created a sneaking wolf.", 1);
     * ```
     */
    addEffect(effectType: EffectType | string, duration: number, options?: EntityEffectOptions): void;
    /**
     * Adds a specified tag to an entity.
     * @param tag
     * Content of the tag to add. The tag must be less than 256 characters.
     * @returns
     * Returns `true` if the tag was added successfully. This can fail if
     * the tag already exists on the entity.
     * @example tagsQuery.ts
     * ```typescript
     * let mobs = ["creeper", "skeleton", "sheep"];
     *
     * // create some sample mob data
     * for (let i = 0; i < 10; i++) {
     *   let mobTypeId = mobs[i % mobs.length];
     *   let entity = overworld.spawnEntity(mobTypeId, targetLocation);
     *   entity.addTag("mobparty." + mobTypeId);
     * }
     *
     * let eqo: mc.EntityQueryOptions = {
     *   tags: ["mobparty.skeleton"],
     * };
     *
     * for (let entity of overworld.getEntities(eqo)) {
     *   entity.kill();
     * }
     * ```
     */
    addTag(tag: string): boolean;
    /**
     * Applies a set of damage to an entity.
     * @param amount
     * Amount of damage to apply.
     * @param options
     * Additional options about the source of damage, which may add
     * additional effects or spur additional behaviors on this entity.
     * @returns
     * Whether the entity takes any damage. This can return `false` if the
     * entity is invulnerable or if the damage applied is less than or
     * equal to 0.
     * @example applyDamageThenHeal.ts
     * ```typescript
     * const skelly = overworld.spawnEntity("minecraft:skeleton", targetLocation);
     *
     * skelly.applyDamage(19); // skeletons have max damage of 20 so this is a near-death skeleton
     *
     * mc.system.runTimeout(() => {
     *   let health = skelly.getComponent("health") as mc.EntityHealthComponent;
     *   log("Skeleton health before heal: " + health.currentValue);
     *   health.resetToMaxValue();
     *   log("Skeleton health after heal: " + health.currentValue);
     * }, 20);
     * ```
     */
    applyDamage(amount: number, options?: EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions): boolean;
    /**
     * Applies impulse vector to the current velocity of the entity.
     * @example applyImpulse.ts
     * ```typescript
     * const zombie = overworld.spawnEntity("minecraft:zombie", targetLocation);
     *
     * zombie.clearVelocity();
     *
     * // throw the zombie up in the air
     * zombie.applyImpulse({ x: 0, y: 0.5, z: 0 });
     * ```
     */
    applyImpulse(vector: Vector3): void;
    /**
     * Applies impulse vector to the current velocity of the entity.
     * @param directionX
     * X direction in horizontal plane.
     * @param directionZ
     * Z direction in horizontal plane.
     * @param horizontalStrength
     * Knockback strength for the horizontal vector.
     * @param verticalStrength
     * Knockback strength for the vertical vector.
     * @example bounceSkeletons.ts
     * ```typescript
     * let mobs = ["creeper", "skeleton", "sheep"];
     *
     * // create some sample mob data
     * for (let i = 0; i < 10; i++) {
     *   overworld.spawnEntity(mobs[i % mobs.length], targetLocation);
     * }
     *
     * let eqo: mc.EntityQueryOptions = {
     *   type: "skeleton",
     * };
     *
     * for (let entity of overworld.getEntities(eqo)) {
     *   entity.applyKnockback(0, 0, 0, 1);
     * }
     * ```
     */
    applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void;
    /**
     * Sets the current velocity of the Entity to zero. Note that this
     * method may not have an impact on Players.
     */
    clearVelocity(): void;
    /**
     * Extinguishes the fire if the entity is on fire. Note that you can
     * call `getComponent("minecraft:onfire")` and, if present, the entity is
     * on fire.
     * @param useEffects
     * Whether to show any visual effects connected to the extinguishing.
     * @example setOnFire.ts
     * ```typescript
     * const skelly = overworld.spawnEntity("minecraft:skeleton", targetLocation);
     *
     * skelly.setOnFire(20, true);
     *
     * mc.system.runTimeout(() => {
     *   let onfire = skelly.getComponent("onfire") as mc.EntityOnFireComponent;
     *   log(onfire.onFireTicksRemaining + " fire ticks remaining.");
     *
     *   skelly.extinguishFire(true);
     *   log("Never mind. Fire extinguished.");
     * }, 20);
     * ```
     */
    extinguishFire(useEffects?: boolean): boolean;
    /**
     * Returns the first intersecting block from the direction that this
     * entity is looking at.
     * @param options
     * Additional options for processing this raycast query.
     */
    getBlockFromViewDirection(options?: BlockRaycastOptions): Block;
    /**
     * Gets a component (that represents additional capabilities) for an
     * entity.
     * @param componentId
     * The identifier of the component (e.g., `minecraft:rideable`) to
     * retrieve. If no namespace prefix is specified, `minecraft:` is
     * assumed. If the component is not present on the entity, `undefined`
     * is returned.
     */
    getComponent(componentId: string): EntityComponent | undefined;
    /**
     * Returns all components that are both present on this entity and
     * supported by the API.
     */
    getComponents(): EntityComponent[];
    /**
     * Returns a property value.
     * @returns
     * Returns the value for the property, or `undefined` if the property
     * has not been set.
     */
    getDynamicProperty(identifier: string): boolean | number | string | undefined;
    /**
     * Returns the effect for the specified EffectType on the entity,
     * `undefined` if the effect is not present, or throws an error if the
     * effect does not exist.
     */
    getEffect(effectType: EffectType | string): Effect | undefined;
    /**
     * Returns a set of effects applied to this entity.
     */
    getEffects(): Effect[];
    /**
     * Gets the entities that this entity is looking at by performing a ray
     * cast from the view of this entity.
     * @param options
     * Additional configuration options for the ray cast.
     * @returns
     * Returns a set of entities from the direction that this entity is
     * looking at.
     */
    getEntitiesFromViewDirection(options?: EntityRaycastOptions): Entity[];
    /**
     * Returns the current location of the head component of this entity.
     */
    getHeadLocation(): Vector3;
    /**
     * Returns the current rotation component of this entity.
     */
    getRotation(): Vector2;
    /**
     * Returns all tags associated with the entity.
     */
    getTags(): string[];
    /**
     * Returns the current velocity vector of the entity.
     * @example getFirewordVelocity.ts
     * ```typescript
     * const fireworkRocket = overworld.spawnEntity("minecraft:fireworks_rocket", targetLocation);
     *
     * mc.system.runTimeout(() => {
     *   let velocity = fireworkRocket.getVelocity();
     *
     *   log("Velocity of firework is: (x: " + velocity.x + ", y:" + velocity.y + ", z:" + velocity.z + ")");
     * }, 5);
     * ```
     */
    getVelocity(): Vector3;
    /**
     * Returns the current view direction of the entity.
     */
    getViewDirection(): Vector3;
    /**
     * Returns true if the specified component is present on this entity.
     * @param componentId
     * The identifier of the component (e.g., `minecraft:rideable`) to
     * retrieve. If no namespace prefix is specified, `minecraft:` is
     * assumed.
     */
    hasComponent(componentId: string): boolean;
    /**
     * Tests whether an entity has a particular tag.
     * @param tag
     * Identifier of the tag to test for.
     */
    hasTag(tag: string): boolean;
    /**
     * Kills this entity. The entity will drop loot as normal.
     * @returns
     * Returns `true` if entity can be killed (even if it is already dead),
     * otherwise it returns `false`.
     */
    kill(): boolean;
    /**
     * Plays the specified animation for an entity.
     * @param animationName
     * The animation identifier. e.g. `animation.creeper.swelling`.
     * @param options
     * Additional options to control the playback and transitions of the
     * animation.
     */
    playAnimation(animationName: string, options?: PlayAnimationOptions): void;
    /**
     * Removes a specified property.
     * @returns
     * Returns whether the given property existed on the entity.
     */
    removeDynamicProperty(identifier: string): boolean;
    /**
     * Removes the specified EffectType on the entity, or returns `false`
     * if the effect is not present.
     * @returns
     * Returns `true` if the effect has been removed. Returns `false` if
     * the effect is not found or does not exist.
     */
    removeEffect(effectType: EffectType | string): boolean;
    /**
     * Removes a specified tag from an entity.
     * @param tag
     * Content of the tag to remove.
     */
    removeTag(tag: string): boolean;
    /**
     * Runs a synchronous command on the entity.
     * @param commandString
     * The command string. Note: This should not include a leading forward
     * slash.
     * @returns
     * A command result containing whether the command was successful.
     */
    runCommand(commandString: string): CommandResult;
    /**
     * Runs a particular command asynchronously from the context of this
     * entity. Note that there is a maximum queue of 128 asynchronous
     * commands that can be run in a given tick.
     * @param commandString
     * Command to run. Note that command strings should not start
     * with slash.
     * @returns
     * For commands that return data, returns a JSON structure with
     * command response values.
     */
    runCommandAsync(commandString: string): Promise<CommandResult>;
    /**
     * Sets a specified property to a value.
     * @param value
     * Data value of the property to set.
     */
    setDynamicProperty(identifier: string, value: boolean | number | string): void;
    /**
     * Sets an entity on fire (if it is not in water or rain). Note that
     * you can call `getComponent('minecraft:onfire')` and, if present, the
     * entity is on fire.
     * @param seconds
     * Length of time to set the entity on fire.
     * @param useEffects
     * Whether side-effects should be applied (e.g. thawing freeze) and
     * other conditions such as rain or fire protection should be taken
     * into consideration.
     * @returns
     * Whether the entity was set on fire. This can fail if seconds is less
     * than or equal to zero, the entity is wet or the entity is immune to
     * fire.
     */
    setOnFire(seconds: number, useEffects?: boolean): boolean;
    /**
     * Sets the main rotation of the entity.
     * @param rotation
     * The x and y rotation of the entity. For most mobs, the x rotation
     * controls the head tilt and the y rotation controls the body
     * rotation.
     */
    setRotation(rotation: Vector2): void;
    /**
     * Teleports the selected entity to a new location
     * @param location
     * New location for the entity.
     * @param teleportOptions
     * Options regarding the teleport operation.
     * @example teleportMovement.ts
     * ```typescript
     * const pig = overworld.spawnEntity("minecraft:pig", targetLocation);
     *
     * let inc = 1;
     * let runId = mc.system.runInterval(() => {
     *   pig.teleport(
     *     { x: targetLocation.x + inc / 4, y: targetLocation.y + inc / 4, z: targetLocation.z + inc / 4 },
     *     {
     *       facingLocation: targetLocation,
     *     }
     *   );
     *
     *   if (inc > 100) {
     *     mc.system.clearRun(runId);
     *   }
     *   inc++;
     * }, 4);
     * ```
     */
    teleport(location: Vector3, teleportOptions?: TeleportOptions): void;
    /**
     * Triggers an entity type event. For every entity, a number of events
     * are defined in an entities' definition for key entity behaviors; for
     * example, creepers have a `minecraft:start_exploding` type event.
     * @param eventName
     * Name of the entity type event to trigger. If a namespace is not
     * specified, `minecraft:` is assumed.
     * @example triggerEvent.ts
     * ```typescript
     * const creeper = overworld.spawnEntity("minecraft:creeper", targetLocation);
     *
     * creeper.triggerEvent("minecraft:start_exploding_forced");
     * ```
     */
    triggerEvent(eventName: string): void;
    /**
     * Attempts to try a teleport, but may not complete the teleport
     * operation (for example, if there are blocks at the destination.)
     * @param location
     * Location to teleport the entity to.
     * @param teleportoptions
     * Options regarding the teleport operation.
     * @returns
     * Returns whether the teleport succeeded. This can fail if the
     * destination chunk is unloaded or if the teleport would result in
     * intersecting with blocks.
     */
    tryTeleport(location: Vector3, teleportOptions?: TeleportOptions): boolean;
}

/**
 * As part of the Ageable component, represents a set of items that can be
 * fed to an entity and the rate at which that causes them to grow.
 */
export class EntityDefinitionFeedItem {
    protected constructor();
    /**
     * The amount by which an entity's age will increase when fed this
     * item. Values usually range between 0 and 1.
     */
    readonly growth: number;
    /**
     * Identifier of type of item that can be fed. If a namespace
     * is not specified, `minecraft:` is assumed. Example values
     * include `wheat` or `golden_apple`.
     */
    readonly item: string;
}

/**
 * This type is usable for iterating over a set of entities.  This means it
 * can be used in statements like `for...of` statements,
 * `Array.from(iterator)`, and more.
 */
export class EntityIterator implements IterableIterator<Entity> {
    protected constructor();
    [Symbol.iterator](): Iterator<Entity>;
    /**
     * Retrieves the next item in this iteration. The resulting
     * IteratorResult contains `.done` and `.value` properties which can be
     * used to see the next Entity in the iteration.
     */
    next(): IteratorResult<Entity>;
}

/**
 * Represents information about a type of entity.
 */
export class EntityType {
    protected constructor();
    /**
     * Identifier of this entity type - for example, `minecraft:skeleton`.
     */
    readonly id: string;
}

/**
 * An iterator that loops through available entity types.
 */
export class EntityTypeIterator implements IterableIterator<EntityType> {
    protected constructor();
    [Symbol.iterator](): Iterator<EntityType>;
    next(): IteratorResult<EntityType>;
}

/**
 * Used for accessing all entity types currently available for use within
 * the world.
 */
export class EntityTypes {
    protected constructor();
    /**
     * Retrieves an entity type using a string-based identifier.
     */
    static "get"(identifier: string): EntityType;
    /**
     * Retrieves an iterator of all entity types within this world.
     */
    static getAll(): EntityTypeIterator;
}

/**
 * As part of the Healable component, represents a specific item that can
 * be fed to an entity to cause health effects.
 */
export class FeedItem {
    protected constructor();
    /**
     * The amount of health this entity gains when fed this item.  This
     * number is an integer starting at 0. Sample values can go as high as
     * 40.
     */
    readonly healAmount: number;
    /**
     * Identifier of type of item that can be fed. If a namespace is not
     * specified, `minecraft:` is assumed. Example values include `wheat`
     * or `golden_apple`.
     */
    readonly item: string;
    /**
     * As part of the Healable component, an optional collection of side
     * effects that can occur from being fed an item.
     */
    getEffects(): FeedItemEffect[];
}

/**
 * Represents an effect that is applied as a result of a food item being
 * fed to an entity.
 */
export class FeedItemEffect {
    protected constructor();
    /**
     * Gets an amplifier that may have been applied to this effect.  Valid
     * values are integers starting at 0 and up - but usually ranging
     * between 0 and 4.
     */
    readonly amplifier: number;
    /**
     * Chance that this effect is applied as a result of the entity being
     * fed this item. Valid values range between 0 and 1.
     */
    readonly chance: number;
    /**
     * Gets the duration, in ticks, of this effect.
     */
    readonly duration: number;
    /**
     * Gets the identifier of the effect to apply. Example values include
     * `fire_resistance` or `regeneration`.
     */
    readonly name: string;
}

/**
 * Represents a set of filters for when an event should occur.
 */
export class FilterGroup {
    protected constructor();
}

/**
 * Represents constants related to fluid containers.
 */
export class FluidContainer {
    protected constructor();
    /**
     * Constant that represents the maximum fill level of a fluid
     * container.
     */
    static readonly maxFillLevel = 6;
    /**
     * Constant that represents the minimum fill level of a fluid
     * container.
     */
    static readonly minFillLevel = 0;
}

/**
 * Defines a collection of items.
 *
 * @example itemStacks.ts
 * ```typescript
 * const oneItemLoc: mc.Vector3 = { x: 3, y: 2, z: 1 };
 * const fiveItemsLoc: mc.Vector3 = { x: 1, y: 2, z: 1 };
 * const diamondPickaxeLoc: mc.Vector3 = { x: 2, y: 2, z: 4 };
 * const oneEmerald = new mc.ItemStack(mc.MinecraftItemTypes.emerald, 1);
 * const onePickaxe = new mc.ItemStack(mc.MinecraftItemTypes.diamondPickaxe, 1);
 * const fiveEmeralds = new mc.ItemStack(mc.MinecraftItemTypes.emerald, 5);
 * overworld.spawnItem(oneEmerald, oneItemLoc);
 * overworld.spawnItem(fiveEmeralds, fiveItemsLoc);
 * overworld.spawnItem(onePickaxe, diamondPickaxeLoc);
 * ```
 *
 * @example spawnItems.ts
 * ```typescript
 * const featherItem = new mc.ItemStack(mc.MinecraftItemTypes.feather, 1);
 * overworld.spawnItem(featherItem, targetLocation);
 * log("New feather created!");
 * ```
 */
export class ItemStack {
    /**
     * Number of the items in the stack. Valid values range between
     * 1-255. The provided value will be clamped to the item's maximum
     * stack size.
     * @throws
     * Throws if the value is outside the range of 1-255.
     */
    amount: number;
    /**
     * Returns whether the item is stackable. An item is considered
     * stackable if the item's maximum stack size is greater than 1 and the
     * item does not contain any custom data or properties.
     */
    readonly isStackable: boolean;
    /**
     * Gets or sets whether the item is kept on death.
     */
    keepOnDeath: boolean;
    /**
     * Gets or sets the item's lock mode. The default value is {@link
     * @minecraft/server.ItemLockMode.none}.
     */
    lockMode: ItemLockMode;
    /**
     * The maximum stack size. This value varies depending on the type of
     * item. For example, torches have a maximum stack size of 64, while
     * eggs have a maximum stack size of 16.
     */
    readonly maxAmount: number;
    /**
     * Given name of this stack of items. The name tag is displayed when
     * hovering over the item. Setting the name tag to an empty string or
     * `undefined` will remove the name tag.
     * @throws
     * Throws if the length exceeds 255 characters.
     */
    nameTag?: string;
    /**
     * The type of the item.
     */
    readonly type: ItemType;
    /**
     * Identifier of the type of items for the stack. If a namespace is not
     * specified, `minecraft:` is assumed.  Examples include `wheat` or
     * `apple`.
     */
    readonly typeId: string;
    /**
     * Creates a new instance of a stack of items for use in the
     * world.
     * @param itemType
     * Type of item to create. See the {@link
     * @minecraft/server.MinecraftItemTypes} enumeration for a list of
     * standard item types in Minecraft experiences.
     * @param amount
     * Number of items to place in the stack, between 1-255. The provided
     * value will be clamped to the item's maximum stack size. Note that
     * certain items can only have one item in the stack.
     * @throws
     * Throws if itemType is invalid, or if amount is outside the range of
     * 1-255.
     */
    constructor(itemType: ItemType | string, amount?: number);
    /**
     * Creates an exact copy of the item stack, including any custom data
     * or properties.
     */
    clone(): ItemStack;
    /**
     * Gets a component (that represents additional capabilities) for an
     * item stack.
     * @param componentId
     * The identifier of the component (e.g., `minecraft:food`) to
     * retrieve. If no namespace prefix is specified, `minecraft:` is
     * assumed. If the component is not present on the item stack,
     * `undefined` is returned.
     * @example durability.ts
     * ```typescript
     * // Get the maximum durability of a custom sword item
     * const itemStack = new ItemStack("custom:sword");
     * const durability = itemStack.getComponent("minecraft:durability") as ItemDurabilityComponent;
     * const maxDurability = durability.maxDurability;
     * ```
     */
    getComponent(componentId: string): ItemComponent | undefined;
    /**
     * Returns all components that are both present on this item stack and
     * supported by the API.
     */
    getComponents(): ItemComponent[];
    /**
     * Returns the lore value - a secondary display string - for an
     * ItemStack.
     * @returns
     * An array of lore strings. If the item does not have lore, returns an empty array.
     */
    getLore(): string[];
    /**
     * Returns a set of tags associated with this item stack.
     */
    getTags(): string[];
    /**
     * Returns true if the specified component is present on this item
     * stack.
     * @param componentId
     * The identifier of the component (e.g., `minecraft:food`) to
     * retrieve. If no namespace prefix is specified, `minecraft:`
     * is assumed.
     */
    hasComponent(componentId: string): boolean;
    /**
     * Checks whether this item stack has a particular tag associated with
     * it.
     */
    hasTag(tag: string): boolean;
    /**
     * Returns whether this item stack can be stacked with the given
     * `itemStack`. This is determined by comparing the item type and any
     * custom data and properties associated with the item stacks. The
     * amount of each item stack is not taken into consideration.
     */
    isStackableWith(itemStack: ItemStack): boolean;
    /**
     * The list of block types this item can break in Adventure mode. The
     * block names are displayed in the item's tooltip. Setting the value
     * to `undefined` will clear the list.
     * @throws
     * Throws if any of the provided block identifiers are invalid.
     *
     * @example example.ts
     * ```typescript
     * // Creates a diamond pickaxe that can destroy cobblestone and obsidian
     * const specialPickaxe = new ItemStack("minecraft:diamond_pickaxe");
     * specialPickaxe.setCanDestroy(["minecraft:cobblestone", "minecraft:obsidian"]);
     * ```
     */
    setCanDestroy(blockIdentifiers?: string[]): void;
    /**
     * The list of block types this item can be placed on in Adventure
     * mode. This is only applicable to block items. The block names are
     * displayed in the item's tooltip. Setting the value to `undefined`
     * will clear the list.
     * @throws
     * Throws if any of the provided block identifiers are invalid.
     *
     * @example example.ts
     * ```typescript
     * // Creates a gold block that can be placed on grass and dirt
     * const specialGoldBlock = new ItemStack("minecraft:gold_block");
     * specialPickaxe.setCanPlaceOn(["minecraft:grass", "minecraft:dirt"]);
     * ```
     */
    setCanPlaceOn(blockIdentifiers?: string[]): void;
    /**
     * Sets the lore value - a secondary display string - for an ItemStack.
     * @example multilineLore.ts
     * ```typescript
     * // Set the lore of an item to multiple lines of text
     * const itemStack = new ItemStack("minecraft:diamond_sword");
     * itemStack.setLore(["Line 1", "Line 2", "Line 3"]);
     * ```
     */
    setLore(loreList?: string[]): void;
    /**
     * Triggers an item type event. For custom items, a number of events
     * are defined in an item's definition for key item behaviors.
     * @param eventName
     * Name of the item type event to trigger. If a namespace is not
     * specified, `minecraft:` is assumed.
     */
    triggerEvent(eventName: string): void;
}

/**
 * Represents the type of an item - for example, Wool.
 */
export class ItemType {
    protected constructor();
    /**
     * Returns the identifier of the item type - for example,
     * `minecraft:apple`.
     */
    readonly id: string;
}

/**
 * An iterator over a set of available item types.
 */
export class ItemTypeIterator implements IterableIterator<ItemType> {
    protected constructor();
    [Symbol.iterator](): Iterator<ItemType>;
    next(): IteratorResult<ItemType>;
}

/**
 * Returns the set of item types registered within Minecraft.
 */
export class ItemTypes {
    protected constructor();
    /**
     * Returns a specific item type, if available within Minecraft.
     */
    static "get"(itemId: string): ItemType;
    /**
     * Retrieves all available item types registered within Minecraft.
     */
    static getAll(): ItemTypeIterator;
}

/**
 * Contains definitions of vanilla Minecraft and Minecraft Education
 * Edition block types.
 */
export class MinecraftBlockTypes {
    protected constructor();
    /**
     * Returns a specific Minecraft block type given a type id.
     */
    static "get"(typeName: string): BlockType;
    /**
     * Returns an array of all block types within Minecraft.
     */
    static getAllBlockTypes(): BlockType[];

    // No, I'm not going to bloat the file by more than 3000 lines by
    // giving types to all the vanilla blocks. This is abysmal. It's
    // nothing but a torture against the compiler and .d.ts maintainers.
}

/**
 * A collection of vanilla Minecraft dimension types.
 */
export class MinecraftDimensionTypes {
    protected constructor();
    /**
     * The Nether is a collection of biomes separate from the Overworld,
     * including Soul Sand Valleys and Crimson forests.  Nether fortresses
     * contain exclusive resources. Mobs such as Blaze, Hoglins, Piglins,
     * and Ghasts congregate here.
     */
    static readonly nether = "minecraft:nether";
    /**
     * The overworld is a collection of biomes, including forests, plains,
     * jungles, mountains, deserts, taiga, and more. This is the default
     * starter dimension for Minecraft. Mobs such as Axolotl, Cows,
     * Creepers, and Zombies congregate here.
     */
    static readonly overworld = "minecraft:overworld";
    /**
     * The End is separate from the Overworld and the Nether and is
     * generated whenever you create an End portal. Here, a giant center
     * island is surrounded by several smaller areas and islands. You can
     * find Endermen here. End midlands are larger areas that transition
     * you from the center to the outer edges of the End. They contain
     * Shulkers, Endermen, End gateway portals, and End cities. End gateway
     * portals are commonly found at the outermost edge of the void. You
     * usually find End barrens toward the edges of the main areas or land
     * in the End.
     */
    static readonly theEnd = "minecraft:the_end";
}

/**
 * A collection of vanilla Minecraft entity types.
 */
export class MinecraftEntityTypes {
    protected constructor();

    // No, I'm not going to give types to all the vanilla entities. This is
    // abysmal. It's nothing but a torture against the compiler and .d.ts
    // maintainers.
}

/**
 * Contains definitions of vanilla Minecraft and Minecraft
 * Education Edition block types.
 */
export class MinecraftItemTypes {
    protected constructor();

    // No, I'm not going to bloat the file by more than 3000 lines by
    // giving types to all the vanilla items. This is abysmal. It's nothing
    // but a torture against the compiler and .d.ts maintainers.
}

/**
 * Contains a set of additional variable values for further defining how
 * rendering and animations function.
 */
export class MolangVariableMap {
    /**
     * Sets a Molang rendering/animation variable with the value of a
     * Red/Green/Blue color.
     */
    setColorRGB(variableName: string, color: Color): MolangVariableMap;
    /**
     * Sets a Molang rendering/animation variable with the value of a
     * Red/Green/Blue color + Alpha (transparency) value.
     */
    setColorRGBA(variableName: string, color: Color): MolangVariableMap;
    /**
     * Sets the speed and direction for a Molang (rendering and animation)
     * variable.
     */
    setSpeedAndDirection(variableName: string, speed: number, direction: Vector3): MolangVariableMap;
    /**
     * Sets a vector value for a Molang (rendering and animation)
     * variable.
     */
    setVector3(variableName: string, vector: Vector3): MolangVariableMap;
}

/**
 * Contains data resulting from a navigation operation, including whether
 * the navigation is possible and the path of navigation.
 */
export class NavigationResult {
    protected constructor();
    /**
     * Whether the navigation result contains a full path, including to the
     * requested destination.
     */
    readonly isFullPath: boolean;
    /**
     * A set of block locations that comprise the navigation route.
     */
    getPath(): Vector3[];
}

/**
 * Represents a player within the world.
 */
export class Player extends Entity {
    protected constructor();
    /**
     * Whether the player is flying. For example, in Creative or Spectator
     * mode.
     */
    readonly isFlying: boolean;
    /**
     * Whether the player is gliding with Elytra.
     */
    readonly isGliding: boolean;
    /**
     * Whether the player is jumping. This will remain true while the
     * player is holding the jump action.
     */
    readonly isJumping: boolean;
    /**
     * The current overall level for the player, based on their experience.
     */
    readonly level: number;
    /**
     * Name of the player.
     */
    readonly name: string;
    /**
     * Contains methods for manipulating the on-screen display of a Player.
     */
    readonly onScreenDisplay: ScreenDisplay;
    /**
     * Manages the selected slot in the player's hotbar.
     */
    selectedSlot: number;
    /**
     * The overall total set of experience needed to achieve the next level
     * for a player.
     */
    readonly totalXpNeededForNextLevel: number;
    /**
     * The current set of experience achieved for the player.
     */
    readonly xpEarnedAtCurrentLevel: number;
    /**
     * Adds/removes experience to/from the Player and returns the current
     * experience of the Player.
     * @param amount
     * Amount of experience to add. Note that this can be negative.
     */
    addExperience(amount: number): number;
    /**
     * Adds/removes level to/from the Player and returns the current level
     * of the Player.
     */
    addLevels(amount: number): number;
    /**
     * Gets the current item cooldown time for a particular cooldown
     * category.
     * @param itemCategory
     * Specifies the cooldown category to retrieve the current cooldown
     * for.
     */
    getItemCooldown(itemCategory: string): number;
    /**
     * Gets the current spawn point of the player.
     */
    getSpawnPoint(): DimensionLocation | undefined;
    /**
     * Gets the total experience of the Player.
     */
    getTotalXp(): number
    /**
     * Returns true if this player has operator-level permissions.
     */
    isOp(): boolean;
    /**
     * Plays a sound that only this particular player can hear.
     * @param soundID
     * Identifier of the sound to play.
     * @param soundOptions
     * Additional optional options for the sound.
     */
    playSound(soundID: string, soundOptions?: PlayerSoundOptions): void;
    /**
     * This is an internal-facing method for posting a system message to
     * downstream clients.
     */
    postClientMessage(id: string, value: string): void;
    /**
     * Resets the level of the player.
     */
    resetLevel(): void;
    /**
     * Sends a message to the player.
     * @param message
     * The message to be displayed.
     * @throws
     * This method can throw if the provided {@link
     * @minecraft/server.RawMessage} is in an invalid format. For example,
     * if an empty `name` string is provided to `score`.
     * @example nestedTranslation.ts
     * ```typescript
     * // Displays "Apple or Coal"
     * let rawMessage = {
     *   translate: "accessibility.list.or.two",
     *   with: { rawtext: [{ translate: "item.apple.name" }, { translate: "item.coal.name" }] },
     * };
     * player.sendMessage(rawMessage);
     * ```
     * @example scoreWildcard.ts
     * ```typescript
     * // Displays the player's score for objective "obj". Each player will see their own score.
     * const rawMessage = { score: { name: "*", objective: "obj" } };
     * world.sendMessage(rawMessage);
     * ```
     * @example simpleString.ts
     * ```typescript
     * // Displays "Hello, world!"
     * world.sendMessage("Hello, world!");
     * ```
     * @example translation.ts
     * ```
     * // Displays "First or Second"
     * const rawMessage = { translate: "accessibility.list.or.two", with: ["First", "Second"] };
     * player.sendMessage(rawMessage);
     * ```
     */
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * Will change the specified players permissions, and whether they are
     * operator or not.
     */
    setOp(isOp: boolean): void;
    /**
     * Sets the current starting spawn point for this particular player.
     */
    setSpawnPoint(spawnPoint?: DimensionLocation): void;
    /**
     * Sets the item cooldown time for a particular cooldown category.
     * @param itemCategory
     * Specifies the cooldown category to retrieve the current cooldown
     * for.
     * @param tickDuration
     * Duration in ticks of the item cooldown.
     */
    startItemCooldown(itemCategory: string, tickDuration: number): void;
}

/**
 * This type is usable for iterating over a set of players.  This means it
 * can be used in statements like `for...of` statements,
 * `Array.from(iterator)`, and more.
 */
export class PlayerIterator implements IterableIterator<Player> {
    protected constructor();
    [Symbol.iterator](): Iterator<Player>;
    /**
     * Retrieves the next item in this iteration. The resulting
     * IteratorResult contains `.done` and `.value` properties which can be
     * used to see the next Player in the iteration.
     */
    next(): IteratorResult<Player>;
}

/**
 * Provides methods that should be used within the World Initialize event
 * to register dynamic properties that can be used and stored within
 * Minecraft.
 */
export class PropertyRegistry {
    protected constructor();
    /**
     * Registers a dynamic property for a particular entity type (e.g., a
     * `minecraft:skeleton`).
     */
    registerEntityTypeDynamicProperties(
        propertiesDefinition: DynamicPropertiesDefinition,
        entityType: EntityType,
    ): void;
    /**
     * Registers a globally available dynamic property for a world.
     */
    registerWorldDynamicProperties(propertiesDefinition: DynamicPropertiesDefinition): void;
}

/**
 * Contains objectives and participants for the scoreboard.
 * @example updateScoreBoard.ts
 * ```typescript
 * const scoreboardObjectiveId = "scoreboard_demo_objective";
 * const scoreboardObjectiveDisplayName = "Demo Objective";
 *
 * let players = mc.world.getPlayers();
 *
 * // Ensure a new objective.
 * let objective = mc.world.scoreboard.getObjective(scoreboardObjectiveId);
 *
 * if (!objective) {
 *   objective = mc.world.scoreboard.addObjective(scoreboardObjectiveId, scoreboardObjectiveDisplayName);
 * }
 *
 * // get the scoreboard identity for player 0
 * let player0Identity = players[0].scoreboardIdentity;
 *
 * if (player0Identity === undefined) {
 *   log("Could not get a scoreboard identity for player 0.");
 *   return -1;
 * }
 *
 * // initialize player score to 100;
 * objective.setScore(player0Identity, 100);
 *
 * mc.world.scoreboard.setObjectiveAtDisplaySlot("sidebar", {
 *   objective: objective,
 *   sortOrder: mc.ObjectiveSortOrder.descending,
 * });
 *
 * const playerScore = objective.getScore(player0Identity) ?? 0;
 *
 * // score should now be 110.
 * objective.setScore(player0Identity, playerScore + 10);
 * ```
 */
export class Scoreboard {
    protected constructor();
    /**
     * Adds a new objective to the scoreboard.
     */
    addObjective(objectiveId: string, displayName: string): ScoreboardObjective;
    /**
     * Clears the objective that occupies a display slot.
     */
    clearObjectiveAtDisplaySlot(displaySlotId: string): ScoreboardObjective;
    /**
     * Returns a specific objective (by id).
     */
    getObjective(objectiveId: string): ScoreboardObjective;
    /**
     * Returns an objective that occupies the specified display
     * slot.
     */
    getObjectiveAtDisplaySlot(displaySlotId: string): ScoreboardObjectiveDisplayOptions;
    /**
     * Returns all defined objectives.
     */
    getObjectives(): ScoreboardObjective[];
    /**
     * Returns all defined scoreboard identities.
     */
    getParticipants(): ScoreboardIdentity[];
    /**
     * Removes an objective from the scoreboard.
     */
    removeObjective(objectiveId: ScoreboardObjective | string): boolean;
    /**
     * Sets an objective into a display slot with specified
     * additional display settings.
     */
    setObjectiveAtDisplaySlot(
        displaySlotId: string,
        objectiveDisplaySetting: ScoreboardObjectiveDisplayOptions,
    ): ScoreboardObjective;
}

/**
 * Contains an identity of the scoreboard item.
 */
export class ScoreboardIdentity {
    protected constructor();
    /**
     * Returns the player-visible name of this identity.
     */
    readonly displayName: string;
    /**
     * Identifier of the scoreboard identity.
     */
    readonly id: number;
    /**
     * Type of the scoreboard identity.
     */
    readonly type: ScoreboardIdentityType;
    /**
     * If the scoreboard identity is an entity or player, returns the
     * entity that this scoreboard item corresponds to.
     */
    getEntity(): Entity;
    /**
     * Returns whether the identity instance is available for use in this
     * context.
     */
    isValid(): boolean;
}

/**
 * Contains objectives and participants for the scoreboard.
 */
export class ScoreboardObjective {
    protected constructor();
    /**
     * Returns the player-visible name of this scoreboard objective.
     */
    readonly displayName: string;
    /**
     * Identifier of the scoreboard objective.
     */
    readonly id: string;
    /**
     * Returns all objective participant identities.
     */
    getParticipants(): ScoreboardIdentity[];
    /**
     * Returns a specific score for a participant.
     */
    getScore(participant: Entity | ScoreboardIdentity | string): number | undefined;
    /**
     * Returns specific scores for this objective for all participants.
     */
    getScores(): ScoreboardScoreInfo[];
    /**
     * Returns if the specified identity is a participant of the scoreboard objective.
     */
    hasParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    /**
     * Returns whether the objective instance is available for use in this
     * context.
     */
    isValid(): boolean;
    /**
     * Removes a participant from this scoreboard objective.
     * @param participant
     * Participant to remove from being tracked with this objective.
     */
    removeParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    /**
     * Sets a score for a participant.
     * @param participant
     * Identity of the participant.
     * @param score
     * New value of the score.
     */
    setScore(participant: Entity | ScoreboardIdentity | string, score: number): void;
}

/**
 * Contains a pair of a scoreboard participant and its respective score.
 */
export class ScoreboardScoreInfo {
    protected constructor();
    /**
     * This scoreboard participant for this score.
     */
    readonly participant: ScoreboardIdentity;
    /**
     * Score value of the identity for this objective.
     */
    readonly score: number;
}

/**
 * Contains information about user interface elements that are showing up
 * on the screen.
 */
export class ScreenDisplay {
    protected constructor();
    /**
     * Returns true if the current reference to this screen display manager
     * object is valid and functional.
     */
    isValid(): boolean;
    /**
     * Set the action bar text - a piece of text that displays beneath the
     * title and above the hot-bar.
     */
    setActionBar(text: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * Will cause a title to show up on the player's on screen
     * display. Will clear the title if set to empty string. You can
     * optionally specify an additional subtitle as well as fade in, stay
     * and fade out times.
     * @example countDown.ts
     * ```typescript
     * let players = mc.world.getPlayers();
     *
     * players[0].onScreenDisplay.setTitle("Get ready!", {
     *   stayDuration: 220,
     *   fadeInDuration: 2,
     *   fadeOutDuration: 4,
     *   subtitle: "10",
     * });
     *
     * let countdown = 10;
     *
     * let intervalId = mc.system.runInterval(() => {
     *   countdown--;
     *   players[0].onScreenDisplay.updateSubtitle(countdown.toString());
     *
     *   if (countdown == 0) {
     *     mc.system.clearRun(intervalId);
     *   }
     * }, 20);
     * ```
     * @example setTitle.ts
     * ```typescript
     * let players = mc.world.getPlayers();
     *
     * players[0].onScreenDisplay.setTitle("§o§6Fancy Title§r");
     * ```
     * @example setTitleAndSubtitle.ts
     * ```typescript
     * let players = mc.world.getPlayers();
     *
     * players[0].onScreenDisplay.setTitle("Chapter 1", {
     *   stayDuration: 100,
     *   fadeInDuration: 2,
     *   fadeOutDuration: 4,
     *   subtitle: "Trouble in Block Town",
     * });
     * ``
     */
    setTitle(title: (RawMessage | string)[] | RawMessage | string, options?: TitleDisplayOptions): void;
    /**
     * Updates the subtitle if the subtitle was previously displayed via
     * the setTitle method.
     */
    updateSubtitle(subtitle: (RawMessage | string)[] | RawMessage | string): void;
}

/**
 * Describes a particular seating position on this rideable entity.
 */
export class Seat {
    protected constructor();
    /**
     * If specified, contains a forced rotation that the riders in this
     * seat are facing.
     */
    readonly lockRiderRotation: number;
    /**
     * A maximum number of riders that this seat can support.
     */
    readonly maxRiderCount: number;
    /**
     * A minimum number of riders that can be placed in this seat position,
     * if this seat is to be filled.
     */
    readonly minRiderCount: number;
    /**
     * Physical location of this seat, relative to the entity's location.
     */
    readonly position: Vector3;
}

/**
 * A class that provides system-level events and functions.
 */
export class System {
    protected constructor();
    /**
     * Returns a collection of after-events for system-level operations.
     */
    readonly afterEvents: SystemAfterEvents;
    /**
     * Returns a collection of before-events for system-level operations.
     */
    readonly beforeEvents: SystemBeforeEvents;
    /**
     * Represents the current world tick of the server.
     */
    readonly currentTick: number;
    /**
     * Cancels the execution of a function run that was previously
     * scheduled via the {@link @minecraft/server.System.run} function.
     */
    clearRun(runId: number): void;
    /**
     * Runs a specified function at a future time. This is frequently used
     * to implement delayed behaviors and game loops.
     * @param callback
     * Function callback to run when the tickDelay time criteria is met.
     * @returns
     * An opaque identifier that can be used with the {@link
     * @minecraft/server.System.clearRun} function to cancel the execution
     * of this run.
     */
    run(callback: () => void): number;
    /**
     * Runs a set of code on an interval.
     * @param callback
     * Functional code that will run when this interval occurs.
     * @param tickInterval
     * An interval of every N ticks that the callback will be called upon.
     * @returns
     * An opaque handle that can be used with the {@link
     * @minecraft/server.System.clearRun} function to stop the run of this
     * function on an interval.
     */
    runInterval(callback: () => void, tickInterval?: number): number;
    /**
     * Runs a set of code at a future time specified by tickDelay.
     * @param callback
     * Functional code that will run when this timeout occurs.
     * @param tickDelay
     * Amount of time, in ticks, before the interval will be called.
     * @returns
     * An opaque handle that can be used with the {@link
     * @minecraft/server.System.clearRun} function to stop the run of this
     * function on an interval.
     */
    runTimeout(callback: () => void, tickDelay?: number): number;
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
 * Represents a trigger for firing an event.
 */
export class Trigger {
    /**
     * Creates a new trigger.
     */
    constructor(eventName: string);
    /**
     * Event name of the trigger.
     */
    eventName: string;
}

/**
 * Contains a description of a vector.
 */
export class Vector {
    /**
     * X component of this vector.
     */
    x: number;
    /**
     * Y component of this vector.
     */
    y: number;
    /**
     * Z component of this vector.
     */
    z: number;
    /**
     * Creates a new instance of an abstract vector.
     */
    constructor(x: number, y: number, z: number);
    /**
     * Compares this vector and another vector to one another.
     * @param other
     * Other vector to compare this vector to.
     * @returns
     * True if the two vectors are equal.
     */
    equals(other: Vector): boolean;
    /**
     * Returns the length of this vector.
     */
    length(): number;
    /**
     * Returns the squared length of this vector.
     */
    lengthSquared(): number;
    /**
     * Returns this vector as a normalized vector.
     */
    normalized(): Vector;
    /**
     * Returns the addition of these vectors.
     */
    static add(a: Vector3, b: Vector3): Vector;
    /**
     * Returns the cross product of these two vectors.
     */
    static cross(a: Vector3, b: Vector3): Vector;
    /**
     * Returns the distance between two vectors.
     */
    static distance(a: Vector3, b: Vector3): number;
    /**
     * Returns the component-wise division of these vectors.
     */
    static divide(a: Vector3, b: number | Vector3): Vector;
    /**
     * Returns the linear interpolation between a and b using t as
     * the control.
     */
    static lerp(a: Vector3, b: Vector3, t: number): Vector;
    /**
     * Returns a vector that is made from the largest components of two
     * vectors.
     */
    static max(a: Vector3, b: Vector3): Vector;
    /**
     * Returns a vector that is made from the smallest components of two
     * vectors.
     */
    static min(a: Vector3, b: Vector3): Vector;
    /**
     * Returns the component-wise product of these vectors.
     */
    static multiply(a: Vector3, b: number | Vector3): Vector;
    /**
     * Returns the spherical linear interpolation between a and b
     * using s as the control.
     */
    static slerp(a: Vector3, b: Vector3, s: number): Vector;
    /**
     * Returns the subtraction of these vectors.
     */
    static subtract(a: Vector3, b: Vector3): Vector;
    /**
     * A constant vector that represents (0, 0, -1).
     */
    static readonly back: Vector;
    /**
     * A constant vector that represents (0, -1, 0).
     */
    static readonly down: Vector;
    /**
     * A constant vector that represents (0, 0, 1).
     */
    static readonly forward: Vector;
    /**
     * A constant vector that represents (-1, 0, 0).
     */
    static readonly left: Vector;
    /**
     * A constant vector that represents (1, 1, 1).
     */
    static readonly one: Vector;
    /**
     * A constant vector that represents (1, 0, 0).
     */
    static readonly right: Vector;
    /**
     * A constant vector that represents (0, 1, 0).
     */
    static readonly up: Vector;
    /**
     * A constant vector that represents (0, 0, 0).
     */
    static readonly zero: Vector;
}

/**
 * A class that wraps the state of a world - a set of dimensions and the
 * environment of Minecraft.
 */
export class World {
    protected constructor();
    /**
     * Contains a set of events that are applicable to the entirety of the
     * world. Event callbacks are called in a deferred manner. Event
     * callbacks are executed in read-write mode.
     */
    readonly afterEvents: WorldAfterEvents;
    /**
     * Contains a set of events that are applicable to the entirety of the
     * world. Event callbacks are called immediately. Event callbacks are
     * executed in read-only mode.
     */
    readonly beforeEvents: WorldBeforeEvents;
    /**
     * Returns the general global scoreboard that applies to the world.
     */
    readonly scoreboard: Scoreboard;
    /**
     * A method that is internal-only, used for broadcasting specific
     * messages between client and server.
     */
    broadcastClientMessage(id: string, value: string): void;
    /**
     * Returns the absolute time since the start of the world.
     */
    getAbsoluteTime(): number;
    /**
     * Returns an array of all active players within the world.
     */
    getAllPlayers(): Player[];
    /**
     * Returns the default spawn position within the world where players
     * are spawned if they don't have a specific spawn position set.
     */
    getDefaultSpawnPosition(): Vector3;
    /**
     * @returns
     * The requested dimension
     * @throws
     * Throws if the given dimension name is invalid
     */
    getDimension(dimensionId: string): Dimension;
    /**
     * Returns a property value.
     * @returns
     * Returns the value for the property, or `undefined` if the property
     * has not been set.
     */
    getDynamicProperty(identifier: string): boolean | number | string | undefined;
    /**
     * Returns an entity based on the provided id.
     * @throws
     * Throws if the given entity id is invalid.
     */
    getEntity(id: string): Entity | undefined;
    /**
     * Returns all players currently in the world.
     * @returns
     * All players currently in the world.
     */
    getPlayers(options?: EntityQueryOptions): Player[];
    /**
     * Returns the current game time of the day.
     */
    getTime(): number;
    /**
     * Plays a particular music track for all players.
     * @throws
     * An error will be thrown if volume is less than 0.0. An error will be
     * thrown if fade is less than 0.0. An error will be thrown if pitch is
     * less than 0.01. An error will be thrown if volume is less than 0.0.
     * @example playMusicAndSound.ts
     * ```typescript
     * let players = mc.world.getPlayers();
     *
     * const musicOptions: mc.MusicOptions = {
     *   fade: 0.5,
     *   loop: true,
     *   volume: 1.0,
     * };
     * mc.world.playMusic("music.menu", musicOptions);
     *
     * const worldSoundOptions: mc.WorldSoundOptions = {
     *   pitch: 0.5,
     *   volume: 4.0,
     * };
     * mc.world.playSound("ambient.weather.thunder", targetLocation, worldSoundOptions);
     *
     * const playerSoundOptions: mc.PlayerSoundOptions = {
     *   pitch: 1.0,
     *   volume: 1.0,
     * };
     * players[0].playSound("bucket.fill_water", playerSoundOptions);
     * ```
     */
    playMusic(trackID: string, musicOptions?: MusicOptions): void;
    /**
     * Plays a sound for all players.
     * @throws
     * An error will be thrown if volume is less than 0.0. An error will be
     * thrown if fade is less than 0.0. An error will be thrown if pitch is
     * less than 0.01. An error will be thrown if volume is less than 0.0.
     */
    playSound(soundID: string, location: Vector3, soundOptions?: WorldSoundOptions): void;
    /**
     * Queues an additional music track for players. If a track is not
     * playing, a music track will play.
     * @throws
     * An error will be thrown if volume is less than 0.0. An error will be
     * thrown if fade is less than 0.0. An error will be thrown if pitch is
     * less than 0.01. An error will be thrown if volume is less than 0.0.
     */
    queueMusic(trackID: string, musicOptions?: MusicOptions): void;
    /**
     * Removes a specified property.
     */
    removeDynamicProperty(identifier: string): boolean;
    /**
     * Sends a message to all players.
     * @param message
     * The message to be displayed.
     * @throws
     * This method can throw if the provided {@link
     * @minecraft/server.RawMessage} is in an invalid format. For example,
     * if an empty `name` string is provided to `score`.
     * @example nestedTranslation.ts
     * ```typescript
     * // Displays "Apple or Coal"
     * let rawMessage = {
     *   translate: "accessibility.list.or.two",
     *   with: { rawtext: [{ translate: "item.apple.name" }, { translate: "item.coal.name" }] },
     * };
     * world.sendMessage(rawMessage);
     * ```
     * @example scoreWildcard.ts
     * ```typescript
     * // Displays the player's score for objective "obj". Each player will see their own score.
     * const rawMessage = { score: { name: "*", objective: "obj" } };
     * world.sendMessage(rawMessage);
     * ```
     * @example simpleString.ts
     * ```typescript
     * // Displays "Hello, world!"
     * world.sendMessage("Hello, world!");
     * ```
     * @example translation.ts
     * ```
     * // Displays "First or Second"
     * const rawMessage = { translate: "accessibility.list.or.two", with: ["First", "Second"] };
     * world.sendMessage(rawMessage);
     * ```
     */
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * Sets the default spawn location for players within the world. Note
     * that players can override this with their own spawn position. Note
     * also that the default spawn position must be in the overworld
     * dimension.
     * @param spawnPosition
     * Location within the overworld where a player will spawn.
     */
    setDefaultSpawnLocation(spawnPosition: Vector3): void;
    /**
     * Sets a specified property to a value.
     * @param value
     * Data value of the property to set.
     */
    setDynamicProperty(identifier: string, value: boolean | number | string): void;
    /**
     * Sets the current game time of the day.
     */
    setTime(timeOfDay: number): void;
    /**
     * Stops any music tracks from playing.
     */
    stopMusic(): void;
}
