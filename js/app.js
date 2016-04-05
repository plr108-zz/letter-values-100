var max_length = null;

function makeWordList(arr) {
    var wordList = [];

    var propNames = Object.keys(arr);
    var i, j = 0;
    for (var i = 0; i < propNames.length; i++) {

        if (/^[a-zA-Z()]+$/.test(propNames[i])) {
            wordList[j] = propNames[i].toLowerCase();
            if (propNames[i].length > max_length) {
                max_length = propNames[i].length;
            }
            i++;
            j++;
        }
    }

    wordList.sort();

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

// return the "value" of a word by summing the value of each letter in the word:
// {a=1,b=2,c=3,...}
function getWordValue(word) {
    var count = 0;
    var alphabet = [];
    alphabet[0] = { letter: "a", number: 1 };
    alphabet[1] = { letter: "b", number: 2 };
    alphabet[2] = { letter: "c", number: 3 };
    alphabet[3] = { letter: "d", number: 4 };
    alphabet[4] = { letter: "e", number: 5 };
    alphabet[5] = { letter: "f", number: 6 };
    alphabet[6] = { letter: "g", number: 7 };
    alphabet[7] = { letter: "h", number: 8 };
    alphabet[8] = { letter: "i", number: 9 };
    alphabet[9] = { letter: "j", number: 10 };
    alphabet[10] = { letter: "k", number: 11 };
    alphabet[11] = { letter: "l", number: 12 };
    alphabet[12] = { letter: "m", number: 13 };
    alphabet[13] = { letter: "n", number: 14 };
    alphabet[14] = { letter: "o", number: 15 };
    alphabet[15] = { letter: "p", number: 16 };
    alphabet[16] = { letter: "q", number: 17 };
    alphabet[17] = { letter: "r", number: 18 };
    alphabet[18] = { letter: "s", number: 19 };
    alphabet[19] = { letter: "t", number: 20 };
    alphabet[20] = { letter: "u", number: 21 };
    alphabet[21] = { letter: "v", number: 22 };
    alphabet[22] = { letter: "w", number: 23 };
    alphabet[23] = { letter: "x", number: 24 };
    alphabet[24] = { letter: "y", number: 25 };
    alphabet[25] = { letter: "z", number: 26 };

    for (i = 0; i < word.length; i++) {
        for (j = 0; j < alphabet.length; j++) {
            if (alphabet[j].letter === word.substr(i, 1)) {

                count += alphabet[j].number;
                k = alphabet.length;
            }
        }
    }
    return count;
};

var viewModel = {

    visibleWordValues: ko.observableArray(),
    init: function() {
        // show all words with a value of 100
        for (var i = 0; i < wordValues.length; i++) {
            if (wordValues[i].value === "100") {

                viewModel.visibleWordValues.push(wordValues[i]);
            }
        }
    },

    valueQuery: ko.observable()
};

viewModel.valueQuery.subscribe(function(newValue) {

    console.log("Display results for value: " + newValue);
});



// Initialize the viewModel
viewModel.init();

// activate Knockout
ko.applyBindings(viewModel);
