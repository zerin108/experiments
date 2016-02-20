/**
 * Created by Lama on 06.01.2016.
 */
function rot13(str) { // LBH QVQ VG!
    //разбиваю строку на массив, чтобы пройти по нему циклом.
    arrstr = str.split("");
    //console.log(arrstr);

    //функция принимает на вход литеру(l) и декодирует ее по шрифту Цезаря.
    function cc(l){
        switch (l){
            case "A":
                return "N";
                break;
            case "B":
                return "O";
                break;
            case "C":
                return "P";
                break;
            case "D":
                return "Q";
                break;
            case "E":
                return "R";
                break;
            case "F":
                return "S";
                break;
            case "G":
                return "T";
                break;
            case "H":
                return "U";
                break;
            case "I":
                return "V";
                break;
            case "J":
                return "W";
                break;
            case "K":
                return "X";
                break;
            case "L":
                return "Y";
                break;
            case "M":
                return "Z";
                break;
            case "N":
                return "A";
                break;
            case "O":
                return "B";
                break;
            case "P":
                return "C";
                break;
            case "Q":
                return "D";
                break;
            case "R":
                return "E";
                break;
            case "S":
                return "F";
                break;
            case "T":
                return "G";
                break;
            case  "U":
                return "H";
                break;
            case "V":
                return "I";
                break;
            case "W":
                return "J";
                break;
            case "X":
                return "K";
                break;
            case "Y":
                return "L";
                break;
            case "Z":
                return "M";
                break;
            default:
                return l;
                break;
        }
    }

    endString = [];
    //прохожу циклом и заменяю каждый элементы функцией cc
    for(var i = 0; i < arrstr.length; i++){
            endString[i] = cc(arrstr[i]);
    }
    console.log(endString);
    str = endString.join("");
    //console.log(str);
    return str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
rot13("SERR YBIR?");
