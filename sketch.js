const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight

const numZombieImages = 3
let mainZombieImg, zombieImages
let bgImg, plant, brain
let game
let images

function preload(){
    bgImg = loadImage('assets/background.png')
    plantImg = loadImage('assets/plant.png')
    brainImg = loadImage('assets/brain.png')
    mainZombieImg = loadImage('assets/zombie.png')

    images = {
        bgImg, plantImg, brainImg, mainZombieImg
    }
}

function setup(){
    createCanvas(canvasWidth, canvasHeight)
    frameRate(2)
    game = new Game(images)

}

function draw(){
    game.update()
    game.render()
}