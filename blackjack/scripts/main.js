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

for (var i = 0; i < hand.length; i++) {

 if (hand[i] === 'K'){
    console.log(hand[i])
   currentHand += 10;
 }
 else if (hand[i] === 'Q'){
    console.log(hand[i])
   currentHand += 10;
 }
 else if (hand[i] === 'J'){
    console.log(hand[i])
   currentHand += 10;
 }
  else if(hand[i] < 11){

   currentHand +=  parseInt(hand[i]);
 }

// valuation of the aces  use the while loop
// to take into account multiple aces and values
  else if (hand[i] === 'A'){
     var num_Aces= 1
    num_Aces= num_Aces+ 1;
   currentHand += 11;
   console.log(num_Aces)
      }
    while(num_Aces > 1 && currentHand >21){
      currentHand -= 10;
    }
  }
  return currentHand;

}



  //whatever we add here



// console.log(c);




/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
