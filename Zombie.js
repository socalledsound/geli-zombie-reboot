class Zombie{
    constructor(img, x, y, size){
        this.images = Array.from({length: numZombieImages}, (el, i) => {
            return img.get(0, i * 240, 240, 240)
        })
        this.x = x
        this.y = y
        this.size = size
        this.imageCounter = 0
    }
    animate(){
        if(this.imageCounter < numZombieImages - 1){
            this.imageCounter++
        }else{
            this.imageCounter= 0
        }
        
    }


    render(){
        image(this.images[this.imageCounter], this.x, this.y, this.size, this.size)
    }

    update(){
        this.animate()
    }
}