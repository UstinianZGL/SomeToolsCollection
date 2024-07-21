//快速排序
function quickSort(arr) { 
    function _quickSort(low,high) {
        //结束的标志
        if(low < 0 || high >= arr.length || low >= high) return;

        //标志  将比flag小的都放在其左侧  比它大的都放在右侧
        let flag = arr[high];
        let curLeft = low,
            curRight = high;
        while(curLeft < curRight) {
            while(arr[curLeft] <= flag && curLeft < curRight) {
                curLeft++;
            }
            //左侧指针移不动了
            arr[curRight] = arr[curLeft];
            while(arr[curRight] > flag && curLeft < curRight) {
                curRight--;
            }
            //右侧指针移不动了
            arr[curLeft] = arr[curRight];
        }
        arr[curLeft] = flag;
        //让flag 左右两侧自己去排序
        _quickSort(low,curLeft - 1);
        _quickSort(curLeft+1,high);
    }
    _quickSort(0,arr.length - 1);
    return arr;
}

let myArr = [3,1,35,7,8,4,9,21,35,3,2,4,2,1];

//采用快速排序
console.log(quickSort(myArr));