var Name = "Mohammad yehya hayati";

//UpperCase
console.log("Uppercase: " + Name.toUpperCase());

//LowerCase
console.log("Lowercase: " + Name.toLowerCase());

//TitleCase
function toTitleCase(Name)
{
    //Creating an array of strings to hold each word separated by a space {Reverse of pthyon's numpy.flatten()}
    var str = Name.toLowerCase().split(' ');
    var ret = "";
    
    //Iterating through the array to access each word and capitalizing the first letter
    //Method#1 - Normal for loop
    for (var i = 0; i < str.length; i++) {str[i] = str[i][0].toUpperCase() + str[i].slice(1, str[i].length);}
    
    //Method#2 - ForEach method
    str.forEach(function (word) { return ret += word[0].toUpperCase() + word.slice(1, word.length) + " "; });
    
    //Joining all the strings in the array to form one string {Similar to pthyon's numpy.flatten()}
    return ret;
}
console.log("Titlecase: " + toTitleCase(Name));
