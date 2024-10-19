(function ($) {

    "use strict";

    // NAVBAR
    $('.navbar-collapse a').on('click', function () {
        $(".navbar-collapse").collapse('hide');
    });

    $(function () {
        $('.hero-slides').vegas({
            slides: [
                {src: 'images/slides/anh-cuoi-1.jpg'},
                {src: 'images/slides/anh-cuoi-2.jpg'},
                {src: 'images/slides/anh-cuoi-3.jpg'}
            ],
            timer: false,
            animation: 'kenburns',
        });
    });

    // CUSTOM LINK
    $('.smoothscroll').click(function () {
        var el = $(this).attr('href');
        var elWrapped = $(el);
        var header_height = $('.navbar').height() + 60;

        scrollToDiv(elWrapped, header_height);
        return false;

        function scrollToDiv(element, navheight) {
            var offset = element.offset();
            var offsetTop = offset.top;
            var totalScroll = offsetTop - navheight;

            $('body,html').animate({
                scrollTop: totalScroll
            }, 300);
        }
    });
    var words = ['Happy Ending', 'Đức Hòa - Mỹ Hoa'],
        part,
        i = 0,
        offset = 0,
        len = words.length,
        forwards = true,
        skip_count = 0,
        skip_delay = 15,
        speed = 70;
    var wordflick = function () {
        setInterval(function () {
            if (forwards) {
                if (offset >= words[i].length) {
                    ++skip_count;
                    if (skip_count == skip_delay) {
                        forwards = false;
                        skip_count = 0;
                    }
                }
            } else {
                if (offset == 0) {
                    forwards = true;
                    i++;
                    offset = 0;
                    if (i >= len) {
                        i = 0;
                    }
                }
            }
            part = words[i].substr(0, offset);
            if (skip_count == 0) {
                if (forwards) {
                    offset++;
                } else {
                    offset--;
                }
            }
            $('.word').text(part);
        }, speed);
    };

    $(document).ready(function () {
        wordflick();
    });
})(window.jQuery);


