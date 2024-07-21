//1 通过set来对数组去重
function removeArrRepeatEl(arr) {
    return [...new Set(arr)]
}

let arr1 = [1,1,2,2,2,2,4,4,5,3,2,6,7]
let arr2 = ['a','a',1,1,1,'abc','abc','2','2',2,2,3,3,4]

console.log(removeArrRepeatEl(arr1));
console.log(removeArrRepeatEl(arr2));