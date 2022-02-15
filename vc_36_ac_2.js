let getName = () => {
    return function (){
    let name = "Valya";
    return(name);
    }
    }
    let myName = getName()();
    alert (myName); 