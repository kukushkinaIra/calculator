// document.querySelector(".add").onclick = function(){
//    let num1 = document.querySelector(".number1").value;
//    let num2 = document.querySelector(".number2").value;
//     alert(parseInt(num1) + parseInt(num2))
// };

document.querySelector(".buttons").onclick = function(){
    let target = event.target; 
    let input = document.querySelector("#expression");
    let value = "";
    let operators = ["/", "+", "-", "*"]
    if (target.classList.contains("number")) {
        value = target.innerHTML;
        if (input.value === "0") { 

            input.value = value; 
            
            }
            
            else { 
            
            input.value += value;  
            
            }  
    } else if (target.classList.contains("clear")){
        input.value = "0";
    } else if (target.classList.contains("clear_one")){
        let expression = input.value;
        expression = expression.substring(0, expression.length - 1)
        input.value = expression;
    } else if(target.classList.contains("operation")){
        value = target.innerHTML;
        input.value += value;

    } else if (target.classList.contains("calculation")){
        let expression = input.value;
        input.value = eval(expression);
    }

}

