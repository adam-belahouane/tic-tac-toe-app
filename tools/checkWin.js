function checkFull(array) {
    for(let i = 0; i < array.length; i++){
        if(array[i] === ""){
            return false
        }
            
    }
    return true
}

export default function checkWin(array) {
    let x = ""
    let y = ["x", "o"]
    for(let i = 0; i < y.length; i++){
        x = y[i]
        if(x === array[0] && x === array[1] && x === array[2]){return x}
        if(x === array[3] && x === array[4] && x === array[5]){return x}
        if(x === array[6] && x === array[7] && x === array[8]){return x}
        if(x === array[0] && x === array[3] && x === array[6]){return x}
        if(x === array[1] && x === array[4] && x === array[7]){return x}
        if(x === array[2] && x === array[5] && x === array[8]){return x}
        if(x === array[0] && x === array[4] && x === array[8]){return x}
        if(x === array[2] && x === array[4] && x === array[6]){return x}
    }

    if(checkFull(array)){return "tie"}

    return ""

}


