function make_album(name : string, title : string, tracks? : number)
{
    if (tracks == undefined) return {name, title};
    else return {name, title, tracks};
}

let Album1 = make_album("Singer1", "Song1");
let Album2 = make_album("Singer2", "Song2", 29);
let Album3 = make_album("Singer3", "Song3", 44);

console.log(Album1);
console.log(Album2);
console.log(Album3);