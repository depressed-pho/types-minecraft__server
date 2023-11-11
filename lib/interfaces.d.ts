/**
 * Contains optional parameters for registering a block event.
 */
export interface BlockEventOptions {
    /**
     * If this value is set, this event will only fire if the impacted
     * block's type matches this parameter.
     */
    blockTypes?: string[];
    /**
     * If this value is set, this event will only fire if the impacted
     * block's permutation matches this parameter.
     */
    permutations?: BlockPermutation[];
}

/**
 * Contains additional options for a block fill operation.
 */
export interface BlockFillOptions {
    /**
     * When specified, the fill operation will only apply to blocks that
     * match this description.
     */
    matchingBlock?: BlockPermutation;
}

/**
 * Contains more information for events where a block is hit.
 */
export interface BlockHitInformation {
    /**
     * Block that was hit.
     */
    block: Block;
    /**
     * Face of the block that was hit.
     */
    face: Direction;
    /**
     * Location relative to the bottom north-west corner of the block.
     */
    faceLocation: Vector3;
}

/**
 * Contains information for block raycast hit results.
 */
export interface BlockRaycastHit {
    /**
     * Block that was hit.
     */
    block: Block;
    /**
     * Face of the block that was hit.
     */
    face: Direction;
    /**
     * Hit location relative to the bottom north-west corner of the block.
     */
    faceLocation: Vector3;
}

/**
 * Contains additional options for configuring a block raycast query.
 */
export interface BlockRaycastOptions {
    /**
     * If true, liquid blocks will be considered as blocks that "stop" the
     * raycast.
     */
    includeLiquidBlocks?: boolean;
    /**
     * If true, passable blocks like vines and flowers will be considered
     * as blocks that "stop" the raycast.
     */
    includePassableBlocks?: boolean;
    /**
     * Maximum distance, in blocks, to process the raycast.
     */
    maxDistance?: number;
}

/**
 * A BlockVolume is a simple interface to an object which represents a 3D
 * rectangle of a given size (in blocks) at a world block location.
 *
 * Note that these are not analogous to "min" and "max" values, in that the
 * vector components are not guaranteed to be in any order.
 *
 * In addition, these vector positions are not interchangeable with
 * BlockLocation.
 *
 * If you want to get this volume represented as range of of
 * BlockLocations, you can use the getBoundingBox utility function.
 *
 * This volume class will maintain the ordering of the corner indexes as
 * initially set.
 *
 * When manually editing these kinds of volumes, you need to maintain the
 * identity of the corner as you edit - the BlockVolume utility functions
 * do this.
 *
 * Important to note that this measures block sizes (to/from) - a normal
 * AABB (0,0,0) to (0,0,0) would traditionally be of size (0,0,0)
 *
 * However, because we're measuring blocks - the size or span of a
 * BlockVolume would actually be (1,1,1)
 */
export interface BlockVolume {
    /**
     * A world block location that represents a corner in a 3D rectangle.
     */
    from: Vector3;
    /**
     * A world block location that represents the opposite corner in a 3D rectangle
     */
    to: Vector3;
}

/**
 * A BoundingBox is an interface to an object which represents an AABB
 * aligned rectangle.
 *
 * The BoundingBox assumes that it was created in a valid state (min <=
 * max) but cannot guarantee it (unless it was created using the associated
 * {@link @minecraft/server.BoundingBoxUtils} utility functions.
 *
 * The min/max coordinates represent the diametrically opposite corners of
 * the rectangle.
 *
 * The BoundingBox is not a representation of blocks - it has no
 * association with any type, it is just a mathematical construct - so a
 * rectangle with
 *
 * ( 0,0,0 ) -> ( 0,0,0 )
 *
 * has a size of ( 0,0,0 ) (unlike the very similar
 * @minecraft/server.BlockVolume object)
 */
