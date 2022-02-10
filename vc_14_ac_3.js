Dmitry Makarenko, [06.02.2022 13:02]
let age;
let height;
let weight;
function getAge(){
    age = prompt("Enter your age") || undefined;
}
function getHeight(){
    height = prompt("Enter your height") || undefined;
}
function getWeight(){
    weight = prompt("Enter your weight") || undefined;
}
function showAll(){
    getAge();
    getHeight();
    getWeight();

    if (age !== undefined && height == undefined && weight !== undefined) {
        alert(`age: ${age}, height: ${height}, weight: ${weight}`);
    }
}