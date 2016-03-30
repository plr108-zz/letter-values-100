function makeWordList(arr) {
    var wordList = [];

    var propNames = Object.keys(arr);
    for (var i = 0; i < propNames.length; i++) {

        if (/^[a-zA-Z()]+$/.test(propNames[i])) {
            wordList[i] = propNames[i].toLowerCase();
        }
    }

    wordList.sort();
    document.getElementById("results").innerHTML = wordList;
}

makeWordList(dictionary);