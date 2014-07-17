(function ($) {

    ListBoxUtil = function (options) {
        this.options = options || {};
        this.target = null;
        this.targetWrap = null;
        this.width = 600;
        this.top = 0;
        this.left = 0;
        this.id = "listbox";
        this.bodyHtml = "";
        this.currentIndex = 0;
        this.callFunction = null;
        var html = [
                '<div class="ac-renderer" role="listbox" id="' + this.id + '" style="-webkit-user-select: none;">',
            '</div>'
        ].join('');
        this.listbox = $(html);
    };

    ListBoxUtil.prototype.init = function () {
        var this$ = this;
        this$.setConfig();
        this$.mouseHover();
        this$.keyup();
        this$.bindClick();
        this$.target.on('focus', function () {
            this$.show();
        }).on('blur', function () {
            setTimeout(function () {
                this$.hide()
            }, 150);
        });
    };

    ListBoxUtil.prototype.setConfig = function () {
        if (this.options != null) {
            if (this.options['target']) {
                this.target = this.options['target'];
            }
            if (this.options['targetWrap']) {
                this.targetWrap = this.options['targetWrap'];
            }
            if (this.options['width']) {
                this.listbox.width(this.options['width']);
            }
            if (this.options['bodyHtml']) {
                this.listbox.append(this.options['bodyHtml']);
            }
            if (this.options['left']) {
                this.listbox.left(this.options['left']);
            } else {
                this.listbox.css("left", this.target.offset().left);
            }
            if (this.options['top']) {
                this.listbox.top(this.options['top']);
            } else {
                this.listbox.css("top", this.target.offset().top + this.target.height() + 10);
            }
            if (this.options['callFunction']) {
                this.callFunction = this.options['callFunction'];
            }
            this.targetWrap.append(this.listbox);
        }
    };

    ListBoxUtil.prototype.mouseHover = function () {
        var this$ = this;
        this.listbox.children().hover(
            function () {
                this$.listbox.children().removeClass('ac-active active');
                $(this).addClass("ac-active active");
                //
            }
        );
    };

    ListBoxUtil.prototype.keyMove = function (e) {
        var listChild = this.listbox.children().removeClass("ac-active active");
        // 向上
        if (e.keyCode == 38) {
            if (this.currentIndex > 0) {
                this.currentIndex--;
            } else {
                this.currentIndex = listChild.length - 1;
            }
        }
        // 向下
        else if (e.keyCode == 40) {
            if (this.currentIndex == listChild.length - 1) {
                this.currentIndex = 0;
            } else {
                this.currentIndex++;
            }
        }
        listChild.eq(this.currentIndex).addClass("ac-active active");
    };

    ListBoxUtil.prototype.hide = function () {
        this.listbox.hide();
    };

    ListBoxUtil.prototype.show = function () {
        this.listbox.show();
    };

    ListBoxUtil.prototype.bindClick = function () {
        var this$ = this;
        this$.listbox.children().on('click', function () {
            if (this$.options.afterSelected) {
                this$.options.afterSelected($(this));
            }
        });
    };

    ListBoxUtil.prototype.enter = function (e) {
        var this$ = this;
        var curentChild = this$.listbox.children().eq(this$.currentIndex);
        if (this$.options.afterSelected) {
            this$.options.afterSelected(curentChild);
        }
    };

    ListBoxUtil.prototype.keyup = function () {
        var this$ = this;
        this.target.on('keyup', function (e) {
            if (e.keyCode == 38 || e.keyCode == 40) {
                this$.keyMove(e);
            } else if (e.keyCode == 13) {
                this$.enter(e);
            }
        });
    };


})(jQuery);