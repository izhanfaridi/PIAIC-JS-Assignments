var text = prompt("Enter a string");

    function capitalize(text){
    var new_text = text.toUpperCase();
    var text_arr = new_text.split(" ");
    for(var i=0; i<text_arr.length; i++ )
    {
        var temp ="";
        temp = text_arr[i].slice(1,(text_arr[i].length));
        temp = temp.toLowerCase();
        text_arr[i] = text_arr[i].slice(0,1) + temp;
    }

    text_arr=text_arr.join(" ");
    alert(text_arr);
}

capitalize(text);
