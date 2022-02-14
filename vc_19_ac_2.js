let sum = (a, b) => a + b;
let plusOne = (c) => c + 1;
alert ( plusOne( sum( 5, 7) ) );

let func = (c) => c;
alert ( func ( () => () )  );