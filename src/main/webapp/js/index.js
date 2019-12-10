let dataTableInfo = '';
let dataTableService = '';

const getCookie = (name) => {
    const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value ? value[2] : null;
};

$('#sampleTable').click(function () {
    $(".content-wrapper").load("sampleTable?lang=" + getCookie('APPLICATION_LOCALE'));
});

$('#serviceMgtInfo').click(function () {
    $(".content-wrapper").load("/service-mgt/info?lang=" + getCookie('APPLICATION_LOCALE'));
});

$('#serviceMgtMessage').click(function () {
    $(".content-wrapper").load("/service-mgt/message?lang=" + getCookie('APPLICATION_LOCALE'));
});

$('#serviceMgtCoupon').click(function () {
    $(".content-wrapper").load("/service-mgt/coupon?lang=" + getCookie('APPLICATION_LOCALE'));
});
$('#serviceMgtBokk').click(function () {
    $(".content-wrapper").load("/service-mgt/book?lang=" + getCookie('APPLICATION_LOCALE'));
});

$('#serviceMgtAnal').click(function () {
    $(".content-wrapper").load("/service-mgt/anal?lang=" + getCookie('APPLICATION_LOCALE'));
});

$('.set-language').click(function () {
    const getLanguage = $(this).closest("li").attr('id');
    window.location.replace("index?lang=" + getLanguage);
});
