//1
let func1 = () => { };
let func2 = (c) => c;
func2(func1);

//2
let func = (c) => c;
func(() => { });