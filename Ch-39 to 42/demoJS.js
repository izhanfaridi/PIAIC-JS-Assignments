var arr=[];
function takeInput(arr){
    for(var i=0; i<5; i++)
    {
        arr[i]=Number(prompt("Course "+(i+1)+" marks : "));
    }
}

function percentage(arr){
    var prcnt = ((arr[0]+arr[1]+arr[2]+arr[3]+arr[4]) * 100) / 500;
    alert (prcnt);
    return prcnt;
}

function grade(arr){
    var prcnt = percentage(arr);
    switch(true){
        case (prcnt>=90) :
            alert("Congratulations! Your grade is A+");
            break;
        case (prcnt>=75 && prcnt <90) :
            alert("Congrats! Your grade is A");
            break;
        case (prcnt>=60 && prcnt <75) :
            alert("Your grade is B");
            break;
        case (prcnt>=45 && prcnt <60) :
            alert("Your grade is C");
            break;
        case (prcnt>=30 && prcnt <45) :
            alert("Your grade is D");
            break;
        default :
            alert("You Failed!");
        }
}

takeInput(arr);
grade(arr);