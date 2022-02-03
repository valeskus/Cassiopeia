//1
function createVariable () {
 const variable = "local variable";
return (variable);
}
createVariable ();

//2
let variableG = 3;
function chengeVariable () {
variableG = "global variable";
return (variableG);
}
chengeariable ();

//3
let variableR = 3;
function getVariable (a) {
return (variableR = a);
}
getVariable (66);
alert (variableR);

//4
let a = 3; 
function getGlibalVariable(b=a) { 
return (b);
}
getGlibalVariable ();
