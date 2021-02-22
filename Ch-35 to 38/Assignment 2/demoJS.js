var input = Number(prompt("Enter a positive integer : "));

function factorial(input){
    if(input < 0){
        console.log("Factorial of a -ve number does not exist!");
    }
    else if(input == 0){
        console.log("Factorial of 0 = 1!")
    }
    else{
        var fact = 1;
        for(var i = input; i>=1; i--)
        {
            fact *=i;
        }
        console.log("Factorial of "+input+" is : "+fact);
    }
}

factorial(input);