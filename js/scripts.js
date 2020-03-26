var Gary = {
    Chapter: "Lion Crusaders",
    Rank: "Primaris Captain",
    Weapon1: "Starhammer-Pattern auto bolt-rifle",
    Weapon2: "power sword",
    Badass: true,
    age: 40
}
function isBadass(Gary){
    check = Gary.Badass;
    rankCheck = Gary.Rank;
    return check, rankCheck;
}

function wordBlanks(noun, adjective1, verb, adjective2) {
    var result = "" + noun + " " + adjective1 + " " +  verb + " his work in a totally " + adjective2 + " manner.";
    return result;
}
function globalTest(number) {
    var testGlobal = number;
    console.log(testGlobal);
}
function plusNine(number){
    return number + 9;
}
function linePractice(arr, item){
    arr.push(item);
    return arr.shift();
}
function isThatTrue(answer){
    if (answer) {
        return "that is true";
    }
        return "that is not true";
}
function isThatEqualToTen(prompt){
    if(prompt == 10) {
        return "that is equal to ten";
    }
        return "that is not equal to ten";
}
function isThatStrictlyEqualToTen(prompt){
    if(prompt === 10) {
        return "that is strictly equal to ten";
    }
        return "that is not strictly equal to ten";
}
function caseSwitchPractice(val) {
    var answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "mediocre";
            break;
        case 4:
        case 5:
        case 6:
            answer = "someone to believe in";
            break;
        case 7:
        case 8:
        case 9:
            answer = "above average";
            break;
        case 10:
        case 11:
        case 12:
            answer = "pretty darn decent";
            break;
        default:
            answer = "average"
            break;
    }
    return answer;
}
function isLessIf(a, b) {
    return a < b;
}

$(document).ready(function(){
    console.log("it works!");
    var myNum = 16;
    console.log("your declared variable is " + myNum + "!");
    myNum++;
    console.log("your declared variable is now " + myNum + "!");
    var num1 = 30;
    var num2 = 60;
    var remainder = num1 % num2;
    console.log("the remainder of " + num1 + " and " + num2 + " is " + remainder + "!")
    console.log("I am a \"double quoted\" string inside of \"double quotes\"");
    console.log("first line\n\tsecond line\nthird line");
    var a = "Ike";
    var firstLetter = a[0];
    console.log(firstLetter);
    var b = "the stars";
    var lastLetter = b[b.length - 1];
    console.log(lastLetter);
    console.log(wordBlanks("Ike", "swiftly", "completed", "badass"));
    var fruits = ["apples", 22, "bananas", ["avocadoes", "grapes"]];
    fruits[3][0] = "tomatoes";
    console.log(fruits[3][0]);
    var vegetables = ["potatoes", "chilies", "onions"]
    fruits.push(vegetables);
    console.log(fruits[4][1] + ", expecting chilies");
    fruits.pop(fruits[4]);
    console.log(fruits + ", expecting no vegetables");
    fruits.shift();
    fruits.unshift("limes");
    console.log(fruits);
    globalTest(22);
    console.log(plusNine(13));
    var numArr = [1, 2, 3, 4, 5];
    console.log("Before: " + JSON.stringify(numArr));
    console.log(linePractice(numArr, 6));
    console.log("After: " + JSON.stringify(numArr));
    console.log(isThatTrue(false));
    console.log(isThatEqualToTen("10"));
    console.log(isThatStrictlyEqualToTen("10"));
    console.log(caseSwitchPractice(5));
    console.log(isLessIf(10, 15));
    console.log(isBadass(Gary));
});