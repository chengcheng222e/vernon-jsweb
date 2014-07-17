(function ($) {

    MathUtil = function () {
    };

    /**
     * 解决两个浮点数相加时会出现误差的问题
     *
     * @param n1
     * @param n2
     * @returns {Number}
     */
    MathUtil.prototype.add = function (n1, n2) { //# 加法运算
        var oT = this.preAddSubtract(n1, n2)
            , out = !(oT === oT) ? oT : ((oT.n1 + oT.n2) / Math.pow(10, Math.max(oT.d1, oT.d2))).toFixed(Math.max(oT.d1, oT.d2))
            ;
        return parseFloat(out);
    };

    /**
     * 解决两个浮点数相减时会出现误差的问题
     *
     * @param n1
     * @param n2
     * @returns {Number}
     */
    MathUtil.prototype.subtract = function (n1, n2) { //# 减法运算
        var oT = this.preAddSubtract(n1, n2)
            , out = !(oT === oT) ? oT : ((oT.n1 - oT.n2) / Math.pow(10, Math.max(oT.d1, oT.d2))).toFixed(Math.max(oT.d1, oT.d2))
            ;
        return parseFloat(out);
    };

    /**
     * 解决两个浮点数相乘时会出现误差的问题
     *
     * @param n1
     * @param n2
     * @returns {Number}
     */
    MathUtil.prototype.multiply = function (n1, n2) { //# 乘法运算
        var oT = this.preHandle(n1, n2)
            , out = !(oT === oT) ? oT : (oT.n1 * oT.n2 / Math.pow(10, oT.d1 + oT.d2)).toFixed(oT.d1 + oT.d2);
        return parseFloat(out);
    };

    /**
     * 解决两个浮点数相除时会出现误差的问题
     *
     * @param n1
     * @param n2
     * @returns {Number}
     */
    MathUtil.prototype.divide = function (n1, n2) { //# 除法运算
        var oT = this.preHandle(n1, n2)
            , out = !(oT === oT) ? oT : (oT.n1 / oT.n2 / Math.pow(10, oT.d1 - oT.d2))
            ;
        return parseFloat(out);
    };

    /**
     * 最大公约数
     *
     * @param a
     * @param b
     * @returns {*}
     */
    MathUtil.prototype.gcd = function (a, b) {
        if (b == 0) {
            return a;
        }
        ;
        return arguments.callee(b, a % b);
    };

    /**
     * 最小公倍数
     *
     * @param a
     * @param b
     * @returns {number}
     */
    MathUtil.prototype.lcm = function (a, b) {
        return ( a * b / arguments.callee(a, b) );
    };

    /**
     * 随机整数,生成从num1到num2(不包括num2)之间的随机数,若只传递一个参数，则生成0到该数之间的随机数
     *
     * @param num1
     * @param num2
     * @returns {number}
     */
    MathUtil.prototype.randInt = function (num1, num2) {
        if (num2 == undefined) {
            num2 = num1;
            num1 = 0;
        }
        return Math.floor(Math.random() * (num2 - num1) + num1);
    };

    /**
     * 随机 生成数组
     *
     * @param quantity
     * @param begin
     * @param end
     * @returns {Array}
     */
    MathUtil.prototype.randArray = function (quantity, begin, end) {
        var ar = [];
        while (quantity--) {
            ar.push(this.randInt(begin, end));
        }
        return ar;
    };

    /**
     * 生成随机字符串
     *
     * @param wordLen
     * @param baseWord
     * @returns {string}
     */
    MathUtil.prototype.randWord = function (wordLen, baseWord) {
        var words = baseWord || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+'
            , length = words.length
            , len = parseInt(wordLen) || 0 //输出单词长度
            , out = [] //记录字符
            , pos = 0 // 记录位置
            ;
        while (len--) {
            pos = this.randInt(0, length);
            out.push(words[ pos ]);
        }
        return out.join('');
    };

    /**
     * 随机颜色
     *
     * @returns {string}
     */
    MathUtil.prototype.randColor = function () {
        var color = (Math.random() * 1e7).toString(16);
        return color.slice(6);
    };

    MathUtil = new MathUtil();

})(jQuery);