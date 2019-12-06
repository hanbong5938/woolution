dataTableService = (() => {

    function serviceTableRegister(serviceContent, callback) {
        $.ajax({
            type: 'post',
            url: '/service-mgt/infoInsert',
            data: JSON.stringify(serviceContent),
            contentType: "application/json; charset=utf-8",
            success: ((result, status, xhr) => {
                console.log(result)
                //다시 불러오기
                dataTableInfo.ajax.reload();
            }),
            error: (xhr, status, er) => {
                alert(er);
            }
        });
    }

    function serviceEdit() {
        const selectRaw = $(this).closest('tr').data();
        const rawData = dataTableInfo.row(selectRaw).data();
        console.log(rawData);
    }

    return {
        serviceTableRegister: serviceTableRegister,
        serviceEdit: serviceEdit
    }
})();

dataTableInfo = $("#dataTableInfo").DataTable({
    ajax: {
        "type": "GET",
        "url": "/service-mgt/infoList",
        "dataType": "JSON",
        dataSrc: "",
        destroy: true,
    },
    columns: [
        {data: "id"},
        {data: "service_kind"},
        {data: "service_desc"},
        {data: "service_price"},
        {data: "service_tet"},
        {data: "service_state"},
        {data: "service_createAT"},
        {
            "data": null,
            "className": "center",
            "defaultContent": "<a onclick='dataTableService.serviceEdit()'>Edit</a>"
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

        const serviceContent = {
                service_kind: $("input[name=service_kind]").val(),
                service_desc: $("input[name=service_desc]").val(),
                service_price: $("input[name=service_price]").val(),
                service_tet: $("input[name=service_tet]").val(),
                service_state: $("input[name=service_state]").val(),
            }
        ;

        //등록
        dataTableService.serviceTableRegister(serviceContent);

        //모달 닫기, 빈칸 처리
        $('.modal').modal("toggle").find("input").val("");
    }
);
