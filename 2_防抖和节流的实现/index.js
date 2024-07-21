/**
 *  防抖：  不让同一个事件在短时间内重复触发执行
 *  通过setTimeout当用户处理完毕时再触发
 */

function debounce(fn,delay) {
    let timer = null;
    return function(...args) {
        if(timer) {
            clearInterval(timer);
        }
        timer = setTimeout(() => {
            fn(...args)
        },delay)
    }
}

/**
 * 节流：固定间隔 设置的时间值 执行一次
 */

//使用时间戳来实现节流函数
function throttle1(fn,delay) {
    let args;
    let previous = 0; //存储上一次的事件 默认为0
    return function() {
        args = arguments;
        let nowTime = new Date();
        if(nowTime - previous > delay) {
            fn(...args);
            previous = nowTime;
        }
    }
}


//使用定时器来实现节流函数
function throttle2(fn,delay) {
    let args;
    let timeout = null;

    return function() {
        args = arguments;
        if(!timeout) {
            fn(...args);
            timeout = setInterval(() => {
                timeout = null;
            }, delay);
        }
    }
}