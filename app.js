// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

//Round a number with a helper function
function roundTo(n, place) {    
    return +(Math.round(n + "e+" + place) + "e-" + place);
}

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = valueInEuro => {
    // convert the given valueInEuro to dollars
    let valueInDollar = roundTo((valueInEuro * oneEuroIs.USD), 2);
    //return the dollar value
    return valueInDollar;
}

console.log(fromEuroToDollar(3.5));

// we declare the function with the exact name "fromDollarToYen"
const fromDollarToYen = valueInDollar => {
    // convert the given valueInDollar to yens
    let valueInYen = roundTo((valueInDollar / oneEuroIs.USD) * oneEuroIs.JPY, 2);
    //return the yen value
    return valueInYen;
}

console.log(fromDollarToYen(3.5));

// we declare the function with the exact name "fromYenToPound"
const fromYenToPound = valueInYen => {
    // convert the given valueInYen to pounds
    let valueInPound = roundTo((valueInYen / oneEuroIs.JPY) * oneEuroIs.GBP, 2);
    //return the pound value
    return valueInPound;
}

console.log(fromYenToPound(3.5));

// this is my function that sums two numbers
const sum = (a, b) => {
    return a + b;
}

// just a console log for ourselves.
console.log(sum(7, 3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };