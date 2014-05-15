(function ($) {

    ArrayUtil = function() {};

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

    ArrayUtil = new ArrayUtil();

})(jQuery);