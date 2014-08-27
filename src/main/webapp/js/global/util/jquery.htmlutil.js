(function ($) {

    HtmlUtil = function() {};

    HtmlUtil.prototype.htmlEncode = function (sHtml) {
        var div = this.document.createElement("div"),
            text = this.document.createTextNode(sHtml);
        div.appendChild(text);
        return div.innerHTML;
    };

    HtmlUtil.prototype.htmlDecode = function (sHtml) {
        var div = this.document.createElement("div");
        div.innerHTML = sHtml;
        return div.innerText || div.textContent;
    };

    HtmlUtil = new HtmlUtil();

})(jQuery);