// 25. merge two objects and duplictate the values
let arr1 = [1, 2, 3, 2];
let arr2 = [2, 4, 5];

let merge = [...arr1, ...arr2];
console.log(merge);

let remove = [...new Set(merge)];
console.log(remove);
