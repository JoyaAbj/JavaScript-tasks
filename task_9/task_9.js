function add(numOne , numTwo) {

    let sum= numOne + numTwo;
    console.log(sum);
}
add( 10 , 40);

function substract(numOne , numTwo) {

    let sub= numOne - numTwo;
    console.log(sub);
}
substract( 50 , 40);

function multiply(numOne , numTwo) {
    let mul= numOne*numTwo;
    console.log(mul);
}
multiply(0,10)

function divide( numOne,numTwo) {
    let div= numOne / numTwo;
    console.log(div);
}
divide(10,0);
divide(50,5)

function myCalculator(operation,numOne,numTwo) {
    if(operation=="add") return add(numOne,numTwo);
    else if (operation=="substract") return substract(numOne,numTwo);
    else if (operation=="multiply") return multiply(numOne,numTwo);
    else if(operation=="divide") return divide(numOne,numTwo);
}


myCalculator("multiply",10,6)
myCalculator("add",-10,-6)