var input_1 = prompt("Enter Number 1: ");
var input_2 = prompt("Enter Number 2: ");
var operator = prompt("Enter function to perform: ", "e.g. + , - , / , * , %");
var result;
input_1 = parseFloat(input_1);
input_2 = parseFloat(input_2);

if(operator == "+" ){
    result = input_1 + input_2;
}
else if(operator == "-"){
    result = input_1 - input_2;
}
else if(operator == "*"){
    result = input_1 * input_2;
}
else if(operator == "/"){
result = input_1 / input_2;
}
else{
    result = input_1 % input_2;
}

alert(+input_1+" "+operator+" "+input_2+" = "+result);