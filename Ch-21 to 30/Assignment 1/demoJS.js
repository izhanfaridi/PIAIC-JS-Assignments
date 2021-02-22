var input = prompt("Enter a decimal number: ");
input = parseFloat(input);
input = Math.ceil(input);
var demoText = "Demo Text";
demoText = demoText.slice(0,input);
var revString="";
alert(demoText)
for(var i=input-1; i>=0; i--)
{
    revString += demoText[i];
}

alert(revString);