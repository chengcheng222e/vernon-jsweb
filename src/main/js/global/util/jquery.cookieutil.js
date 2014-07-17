(function ($) {

    CookieUtil = function() {};

    CookieUtil.prototype.getCookie = function (sKey) {
        if (!sKey)
            return "";
        if (document.cookie.length > 0) {
            var startIndex = document.cookie.indexOf(sKey + "=")
            if (startIndex != -1) {
                startIndex = startIndex + sKey.length + 1
                var endIndex = document.cookie.indexOf(";", startIndex)
                if (endIndex == -1) {
                    endIndex = document.cookie.length;
                }
                return decodeURIComponent(document.cookie.substring(startIndex, endIndex));
            }
        }
        return ""
    };

    CookieUtil.prototype.setCookie = function (sKey, sValue, iExpireSeconds) {
        if (!sKey)
            return;
        var expireDate = new Date();
        expireDate.setTime(expireDate.getTime() + iExpireSeconds * 1000);
        this.document.cookie = sKey + "=" + encodeURIComponent(sValue) + ";expires=" + expireDate.toGMTString() + ";";
    };

    CookieUtil.prototype.deleteCookie = function (sKey) {
        if (!sKey)
            return;
        this.document.cookie = sKey + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    };

    CookieUtil = new CookieUtil();

})(jQuery);