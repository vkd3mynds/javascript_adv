// console.log("Functional Programming");

// const myArr = [1,2,3,4];

// const addToArr = (arr,data)=>{
//     arr.push(data);

//     return arr;
// }
// console.log(myArr)
// console.log(addToArr(myArr,5))
// console.log(myArr);


// This is an excellent question that highlights a fundamental concept in JavaScript: pass-by-reference vs. pass-by-value for objects, and the difference between modifying an object in place (mutation) and creating a new object (immutability).

let user = {
    name: 'vikash',
    age: 31
}

// function updateName(user, name){
//     user.name = name
// }

function updateName(user,name){
    let newObj = {...user,name:name};
    return newObj;
}
console.log(user);
updateName(user,"Vikrant");
console.log(user);
let updateObj = updateName(user,"Vikrant")
console.log(updateObj);