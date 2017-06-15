/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

function handValue (hand) {
  var currentHand = 0;

for (var i = 0; i < hand.length-1; i++) {

 if (hand[i] === 'K' || hand[i] === 'Q' || hand[i] === 'J'){
  //  console.log(hand[i])
   currentHand = currentHand + 10;
 }
 else if(hand[i] != 'K'||  'Q'||  'J'){

   currentHand +=  parseInt(hand[i]);

}
  else if (hand[i] === 'A'){
    var valueAce = 0;

      if (currentHand > 21){
        valueAce = 1;
         currentHand = currentHand + valueAce;
        }
      else if(currentHand < 10){
        valueAce = 11;
         currentHand = currentHand + valueAce;
        }
      
      }
  //whatever we add here
}
return currentHand;
}

// console.log(c);




/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
