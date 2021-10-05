let player = game.createSprite(2, 2)
basic.forever(function () {
    basic.pause(200)
    if (input.rotation(Rotation.Roll) > 0) {
        led.plot(player.get(LedSpriteProperty.X), player.get(LedSpriteProperty.Y))
        player.change(LedSpriteProperty.X, 1)
    }
    if (input.rotation(Rotation.Roll) < 0) {
        led.plot(player.get(LedSpriteProperty.X), player.get(LedSpriteProperty.Y))
        player.change(LedSpriteProperty.X, -1)
    }
    if (input.rotation(Rotation.Pitch) > 0) {
        led.plot(player.get(LedSpriteProperty.X), player.get(LedSpriteProperty.Y))
        player.change(LedSpriteProperty.Y, 1)
    }
    if (input.rotation(Rotation.Pitch) < 0) {
        led.plot(player.get(LedSpriteProperty.X), player.get(LedSpriteProperty.Y))
        player.change(LedSpriteProperty.Y, -1)
    }
})
