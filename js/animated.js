const OFFSET = 150;

$(window).scroll(function() {
    var topIndex = $(this).scrollTop();
    var heightWin = $(window).outerHeight();
    $('.animate-js').each(function(index, el) {

        var coordTis = $(this).offset().top - topIndex;

        var coordBoot = coordTis + $(this).outerHeight();
        var animName = $(this).attr('data-name');

        if (coordBoot > OFFSET && coordTis < (heightWin - OFFSET)) {
            if (!$(this).hasClass('anim-end-js')) {
                $(this).addClass('anim-end-js');
                $(this).addClass('animated ' + animName).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    $(this).removeClass('animated ' + animName);
                });

                $(this).css({
                    'visibility': 'visible',
                    'animation-name': animName
                });
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
});