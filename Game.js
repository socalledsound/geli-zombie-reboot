class Game{
    constructor(images){
        this.background = new Background(images.bgImg, 0, 0, canvasWidth, canvasHeight)
        this.zombie = new Zombie(images.mainZombieImg, 300, 300, 240,240)
        this.plant = new Plant(images.plantImg, 300, 600, 240, 240)
        this.brain = new Brain(images.brainImg, 600, 300, 240, 240)
    }

    render(){
        this.background.render()
        this.zombie.render()
        this.plant.render()
        this.brain.render()
    }
}