export interface BoundingBox {
    /**
     * A {@link @minecraft/server.Vector3} that represents the largest
     * corner of the rectangle.
     */
    max: Vector3;
    /**
     * A {@link @minecraft/server.Vector3} that represents the smallest
     * corner of the rectangle.
     */
    min: Vector3;
}

export interface CameraDefaultOptions {
    /**
     * Sets a set of easing options for the camera.
     */
    easeOptions: CameraEaseOptions;
}

/**
 * Contains options associated with a camera ease operation.
 */
export interface CameraEaseOptions {
    /**
     * Time for the ease operation.
     */
    easeTime?: number;
    /**
     * Type of ease operation to use.
     */
    easeType?: EasingType;
}

/**
 * Used to initiate a full-screen color fade.
 */
export interface CameraFadeOptions {
    /**
     * Fade color to use.
     */
    fadeColor?: RGB;
    /**
     * Time in seconds for the fade-in, hold, and fade-out seconds.
     */
    fadeTime?: CameraFadeTimeOptions;
}

/**
 * Contains timings for a fade transition.
 */
export interface CameraFadeTimeOptions {
    /**
     * Time, in seconds, for a fade-in.
     */
    fadeInTime: number;
    /**
     * Time, in seconds, for a fade-out.
     */
    fadeOutTime: number;
    /**
     * Time, in seconds, to hold the full screen color.
     */
    holdTime: number;
}

export interface CameraSetFacingOptions {
    easeOptions?: CameraEaseOptions;
    facingEntity: Entity;
    location?: Vector3;
}

export interface CameraSetLocationOptions {
    easeOptions?: CameraEaseOptions;
    location: Vector3;
}

export interface CameraSetPosOptions {
    easeOptions?: CameraEaseOptions;
    facingLocation: Vector3;
    location?: Vector3;
}

export interface CameraSetRotOptions {
    easeOptions?: CameraEaseOptions;
    location?: Vector3;
    rotation: Vector2;
}

/**
 * This interface defines an entry into the {@link
 * @minecraft/server.CompoundBlockVolume} which represents a volume of
 * positive or negative space.
 */
export interface CompoundBlockVolumeItem {
    /**
     * The `action` defines how the block volume is represented in the
     * compound block volume stack.
     *
     * `Add` creates a block volume which is positively selected.
     *
     * `Subtract` creates a block volume which represents a hole or
     * negative space in the overall compound block volume.
     */
    action: CompoundBlockVolumeAction;
    /**
     * The volume of space.
     */
    volume: BlockVolume;
}

/**
 * A reference to a dimension and a position in it.
 */
export interface DimensionLocation {
    dimension: Dimension;
    x: number;
    y: number;
    z: number;
}

/**
 * Additional options for when damage has been applied via a projectile.
 */
export interface EntityApplyDamageByProjectileOptions {
    /**
     * Optional entity that fired the projectile.
     */
    damagingEntity?: Entity;
    /**
     * Projectile that caused damage.
     */
    damagingProjectile: Entity;
}

/**
 * Additional descriptions and metadata for a damage event.
 */
export interface EntityApplyDamageOptions {
    /**
     * Underlying cause of the damage.
     */
    cause: EntityDamageCause;
    /**
     * Optional entity that caused the damage.
     */
    damagingEntity?: Entity;
}

/**
 * Provides information about how damage has been applied to an entity.
 */
export interface EntityDamageSource {
    /**
     * Cause enumeration of damage.
     */
    cause: EntityDamageCause;
    /**
     * Optional entity that caused the damage.
     */
    damagingEntity?: Entity;
    /**
     * Optional projectile that may have caused damage.
     */
    damagingProjectile?: Entity;
}

/**
 * Specifies additional filters that are used in registering a
 * data driven trigger event for entities.
 */
export interface EntityDataDrivenTriggerEventOptions {
    /**
     * If this value is set, this event will only fire for entities
     * that match the entities within this collection.
     */
    entities?: Entity[];
    /**
     * If this value is set, this event will only fire if the
     * impacted entities' type matches this parameter.
     */
    entityTypes?: string[];
    /**
     * If this value is set, this event will only fire if the
     * impacted triggered event matches one of the events listed in
     * this parameter.
     */
    eventTypes?: string[];
}

