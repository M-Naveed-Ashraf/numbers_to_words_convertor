const { threeDigitConvertor } = require('./convertors')
const prompt = require('prompt-sync')();

let inputVal = prompt('Enter any number: ');

// remove leading zeros
inputVal = parseInt(inputVal);

// again convert to string for further processing
inputVal = String(inputVal);

if(inputVal.length > 3){
    let res = []
    const arr = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion']
    for (var index = 3; index <= inputVal.length; index += 3) {
        if(index > 3){
            res.push(threeDigitConvertor(inputVal.slice(-index, -(index-3))))
        }
        else {
            res.push(threeDigitConvertor(inputVal.slice(-index)))
        }
    }
    if(inputVal.length > index-3){
        res.push(threeDigitConvertor(inputVal.slice(0,inputVal.length - (index-3))))
    }
    let output = '';
    for (let i=res.length-1; i>=0; i--) {
        if(i < arr.length){
            output += res[i] + ' ' + arr[i] + ' '
        } else {
            output += res[i] + ' '
        }
    }
    console.log(output)
} else {
    console.log(threeDigitConvertor(inputVal))
}