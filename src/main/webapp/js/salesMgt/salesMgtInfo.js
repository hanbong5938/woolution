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

    function salesEdit(_this) {
        const rawData = dataTableInfo.row(_this).data();

        $('#salesMgtModal').modal();

        //버튼 보여주고 숨기기
        $(".modal-footer > .btn-primary").hide();
        $(".modal-footer > .btn-danger").show();
        $(".modal-footer > .btn-info").show();

        // //데이터 집어넣기
        $('input[name=id]').val(rawData.id);
        $('select[name=service_id]').val(rawData.service_id);
        $("select[name=cust_id]").val(rawData.cust_id);
        $("input[name=sales_price]").val(rawData.sales_price);
        $("input[name=sales_time]").val(rawData.sales_time);

    }

    //카테고리 list
    function salesTableCategory() {
        $.ajax({
            type: 'get',
            url: '/sales-mgt/infoServiceList',
            dataType: "JSON",
            success: ((data) => {
                for (let i = 0; i < data.length; i++) {
                    $('select[name=service_id]').append('<option value="' + data[i].id + '">' + data[i].service_nm + '</option>');
                }
            })
        });

        $.ajax({
            type: 'get',
            url: '/sales-mgt/infoCustList',
            dataType: "JSON",
            success: ((data) => {
                for (let i = 0; i < data.length; i++) {
                    $('select[name=cust_id]').append('<option value="' + data[i].id + '">' + data[i].cust_nm + '</option>');
                }
            })
        })
    }

    //모달 close랑 초기화
    function modalClose(modalId) {
        $(modalId).modal("toggle").find('input,textarea, select').val('');
    }

    return {
        salesTableRegister: salesTableRegister,
        salesTableMod: salesTableMod,
        salesTableDel: salesTableDel,
        salesEdit: salesEdit,
        salesTableCategory: salesTableCategory,
        modalClose: modalClose,
    }
})();

dataTableService.salesTableCategory();

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
        {data: "service_nm", className: "serviceNm"},
        {data: "cust_nm", className: "custNm"},
        {data: "sales_price", searchable: false},
        {data: "sales_time", searchable: false},
        {data: "service_id", visible: false, searchable: false},
        {data: "cust_id", visible: false, searchable: false},
        {
            "data": null,
            "className": "center",
            "defaultContent": "<a onclick='const _this = $(this).closest(`tr`); dataTableService.salesEdit(_this)'>Edit</a>"
        }
    ],
    select: true,
}).order([0, 'desc']);

//modal 열기
$("#tableRegBtn").click(() => {

    //모달 초기화
    dataTableService.modalClose('#salesMgtModal');
    $('#salesMgtModal').modal();
    $(".modal-footer > .btn-primary").show();
    $(".modal-footer > .btn-danger").hide();
    $(".modal-footer > .btn-info").hide();
});


//모달 등록 버튼 클릭이
$(".modal-footer > .btn-primary").click(
    () => {
        const salesContent = {
            service_id: $('select[name=service_id]').val(),
            cust_id: $("select[name=cust_id]").val(),
            sales_price: $("input[name=sales_price]").val(),
            sales_time: $("input[name=sales_time]").val(),
        };

        console.log(salesContent)
        //등록
        dataTableService.salesTableRegister(salesContent);

        //모달 닫기
        dataTableService.modalClose('#salesMgtModal');

    }
);
//모달 수정
$(".modal-footer > .btn-info").click(
    () => {
        const salesContent = {
            id: $("input[name=id]").val(),
            service_id: $('select[name=service_id]').val(),
            cust_id: $("select[name=cust_id]").val(),
            sales_price: $("input[name=sales_price]").val(),
            sales_time: $("input[name=sales_time]").val(),
        };

        //등록
        dataTableService.salesTableMod(salesContent);

        //모달 닫기
        dataTableService.modalClose('#salesMgtModal');
    }
);

//모달 삭제
$(".modal-footer > .btn-danger").click(
    () => {
        const id = $("input[name=id]").val();

        //삭제
        dataTableService.salesTableDel(id);

        //모달 닫기
        dataTableService.modalClose('#salesMgtModal');
    }
);

//서비스 아이디 모달 조회
$('#dataTableInfo tbody').on('dblclick', '.serviceNm', function () {
    const _this = $(this).closest(`tr`)
    const sampleData = dataTableInfo.row(_this).data()["service_id"];
    console.log(sampleData);
});

//고객 아이디 모달 조회
$('#dataTableInfo tbody').on('dblclick', '.custNm', function () {
    const _this = $(this).closest(`tr`)
    const sampleData = dataTableInfo.row(_this).data()["cust_id"];
    console.log(sampleData);
});