/**
 * Contains additional options for entity effects.
 */
export interface EntityEffectOptions {
    /**
     * The strength of the effect.
     */
    amplifier?: number;
    /**
     * If true, will show particles when effect is on the entity.
     */
    showParticles?: boolean;
}

/**
 * Contains optional parameters for registering an entity event.
 */
export interface EntityEventOptions {
    /**
     * If this value is set, this event will only fire for entities that
     * match the entities within this collection.
     */
    entities?: Entity[];
    /**
     * If this value is set, this event will only fire if the impacted
     * entities' type matches this parameter.
     */
    entityTypes?: string[];
}

/**
 * Contains additional information about an entity that was hit.
 */
export interface EntityHitInformation {
    /**
     * Entity that was hit.
     */
    entity: Entity;
}

/**
 * Contains options for selecting entities within an area.
 */
export interface EntityQueryOptions {
    /**
     * Limits the number of entities to return, opting for the closest N
     * entities as specified by this property. The location value must also
     * be specified on the query options object.
     */
    closest?: number;
    /**
     * Excludes entities that match one or more of the specified families.
     */
    excludeFamilies?: string[];
    /**
     * Excludes entities if have a specific gamemode that matches the
     * specified gamemode.
     */
    excludeGameModes?: GameMode[];
    /**
     * Excludes entities that have a name that match one of the specified
     * values.
     */
    excludeNames?: string[];
    /**
     * Excludes entities with a tag that matches one of the specified
     * values.
     */
    excludeTags?: string[];
    /**
     * Excludes entities if they are one of the specified types.
     */
    excludeTypes?: string[];
    /**
     * If specified, includes entities that match all of the specified
     * families.
     */
    families?: string[];
    /**
     * Limits the number of entities to return, opting for the farthest N
     * entities as specified by this property. The location value must also
     * be specified on the query options object.
     */
    farthest?: number;
    /**
     * If specified, includes entities with a gamemode that matches the
     * specified gamemode.
     */
    gameMode?: GameMode;
    /**
     * Adds a seed location to the query that is used in conjunction with
     * closest, farthest, limit, volume, and distance properties.
     */
    location?: Vector3;
    /**
     * If specified, includes entities that are less than this distance
     * away from the location specified in the location property.
     */
    maxDistance?: number;
    /**
     * If specified, will only include entities that have at most this
     * horizontal rotation.
     */
    maxHorizontalRotation?: number;
    /**
     * If defined, only players that have at most this level are returned.
     */
    maxLevel?: number;
    /**
     * If specified, only entities that have at most this vertical rotation
     * are returned.
     */
    maxVerticalRotation?: number;
    /**
     * If specified, includes entities that are least this distance away
     * from the location specified in the location property.
     */
    minDistance?: number;
    /**
     * If specified, will only include entities that have at a minimum this
     * horizontal rotation.
     */
    minHorizontalRotation?: number;
    /**
     * If defined, only players that have at least this level are returned.
     */
    minLevel?: number;
    /**
     * If specified, will only include entities that have at least this
     * vertical rotation.
     */
    minVerticalRotation?: number;
    /**
     * Includes entities with the specified name.
     */
    name?: string;
    /**
     * Gets/sets a collection of EntityQueryScoreOptions objects with
     * filters for specific scoreboard objectives.
     */
    scoreOptions?: EntityQueryScoreOptions[];
    /**
     * Includes entities that match all of the specified tags.
     */
    tags?: string[];
    /**
     * If defined, entities that match this type are included.
     */
    type?: string;
    /**
     * In conjunction with location, specified a cuboid volume of entities
     * to include.
     */
    volume?: BlockAreaSize;
}

/**
 * Contains additional options for filtering players based on their score
 * for an objective.
 */
