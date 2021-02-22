var name = prompt("Name : ");
var dob_date = prompt ("D.O.B (Day): ", "i.e. 01 - 31");
var dob_month = prompt ("D.O.B (month): ", "i.e. 01 - 12");
var dob_year = prompt ("D.O.B (year): ", "i.e. 1999");

var dob = new Date(dob_month+" "+dob_date+", "+dob_year);
var currentTime = new Date();
var age_ms = currentTime.getTime() - dob.getTime();
var age_days =  age_ms / (1000 * 60 * 60 * 24);
var age = currentTime.getFullYear()- dob.getFullYear() ;


if (currentTime.getHours()>= 12 && currentTime.getHours()<16){
    console.log("Hello, "+ name +" Good Afternoon!");
}
else if(currentTime.getHours()>= 16 && currentTime.getHours()<20){
    console.log("Hello, "+ name +" Good Evening!");
}
else if(currentTime.getHours()>= 20 && currentTime.getHours()<=3){
    console.log("Hello, "+ name +" Good Night!");
}
else{
    console.log("Hellp, "+name+" Good Morning!");
}

console.log("Your DOB is "+dob);

if(currentTime.getMonth()>dob.getMonth())
{
    console.log("You are : "+age+" years old");
}
else if(currentTime.getMonth()==dob.getMonth() && currentTime.getDate()>=dob.getDate())
{
    console.log("You are : "+age+" years old");
}
else if(currentTime.getMonth()==dob.getMonth() && currentTime.getDate()<dob.getDate())
{
    console.log("You are : "+(age-1)+" years old");
}
else{
    console.log("You are "+(age-1)+" years old");
}

console.log("Your age in days is : "+parseInt(age_days))

if(currentTime.getDate()==dob_date && currentTime.getMonth()==(dob_month-1)){
    console.log("Happy Birthday "+name);
}
else if(currentTime.getMonth() == dob.getMonth() && currentTime.getDate() < dob.getDate()){
    console.log ("Days left until your next birthday : "+(dob_date - currentTime.getDate()));
}
else{
    var next_B_year = currentTime.getFullYear() + 1;
    var nextBday = new Date(dob.setFullYear(next_B_year));
    var daysLeft_ms = nextBday.getTime() - currentTime.getTime();
    var daysLeft = (daysLeft_ms/(1000 * 60 * 60 * 24))+1;
    console.log("Days left untill your next birthday: "+parseInt(daysLeft));
} 