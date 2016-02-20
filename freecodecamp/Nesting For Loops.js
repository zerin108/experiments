/**
 * Created by Lama on 07.01.2016.
 */
function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for (var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){
            product = product * parseFloat(arr[i][j]);
        }
    }

    // Only change code above this line
    return product;
}

// Modify values below to test your code
console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));
console.log(multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]]));

