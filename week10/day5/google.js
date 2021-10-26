//For an array A consisting of N integers. I am looking to find the maximum K (from 0 to N − 1) \
//such that there exists a pair of positions (i, j) satisfying K = |i − j| = |A[i] − A[j]|, 
//where |x| denotes absolute value of x. In other words, 
//the distance between positions is equal to the difference between values. 
//A position together with itself (when i = j) 
//is always a valid pair for K = 0 (look at the third example).

const A = [2, 2, 2, 1];

const maxK = (array) => {
    for (let index = 0; index < array.length; index++) {
        var positions = index - index + 1
        var values = array[index] - array[index+1]
        if (Math.abs(positions) === Math.abs(values)) {
            return values
        }
    }
}

console.log(maxK(A))