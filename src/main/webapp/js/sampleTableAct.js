//함수
var sampleService = (() => {

    function sampleTableRegister(sampleContent, callback) {
        $.ajax({
            type: 'post',
            url: '/sampleRegister',
            data: JSON.stringify(sampleContent),
            contentType: "application/json; charset=utf-8",
            success: ((result, status, xhr) => {
                //다시 불러오기
                sampleTable.ajax.reload();
            }),
            error: (xhr, status, er) => {
                alert(er);
            }
        });
    }

    function sampleEdit() {
        const selectRaw = $(this).closest('tr').data();
        const rawData = sampleTable.row(selectRaw).data();
        console.log(rawData);
    }

    return {
        sampleTableRegister: sampleTableRegister,
        sampleEdit: sampleEdit
    }
})();


var sampleTable = $('#sample').DataTable({
    ajax: {
        "type": "GET",
        "url": "/sampleList",
        "dataType": "JSON",
        dataSrc: "",
        destroy: true,
    },
    columns: [
        {data: "id"},
        {data: "comment"},
        {data: "price"},
        {
            "data": null,
            "className": "center",
            "defaultContent": "<button onclick='sampleService.sampleEdit()'>Edit</button>" +
                "<button onclick='sampleService.sampleEdit()'>DELETE</button>"
        }
    ],
    select: true,
}).order([0, 'desc']);

//modal 열기
$("#tableRegButton").click(() => {
    $('.modal').modal();
});

//모달 등록 버튼 클릭이
$(".modal-body > .form-group > .input-group > .btn-primary").click(
    () => {

        const sampleContent = {
            comment: $("input[name=comment]").val(),
            price: $("input[name=price]").val()
        };

        //등록
        sampleService.sampleTableRegister(sampleContent);
        //모달 닫기, 빈칸 처리
        $('.modal').modal("toggle").find("input").val("");

    }
);