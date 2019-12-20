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


    function custEdit(_this) {
        const rawData = dataTableInfo.row(_this).data();

        $('#custMgtModal').modal();

        //버튼 보여주고 숨기기
        $(".modal-footer > .btn-primary").hide();
        $(".modal-footer > .btn-danger").show();
        $(".modal-footer > .btn-info").show();

        console.log(rawData);
        //데이터 집어넣기
        $("input[name=id]").val(rawData.id);
        $('select[name=puppy_species_id]').val(rawData.puppy_species_id);
        $("input[name=cust_nm]").val(rawData.cust_nm);
        $("input[name=cust_no]").val(rawData.cust_no);
        $("input[name=cust_address]").val(rawData.cust_address);
        $("input[name=cust_parent_nm]").val(rawData.cust_parent_nm);
        $("input[name=cust_birthDay]").val(rawData.cust_birthDay);
        $("select[name=cust_sex]").val(rawData.cust_sex);
        $("textarea[name=cust_comment]").val(rawData.cust_comment);

    }

    //카테고리 list
    function custTableSpecies() {
        $.ajax({
            type: 'get',
            url: '/cust-mgt/infoSpecies',
            dataType: "JSON",
            success: ((data) => {
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
        {data: "id", searchable: false},
        {data: "cust_nm"},
        {data: "puppy_species_nm", searchable: false},
        {data: "cust_no"},
        {
            data: "cust_address", searchable: false, render: function (data) {

                //길이제한..
                if (data.length > 6) {
                    return data.substr(0, 6) + "...";
                }
                return data;
            }
        },
        {data: "cust_sex", searchable: false},
        {data: "cust_birthDay", searchable: false},
        {data: "cust_createAT", searchable: false},
        {data: "cust_parent_nm"},
        {
            data: "cust_comment", searchable: false, render: function (data) {

                //길이제한..
                if (data.length > 6) {
                    return data.substr(0, 6) + "...";
                }
                return data;
            }
        },
        {
            "data": null,
            "className": "center",
            "defaultContent": "<a onclick='const _this = $(this).closest(`tr`); dataTableService.custEdit(_this)'>Edit</a>"
        }
    ],
    select: true,
}).order([0, 'desc']);

//modal 열기
$("#tableRegBtn").click(() => {

    //초기화 위해서
    dataTableService.modalClose('#custMgtModal');
    $('#custMgtModal').modal();
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
        const custContent = {
                puppy_species_id: $('select[name=puppy_species_id]').val(),
                cust_nm: $("input[name=cust_nm]").val(),
                cust_no: $("input[name=cust_no]").val(),
                cust_address: $("input[name=cust_address]").val(),
                cust_parent_nm: $("input[name=cust_parent_nm]").val(),
                cust_birthDay: $("input[name=cust_birthDay]").val(),
                cust_comment: $("textarea[name=cust_comment]").val(),
                cust_sex: $("select[name=cust_sex]").val()
            }
        ;

        //등록
        dataTableService.custTableRegister(custContent);

        //모달 닫기, 빈칸 처리
        dataTableService.modalClose('#custMgtModal');

    }
);

//모달 수정
$(".modal-footer > .btn-info").click(
    () => {
        const custContent = {
            puppy_species_id: $('select[name=puppy_species_id]').val(),
            cust_nm: $("input[name=cust_nm]").val(),
            cust_no: $("input[name=cust_no]").val(),
            cust_address: $("input[name=cust_address]").val(),
            cust_parent_nm: $("input[name=cust_parent_nm]").val(),
            cust_birthDay: $("input[name=cust_birthDay]").val(),
            cust_comment: $("textarea[name=cust_comment]").val(),
            cust_sex: $("select[name=cust_sex]").val()
        };

        //등록
        dataTableService.custTableMod(custContent);

        //모달 닫기, 빈칸 처리
        dataTableService.modalClose('#custMgtModal');
    }
);

//모달 삭제
$(".modal-footer > .btn-danger").click(
    () => {
        const id = $("input[name=id]").val();

        //삭제
        dataTableService.custTableDel(id);

        //모달 닫기, 빈칸 처리
        dataTableService.modalClose('#custMgtModal');
    }
);


//카테고리 모달 추가
$("#categoryAddBtn").click(
    () => {
        const categoryData = {puppy_species_nm: $("input[name=puppy_species_nm]").val()};

        dataTableService.speciesModalAdd(categoryData);

        $('#custMgtModal').find('option').remove();

        dataTableService.custTableSpecies();

        dataTableService.modalClose('#categoryAddModal');
    }
);