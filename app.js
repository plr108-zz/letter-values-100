function makeWordList(arr) {
    var wordList = [];

    var propNames = Object.keys(arr);
    for (var i = 0; i < propNames.length; i++) {
        // add the key name to the worList
        wordList[i] = propNames[i];
    }

    bubbleSort(wordList);

    document.getElementById("results").innerHTML = wordList;
}

// swap, bubble sort source: https://github.com/benoitvallon/computer-science-in-javascript/blob/master/sorting-algorithms-in-javascript/bubble-sort.js
function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function bubbleSort(array) {
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < array.length; i++) {
            if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
                swap(array, i, i + 1);
                swapped = true;
            }
        }
    } while (swapped);
    return array;
}

makeWordList(dictionary);