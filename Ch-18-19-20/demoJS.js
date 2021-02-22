var courses=[];
for(var i=0; i<5; i++){
    courses.push(prompt("Enter course "+ (i+1) +" :", "Enter Here"));
}

alert(courses);
var ifChange;
for(var i=0; i<5; i++){
    ifChange=prompt("Your course "+ (i+1) +" is : "+courses[i]+" Enter a different course if you want to change it otherwise press ok :",courses[i]);
    if(ifChange != courses[i]){
        courses.splice(i,1,ifChange);
    }
}

alert(courses);