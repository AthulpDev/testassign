for (var x=0; x<=15; x++) {
    if (x === 0) {
            console.log(x +  " is even");
    }
    else if (x % 2 === 0) {
            console.log(x + " is even");   
    }
    else {
            console.log(x + " is odd");
    }
}

4.
function sum_sq(array) {
var sum = 0,
  i = array.length;
while (i--) {
sum += Math.pow(array[i], 2);
}return sum;
}

console.log(sum_sq([0, 1, 2, 3, 4]));
