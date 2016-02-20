/**
 * Created by Lama on 07.01.2016.
 */
function diff(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.
    console.log("Array 1: " + arr1 + "\nArray 2: " + arr2);//show my arrays

    //functions
    function compare(arr1, arr2){
        for(var i = 0; i < arr1.length; i++){
            for(var j = 0; j < arr2.length; j++){
                if(arr1[i] === arr2[j]){
                    console.log("true");
                } else{

                }
            }
        }
    }
    //end functions

    //return newArr;
    res = compare(arr1, arr2);
    console.log(res);
    return res;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);