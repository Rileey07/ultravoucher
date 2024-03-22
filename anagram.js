function main() {
    var words = ["cook", "save", "taste", "aves", "vase", "state", "map"];
    var result = anagramGrouping(words);
    console.log("[");
    for (var i = 0; i < result.length; i++) {
        var group = result[i];
        console.log(" [" + groupToString(group) + "]" + (i !== result.length - 1 ? ',' : ''));
    }
    console.log("]");
}

function anagramGrouping(words) {
    var map = {};
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        var sortedWord = word.split('').sort().join('');
        if (!map[sortedWord]) {
            map[sortedWord] = [];
        }
        map[sortedWord].push(word);
    }
    return Object.values(map);
}

function groupToString(group) {
    return group.map(function(word) { return "'" + word + "'"; }).join(', ');
}

main();
