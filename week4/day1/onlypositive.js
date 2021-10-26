function justPositive(array) {
    console.log(array);
    size = array.length;
    for(var i = 0;  i < size; i++){
        index = array.indexOf(array[i])
        if (array[i] < 0){
            array.splice(index, 1)
        }
    }
    return array;
}
var test = [1, -1, 2, -2]
console.log(test[1])

console.log(justPositive(test))