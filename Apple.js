class Apple {
    constructor({x, y}, size){
        this.x = x
        this.y = y
        this.size = size
        this.images = []
        this.imageCounter = 0
        this.speed = Math.random() * 0.5
    }

    render(){
        image(this.images[Math.floor(this.imageCounter)], this.x, this.y, this.size, this.size)
    }

    update(){
       if(this.imageCounter < this.images.length - 1){
           this.imageCounter += this.speed
        } else {
            this.imageCounter = 0
        } 

    }
}


// 

// image(apples[appleCounter], 400, 200, 100, 100)

// image(apples[appleCounter], 600, 200, 100, 100)

// image(apples[appleCounter], 800, 200, 100, 100)

// if(appleCounter < apples.length - 1){
//     appleCounter++
// }else{
//     appleCounter = 0
// }