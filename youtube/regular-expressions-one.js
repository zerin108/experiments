/**
 * Created by Lama on 19.02.2016.
 */
    //для работы с regexp в js есть класс RegExp
    //первый параметр - непосредственно само выражение
    //второй - флаги: g - global, i - ignore, m - multiline
var pattern = new RegExp("\w+", 'gim');
var samePattern = /\w+/gim; //один из возможных вариантов применеия regexp
var str = "How we survive is what we makes who we are";

var a = str.match(samePattern);//match
var b = str.search(samePattern);    //ищет первый match и игнорирует g
var c = str.replace(samePattern);

console.log(a);