var count = 0;

function cc(card) {
    // Only change code below this line
    switch (card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            return count + " Bet";
            break;
        case 7:
        case 8:
        case 9:
            return count + " Hold";
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            return count + " Hold";
            break;
    }
    /*if(card >= 2 || card <=6){
        count++;
        return count + " Bet";
    } else if (card >= 7 || card <= 9){
        return count + " Hold";
    } else {
        count--;
        return count + " Hold";
    }*/





    // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display

//cc(2); cc(3); cc(7); cc('K'); cc('A');

//console.log(cc());

console.log(cc(7));
console.log(cc(8));
console.log(cc(9));
