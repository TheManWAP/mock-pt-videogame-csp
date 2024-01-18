// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000c07070707070707070707070707070b0805060f010f05050f0f0f050f010f0a080f0f0f0f0f050506030305050f0f0a080f0302060f0f0f0f0303030f0f0f0a080f030303030f010f030303060f0f0a08050f0403030f0f0f0f0303030f0f0a08050f030303060f0f050f0f030f0f0f080f05050f0f0f0f03050f0f0f0f0f0f08010f0f0f0f0f040305050f010f0f0f080f0f0f0f0f0f0303030f0f0f0f0f0f080f0f0f0f050303060f0f0f0f0f0f0a080f0f0f0f05050f0f0f0f03030f0f0a0803040f0f0f0f0f0f0f0304030f0f0a080303030f0f0f0f0f030303030f0f0a08060505030f010f0f0303060f0f0f0a0d09090909090909090909090909090e`, img`
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
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.builtin.oceanDepths4,sprites.castle.tilePath5,sprites.builtin.forestTiles0,sprites.castle.rock2,sprites.builtin.coral0,sprites.builtin.forestTiles6,sprites.builtin.forestTiles9,sprites.builtin.forestTiles14,sprites.builtin.forestTiles11,sprites.builtin.forestTiles7,sprites.builtin.forestTiles5,sprites.builtin.forestTiles13,sprites.builtin.forestTiles15,sprites.builtin.forestTiles10], TileScale.Sixteen);
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
