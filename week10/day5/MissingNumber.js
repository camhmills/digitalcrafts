//Write a function that finds the missing number in a given integer array

let arr1 = [1,2,3,4,5,6,7,8,10];
//expect result: 9

const MissingNumber = (array) => {
    for (let index = 0; index < array.length; index++) {
        if (array[index+1] - array[index] > 1) {
            array.splice(index+1, 0, array[index]+1);
        return array;
    }
  }
}

console.log(MissingNumber(arr1))