/**
 * Created by Lama on 07.01.2016.
 */
function convert(num) {
    num = parseInt(num);
    console.log("num variable: " + num + ", type: " + typeof num + ".");

    //variables
    var result ='',
        r = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'],
        d = [1000,900,500,400,100,90,50,40,10,9,5,4,1];

    if (num <= 3999999 && num >= 4000) {
        num += ''; // need to convert to string for .substring()
        result = convert(num.substring(0,num.length-3));
        num = num.substring(num.length-3);
    }
    console.log(num);

    for (x = 0; x < r.length; x++){
        while(num >= d[x]){
            result += r[x];
            num -= d[x];
        }
    }
    console.log(result);


    return result;
}

convert(36);
