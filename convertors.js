
function singleDigitConvertor(digit) {
    const single = ['zero','one','two','three','four','five','six','seven','eight','nine']
    return single[digit]
}

function doubleDigitConvertor(digit) {
    const double = ['','ten', 'twenty','thirty','fourty','fifty','sixty','seventy','eighty','ninety']
    const teen = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const firstInputDigit = digit[0];
    const secondInputDigit = digit[1];
    if(secondInputDigit > 0){
        if(firstInputDigit === '1') {
            return teen[secondInputDigit]
        } else {
            if(firstInputDigit > 0){
                return double[firstInputDigit] + '-' + singleDigitConvertor(secondInputDigit)
            } else {
                return singleDigitConvertor(secondInputDigit)
            }
        }
    } else {
        return double[firstInputDigit]
    }
}

function threeDigitConvertor(digit) {
    const firstInputDigit = digit[0];
    if(digit.length === 1){
        return singleDigitConvertor(digit)
    } else if (digit.length === 2) {
        return doubleDigitConvertor(digit)
    } else {
        let res = singleDigitConvertor(firstInputDigit)
        res += ` hundred and ${doubleDigitConvertor(digit.substring(1))}`
        return res
    }
}

module.exports = {
    singleDigitConvertor : singleDigitConvertor,
    doubleDigitConvertor : doubleDigitConvertor,
    threeDigitConvertor : threeDigitConvertor
}