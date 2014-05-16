(function ($) {

    ArrayUtil = function () {
    };

    ArrayUtil.prototype.arrayDistinct = function (arr) {
        var tempArr = {};
        for (var i = 0; i < arr.length; i++) {
            if (tempArr[arr[i] + 1]) {
                arr.splice(i, 1);
                i--;
                continue;
            }
            tempArr[arr[i] + 1] = true;
        }
        tempArr = null;
        return arr;
    };

    ArrayUtil.prototype.arrayIndexOf = function (arr, obj, iStart) {
        if (Array.prototype.indexOf) {
            return arr.indexOf(obj, (iStart || 0));
        }
        else {
            for (var i = (iStart || 0), j = arr.length; i < j; i++) {
                if (arr[i] === obj) {
                    return i;
                }
            }
            return -1;
        }
    };

    /**
     * inArray, 返回位置！ 不存在则返回 -1
     *
     * @param t
     * @param arr
     * @returns {*}
     */
    ArrayUtil.prototype.index = function (t, arr) {
        if (arr.indexOf) {
            return arr.indexOf(t);
        }
        for (var i = arr.length; i--;) {
            if (arr[i] === t) {
                return i * 1;
            }
        }
        return -1;
    };

    /**
     * 返回对象所有的键值
     *
     * @param data
     * @returns {Array}
     */
    ArrayUtil.prototype.getKey = function (data) {
        var arr = [];
        var k;
        for (k in data) {
            arr.push(k);
        }
        return arr;
    };

    /**
     * 从数组中 随机取出 一个值
     *
     * @param arrays
     * @returns {*|string}
     */
    ArrayUtil.prototype.random = function (arrays) {
        arrays = arrays || [];
        var len = arrays.length
            , index = julyJs.math.randInt(0, len - 1)
            ;
        return arrays[ index ] || '';
    };

    /**
     * 一维数组去重
     *
     * @param array
     * @returns {*|Array}
     */
    ArrayUtil.prototype.unique = function (array) {
        array = array || [];
        for (var i = 0, len = array.length; i < len; i++) {
            for (var j = i + 1; j < array.length; j++) {
                if (array[i] === array[j]) {
                    array.splice(j, 1);
                    j--;
                }
            }
        }
        return array;
    };

    /**
     * 求数组中最大的项
     *
     * @param array
     * @returns {number}
     */
    ArrayUtil.prototype.max = function (array) {
        return Math.max.apply(null, array);
    };

    /**
     * 数组中最小的项
     *
     * @param array
     * @returns {number}
     */
    ArrayUtil.prototype.min = function (array) { //#求数组中最小的项
        return Math.min.apply(null, array);
    };


    /**
     * 移除数组中某值
     *
     * @param array
     * @param value
     * @returns {*}
     */
    ArrayUtil.prototype.remove = function (array, value) {
        var length = array.length;
        while (length--) {
            if (value === array[ length ]) {
                array.splice(length, 1);
            }
        }
        return array;
    };

    /**
     * 清空数组
     *
     * @param array
     * @returns {*}
     */
    ArrayUtil.prototype.empty = function (array) {
        ( array || []).length = 0;
        return array;
    };

    /**
     * 删除指定位置的值, 索引不传递index,会删除第一个
     *
     * @param array
     * @param index
     * @returns {*}
     */
    ArrayUtil.prototype.removeAt = function (array, index) { //#
        array.splice(index, 1);
        return array;
    };

    /**
     * 打乱数组排序
     *
     * @param arr
     * @returns {Array}
     */
    ArrayUtil.prototype.shuffle = function (arr) { //#打乱数组排序
        var array = (arr || []).concat()
            , length = array.length
            , i = length //遍历
            , tmp = null // 临时
            , rand = julyJs.math.randInt //位置
            , pos = 0
            ;
        while (i--) {
            pos = rand(0, length);
            //交换随机位置
            tmp = array[ pos ];
            array[ pos ] = array[ i ];
            array[ i ] = tmp;
        }
        return array;
    }
    
    ArrayUtil = new ArrayUtil();

})(jQuery);