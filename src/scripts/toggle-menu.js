var main = function() {
    var $menu = $('.icon-menu');

    $($menu).click(function() {
        if (!$menu.hasClass('active')) {
            $('.menu').animate({
                right: '0px'
            }, 200);
            $('body').animate({
                right: '200px'
            }, 200);
            $menu.addClass('active');
        } else {
            $('.menu').animate({
                right: '-200px'
            }, 200);
            $('body').animate({
                right: '0px'
            }, 200);
            $menu.removeClass('active');
        }
    });
};
$(document).ready(main);