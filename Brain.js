class Brain{
    constructor(img, x, y, size){
        this.image = img
        this.x = x
        this.y = y
        this.size = size
    }

    render(){
        image(this.image, this.x, this.y, this.size)
    }
}