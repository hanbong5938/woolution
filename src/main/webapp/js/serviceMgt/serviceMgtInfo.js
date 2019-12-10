dataTableService = (() => {

    function serviceTableRegister(serviceContent) {
        $.ajax({
            type: 'post',
            url: '/service-mgt/infoInsert',
            data: JSON.stringify(serviceContent),
            contentType: "application/json; charset=utf-8",
            success: (() => {
                //다시 불러오기
                dataTableInfo.ajax.reload();
            }),
            error: (xhr, status, er) => {
            }
        });
    }


    function serviceTableMod(serviceContent) {
        $.ajax({
            type: 'patch',
            url: '/service-mgt/infoMod',
            data: JSON.stringify(serviceContent),
            contentType: "application/json; charset=utf-8",
            success: (() => {
                //다시 불러오기
                dataTableInfo.ajax.reload();
            }),
            error: (xhr, status, er) => {
            }
        });
    }


    function serviceTableDel(id) {
        $.ajax({
            type: 'patch',
            url: '/service-mgt/infoDel',
            data: JSON.stringify(id),
            contentType: "application/json; charset=uft-8",
            success: ((result, status, xhr) => {
                dataTableInfo.ajax.reload();
            }),
            error: (xhr, status, er) => {
            }
        })
    }

    function categoryModalAdd(categoryData) {
        $.ajax({
            type: 'post',
            url: '/service-mgt/infoCategoryAdd',
            data: JSON.stringify(categoryData),
            contentType: "application/json; charset=uft-8",
            success: (() => {

            }),
            error: () => {

            }
        })
    }


    function serviceEdit() {
        const selectRaw = $(this).closest('tr').data();
        const rawData = dataTableInfo.row(selectRaw).data();

        $('#serviceMgtModal').modal();

        //버튼 보여주고 숨기기
        $(".modal-footer > .btn-primary").hide();
        $(".modal-footer > .btn-danger").show();
        $(".modal-footer > .btn-info").show();


        //데이터 집어넣기
        $("input[name=id]").val(rawData.id);
        $('select[name=service_category_id]').val(rawData.service_category_id);
        $("textarea[name=service_desc]").val(rawData.service_desc);
        $("input[name=service_price]").val(rawData.service_price);
        $("input[name=service_tet]").val(rawData.service_tet);
        $("input[name=service_state]").val(rawData.service_state);

    }

    //카테고리 list
    function serviceTableCategory() {
        $.ajax({
            type: 'get',
            url: '/service-mgt/infoCategory',
            dataType: "JSON",
            success: ((data) => {
                for (let i = 0; i < data.length; i++) {
                    $('select[name=service_category_id]').append('<option value="' + data[i].id + '">' + data[i].service_category_name + '</option>');
                }
            })
        })
    }

    //모달 close랑 초기화
    function modalClose(modalId) {
        $(modalId).modal("toggle").find('input,textarea, select').val('');
    }

    return {
        serviceTableRegister: serviceTableRegister,
        serviceTableMod: serviceTableMod,
        serviceTableDel: serviceTableDel,
        serviceEdit: serviceEdit,
        serviceTableCategory: serviceTableCategory,
        modalClose: modalClose,
        categoryModalAdd: categoryModalAdd
    }
})();

//카테고리 가져오기
dataTableService.serviceTableCategory();

//데이터 테이블 js이용
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
        {data: "service_category_name"},
        {data: "service_desc"},
        {data: "service_price"},
        {data: "service_tet"},
        {data: "service_state", visible: false},
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
$("#tableRegBtn").click(() => {

    //초기화 위해서
    dataTableService.modalClose('#serviceMgtModal');
    $('#serviceMgtModal').modal();
    $(".modal-footer > .btn-primary").show();
    $(".modal-footer > .btn-danger").hide();
    $(".modal-footer > .btn-info").hide();
});

$("#tableCategoryRegBtn").click(() => {
    //초기화 위해서
    dataTableService.modalClose('#categoryAddModal');

    $('#categoryAddModal').modal();

});


//모달 등록 버튼 클릭이
$(".modal-footer > .btn-primary").click(
    () => {
        const serviceContent = {
                service_category_id: $('select[name=service_category_id]').val(),
                service_desc: $("textarea[name=service_desc]").val(),
                service_price: $("input[name=service_price]").val(),
                service_tet: $("input[name=service_tet]").val(),
                service_state: $("input[name=service_state]").val(),
            }
        ;

        //등록
        dataTableService.serviceTableRegister(serviceContent);

        //모달 닫기, 빈칸 처리
        dataTableService.modalClose('#serviceMgtModal');

    }
);

//모달 수정
$(".modal-footer > .btn-info").click(
    () => {
        const serviceContent = {
            id: $("input[name=id]").val(),
            service_category_id: $('select[name=service_category_id]').val(),
            service_desc: $("textarea[name=service_desc]").val(),
            service_price: $("input[name=service_price]").val(),
            service_tet: $("input[name=service_tet]").val(),
            service_state: $("input[name=service_state]").val(),
        };

        //등록
        dataTableService.serviceTableMod(serviceContent);

        //모달 닫기, 빈칸 처리
        dataTableService.modalClose('#serviceMgtModal');
    }
);

//모달 삭제
$(".modal-footer > .btn-danger").click(
    () => {
        const id = $("input[name=id]").val();

        //삭제
        dataTableService.serviceTableDel(id);

        //모달 닫기, 빈칸 처리
        dataTableService.modalClose('#serviceMgtModal');
    }
);


//카테고리 모달 추가
$("#categoryAddBtn").click(
    () => {
        const categoryData = {service_category_name: $("input[name=service_category_name]").val()};
        dataTableService.categoryModalAdd(categoryData);

        dataTableService.modalClose('#categoryAddModal');
    }
);