/**
 * Created by Lama on 07.01.2016.
 */
function sumAll(arr) {
    //here functions needs to make some variables and actions
    function getMaxOfArray(arr){
        return Math.max.apply(null, arr);
    }

    function getMinOfArray(arr){
        return Math.min.apply(null, arr);
    }
    //end functions

    //variables
    var max = getMaxOfArray(arr);
    var min = getMinOfArray(arr);
    var result = min;
    var myArr = [];
    console.log("Array max = " + max);
    console.log("Array min = " + min);
    //end variables

    //scen
    //push all numbers in range into array called myArr
    for(var i = min; i <= max; i++){
        myArr.push(i)
    }
    console.log(myArr);

    console.log(typeof (myArr[0]));

    //sum all numbers from myArr
    for(var j = 1; j < myArr.length; j++){
        result+=myArr[j];
    }

    console.log("Result: " + result);
    return result;

}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));

