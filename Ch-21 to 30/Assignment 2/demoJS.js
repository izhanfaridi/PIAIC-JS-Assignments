var input = prompt("Input a Text :");
var input_new = input.split(" ");
alert(input_new);
var first_char = "";
var rest = "" ;
for(var i=0; i<input_new.length; i++)
{
    first_char = input_new[i].charAt(0).toUpperCase();
    rest = input_new[i].slice(1,(input_new[i].length));
    input_new[i] = first_char+rest.toLowerCase();
}

input_new = input_new.join(" ");
alert(input_new);