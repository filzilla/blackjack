/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {

let currentHand = '';
let handValue = hand[i];

for (var i = 0; i < hand.length-1; i++) {

 if (hand[i] === 'K'){

return currentHand = handValue + 10;
}
else if ([i] === "Q"){

return currentHand = handValue + 10;
}
else if ([i] === 'J'){

return  currentHand = handValue + 10;
}
else if ([i] === 'A'){
  for (var j = 0; j < hand.length; i++) {

    if (currentHand > 11){
    return value = parseInt(handValue) + 1;
    }
    else if(currentHand < 11){
    return currentHand = parseInt(handValue) + 11;
    }
  }

}
  else{
    return currentHand = parseInt(handValue) + parseInt([i]);
  }
return currentHand;
}

}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
