(function ($) {

    StringUtil = function () {
    };

    /**
     * 获取字符串长度
     *
     * @param sVal 字符串长度
     * @param bChineseDouble 中文是否算2个
     * @returns {*}
     */
    StringUtil.prototype.getLength = function (sVal, bChineseDouble) {
        var chineseRegex = /[\u4e00-\u9fa5]/g;
        if (bChineseDouble != undefined && bChineseDouble === false) {
            return sVal.length;
        }
        else {
            if (chineseRegex.test(sVal)) {
                return sVal.replace(chineseRegex, "zz").length;
            }
            return sVal.length;
        }
    };

    /**
     * 替文本中的URL添加链接和target
     *
     * @param sText
     * @param bBlank
     * @returns {*}
     */
    StringUtil.prototype.replaceURLWithHTMLLinks = function (sText, bBlank) {
        var pattern = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        if (bBlank) {
            sText = sText.replace(pattern, "<a target='_blank' href='$1'>$1</a>");
        }
        else {
            sText = sText.replace(pattern, "<a href='$1'>$1</a>");
        }
        return sText;
    };

    StringUtil.prototype.codeHtml = function (content) { //# 转义 HTML 字符
        return this.replace(content, {
            '&': "&amp;", '"': "&quot;", "'": '&#39;', '<': "&lt;", '>': "&gt;", ' ': "&nbsp;", '\t': "&#09;", '(': "&#40;", ')': "&#41;", '*': "&#42;", '+': "&#43;", ',': "&#44;", '-': "&#45;", '.': "&#46;", '/': "&#47;", '?': "&#63;", '\\': "&#92;", '\n': "<br>"
        });
    };

    //重复字符串
    StringUtil.prototype.repeat = function (word, length, end) { //# 重复字符串
        end = end || ''; //加在末位
        length = ~~length;
        return new Array(length * 1 + 1).join(word) + '' + end;
    };

    //增加前缀
    StringUtil.prototype.addPre = function (pre, word, size) { //# 补齐。如给数字前 加 0
        pre = pre || '0';
        size = parseInt(size) || 0;
        word = String(word || '');
        var length = Math.max(0, size - word.length);
        return this.repeat(pre, length, word);
    };

    //去除两边空格
    StringUtil.prototype.trim = function (text) { //# 去除两边空格
        return ( text || '' ).replace(/^\s+|\s$/, '');
    };

    //字符串替换
    StringUtil.prototype.replace = function (str, re) { //# 字符串替换
        str = str || '';
        for (var key in re) {
            replace(key, re[key]);
        }
        ;
        function replace(a, b) {
            var arr = str.split(a);
            str = arr.join(b);
        };
        return str;
    };

    /**
     *
     *
     * @param text 要过滤的文本 , 类型 ：字符串
     * @param words ['你妹', '我丢' ,'我靠']
     * @returns {string|*}
     */
    StringUtil.prototype.badWord = function (text, words) {
        text = String(text || '');
        words = words || [];
        var reg = new RegExp(words.join('|'), 'g')
            , _self = this;
        return text.replace(reg, function ($0) {
            var length = String($0 || '').length;
            return _self.repeat('*', length);
        });
    };

    StringUtil = new StringUtil();
})(jQuery);