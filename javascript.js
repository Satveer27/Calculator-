let addNumbers = (a,b)=>{
    return a+b;
}
let subtractNumbers = (a,b)=>{
    return a-b;
}
let multiplyNumbers = (a,b)=>{
    return a*b;
}
let divideNumbers = (a,b)=>{
    return a/b;
}   

let number1 = null;
let number2= null;
let operation= null;
let numberArray = [1,2,3,4,5,6,7,8,9,0];
let result = null;

let operate = (a,b,operation)=>{
    a = parseInt(a, 10);
    b = parseInt(b, 10);
    if(operation=="+"){
        return addNumbers(a,b);
    }
    else if(operation=="-"){
        return subtractNumbers(a,b);
    }
    else if(operation=="x"){
        return multiplyNumbers(a,b);
    }
    else{
        return divideNumbers(a,b);
    }
}


let calculatorScreen = document.querySelector(".calculator-screen");
let containerButtons = document.querySelectorAll(".container-buttons");
containerButtons.forEach(row=>{
    row.addEventListener("click", (e)=>{
        if(!e.target.matches("button")){
            return
        }else{
            if(result !== null){
                calculatorScreen.removeChild(calculatorScreen.firstChild);
                result = null;
            }
            if(e.target.textContent in numberArray){
                if(!calculatorScreen.hasChildNodes()){
                    let newContent = document.createElement("p");
                    newContent.textContent = e.target.textContent;
                    calculatorScreen.appendChild(newContent);
                    number1 = e.target.textContent;
                }else if(operation === null){
                    calculatorScreen.firstChild.textContent = calculatorScreen.firstChild.textContent + e.target.textContent;
                    number1 = number1 + e.target.textContent;
                }else{
                    if(number2 === null){
                        number2 = e.target.textContent;
                    }
                    else{
                        number2 = number2 + e.target.textContent;
                    }
                    calculatorScreen.firstChild.textContent = calculatorScreen.firstChild.textContent + e.target.textContent;
                }
            }
            else if(e.target.textContent == "AC" && calculatorScreen.hasChildNodes()){
                calculatorScreen.removeChild(calculatorScreen.firstChild);
                number1 = null;
                number2 = null;
                operation = null;
            }
            else if(number1 !== null && operation === null && e.target.textContent != "="){
                operation = e.target.textContent;
                calculatorScreen.firstChild.textContent = calculatorScreen.firstChild.textContent + e.target.textContent;
            }
            else if(number1 !== null && operation !== null && number2 !== null && e.target.textContent == "="){
                result = operate(number1, number2, operation);
                number1 = null;
                number2 = null;
                operation = null;
                calculatorScreen.firstChild.textContent = result;
            }
        }

    })
})