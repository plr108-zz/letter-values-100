function myFunction(arr) {
    var propNames = Object.keys(arr);
    for (var i = 0; i < propNames.length; i++) {
        var name = propNames[i];
        var value = arr[name];
        console.log(name);
        console.log(value);
    }
}

myFunction(dictionary);
