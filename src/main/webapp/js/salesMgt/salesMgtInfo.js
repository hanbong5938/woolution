dataTableService = (() => {

    function salesTableRegister(salesContent) {
        $.ajax({
            type: 'post',
            url: '/sales-mgt/infoInsert',
            data: JSON.stringify(salesContent),
            contentType: "application/json; charset=utf-8",
            success: (() => {
                //다시 불러오기
                dataTableInfo.ajax.reload();
            }),
            error: (xhr, status, er) => {
            }
        });
    }


    function salesTableMod(salesContent) {
        $.ajax({
            type: 'patch',
            url: '/sales-mgt/infoMod',
            data: JSON.stringify(salesContent),
            contentType: "application/json; charset=utf-8",
            success: (() => {
                //다시 불러오기
                dataTableInfo.ajax.reload();
            }),
            error: (xhr, status, er) => {
            }
        });
    }


    function salesTableDel(id) {
        $.ajax({
            type: 'patch',
            url: '/sales-mgt/infoDel',
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
            url: '/sales-mgt/infoCategoryAdd',
            data: JSON.stringify(categoryData),
            contentType: "application/json; charset=uft-8",
            success: (() => {

            }),
            error: () => {

            }
        })
    }


    function salesEdit() {
        const selectRaw = $(this).closest('tr').data();
        const rawData = dataTableInfo.row(selectRaw).data();

        modalInit('#salesMgtModal');
        $('#salesMgtModal').modal();
        salesTableCategory();

        //버튼 보여주고 숨기기
        $(".modal-footer > .btn-primary").hide();
        $(".modal-footer > .btn-danger").show();
        $(".modal-footer > .btn-info").show();


        // //데이터 집어넣기
        // $("input[name=id]").val(rawData.id);
        // $('select[name=service_category_id]').val(rawData.service_category_id);
        // $("input[name=service_nm]").val(rawData.service_nm);
        // $("textarea[name=service_desc]").val(rawData.service_desc);
        // $("input[name=service_price]").val(rawData.service_price);
        // $("input[name=service_tet]").val(rawData.service_tet);
        // $("input[name=service_state]").val(rawData.service_state);

    }

    //카테고리 list
    function salesTableCategory() {
        $.ajax({
            type: 'get',
            url: '/sales-mgt/infoCategory',
            dataType: "JSON",
            success: ((data) => {
                for (let i = 0; i < data.length; i++) {
                    $('select[name=service_category_id]').append('<option value="' + data[i].id + '">' + data[i].service_category_name + '</option>');
                }
            })
        })
    }

    //모달 close
    function modalClose(modalId) {
        $(modalId).modal("toggle");
    }

    //모달 초기화
    function modalInit(modalId) {
        $(modalId).find('input,textarea, select').val('').find('option').remove();
    }

    return {
        salesTableRegister: salesTableRegister,
        salesTableMod: salesTableMod,
        salesTableDel: salesTableDel,
        salesEdit: salesEdit,
        salesTableCategory: salesTableCategory,
        modalClose: modalClose,
        categoryModalAdd: categoryModalAdd,
        modalInit: modalInit
    }
})();

//데이터 테이블 js이용
dataTableInfo = $("#dataTableInfo").DataTable({
    ajax: {
        "type": "GET",
        "url": "/sales-mgt/infoList",
        "dataType": "JSON",
        dataSrc: "",
        destroy: true,
    },
    columns: [
        {data: "id"},
        {data: "service_nm"},
        {data: "sales_createAT"},
        {data: "sales_state"},
        {data: "cust_nm"},
        {data: "sales_price"},
        {data: "sales_time"},
        {
            "data": null,
            "className": "center",
            "defaultContent": "<a onclick='dataTableService.salesEdit()'>Edit</a>"
        }
    ],
    select: true,
}).order([0, 'desc']);

//modal 열기
$("#tableRegBtn").click(() => {

    //모달 초기화
    dataTableService.modalInit('#serviceMgtModal');
    $('#serviceMgtModal').modal();
    dataTableService.serviceTableCategory();
    $(".modal-footer > .btn-primary").show();
    $(".modal-footer > .btn-danger").hide();
    $(".modal-footer > .btn-info").hide();
});

$("#tableCategoryRegBtn").click(() => {

    dataTableService.modalClose('#categoryAddModal');

    $('#categoryAddModal').modal();

});


//모달 등록 버튼 클릭이
$(".modal-footer > .btn-primary").click(
    () => {
        const serviceContent = {
            service_category_id: $('select[name=service_category_id]').val(),
            service_nm: $("input[name=service_nm]").val(),
            service_desc: $("textarea[name=service_desc]").val(),
            service_price: $("input[name=service_price]").val(),
            service_tet: $("input[name=service_tet]").val(),
            service_state: $("input[name=service_state]").val(),
        };

        //등록
        dataTableService.serviceTableRegister(serviceContent);

        //모달 닫기
        dataTableService.modalClose('#serviceMgtModal');

    }
);
//모달 수정
$(".modal-footer > .btn-info").click(
    () => {
        const serviceContent = {
            id: $("input[name=id]").val(),
            service_category_id: $('select[name=service_category_id]').val(),
            service_nm: $("input[name=service_nm]").val(),
            service_desc: $("textarea[name=service_desc]").val(),
            service_price: $("input[name=service_price]").val(),
            service_tet: $("input[name=service_tet]").val(),
            service_state: $("input[name=service_state]").val(),
        };

        //등록
        dataTableService.serviceTableMod(serviceContent);

        //모달 닫기
        dataTableService.modalClose('#serviceMgtModal');
    }
);

//모달 삭제
$(".modal-footer > .btn-danger").click(
    () => {
        const id = $("input[name=id]").val();

        //삭제
        dataTableService.serviceTableDel(id);

        //모달 닫기
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