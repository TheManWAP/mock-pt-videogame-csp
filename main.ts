tiles.setCurrentTilemap(tilemap`Spawn`)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`AmyIdle`, SpriteKind.Player))
controller.player1.moveSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 100, 75)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(80, 110)
scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
characterAnimations.loopFrames(
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
assets.animation`AmyWalkAnim`,
150,
characterAnimations.rule(Predicate.MovingDown)
)