export interface EntityQueryScoreOptions {
    /**
     * If set to true, entities and players within this score range are
     * excluded from query results.
     */
    exclude: boolean;
    /**
     * If defined, only players that have a score equal to or under
     * maxScore are included.
     */
    maxScore: number;
    /**
     * If defined, only players that have a score equal to or over minScore
     * are included.
     */
    minScore: number;
    /**
     * Identifier of the scoreboard objective to filter on.
     */
    objective: string;
}

/**
 * Contains information for entity raycast hit results.
 */
export interface EntityRaycastHit {
    /**
     * Distance from ray origin to entity bounds.
     */
    distance: number;
    /**
     * Entity that was hit.
     */
    entity: Entity;
}

/**
 * Contains additional options for an entity raycast operation.
 */
export interface EntityRaycastOptions {
    /**
     * Maximum distance, in blocks, to process the raycast.
     */
    maxDistance?: number;
}

/**
 * Additional configuration options for the {@link
 * @minecraft/server.Dimension.createExplosion} method.
 */
export interface ExplosionOptions {
    /**
     * Whether parts of the explosion also impact underwater.
     */
    allowUnderwater?: boolean;
    /**
     * Whether the explosion will break blocks within the blast radius.
     */
    breaksBlocks?: boolean;
    /**
     * If true, the explosion is accompanied by fires within or near the
     * blast radius.
     */
    causesFire?: boolean;
    /**
     * Optional source of the explosion.
     */
    source?: Entity;
}

/**
 * Additional configuration options for {@link
 * @minecraft/server.World.playMusic}/{@link
 * @minecraft/server.World.queueMusic} methods.
 */
export interface MusicOptions {
    /**
     * Specifies a fade overlap for music at the end of play.
     */
    fade?: number;
    /**
     * If set to true, this music track will play repeatedly.
     */
    loop?: boolean;
    /**
     * Relative volume level of the music.
     */
    volume?: number;
}

/**
 * Represents a min/max structure for expressing a potential range of
 * numbers.
 */
export interface NumberRange {
    /**
     * Maximum value within a range.
     */
    max: number;
    /**
     * Minimum value within a range.
     */
    min: number;
}

/**
 * Contains additional options for how an animation is played.
 */
export interface PlayAnimationOptions {
    /**
     * Amount of time to fade out after an animation stops.
     */
    blendOutTime?: number;
    /**
     * Specifies a controller to use that has been defined on the entity.
     */
    controller?: string;
    /**
     * Specifies the state to transition to.
     */
    nextState?: string;
    /**
     * Specifies a Molang expression for when this animation should
     * complete.
     */
    stopExpression?: string;
}

/**
 * Additional options for how a sound plays for a player.
 */
export interface PlayerSoundOptions {
    /**
     * Location of the sound; if not specified, the sound is played near a
     * player.
     */
    location?: Vector3;
    /**
     * Optional pitch of the sound.
     */
    pitch?: number;
    /**
     * Optional volume of the sound.
     */
    volume?: number;
}

/**
 * Represents a fully customizable color within Minecraft.
 */
export interface RGB {
    /**
     * Determines a color's blue component. Valid values are between 0 and
     * 1.0.
     */
    blue: number;
    /**
     * Determines a color's green component. Valid values are between 0 and
     * 1.0.
     */
    green: number;
    /**
     * Determines a color's red component. Valid values are between 0 and
     * 1.0.
     */
    red: number;
}

/**
 * Represents a fully customizable color within Minecraft.
 */
export interface RGBA extends RGB {
    /**
     * Determines a color's alpha (opacity) component. Valid values are
     * between 0 (transparent) and 1.0 (opaque).
     */
    alpha: number;
}

/**
 * An interface that describes the signature of a message that is passed
 * into a say/tell API request.
 */
