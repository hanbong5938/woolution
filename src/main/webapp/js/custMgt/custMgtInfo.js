dataTableService = (() => {

    function custTableRegister(custContent) {
        $.ajax({
            type: 'post',
            url: '/cust-mgt/infoInsert',
            data: JSON.stringify(custContent),
            contentType: "application/json; charset=utf-8",
            success: (() => {
                //다시 불러오기
                dataTableInfo.ajax.reload();
            }),
            error: (xhr, status, er) => {
            }
        });
    }


    function custTableMod(custContent) {
        $.ajax({
            type: 'patch',
            url: '/cust-mgt/infoMod',
            data: JSON.stringify(custContent),
            contentType: "application/json; charset=utf-8",
            success: (() => {
                //다시 불러오기
                dataTableInfo.ajax.reload();
            }),
            error: (xhr, status, er) => {
            }
        });
    }


    function custTableDel(id) {
        $.ajax({
            type: 'patch',
            url: '/cust-mgt/infoDel',
            data: JSON.stringify(id),
            contentType: "application/json; charset=uft-8",
            success: ((result, status, xhr) => {
                dataTableInfo.ajax.reload();
            }),
            error: (xhr, status, er) => {
            }
        })
    }

    function speciesModalAdd(categoryData) {
        $.ajax({
            type: 'post',
            url: '/cust-mgt/infoSpeciesAdd',
            data: JSON.stringify(categoryData),
            contentType: "application/json; charset=uft-8",
            success: (() => {

            }),
            error: () => {

            }
        })
    }


    function custEdit() {
        const selectRaw = $(this).closest('tr').data();
        const rawData = dataTableInfo.row(selectRaw).data();

        $('#custMgtModal').modal();

        //버튼 보여주고 숨기기
        $(".modal-footer > .btn-primary").hide();
        $(".modal-footer > .btn-danger").show();
        $(".modal-footer > .btn-info").show();


        //데이터 집어넣기
        // $("input[name=id]").val(rawData.id);
        // $('select[name=service_category_id]').val(rawData.service_category_id);
        // $("textarea[name=service_desc]").val(rawData.service_desc);
        // $("input[name=service_price]").val(rawData.service_price);
        // $("input[name=service_tet]").val(rawData.service_tet);
        // $("input[name=service_state]").val(rawData.service_state);

    }

    //카테고리 list
    function custTableSpecies() {
        $.ajax({
            type: 'get',
            url: '/cust-mgt/infoSpecies',
            dataType: "JSON",
            success: ((data) => {
                console.log(data);
                for (let i = 0; i < data.length; i++) {
                    $('select[name=puppy_species_id]').append('<option value="' + data[i].id + '">' + data[i].puppy_species_nm + '</option>');
                }
            })
        })
    }

    //모달 close랑 초기화
    function modalClose(modalId) {
        $(modalId).modal("toggle").find('input,textarea, select').val('');
    }

    return {
        custTableRegister: custTableRegister,
        custEdit: custEdit,
        custTableMod: custTableMod,
        custTableDel: custTableDel,
        modalClose: modalClose,
        speciesModalAdd: speciesModalAdd,
        custTableSpecies: custTableSpecies
    }
})();

//카테고리 가져오기
dataTableService.custTableSpecies();

//데이터 테이블 js이용
dataTableInfo = $("#dataTableInfo").DataTable({
    ajax: {
        type: "GET",
        url: "/cust-mgt/infoList",
        dataType: "JSON",
        dataSrc: "",
        destroy: true,
    },
    columns: [
        {data: "id"},
        {data: "cust_nm"},
        {data: "puppy_species_nm"},
        {data: "cust_no"},
        {data: "cust_address"},
        {data: "cust_sex"},
        {data: "cust_birthDay"},
        {data: "cust_createAT"},
        {data: "cust_parent_nm"},
        {
            "data": null,
            "className": "center",
            "defaultContent": "<a onclick='dataTableService.custEdit()'>Edit</a>"
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
        dataTableService.custTableRegister(serviceContent);

        //모달 닫기, 빈칸 처리
        dataTableService.modalClose('#serviceMgtModal');

    }
);

//모달 수정
$(".modal-footer > .btn-info").click(
    () => {
        const serviceContent = {
            // id: $("input[name=id]").val(),
            // service_category_id: $('select[name=service_category_id]').val(),
            // service_desc: $("textarea[name=service_desc]").val(),
            // service_price: $("input[name=service_price]").val(),
            // service_tet: $("input[name=service_tet]").val(),
            // service_state: $("input[name=service_state]").val(),
        };

        //등록
        dataTableService.custTableMod(serviceContent);

        //모달 닫기, 빈칸 처리
        dataTableService.modalClose('#serviceMgtModal');
    }
);

//모달 삭제
$(".modal-footer > .btn-danger").click(
    () => {
        const id = $("input[name=id]").val();

        //삭제
        dataTableService.custTableDel(id);

        //모달 닫기, 빈칸 처리
        dataTableService.modalClose('#serviceMgtModal');
    }
);


//카테고리 모달 추가
$("#categoryAddBtn").click(
    () => {
        const categoryData = {puppy_species_nm: $("input[name=puppy_species_nm]").val()};
        // console.log(categoryData.puppy_species_nm);
        dataTableService.speciesModalAdd(categoryData);

        dataTableService.modalClose('#categoryAddModal');
    }
);