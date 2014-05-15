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

    StringUtil = new StringUtil();
})(jQuery);