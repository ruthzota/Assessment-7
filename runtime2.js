//Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

function sumZero(arr) {
    let start = 0;
    let end = arr.length;

    while (start < end) {
        if (arr[start] < 0) {
            for (let i = start + 1; i < end; i++ ) {
                if (arr[start] + arr[i] === 0) {
                    return [arr[start], arr[1]]
                }
            }
        }
    start += 0;

    }

    return false

}


/*
Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

*/

function returnString (str) {
    let results = "";

    let j = true;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ') {
            j = true;
        }
    }
    else if (str[i] != ' ' ) {
        return false;
    }
}

function checkPangram () {

}

/* A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

Write a function to check a sentence to see if it is a pangram or not.

*/
function pangram(words) {
    words = words.tolowerCase()
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'

    for(let i = 0; i < alphabet.length; i++) {
        let find = words.indexOf(alphabet[i])
        if(find == -1) return false
    }
    return true
 }

 console.log( pangram( 'The quick brown fox jumps over the lazy dog.'))

 /*
 Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.
 */

 function longestWord(str) {
     let words = str.split(' ');
     let maxlength = 0;

     for(let i = 0; i < words.length; i++) {
         if (words[i].length > maxlength) {
             maxlength = words[i].length;
         }
     }
     return maxlength;
 }

 longestWord(["hi", "hello"]);
 ``