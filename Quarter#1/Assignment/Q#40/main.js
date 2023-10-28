function make_album(name, title, tracks) {
    if (tracks == undefined)
        return { name: name, title: title };
    else
        return { name: name, title: title, tracks: tracks };
}
var Album1 = make_album("Singer1", "Song1");
var Album2 = make_album("Singer2", "Song2", 29);
var Album3 = make_album("Singer3", "Song3", 44);
console.log(Album1);
console.log(Album2);
console.log(Album3);
