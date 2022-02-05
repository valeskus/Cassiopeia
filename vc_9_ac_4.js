function checkAge (){ 
    function checkYoung() {
 alert (" You need to enter the name of the parents")
let mom = prompt( "Enter your Mother's name ","");
let dad = prompt ("Enter your father's name", "");
 let parents =  mom + "," + dad ; 
let name = prompt( "Enter your name", ""); 
let gender = prompt ( "Enter your gender" , ""); 
alert ( name+ "," + gender +"," + parents );
} 
function checkAdult() {
 let name = prompt( "Enter your name", ""); 
let gender = prompt ( "Enter your gender" , ""); 
alert ( name + "," + gender);
}  
let age = prompt( "Enter your age" , ""); 
    if (age<18){ return checkYoung() ;}
    else if (age>=18){ checkAdult() ;} 
else { alert ("You can't see my site");} 
 }
