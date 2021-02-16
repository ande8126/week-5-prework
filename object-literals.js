let card0 = {
  suit: 'Hearts',
  number: 2
}// end card0

let card1 = {
  suit: 'Spades',
  number: 1
}


function isRed(cardToCheck) {
  console.log('in isRed', cardToCheck);
  if( cardToCheck.suit === "Hearts" || cardToCheck.suit === 'Diamonds'  ){
    return true;
  }//end red
  else {
    return false;
  }//end !red
}//end isRed

function isHigher(cardOne, cardTwo) {
  console.log('in isHigher', cardOne, cardTwo );
  if(cardOne.number > cardTwo.number) {
    return cardOne;
  }//end cardOne is higher
  else {
    return cardTwo;
  }//end cardTwo is higher
}//end isHigher

console.log(isRed (card0));

console.log(isRed (card1));

console.log(isHigher(card0, card1), 'is higher');
