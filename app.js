function makeWordList(arr) {
    var wordList = [];

    var propNames = Object.keys(arr);
    for (var i = 0; i < propNames.length; i++) {
        // add the key name to the worList
        wordList[i] = propNames[i];
    }

    console.log("Sorting...");
    wordList.sort();
    console.log("Displaying...");
    document.getElementById("results").innerHTML = wordList;
    console.log("All Done!");
}

makeWordList(dictionary);