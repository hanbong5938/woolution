const getCookie = (name) => {
    const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value ? value[2] : null;
};

$('#sampleTable').click(function () {
    $(".content-wrapper").load("sampleTable?lang="+getCookie('APPLICATION_LOCALE'));
});

$('.set-language').click(function () {
    const getLanguage = $(this).closest("li").attr('id');

    // $(".content-wrapper").load("sampleTable?lang=ko")
    window.location.replace("index?lang="+getLanguage);
});
