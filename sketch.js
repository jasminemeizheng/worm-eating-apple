const numApples = 8
const apples = Array.from({ length: numApples}, (el, i) => {
    return new Apple({ x: 20 * i, y: 100 }, 20)
})
const heroWorm = new Worm({x: 200, y: 280}, 120)

function preload(){
    appleImg = loadImage('assets/apple_0.png')
    wormImg = loadImage('assets/worm.png')
}

function setup(){
    createCanvas(1000, 600)
    background(95, 138, 245)
    frameRate(15)
    // assign images
    heroWorm.images = loadWormImages(wormImg)
    apples.forEach( apple => apple.images = loadAppleImages(appleImg))
}

function draw(){
    background(95, 138, 245)
    fill(110, 59, 21)
    // this is the ground
    rect(0, 400, 1000, 200)
    // draw the apples
    apples.forEach(apple => {
        apple.update()
        apple.render()
    })
    checkKeys()
    heroWorm.update()
    heroWorm.render()
    
}

function checkKeys(){
    if(keyIsDown(UP_ARROW)){
        heroWorm.jump()
        return
    } else if(keyIsDown(LEFT_ARROW)){
        heroWorm.runLeft()
        return
    } else if(keyIsDown(RIGHT_ARROW)){
        heroWorm.runRight()
        return
    }
}

function keyReleased(){
    if(keyCode === UP_ARROW){
        heroWorm.clearJump()
    }
}

