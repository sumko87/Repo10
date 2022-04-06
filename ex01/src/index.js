// Only change code below this line
var myPet = {
    species: "cat",
    name: "Misko",
    legs: 4,
    friends: ["Koni","Sony"]
};
function myFunction(myObj) {
    return myObj;
}
// Only change code above this line
console.log(myFunction(myPet));
module.exports = {myPet, myFunction};