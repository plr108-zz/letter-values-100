function makeWordList(arr) {
    var wordList = [];

    var propNames = Object.keys(arr);
    var j = 0;
    for (var i = 0; i < propNames.length; i++) {

        if (/^[a-zA-Z()]+$/.test(propNames[i])) {
            wordList[j] = '"' + propNames[i].toLowerCase() + '"';
        	j++;
        }
    }

    wordList.sort();
    document.getElementById("results").innerHTML = wordList;
    return wordList;
}

function makeWordValueJSON() {

};

var list = makeWordList(dictionary);
//makeWordValueJSON();