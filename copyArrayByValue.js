//METHOD-1- ARRAY
console.log("METHOD-1-ARRAY");

let arr = [1, 2, 3, 4, 5, 6];
let arrCopy = [];

arrCopy = arr.slice();
console.log("arr is:", arr, "arrCopy is", arrCopy);
arr.push(100);

console.log("arr is:", arr, "arrCopy is", arrCopy);

//METHOD-1-OBJECT
console.log("METHOD-1-OBJECT");
let obj = { name: "Mercedes", color: "black" };
let objCopy = {};

objCopy = { ...obj };

console.log("obj is:", obj, "objCopy is", objCopy);
obj.name = 'Maruthi';

console.log("obj is:", obj, "objCopy is", objCopy);


//METHOD2 -ARRAY
console.log("METHOD-2-ARRAY");
let arr2 = [1, 2, 3, 4, 5, 6];
let arrCopy2 = [];

arrCopy2 = JSON.parse(JSON.stringify(arr2));
console.log("arr2 is:", arr2, "arrCopy2 is", arrCopy2);
arr2.push(100);

console.log("arr2 is:", arr2, "arrCopy2 is", arrCopy2);

//METHOD2-OBJECT
console.log("METHOD-2-OBJECT");
let obj2 = { name: "Mercedes", color: "black" };
let objCopy2 = {};

objCopy2 = Object.assign({}, obj2);

console.log("obj2 is:", obj2, "objCopy2 is", objCopy2);
obj2.name = 'Maruthi';

console.log("obj2 is:", obj2, "objCopy2 is", objCopy2);


//METHOD-3-ARRAY
console.log("METHOD-3-ARRAY");
let arr3 = [1, 2, 3, 4, 5, 6];
let arrCopy3 = [];

for (let ele of arr3) 
arrCopy3.push(ele);
    

console.log("arr3 is:", arr3, "arrCopy is", arrCopy3);
arr3.push(100);

console.log("arr3 is:", arr3, "arrCopy3 is", arrCopy3);

//METHOD-3-OBJECT
console.log("METHOD-3-OBJECT");
let obj3 = { name: "Mercedes", color: "black" };
let objCopy3 = {};

objCopy3 = JSON.parse(JSON.stringify(obj3));

console.log("obj2 is:", obj3, "objCopy3 is", objCopy3);
obj3.name = 'Suzuki';

console.log("obj3 is:", obj3, "objCopy3 is", objCopy3);