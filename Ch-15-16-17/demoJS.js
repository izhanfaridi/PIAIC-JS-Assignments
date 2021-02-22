var courses=[];

courses.push(prompt("Enter course 1 :", "Enter Here"));
courses.push(prompt("Enter course 2 :", "Enter Here"));
courses.push(prompt("Enter course 3 :", "Enter Here"));
courses.push(prompt("Enter course 4 :", "Enter Here"));
courses.push(prompt("Enter course 5 :", "Enter Here"));

alert(courses);

var ifChange1=prompt("Your course 1 is : "+courses[0]+" Enter a different course if you want to change it otherwise press ok :",courses[0]);
if(ifChange1 !== courses[0]){
    courses.splice(0,1,ifChange1);
}
else{/*Do Nothing*/}

var ifChange2=prompt("Your course 2 is : "+courses[1]+" Enter a different course if you want to change it otherwise press ok :",courses[1]);
if(ifChange2 !== courses[1]){
    courses.splice(1,1,ifChange2);
}
else{/*Do Nothing*/}

var ifChange3=prompt("Your course 3 is : "+courses[2]+" Enter a different course if you want to change it otherwise press ok :",courses[2]);
if(ifChange3 !== courses[2]){
    courses.splice(2,1,ifChange3);
}
else{/*Do Nothing*/}

var ifChange4=prompt("Your course 4 is : "+courses[3]+" Enter a different course if you want to change it otherwise press ok :",courses[3]);
if(ifChange4 !== courses[3]){
    courses.splice(3,1,ifChange4);
}
else{/*Do Nothing*/}

var ifChange5=prompt("Your course 5 is : "+courses[4]+" Enter a different course if you want to change it otherwise press ok :",courses[4]);
if(ifChange5 !== courses[4]){
    courses.splice(4,1,ifChange5);
}
else{/*Do Nothing*/}

alert(courses);