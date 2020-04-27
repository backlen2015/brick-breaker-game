namespace SpriteKind {
    export const Wall = SpriteKind.create()
    export const Ball = SpriteKind.create()
    export const top = SpriteKind.create()
    export const bricks = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Ball, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.setVelocity((sprite.x - otherSprite.x) * 3, -1 * sprite.vy)
    if (sprite.vx <= -150) {
        sprite.vx += -5
    }
})
sprites.onOverlap(SpriteKind.Ball, SpriteKind.Wall, function (sprite, otherSprite) {
    sprite.setVelocity(-1 * sprite.vx, sprite.vy)
})
sprites.onOverlap(SpriteKind.Ball, SpriteKind.top, function (sprite, otherSprite) {
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
})
sprites.onOverlap(SpriteKind.Ball, SpriteKind.bricks, function (sprite, otherSprite) {
    otherSprite.destroy(effects.starField, 300)
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
    info.changeScoreBy(1)
    numBricks += -1
})
function buildSetBricks () {
    for (let index = 0; index <= 6; index++) {
        for (let index2 = 0; index2 < 4; index2++) {
            createBrick(index * 16 + 32, colum * 8 + 24)
            colum += 1
        }
        colum = 0
    }
}
function createBrick (x: number, y: number) {
    randomNumber = Math.randomRange(0, 2)
    if (randomNumber == 0) {
        brick = sprites.create(img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 
4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 
4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 
4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 
4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 
4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`, SpriteKind.bricks)
    } else if (randomNumber == 1) {
        brick = sprites.create(img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 3 3 3 3 3 3 3 3 3 3 3 3 3 3 4 
4 3 3 3 3 3 3 3 3 3 3 3 3 3 3 4 
4 3 3 3 3 3 3 3 3 3 3 3 3 3 3 4 
4 3 3 3 3 3 3 3 3 3 3 3 3 3 3 4 
4 3 3 3 3 3 3 3 3 3 3 3 3 3 3 4 
4 3 3 3 3 3 3 3 3 3 3 3 3 3 3 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`, SpriteKind.bricks)
    } else {
        brick = sprites.create(img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 f f f f f f f f f f f f f f 4 
4 f f f f f f f f f f f f f f 4 
4 f f f f f f f f f f f f f f 4 
4 f f f f f f f f f f f f f f 4 
4 f f f f f f f f f f f f f f 4 
4 f f f f f f f f f f f f f f 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`, SpriteKind.bricks)
    }
    brick.setPosition(x, y)
    numBricks += 1
}
info.onLifeZero(function () {
    game.over(false, effects.dissolve)
    game.reset()
})
let brick: Sprite = null
let randomNumber = 0
let colum = 0
info.setScore(0)
info.setLife(3)
let numBricks = 0
let startBallVar = 0
scene.setBackgroundColor(8)
let mySprite = sprites.create(img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, SpriteKind.Player)
mySprite.setPosition(80, 110)
controller.moveSprite(mySprite, 100, 0)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
let Top = sprites.create(img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, SpriteKind.top)
Top.setPosition(80, 0)
let Left = sprites.create(img`
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
`, SpriteKind.Wall)
Left.setPosition(0, 60)
let Right = sprites.create(img`
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
`, SpriteKind.Wall)
Right.setPosition(159, 60)
let ballVar = sprites.create(img`
. 1 1 . 
1 1 1 1 
1 1 1 1 
. 1 1 . 
`, SpriteKind.Ball)
colum = 0
buildSetBricks()
game.onUpdate(function () {
    if (startBallVar == 0) {
        ballVar.setPosition(mySprite.x, 105)
        ballVar.setVelocity(0, 0)
        if (controller.A.isPressed()) {
            startBallVar = 1
        }
    }
    if (startBallVar == 1) {
        ballVar.setVelocity(Math.randomRange(-30, 30), -50)
        startBallVar = 2
    }
    if (ballVar.y >= 150) {
        startBallVar = 0
        info.changeLifeBy(-1)
    }
})
forever(function () {
    if (numBricks <= 0) {
        numBricks = 0
        buildSetBricks()
        startBallVar = 0
        info.changeScoreBy(10)
        effects.hearts.startScreenEffect(500)
    }
})
