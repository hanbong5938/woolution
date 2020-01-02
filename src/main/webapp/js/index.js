let dataTableInfo = '';
let dataTableService = '';
let custNmInfo = '';
let serviceNmInfo = '';
let custHistory = '';

const getCookie = (name) => {
    const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value ? value[2] : null;
};

const cookies = (getCookie("APPLICATION_LOCALE"));
if (cookies === 'ja') {
    $('#langIcon').html('<i class="flag-icon flag-icon-jp mr-2"></i>');
    $('#ja').addClass('active');
} else if (cookies === 'en') {
    $('#langIcon').html('<i class="flag-icon flag-icon-us mr-2"></i>');
    $('#en').addClass('active');

} else {
    $('#langIcon').html('<i class="flag-icon flag-icon-kr mr-2"></i>');
    $('#ko').addClass('active');

}

//custMGt
$('#custMgtInfo').click(function () {
    $(".content-wrapper").load("/cust-mgt/info?lang=" + getCookie('APPLICATION_LOCALE'));
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
