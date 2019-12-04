const sampleService = (() => {

    function sampleTableRegister(sampleContent, callback) {
        $.ajax({
            type: 'post',
            url: '/sampleRegister',
            data: JSON.stringify(sampleContent),
            // beforeSend : function(xhr)
            // {   /*데이터를 전송하기 전에 헤더에 csrf값을 설정한다*/
            //     xhr.setRequestHeader("${_csrf.headerName}", "${_csrf.token}");
            // },
            contentType: "application/json; charset=utf-8",
            success: ((result, status, xhr) => {
                if (callback) {
                    callback(result);
                }
            }),
            error: (xhr, status, er) => {
                alert(er);
            }
        });
    }

    //data테이블 설정
    function sampleList() {
        $('#sample').DataTable({
            ajax: {
                "type" : "GET",
                "url" : "/sampleList",
                "dataType": "JSON",
                dataSrc:"",
                bDestroy: true
            },
            columns: [
                { data: "id" },
                { data: "comment" },
                { data: "price" }
            ]
        });
    }

    return {
        sampleTableRegister: sampleTableRegister,
        sampleList: sampleList,
    }
})();

$(function () {
    sampleService.sampleList();
});

//modal 열기
$("#regBtn").click(() => {
    $('.modal').modal();
});


//
$(".input-group > .btn-primary").click(
    () => {
        const modalComment = $("input[name=comment]").val();
        const modalPrice = $("input[name=price]").val();
        const sampleContent = {
            comment: modalComment,
            price: modalPrice
        };
        sampleService.sampleTableRegister(sampleContent);
        $('.modal').modal("hide");
        // sampleService.sampleList();
    }
);

