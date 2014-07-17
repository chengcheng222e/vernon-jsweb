(function ($) {

    URLUtil = function () {
    };

    /**
     * 参数：变量名，url为空则表从当前页面的url中取
     *
     * @param name
     * @param url
     * @returns {*}
     */
    URLUtil.prototype.getQuery = function (name, url) {
        var u = arguments[1] || window.location.search;
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = u.substr(u.indexOf("?") + 1).match(reg);
        return r != null ? r[2] : "";
    };

    /**
     * 获取 hash值
     *
     * @param name
     * @param url
     * @returns {*}
     */
    URLUtil.prototype.getHash = function (name, url) {
        var u = arguments[1] || location.hash;
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = u.substr(u.indexOf("#") + 1).match(reg);
        if (r != null) {
            return r[2];
        }
        return "";
    };

    /**
     * 解析URL
     *
     * @param url
     * @returns {{source: (*|string), protocol: (string|*), host: string, port: (*|$.validator.methods.remote.port|Function|string), query: (Function|location.search|*|string|search|options.search), file: *, hash: (string|*), path: (string|*), relative: *, segments: (Array|*)}}
     */
    URLUtil.prototype.parse = function (url) { //#
        var a = document.createElement('a');
        url = url || document.location.href;
        a.href = url;
        return {
            source: url,
            protocol: a.protocol.replace(':', ''),
            host: a.hostname,
            port: a.port,
            query: a.search,
            file: (a.pathname.match(/([^\/?#]+)$/i) || [, ''])[1], hash: a.hash.replace('#', ''),
            path: a.pathname.replace(/^([^\/])/, '/$1'),
            relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
            segments: a.pathname.replace(/^\//, '').split('/')
        };
    }

    URLUtil = new URLUtil();

})(jQuery);