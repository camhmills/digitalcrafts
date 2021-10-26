// #3
/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
Then print the respective minimum and maximum values as a single line of two space-separated long integers.
Example
The minimum sum is X and the maximum sum is Y. The function prints:
10 14

Function Description:
Complete the miniMaxSum function in the editor below.
miniMaxSum has the following parameter(s):

arr: an array of integers
Print two space-separated integers on one line: the minimum sum and the maximum sum of the elements.

Input Format:
A single line of five space-separated integers.

Constraints:
Output Format
Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. 
(The output can be greater than a 32 bit integer.)

Sample Input:
1 2 3 4 5

Sample Output:
10 14
*/

function miniMaxSum(array){
let max = 0;
let min = 0;
let minMaxList = [];
for (let index = 0; index < array.length; index++) {
max += array[index];
min += array[index];
}
trueMin = min - Math.max(...array);
trueMax = max - Math.min(...array);
minMaxList.push(trueMin, trueMax);
return minMaxList.join(" ");
}

numbers = [1, 2, 3, 4, 230]

console.log(miniMaxSum(numbers))