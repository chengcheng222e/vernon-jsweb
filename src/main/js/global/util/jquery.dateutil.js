(function ($) {

    DateUtil = function () {
    };

    DateUtil.prototype.daysInFebruary = function (obj) {
        var year = 0;
        if (obj instanceof Date) {
            year = obj.getFullYear();
        }
        else if (typeof obj === "number") {
            year = obj;
        }
        else {
            return 0;
        }
        if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
            return 29;
        }
        return 28;
    };

    DateUtil.prototype.daysInYear = function (obj) {
        var year = 0;
        if (obj instanceof Date) {
            year = obj.getFullYear();
        }
        else if (typeof obj === "number") {
            year = obj;
        }
        else {
            return 0;
        }
        if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
            return 366;
        }
        return 365;
    };

    DateUtil.prototype.dateFormat = function (date, sFormat, sLanguage) {
        var time = {};
        time.Year = date.getFullYear();
        time.TYear = ("" + time.Year).substr(2);
        time.Month = date.getMonth() + 1;
        time.TMonth = time.Month < 10 ? "0" + time.Month : time.Month;
        time.Day = date.getDate();
        time.TDay = time.Day < 10 ? "0" + time.Day : time.Day;
        time.Hour = date.getHours();
        time.THour = time.Hour < 10 ? "0" + time.Hour : time.Hour;
        time.hour = time.Hour < 13 ? time.Hour : time.Hour - 12;
        time.Thour = time.hour < 10 ? "0" + time.hour : time.hour;
        time.Minute = date.getMinutes();
        time.TMinute = time.Minute < 10 ? "0" + time.Minute : time.Minute;
        time.Second = date.getSeconds();
        time.TSecond = time.Second < 10 ? "0" + time.Second : time.Second;
        time.Millisecond = date.getMilliseconds();
        time.Week = date.getDay();

        var MMMArrEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            MMMArr = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            WeekArrEn = ["Sun", "Mon", "Tue", "Web", "Thu", "Fri", "Sat"],
            WeekArr = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            oNumber = time.Millisecond / 1000;

        if (sFormat != undefined && sFormat.replace(/\s/g, "").length > 0) {
            if (sLanguage != undefined && sLanguage === "en") {
                MMMArr = MMMArrEn.slice(0);
                WeekArr = WeekArrEn.slice(0);
            }
            sFormat = sFormat.replace(/yyyy/ig, time.Year)
                .replace(/yyy/ig, time.Year)
                .replace(/yy/ig, time.TYear)
                .replace(/y/ig, time.TYear)
                .replace(/MMM/g, MMMArr[time.Month - 1])
                .replace(/MM/g, time.TMonth)
                .replace(/M/g, time.Month)
                .replace(/dd/ig, time.TDay)
                .replace(/d/ig, time.Day)
                .replace(/HH/g, time.THour)
                .replace(/H/g, time.Hour)
                .replace(/hh/g, time.Thour)
                .replace(/h/g, time.hour)
                .replace(/mm/g, time.TMinute)
                .replace(/m/g, time.Minute)
                .replace(/ss/ig, time.TSecond)
                .replace(/s/ig, time.Second)
                .replace(/fff/ig, time.Millisecond)
                .replace(/ff/ig, oNumber.toFixed(2) * 100)
                .replace(/f/ig, oNumber.toFixed(1) * 10)
                .replace(/EEE/g, WeekArr[time.Week]);
        }
        else {
            sFormat = time.Year + "-" + time.Month + "-" + time.Day + " " + time.Hour + ":" + time.Minute + ":" + time.Second;
        }
        return sFormat;
    };

    DateUtil.prototype.dateDiff = function (biggerDate, smallerDate) {
        var intervalSeconds = parseInt((biggerDate - smallerDate) / 1000);
        if (intervalSeconds < 60) {
            return intervalSeconds + "秒";
        }
        else if (intervalSeconds < 60 * 60) {
            return Math.floor(intervalSeconds / 60) + "分钟";
        }
        else if (intervalSeconds < 60 * 60 * 24) {
            return Math.floor(intervalSeconds / (60 * 60)) + "小时";
        }
        else if (intervalSeconds < 60 * 60 * 24 * 7) {
            return Math.floor(intervalSeconds / (60 * 60 * 24)) + "天";
        }
        else if (intervalSeconds < 60 * 60 * 24 * 31) {
            return Math.floor(intervalSeconds / (60 * 60 * 24 * 7)) + "周";
        }
        else if (intervalSeconds < 60 * 60 * 24 * 365) {
            return Math.floor(intervalSeconds / (60 * 60 * 24 * 30)) + "月";
        }
        else if (intervalSeconds < 60 * 60 * 24 * 365 * 1000) {
            return Math.floor(intervalSeconds / (60 * 60 * 24 * 365)) + "年";
        }
        else {
            return Math.floor(intervalSeconds / (60 * 60 * 24)) + "天";
        }
    };

    DateUtil.prototype.dateInterval = function (biggerDate, smallerDate) {
        var intervalSeconds = parseInt((biggerDate - smallerDate) / 1000),
            day = Math.floor(intervalSeconds / (60 * 60 * 24)),
            hour = Math.floor((intervalSeconds - day * 24 * 60 * 60) / 3600),
            minute = Math.floor((intervalSeconds - day * 24 * 60 * 60 - hour * 3600) / 60),
            second = Math.floor(intervalSeconds - day * 24 * 60 * 60 - hour * 3600 - minute * 60);
        return day + "天:" + hour + "小时:" + minute + "分钟:" + second + "秒";
    };

    /**
     * 倒计时
     *
     * @param opt
     */
    DateUtil.prototype.countDown = function (opt) {
        var option = {
            nowTime: 0, // 当前时间:2013/02/01 18:30:30
            endTime: 0, // 截止时间:2013/02/01 18:30:30
            interval: 1, // 间隔回调时间秒
            called: function (day, hour, second, minute) {
            },//每次回调
            finaled: function () {
            } //完成后回调
        };
        var opts = {};
        var timer = null;
        opts = julyJs.extend(option, opt);

        //当前时间
        if (!opts.nowTime) {
            opts.nowTime = (new Date()).getTime();
        } else {
            opts.nowTime = this.parse(opts.nowTime);
        }
        //当前时间
        if (!opts.endTime) {
            opts.endTime = (new Date()).getTime();
        } else {
            opts.endTime = this.parse(opts.endTime);
        }

        timer = setInterval(loop, opts.interval * 1e3);
        // 循环
        function loop() {
            var ts = opts.endTime - opts.nowTime //计算剩余的毫秒数
                , dd = parseInt(ts / 8.64e7)	//计算剩余的天数
                , hh = parseInt(ts / 3.6e7 % 24)//计算剩余的小时数
                , mm = parseInt(ts / 6e4 % 60)//计算剩余的分钟数
                , ss = parseInt(ts / 1e3 % 60)//计算剩余的秒数
                ;
            //当前时间递减
            opts.nowTime += opts.interval * 1e3;
            if (ts <= 0) {
                clearInterval(timer);
                opts.finaled();
            } else {
                opts.called(dd, hh, mm, ss);
            }
        }
    };

    DateUtil = new DateUtil();

})(jQuery);