export interface RawMessage {
    /**
     * A list of text objects used to build a message.
     */
    rawtext?: RawMessage[];
    /**
     * Provides a token that will get replaced with the value of a score.
     */
    score?: RawMessageScore;
    /**
     * Contains plain text to display directly. Only valid when used as a
     * sub member in a parent _rawtext_ or _with_ member.
     */
    text?: string;
    /**
     * Contains a resource pack translation identifier that can be used to
     * translate text in the player's selected language.
     */
    translate?: string;
    /**
     * A list of text object arguments that can be used to fill values in
     * the _translate_ text. Ignored when _translate_ is not present.
     */
    with?: RawMessage | string[];
}

/**
 * Provides a description of a score token to use within a raw message.
 */
export interface RawMessageScore {
    /**
     * Name of the score value to match.
     */
    name?: string;
    /**
     * Name of the score value to match.
     */
    objective?: string;
}

/**
 * A `RawMessage` with only the `rawtext` property. When a `RawMessage` is
 * serialized the contents are put into a rawtext property, so this is
 * useful when reading saved RawMessages. See {@link
 * @minecraft/server.BlockSignComponent.setText} and {@link
 * @minecraft/server.BlockSignComponent.getRawText} for examples.
 */
export interface RawText {
    rawtext?: RawMessage[];
}

/**
 * Contains additional options for how a scoreboard should be displayed
 * within its display slot.
 */
export interface ScoreboardObjectiveDisplayOptions {
    /**
     * Objective to be displayed.
     */
    readonly objective?: ScoreboardObjective;
    /**
     * The sort order to display the objective items within.
     */
    readonly sortOrder?: ObjectiveSortOrder;
}

/**
 * Contains additional options for registering a script event event
 * callback.
 */
export interface ScriptEventMessageFilterOptions {
    /**
     * Optional list of namespaces to filter inbound script event messages.
     */
    namespaces?: string[];
}

/**
 * Contains additional options for teleporting an entity.
 */
export interface TeleportOptions {
    /**
     * Whether to check whether blocks will block the entity after teleport.
     */
    checkForBlocks?: boolean;
    /**
     * Dimension to potentially move the entity to. If not specified, the
     * entity is teleported within the dimension that they reside.
     */
    dimension?: Dimension;
    /**
     * Location that the entity should be facing after teleport.
     */
    facingLocation?: Vector3;
    /**
     * Whether to retain the entities velocity after teleport.
     */
    keepVelocity?: boolean;
    /**
     * Rotation of the entity after teleport.
     */
    rotation?: Vector2;
}

/**
 * Contains additional options for displaying a title and optional
 * subtitle.
 */
export interface TitleDisplayOptions {
    /**
     * Fade-in duration for the title and subtitle, in ticks. There are 20
     * ticks per second. Use {@link @minecraft/server.TicksPerSecond}
     * constant to convert between ticks and seconds.
     */
    fadeInDuration: number;
    /**
     * Fade-out time for the title and subtitle, in ticks. There are 20
     * ticks per second. Use {@link @minecraft/server.TicksPerSecond}
     * constant to convert between ticks and seconds.
     */
    fadeOutDuration: number;
    /**
     * Amount of time for the title and subtitle to stay in place, in
     * ticks. There are 20 ticks per second. Use {@link
     * @minecraft/server.TicksPerSecond} constant to convert between ticks
     * and seconds.
     */
    stayDuration: number;
    /**
     * Optional subtitle text.
     */
    subtitle?: (RawMessage | string)[] | RawMessage | string;
}

/**
 * Represents a two-directional vector.
 */
export interface Vector2 {
    /**
     * X component of the two-dimensional vector.
     */
    x: number;
    /**
     * Y component of the two-dimensional vector.
     */
    y: number;
}

/**
 * Contains a description of a vector.
 */
export interface Vector3 {
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
}

/**
 * Contains additional options for a world-level playSound occurrence.
 */
export interface WorldSoundOptions {
    /**
     * Pitch of the sound played at the world level.
     */
    pitch?: number;
    /**
     * Relative volume and space by which this sound is heard.
     */
    volume?: number;
}
