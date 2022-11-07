# Numbers to Words Convertor

## Psuedo Code

### version 1: number fro 0 to 9

step1: initialize an array 
```js
    const  arr = ['zero','one','two','three','four','five','six','seven','eight','nine']
```
step2: take the input

step3: assign index = input

step4: output array(index)


### version 2: number 0 to 99

step1: initialize the arrays 

```js
    const single = ['zero','one','two','three','four','five','six','seven','eight','nine']
    const double = ['', 'ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
```

step2: take the input `inputNumber = input`

step3: check the length of the input

step4: check if the length of the input is 1 or 2

step5: if the length is 1 then output `single[inputNumber]`

step6: if the length is 2 then

    1: check if the second digit is zero then
    
        a: output `double[first_digit_of_the_input]`
        
    2: if second digit is non zero then 
    
        1: check if the first digit of the number is 1 then
        
            a: take a new array

            ```js
                const teen = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
            ```
            
            b: output `double[second_digit_of_the_input]`
            
        2: check if first digit of the number is not 1 then
        
            a: output

            ```js
                const output = double[first_digit_of_input] + ' ' + single[second_digit_of_input]
            ```


### version 3: numbers upto nontillion

step1: check the length of the input

step2: divide the whole input into the packets having length 3 or less

step3: convert each packet into words and store the result into an array

step4: create an array for breakpoint

    ```js
        const arr = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion']
    ```
step5: take a breakpointVariable which shows the breakpoint while analysing the length of the array

step6: create a for loop and each time concatenate a resulting string to output string and also add the breakpoint at the end

step7: increment the breakpointVariable until it get to the last three digits of the input
