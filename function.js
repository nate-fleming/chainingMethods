// Lightning Exercise: Write a function that will accept any string and return the number of vowels. Start with simple console logs.


getVowels = (string) => {
    let vowels = string.toLowerCase().split("").filter(letter => letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u")
    console.log(vowels)
    console.log(vowels.length)
}

getVowels("Lightning Exercise")


// string.match(/[aeiou]/gi)



//for (const key of Object.keys(car)) {
//     outputElement.innerHTML += `<div>${key}: ${car[key]}</div>`
// }