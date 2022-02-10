let numbers = [1,2,3,4,5];
for (let index = 0; index < numbers.length; index++) {
console.log(numbers[index]);
let remainder = index % 3;
if(remainder >1) break; 
}