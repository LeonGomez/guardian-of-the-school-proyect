controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Magia_verde = sprites.createProjectileFromSprite(assets.image`Magia verde`, Hechicera, 0, -100)
    Magia_verde.setStayInScreen(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Hechicera.vy = -120
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    Bola_de_fuego.destroy(effects.warmRadial, 100)
    Magia_verde.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    Bola_de_fuego.destroy(effects.fire, 100)
    info.changeLifeBy(-1)
})
let Bola_de_fuego: Sprite = null
let Magia_verde: Sprite = null
let Hechicera: Sprite = null
scene.setBackgroundImage(assets.image`myImage1`)
Hechicera = sprites.create(assets.image`M_Atras`, SpriteKind.Player)
controller.moveSprite(Hechicera, 100, 52)
tiles.setTilemap(tilemap`level1`)
Hechicera.ay = 200
scene.cameraFollowSprite(Hechicera)
Hechicera.setStayInScreen(false)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    Bola_de_fuego = sprites.create(assets.image`Bola de fuego`, SpriteKind.Enemy)
    Bola_de_fuego.setVelocity(0, 100)
    Bola_de_fuego.setPosition(randint(12, 150), 0)
    Bola_de_fuego.setStayInScreen(false)
})
