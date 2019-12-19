let dataTableInfo = '';
let dataTableService = '';
let custNmInfo = '';
let serviceNmInfo = '';

const getCookie = (name) => {
    const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value ? value[2] : null;
};

//dashboard
$(".content-wrapper").load("/dashboard?lang=" + getCookie('APPLICATION_LOCALE'));
//--dashboard

//custMGt
$('#custMgtInfo').click(function () {
    $(".content-wrapper").load("/cust-mgt/info?lang=" + getCookie('APPLICATION_LOCALE'));
});

$('#custMgtCoupon').click(function () {
    $(".content-wrapper").load("/cust-mgt/coupon?lang=" + getCookie('APPLICATION_LOCALE'));
});
$('#custMgtBook').click(function () {
    $(".content-wrapper").load("/cust-mgt/book?lang=" + getCookie('APPLICATION_LOCALE'));
});

$('#custMgtAnal').click(function () {
    $(".content-wrapper").load("/cust-mgt/anal?lang=" + getCookie('APPLICATION_LOCALE'));
});
//--custMGt


//serviceMGt
$('#serviceMgtInfo').click(function () {
    $(".content-wrapper").load("/service-mgt/info?lang=" + getCookie('APPLICATION_LOCALE'));
});

$('#serviceMgtMessage').click(function () {
    $(".content-wrapper").load("/service-mgt/message?lang=" + getCookie('APPLICATION_LOCALE'));
});

$('#serviceMgtCoupon').click(function () {
    $(".content-wrapper").load("/service-mgt/coupon?lang=" + getCookie('APPLICATION_LOCALE'));
});
$('#serviceMgtBook').click(function () {
    $(".content-wrapper").load("/service-mgt/book?lang=" + getCookie('APPLICATION_LOCALE'));
});

$('#serviceMgtAnal').click(function () {
    $(".content-wrapper").load("/service-mgt/anal?lang=" + getCookie('APPLICATION_LOCALE'));
});
//--serviceMGt

//salesMGt
$('#salesMgtInfo').click(function () {
    $(".content-wrapper").load("/sales-mgt/info?lang=" + getCookie('APPLICATION_LOCALE'));
});

$('#salesMgtAnal').click(function () {
    $(".content-wrapper").load("/sales-mgt/anal?lang=" + getCookie('APPLICATION_LOCALE'));
});
//--salesMGt

//language
$('.set-language').click(function () {
    const getLanguage = $(this).closest("a").attr('id');
    window.location.replace("index?lang=" + getLanguage);
});
