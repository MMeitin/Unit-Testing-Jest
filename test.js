// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

///////////////////////////////////////////////////////////////////
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

test("One euro should be 1.206 dollars", () => {
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = roundTo((3.5 * oneEuroIs.USD), 2);; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dollars
})

test("One dollar should be 106.58 yens", () => {
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yens = fromDollarToYen(3.5)

    // if 1 dollar are 106.58 yens, then 3.5 dollars should be (3.5 * 106.58)
    const expected = roundTo((3.5 / oneEuroIs.USD) * oneEuroIs.JPY, 2); 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(373.04); 
})

test("One yen should be 0.01 pounds", () => {
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const pounds = fromYenToPound(3.5)

    // if 1 yen are 0.8, then 3.5 euros should be (3.5 * 1.2)
    const expected = roundTo((3.5 / oneEuroIs.JPY) * oneEuroIs.GBP, 2); 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(3.5)).toBe(0.02);
})