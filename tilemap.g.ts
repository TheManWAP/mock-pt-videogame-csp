// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Spawn":
            case "level1":return tiles.createTilemap(hex`1000100003020202020202020202020202020c0907010a0a01010a01010a0101010c0108070d01010101010101010a0a0101010807010c0101010e0a01010101010101080701010a0a0a0e010101010d0101010107010a1716161801010101010101010107010e130f121501010101010101010107010e1310111501010101010101010107010a1a1414190101010101010101080701010a0a0a0e0101010101010101080701010101010e01010101010101010807010101010101010101010101010108070a0a0a0101010c01010101010d010807010101010b01010101010101010108070d010b0b01010a0a010b0b0b01010804060606060601060606060606060605`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.forestTiles10,sprites.builtin.forestTiles6,sprites.builtin.forestTiles5,sprites.builtin.forestTiles13,sprites.builtin.forestTiles15,sprites.builtin.forestTiles14,sprites.builtin.forestTiles9,sprites.builtin.forestTiles11,sprites.builtin.forestTiles7,sprites.builtin.forestTiles12,sprites.builtin.forestTiles2,sprites.builtin.forestTiles19,sprites.castle.tileDarkGrass2,sprites.dungeon.darkGroundCenter,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
