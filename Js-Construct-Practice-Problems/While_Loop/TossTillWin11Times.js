const HEAD = 1;
let headWon = 0;
let tailWon = 0;
while (headWon < 11 && tailWon < 11) {
    let toss = Math.floor(Math.random() * 10) % 2;
    if (toss == HEAD)
        headWon++;
    else
        tailWon++;
}
console.log("Head won " + headWon + " times");
console.log("Tail won " + tailWon + " times");