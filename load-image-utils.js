
const loadAppleImages = (objectsImg) => {
    const appleImages = Array.from({ length: 10}, (el, i) => {
        if(i < 4){
            return objectsImg.get(i * 16, 80, 16, 17)
        } else {
            return objectsImg.get(0 * 16, 80, 16, 17)
        }
        
    })  
    return appleImages 
}


const loadWormImages = (wormImg) => {
    
    const runImages = Array.from({length: 14}, (el, i) => {
        return wormImg.get(i * 30 + 20, 50, 30, 35)
    })
    const jumpLeftImages = Array.from({ length: 9}, (el, i) => {
        return wormImg.get(i * 25 + 20, 85, 25, 35)
    })
    const jumpRightImages = Array.from({length: 9}, (el, i) => {
        return wormImg.get(i * 25 + 10, 85, 25, 35)
    })

    const arr = runImages.concat(jumpLeftImages).concat(jumpRightImages)

    return arr
}


