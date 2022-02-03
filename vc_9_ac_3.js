//1
function getNumber() {
    function getNum(b) {
        if ((typeof b) == 'number') {
            return true;
        }
        else {
            return false;
        }
    }
    return getNum;
}
/* function getNumber (a) {
   function getNum(b){
    let result = ((typeof b) == 'number') ? true:false;
     return result;
    }
    return getNum;
}
getNumber()(8);
    */
//2
function getFunc(a) {
    if ((typeof a) == 'function') return ((a));
    else {
        return false;
    }
}

