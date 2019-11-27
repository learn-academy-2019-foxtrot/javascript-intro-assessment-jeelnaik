// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// --------------------------- Consider the following variable:

var mantra = "Be the dev"

// 1a. Write the code that determines if there is a 'B' in mantra.

console.log(mantra.includes('B'));

// 1b. Write the code that determines if there is an 'x' in mantra.

console.log(mantra.includes('x'));

// 1c. Write the code that determines if there is a 'v' in mantra.

console.log(mantra.includes('v'));

// 1d. STRETCH: Write a function that can take two arguments - a string and a letter and returns a sentence telling the user if the letter exists within the string.

var stringCheck = (string,letter) =>{
    if(string.includes(letter)){
        return `Letter ${letter} exists within the string ${string}.`
    } else{
        return `${letter} do not exist within the ${string}`
    }
}

console.log(stringCheck("hello",'h'))



// ------------------------------ Consider the following variables:

var myDog = "Snoopy"
var myCat = "Garfield"

// 2a. Create a function that returns the longer of the two variables. Expected output: "Garfield"

var longerVar = (var1,var2) =>{
    
    if(var1.length > var2.length){
        return `${var1} is longer.`
    } else if (var1.length < var2.length){
        return `${var2} is longer.`
    } else {
        return `${var1} and ${var2} are equal in length.`
    }
    
}
console.log(longerVar(myDog,myCat))


// 2b. Create a function that takes in two arguments and returns an array containing the two variables. Expected output: ["Snoopy", "Garfield"]

var createArray =(var1,var2) =>{
    let newArray = []
    newArray.push(var1)
    newArray.push(var2)
    return newArray;
}
console.log(createArray(myDog,myCat))

// 2c. STRETCH: Write a function that accepts two variables and returns a string in all lowercase letters. Expected output: "snoopy garfield"

var convertLowercase = (var1,var2) =>{
    if(typeof var1 === 'string' && typeof var2 === 'string'){
        return var1.toLowerCase() + " " + var2.toLowerCase()} 
    else{
        return "Please enter valis string."
    }
}
console.log(convertLowercase(myDog,myCat))

// ------------------------------ Consider the following variable:

var myMessage = "Learning is fun!"

// 3a. Write the code that logs each letter of the message using a for loop.
//hint: "logs" in this case means "prints to the terminal console."  This is typically done with a console.log(x), where x is the string, function, etc that you wish to see in the terminal.

for (let i = 0 ; i<myMessage.length; i++) {
    console.log(myMessage[i])
}


// 3b. Write the code that logs each letter of the message using map.

myMessage.split("").map((value,idex) =>{
    console.log(value)
})


// 3c. STRETCH: Write the code that logs each letter of the message using a while loop.

var i = 0;
while(i<myMessage.length){
    console.log(myMessage[i]);
    i++;
}

// 3d. SUPER STRETCH: Write the code that logs each letter of the message using forEach().

var messageArray = myMessage.split("")
messageArray.forEach( (i) =>{
    console.log(i)
})


// ---------------------------- Consider the following variable:

var testString = "thisisateststring"

// 4a. Write a function that takes the variable as an argument and returns the string without vowels. Expected output: "thsstststrng"
var vowel = "aeiou" , notvowels = ""

// var notVowels = (string) =>{
//   for(let i=0;i<testString.length;i++){
//       if(! vowel.includes(testString[i])){
//           notvowels = notvowels + testString[i]
//       }
//   }
//   return notvowels
// }
// console.log(notVowels(testString))

var test = (string) => {
    return string.split("").filter((value,map) =>{
        return (! vowel.includes(value))
     
}).join("")

}
console.log(test(testString))
// 4b. STRETCH: Update your function to return an error message if the variable is not a string. Copy and paste your function to add these changes.

var testStretch = (string) => 
{
     if (typeof testString !== "string")
     {
            return "Please enter a string"
     } else 
     {
        return string.split("").filter((value,map) =>{
            return  (! vowel.includes(value))
      
        }).join("")
    }   
}
console.log(testStretch(testString))



// ------------------------------- Consider the following variable:

var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

// 5a. Write a function that takes in the toonimals array as an argument and returns an array with only the toon objects that are cats. Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

var onlyToons = (array) => {
   return array.filter((value,index) => {
        return (value.animal === "cat");
    })
    
}
console.log(onlyToons(toonimals))


//5b. Write a function that returns only the names of all the non-cats. Expected output: "Itchy" "Daffy" "Ren"
var noncats;
var onlyToons = (array) => {
    noncats = array.filter((value,index) => {
        return (value.animal !== "cat");
    })
    
    return noncats.map((value,index) =>{
        return value.name
    })
}
console.log(onlyToons(toonimals).join(" "))

//5c. STRETCH: Create a function that will print a sentence for every toon stating their name and their animal type. Use string interpolation. Expected output: "Itchy is a mouse" "Stimpy is a cat" "Daffy is a duck" "Scratchy is a cat" "Ren is a dog" "Felix is a cat"

var getDetails = (array) =>{
    return array.map((value,index) =>{
        return `Name: ${value.name} , Type : ${value.animal} \n `
    }). join(" ")
}

console.log(getDetails(toonimals))

