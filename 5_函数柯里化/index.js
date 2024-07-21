//柯里化的意义就是固化部分参数

/**
 *  类型1：已经知道函数的参数个数
 * 
 */

//已知参数个数的柯里化
function curry() {
    //拿到需要柯里化的函数
    const fn = arguments[0];
    //拿到当前传递进来的参数列表
    let curArg = Array.prototype.slice.call(arguments,1);

    if(curArg.length === fn.length) {
        console.log('参数个数到达了')
        return fn.apply(this,curArg);
    }
    
    function _curry() {
        //合并参数
        curArg.push(...arguments)
        if(curArg.length === fn.length) {  //参数个数达到要求了
            console.log('参数个数到达了11')
            return fn.apply(this,curArg);
        }else {
            console.log('参数个数未到达')
            return _curry;
        }

    }
    return _curry;
    
}

function addNumber(a,b,c,d,e) {
    return a + b + c + d + e;
}

// curry(addNumber,1,2)(3)(4)(6);
// let newAddFun = curry(addNumber,6,7);
//前两个参数已固定 只需要传递后三个参数
// console.log(newAddFun(1,2,3));


/**
 *  类型2：未知参数个数的相加函数
 *  例如实现：add()函数
 *  add(1,2,3)(4)(5)(6)
 *  add(1)(2)(3,4)(5,6)(7)
 * 
 */


function add() {
    let allArgs = [...arguments];

    //定义内部函数 利用闭包特性保存allArgs 并继续收集参数
    function _add() {
        allArgs.push(...arguments)
        return _add;
    }

    //当调用toValueOf方法时，认为参数传递完毕了
    _add.toValueOf = () => {
        return allArgs.reduce(((pre,cur) => pre + cur),0)
    }

    return _add;

}

console.log(add(1,2,3)(4)(5)(6).toValueOf());
console.log(add(1)(2)(3,4)(5,6)(7).toValueOf())

