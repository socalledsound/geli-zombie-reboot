class Background{
    constructor(img, x, y, w, h){
        this.image = img
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }

    render(){
        image(this.image, this.x, this.y, this.w, this.h)
    }
}