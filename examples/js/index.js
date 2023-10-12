/*
 * @Author: Huangjs
 * @Date:   2022-01-14 09:46:58
 * @Last Modified by:   XH
 * @Last Modified time: 2022-01-15 18:39:02
 */

$(function() {
    var maxScrollTop = $('.topselect').offset().top;
    $(document).scroll(function(e) {
        $('.topselect').toggleClass('topselectfixed', document.documentElement.scrollTop >= maxScrollTop);
    });
    var vFloor = $('#vertical-floor');
    var hNumber = $('#horizontal-number');
    var hvContent = $('#hvContent');
    vFloor.click(function(ev) {
        var className = 'b_left_h01';
        var classNameSelected = 'vertical_selected';
        var target = $(ev.target || ev.srcElement);
        if (target.hasClass(className) || target.parents().hasClass(className)) {
            if (!target.hasClass(className)) target = target.parents('.' + className);
            target.siblings().removeClass(classNameSelected);
            target.addClass(classNameSelected);
            hNumber.find('.horizontal_selected').removeClass('horizontal_selected');
            hvContent.find('.horizontal_selected').removeClass('horizontal_selected');
        }
    });
    hNumber.click(function(ev) {
        var className = 'item_bt';
        var classNameSelected = 'horizontal_selected';
        var target = $(ev.target || ev.srcElement);
        if (target.hasClass(className) || target.parents().hasClass(className)) {
            if (!target.hasClass(className)) target = target.parents('.' + className);
            target.siblings().removeClass(classNameSelected);
            target.addClass(classNameSelected);
            var related = hvContent.children().eq(+target.attr('index'));
            related.siblings().removeClass(classNameSelected);
            related.addClass(classNameSelected);
            vFloor.find('.vertical_selected').removeClass('vertical_selected');
        }
    });
    hvContent.click(function(ev) {
        var className = 'biaoge';
        var target = $(ev.target || ev.srcElement);
        if (target.hasClass(className) || target.parents().hasClass(className)) {
            if (!target.hasClass(className)) target = target.parents('.' + className);
            var li = target.parent();
            var trs = Array.prototype.slice.call(hvContent.children());
            var i = trs.findIndex(function(tr) { return tr === li[0]; });
            var related = hvContent.children().eq(i);
            related.siblings().removeClass('horizontal_selected');
            related.addClass('horizontal_selected');
            related = hNumber.children().eq(i);
            related.siblings().removeClass('horizontal_selected');
            related.addClass('horizontal_selected');
            var tds = Array.prototype.slice.call(li.children());
            var j = tds.findIndex(function(td) { return td === target[0]; });
            related = vFloor.children().eq(j);
            related.siblings().removeClass('vertical_selected');
            related.addClass('vertical_selected');
        }
    });
    $('#arrow-slider .arrow_left').click(function() {
        var oneWidth = parseInt(hvContent.children().first().css('width'));
        var maxWidth = hvContent.width() - hvContent.parent().width();
        $('#arrow-slider .arrow_right').show();
        var width = +$(this).parent().attr('translate') + oneWidth;
        if (width >= 0) {
            width = 0;
            $('#arrow-slider .arrow_left').hide();
        }
        width = Math.round(width / oneWidth) * oneWidth;
        hNumber.css({
            transform: 'translateX(' + width + 'px)'
        });
        hvContent.css({
            transform: 'translateX(' + width + 'px)'
        });
        $(this).parent().attr('translate', width);
    });
    $('#arrow-slider .arrow_right').click(function() {
        var oneWidth = parseInt(hvContent.children().first().css('width'));
        var maxWidth = hvContent.width() - hvContent.parent().width();
        $('#arrow-slider .arrow_left').show();
        var width = +$(this).parent().attr('translate') - oneWidth;
        if (-width >= maxWidth) {
            width = -maxWidth;
            $('#arrow-slider .arrow_right').hide();
        }
        width = Math.round(width / oneWidth) * oneWidth;
        hNumber.css({
            transform: 'translateX(' + width + 'px)'
        });
        hvContent.css({
            transform: 'translateX(' + width + 'px)'
        });
        $(this).parent().attr('translate', width);
    });
    var maxWidth = 142;
    var number = 3;
    $(window).resize(function() {
        var viewWidth = hvContent.parent().width();
        var oneWidth = viewWidth / number;
        var index = 1;
        while (oneWidth > maxWidth) {
            oneWidth = viewWidth / (number + index);
            index++;
        };
        hNumber.children().css({ width: oneWidth });
        hvContent.children().css({ width: oneWidth });
    });
    $(window).resize();
})