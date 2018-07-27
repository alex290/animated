const OFFSET = 150;
const CLASS = '.animate-js';

$(window).scroll(function() {
    animation();
});

jQuery(document).ready(function($) {
    $(CLASS).css({
        'visibility': 'hidden',
        'animation-name': 'none'
    });
});

$(window).on('load', function() {
    animation();
});


function animation() {
    var topIndex = $(this).scrollTop();
    var heightWin = $(window).outerHeight();
    $(CLASS).each(function(index, el) {

        var coordTis = $(this).offset().top - topIndex;

        var coordBoot = coordTis + $(this).outerHeight();
        var animName = $(this).attr('data-name');
        var dalayTime = $(this).attr('data-delay');
        if (!(dalayTime > 0)) {
            dalayTime = 0;
        }


        if (coordBoot > OFFSET && coordTis < (heightWin - OFFSET)) {
            if (!$(this).hasClass('anim-end-js')) {
                var idClass = 'this-animate-' + index;
                $(this).addClass(idClass);
                setTimeout(function() { animate(idClass, animName) }, dalayTime);

            }
        } else {
            if ($(this).hasClass('anim-end-js')) {
                $(this).removeClass('anim-end-js');
            }
        }

        if (coordBoot < 0 || coordTis > (heightWin)) {
            $(this).css({
                'visibility': 'hidden',
                'animation-name': 'none'
            });

        }

    });
}

function animate(attrClass, animName) {
    $('.' + attrClass).each(function(index, el) {
        $(this).addClass('anim-end-js');
        $(this).addClass('animated ' + animName).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('animated ' + animName);
        });

        $(this).css({
            'visibility': 'visible',
            'animation-name': animName
        });
        $(this).removeClass(attrClass);
    });

}