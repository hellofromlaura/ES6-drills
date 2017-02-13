// let and const drill

// The var, let and const declarations have been removed from all of the variables in the code below. 
// To complete this drill you should update the code, adding in an appropriate choice of variable declaration 
//for each variable defined.


const arr = [11, 12, 23, 35, 58, 93];
const toFind = 35;

for (var i=0; i<arr.length; i++) {
    item = arr[i];
    if (item === toFind) {
        break;
    }
}

console.log('Found item at position', i);

arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
console.log(arr);


// Arrow functions and defaults drill

// Rewrite the following code to use arrow functions and default arguments:



const createArray = items => {
    items = items || 10;
    let arr = [];
    for (let i=0; i<items; i++) {
        arr.push(i);
    }
    return arr;
}

let arr = createArray();

arr = arr.filter((item) => item < 40);

arr = arr.map((item) => item * 2);

arr.forEach((item, index) => {
    console.log('Index:', index);
    console.log('Item:', item);
});
console.log(arr);


// // Objects drill

// // Use Object.assign to merge these three objects into a single new object. Then use object destructuring to split them out into separate variables. Finally use the enhanced object literal syntax to merge the variables back into three more objects which are identical to the originals.

// const obj1 = {
//     foo: 'bar',
//     zip: 'zap'
// };

// const obj2 = {
//     alice: 'sender',
//     bob: 'receiver',
//     eve: 'eavesdropper'
// };

// const obj3 = {
//     satya: 'microsoft',
//     tim: 'apple',
//     marissa: 'yahoo',
//     sundar: 'google',
//     mark: 'facebook'
// }
// Array drill

// // Rewrite the following code to use the array spread operator:

// function rectToCorners(x, y, width, height) {
//     const topLeft = [x, y];
//     const topRight = [x + width, y];
//     const bottomLeft = [x, y + height];
//     const bottomRight = [x + width, y + height];
//     return [].concat(topLeft, topRight, bottomLeft, bottomRight);
// };

// const position = [10, 20];
// const size = [5, 5];

// rectToCorners(position[0], position[1], size[0], size[1]);