var max_length = null;

function makeWordList(arr) {
    var wordList = [];

    var propNames = Object.keys(arr);
    var j = 0;
    for (var i = 0; i < propNames.length; i++) {

        if (/^[a-zA-Z()]+$/.test(propNames[i])) {
            wordList[j] = propNames[i].toLowerCase();
            if (propNames[i].length > max_length) {
                max_length = propNames[i].length;
            }
            j++;
        }
    }

    wordList.sort();

    console.log("max_length: " + max_length);

    return wordList;
}

function makeWordValueJSON(wordList) {
    var wordJSON = "[";
    for (var i = 0; i < wordList.length; i++) {
        wordJSON += '{"word":"' + wordList[i] + '","value":"';
        wordJSON += getWordValue(wordList[i]);
        wordJSON += '"},';
    }
    var wordJSON = wordJSON.substring(0, wordJSON.length - 1) + "]";

    document.getElementById("results").innerHTML = wordJSON;

    return wordJSON;
};

function getWordValue(word) {
    return "XXX";
};

var list = makeWordList(dictionary);
var wordJSON = makeWordValueJSON(list);
