function somaNums(arr) {
    return arr.reduce(function(prev, current){
        return prev + current;
    })
}

const arr = [1, 2];
console.log(somaNums(arr));