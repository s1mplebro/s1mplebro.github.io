let $page = $('html');
$('a[href*="#ferma"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    },800);
    return false;
});

