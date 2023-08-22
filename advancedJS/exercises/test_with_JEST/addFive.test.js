const {default: TestRunner} = require("jest-runner");
const addFive = require('./addFive');

test('Return the number add 5', ()=>{
    expect(addFive(1)).toBe(6);
})