var Magicians = ["Magician1", "Magician2", "Magician3"];
var MagiciansCopy = ["Magician1", "Magician2", "Magician3"];
//Q41
function show_magicians(mags) {
    mags.forEach(function (m) { return console.log(m); });
}
show_magicians(Magicians);
console.log();
//Q42
function make_great(mags) {
    mags.forEach(function (m, index) { mags[index] = "The Great " + m; });
    return mags;
}
show_magicians(make_great(MagiciansCopy));
console.log();
//Q43
show_magicians(make_great(MagiciansCopy));
show_magicians(Magicians);
