// // Code your solutions in this file
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }

//   return gifts;
// }

// wrapGifts(gifts);

const cards = ["tommy", "joey", "adriana", "natalie"];

function writeCards(cards,event) {
    let newArray = []
for (let i = 0; i < cards.length; i++){
    newArray.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`)
    debugger;
}
return newArray;
}

function countDown(num){
while (num >= 0){
    console.log(num)
    num--
}
}
