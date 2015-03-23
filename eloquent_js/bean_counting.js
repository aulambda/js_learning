function countChar(char, sentence) {
    var charNum = 0;
    for (var i = 0; i <= sentence.length; i++) {
        if (sentence.charAt(i) == char)
            charNum += 1;

    }
    return charNum;
}

function countBs(sentence) {
    return countChar("b", sentence);

}

console.log(countChar("F", "Fried Fish"));
console.log(countBs("Vespucci was a bitch! Babe!"));
