/**
 * Created by Lama on 08.01.2016.
 */
function unite(arr1, arr2, arr3) {
    var finalArray = [];

    // Loop through the arguments object to truly made the program work with two or more arrays
    // instead of 3.
    for (var i = 0; i < arguments.length; i++) {
        var arrayArguments = arguments[i];

        // Loops through the array at hand
        for (var j = 0; j < arrayArguments.length; j++) {
            var indexValue = arrayArguments[j];

            // Checks if the value is already on the final array.
            if (finalArray.indexOf(indexValue) < 0) {
                finalArray.push(indexValue);
            }
        }
    }

    return finalArray;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
