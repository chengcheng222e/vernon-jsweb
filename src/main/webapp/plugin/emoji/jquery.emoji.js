(function ($) {

    EmojiUtil = function (options) {
        this.options = options || {};
        this.imgbase = "http://192.168.1.29/wendaimg/";
        this.faceHash = [];
        this.current = null;
        var html = [
            '<div id="emoji_face_box" class="emoji_face_box" style="display: none;" node-type="emoji_face_box">',
            '   <div class="emoji_face_tit">',
            '       <div class="emoji_face_arr"></div>',
            '       <div class="emoji_face_tit_lf">普通表情</div> <a class="emoji_icon_close" href="javascript:;" node-type="emoji_icon_close"></a>',
            '   </div>',
            '   <div class="emoji_face_con">',
            '       <ul class="emoji_face_list" node-type="emoji_face_list">',
            '       </ul>',
            '       <div class="tsina_loading cter">',
            '       <span class="tsina_ico_ldg"></span>',
            '       </div>',
            '   </div>',
            '</div>'
        ].join('');
        this.emoji_face = $(html);
    };

    EmojiUtil.prototype.initFace = function () {
        var s = [];
        s[0] = "[织]";
        s[1] = "[神马]";
        s[2] = "[浮云]";
        s[3] = "[给力]";
        s[4] = "[围观]";
        s[5] = "[威武]";
        s[6] = "[熊猫]";
        s[7] = "[兔子]";
        s[8] = "[奥特曼]";
        s[9] = "[囧]";
        s[10] = "[互粉]";
        s[11] = "[礼物]";
        s[12] = "[呵呵]";
        s[13] = "[嘻嘻]";
        s[14] = "[哈哈]";
        s[15] = "[可爱]";
        s[16] = "[可怜]";
        s[17] = "[挖鼻屎]";
        s[18] = "[吃惊]";
        s[19] = "[害羞]";
        s[20] = "[挤眼]";
        s[21] = "[闭嘴]";
        s[22] = "[鄙视]";
        s[23] = "[爱你]";
        s[24] = "[泪]";
        s[25] = "[偷笑]";
        s[26] = "[亲亲]";
        s[27] = "[生病]";
        s[28] = "[太开心]";
        s[29] = "[懒得理你]";
        s[30] = "[右哼哼]";
        s[31] = "[左哼哼]";
        s[32] = "[嘘]";
        s[33] = "[衰]";
        s[34] = "[委屈]";
        s[35] = "[吐]";
        s[36] = "[打哈气]";
        s[37] = "[抱抱]";
        s[38] = "[怒]";
        s[39] = "[疑问]";
        s[40] = "[馋嘴]";
        s[41] = "[拜拜]";
        s[42] = "[思考]";
        s[43] = "[汗]";
        s[44] = "[困]";
        s[45] = "[睡觉]";
        s[46] = "[钱]";
        s[47] = "[失望]";
        s[48] = "[酷]";
        s[49] = "[花心]";
        s[50] = "[哼]";
        s[51] = "[鼓掌]";
        s[52] = "[晕]";
        s[53] = "[悲伤]";
        s[54] = "[抓狂]";
        s[55] = "[黑线]";
        s[56] = "[阴险]";
        s[57] = "[怒骂]";
        s[58] = "[心]";
        s[59] = "[伤心]";
        s[60] = "[猪头]";
        s[61] = "[ok]";
        s[62] = "[耶]";
        s[63] = "[good]";
        s[64] = "[不要]";
        s[65] = "[赞]";
        s[66] = "[来]";
        s[67] = "[弱]";
        s[68] = "[蜡烛]";
        s[69] = "[钟]";
        s[70] = "[蛋糕]";
        s[71] = "[话筒]";
        for (var i = 0; i < s.length; i++) {
            this.faceHash[s[i]] = i + ".gif";
        }
        this.faceHash.src = s;
    }

    EmojiUtil.prototype.addFaces = function () {
        var this$ = this;
        if (this.faceHash.src) {
            for (var i = 0; i < this.faceHash.src.length; i++) {
                $(".emoji_face_list").append('<li><a title="' + this.faceHash.src[i] + '"   href="javascript:;"><img src="' + this.getFaceImg(i + ".gif") + '"></a></li>');
            }
            // 点击表情
            $(".emoji_face_list li a img").click(function () {
                if (this$.options.afterSelected) {
                    this$.options.afterSelected($(this).closest('a').attr('title'));
                }
                $(".emoji_face_box").hide();
            });
            this.faceHash.src = null;
        }
    };

    EmojiUtil.prototype.init = function () {
        if (this.options['current']) {
            this.current = this.options['current'];
        }
        if ($('#emoji_face_box').length == 0) {
            $('body').append(this.emoji_face);
            this.initFace();
            this.addFaces();
            this.emoji_face.css("top", this.current.offset().top + this.current.height() + 5)
                .css("left", this.current.offset().left);
            this.show();
        }
    };

    EmojiUtil.prototype.reset = function (options) {
        this.options = options || {};
        if (this.options['current']) {
            this.current = this.options['current'];
        }
        this.emoji_face.css("top", this.current.offset().top + this.current.height() + 5)
            .css("left", this.current.offset().left);
    };


    EmojiUtil.prototype.getFaceImg = function (gif) {
        return  this.imgbase + "imface/common/" + gif;
    };

    EmojiUtil.prototype.show = function () {
        this.emoji_face.show();
    };

    EmojiUtil.prototype.hide = function () {
        this.emoji_face.hide();
    };


})(jQuery);