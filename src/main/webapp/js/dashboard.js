$(function () {
    'use strict';

    const ticksStyle = {
        fontColor: '#495057',
        fontStyle: 'bold'
    };

    const mode = 'index';
    const intersect = true;

    //month arr
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nob', 'Dec'];
    const d = new Date();
    const n = d.getMonth();

    //날짜 구하기 위해
    let date = [];
    for (let i = 7; i >= 0; i--) {
        if (i === 7) {
            date[i] = d.getDate();
        } else {
            d.setDate(d.getDate() - 1);
            date[i] = d.getDate();
        }
    }

    let lastDate = [];
    for (let i = 7; i >= 0; i--) {
        if (i === 7) {
            lastDate[i] = d.getDate();
        } else {
            d.setDate(d.getDate() - 1);
            lastDate[i] = d.getDate();
        }
    }

    //배열에 순서 넣어주기 위해 사용
    let nm = 0;
    let arr = [];

    //최근 7 개월 label 구하기
    for (let i = n - 6; i <= n; i++) {
        if (i < 0) {
            const temp = i + 12;
            arr[nm] = month[temp];
            nm++;
        } else {
            arr[nm] = month[i];
            nm++;
        }
    }

    //ajax 사용해서 월 영업 비용 가져오기
    $.ajax({
        url: '/sales-mgt/anal-sum',
        type: 'get',
        success: (data) => {

            let salesData = [];
            let salesLastData = [];

            let temp = 0;
            for (let i = 0; i < 7; i++) {
                salesLastData[temp] = data[i].monthSales;
                temp++;
            }

            temp = 0;
            for (let i = data.length - 7; i < data.length; i++) {
                salesData[temp] = data[i].monthSales;
                temp++;
            }

            //가장 최근달 데이터 뽑기
            $('#salesSumLast').html('￦ ' + data[17].monthSales.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

            const $salesChart = $('#sales-chart')
            const salesChart = new Chart($salesChart, {
                type: 'bar',
                data: {
                    labels: [...arr],
                    datasets: [
                        {
                            backgroundColor: '#007bff',
                            borderColor: '#007bff',
                            data: [...salesData]
                        },
                        {
                            backgroundColor: '#ced4da',
                            borderColor: '#ced4da',
                            data: [...salesLastData]
                        }
                    ]
                },
                options: {
                    maintainAspectRatio: false,
                    tooltips: {
                        mode: mode,
                        intersect: intersect
                    },
                    hover: {
                        mode: mode,
                        intersect: intersect
                    },
                    legend: {
                        display: false
                    },
                    scales: {
                        yAxes: [{
                            // display: false,
                            gridLines: {
                                display: true,
                                lineWidth: '4px',
                                color: 'rgba(0, 0, 0, .2)',
                                zeroLineColor: 'transparent'
                            },
                            ticks: $.extend({
                                beginAtZero: true,

                                // Include a dollar sign in the ticks
                                callback: function (value, index, values) {
                                    if (value >= 10000) {
                                        value /= 10000;
                                        value += '만'
                                    } else if (10000 > value && value >= 1000) {
                                        value /= 1000;
                                        value += 'k'
                                    }
                                    return '￦ ' + value
                                }
                            }, ticksStyle)
                        }],
                        xAxes: [{
                            display: true,
                            gridLines: {
                                display: false
                            },
                            ticks: ticksStyle
                        }]
                    }
                }
            });
        }
    });

    $.ajax({
        url: '/sales-mgt/anal-sum-per',
        type: 'get',
        success: (data) => {
            const result = data[0].growth;
            if (result > 0) {
                const str = '<i class="fas fa-arrow-up"></i> ' + result + ' %';
                $('#analSumPer').addClass('text-success').html(str);
                $('#salesIcon').html('<i class="ion ion-android-arrow-up text-success"></i> ' + result + ' %')
            } else if (result === '0.0') {
                const str = '<i class="fas fa-window-minimize"></i> ' + result + ' %';
                $('#analSumPer').addClass('text-warning').html(str);
                $('#salesIcon').html('<i class="ion ion-android-arrow-up text-warning"></i> ' + result + ' %')

            } else {
                const str = '<i class="fas fa-arrow-down"></i> ' + result + ' %';
                $('#analSumPer').addClass('text-danger').html(str);
                $('#salesIcon').html('<i class="ion ion-android-arrow-up text-danger"></i> ' + result + ' %')

            }
        }
    });

    $.ajax({
        url: '/cust-mgt/anal-visit-week',
        type: 'get',
        success: (data) => {
            const temp = data;
            $.ajax({
                url: '/cust-mgt/anal-visit-week-last',
                type: 'get',
                success: (data) => {
                    let lastWeek = [];
                    let thisWeek = [];
                    for (let i = 0; i < date.length; i++) {
                        for (let j = 0; j < temp.length; j++) {
                            if (temp[j].a === date[i] + '') {
                                thisWeek[i] = temp[j].visitCnt;
                            } else if (thisWeek[i] === undefined) {
                                thisWeek[i] = 0;
                            }
                        }
                    }
                    for (let i = 0; i < lastDate.length; i++) {
                        for (let j = 0; j < data.length; j++) {
                            if (data[j].a === lastDate[i] + '') {
                                lastWeek[i] = data[j].cnt;
                            } else if (lastWeek[i] === undefined) {
                                lastWeek[i] = 0;
                            }
                        }
                    }

                    const $visitorsChart = $('#visitors-chart')
                    const visitorsChart = new Chart($visitorsChart, {

                        data: {
                            labels: [...date],
                            datasets: [{
                                type: 'line',
                                data: [...thisWeek],
                                backgroundColor: 'transparent',
                                borderColor: '#007bff',
                                pointBorderColor: '#007bff',
                                pointBackgroundColor: '#007bff',
                                fill: false
                                // pointHoverBackgroundColor: '#007bff',
                                // pointHoverBorderColor    : '#007bff'
                            },
                                {
                                    type: 'line',
                                    data: [...lastWeek],
                                    backgroundColor: 'tansparent',
                                    borderColor: '#ced4da',
                                    pointBorderColor: '#ced4da',
                                    pointBackgroundColor: '#ced4da',
                                    fill: false
                                    // pointHoverBackgroundColor: '#ced4da',
                                    // pointHoverBorderColor    : '#ced4da'
                                }]
                        },
                        options: {
                            maintainAspectRatio: false,
                            tooltips: {
                                mode: mode,
                                intersect: intersect
                            },
                            hover: {
                                mode: mode,
                                intersect: intersect
                            },
                            legend: {
                                display: false
                            },
                            scales: {
                                yAxes: [{
                                    // display: false,
                                    gridLines: {
                                        display: true,
                                        lineWidth: '4px',
                                        color: 'rgba(0, 0, 0, .2)',
                                        zeroLineColor: 'transparent'
                                    },
                                    ticks: $.extend({
                                        beginAtZero: true,
                                    }, ticksStyle)
                                }],
                                xAxes: [{
                                    display: true,
                                    gridLines: {
                                        display: false
                                    },
                                    ticks: ticksStyle
                                }]
                            }
                        }
                    })
                }
            })
        }
    });

    $.ajax({
        url: '/cust-mgt/anal-visit-per',
        type: 'get',
        success: (data) => {
            const result = data[0].growth;
            if (result > 0) {
                const str = '<i class="fas fa-arrow-up"></i> ' + result + ' %';
                $('#weekVisitPer').addClass('text-success').html(str);
                $('#visitIcon').html('<i class="ion ion-android-arrow-up text-success"></i> ' + result + ' %')
            } else if (result === '0.0') {
                const str = '<i class="fas fa-window-minimize"></i> ' + result + ' %';
                $('#weekVisitPer').addClass('text-warning').html(str);
                $('#visitIcon').html('<i class="ion ion-android-arrow-up text-warning"></i> ' + result + ' %')
            } else {
                const str = '<i class="fas fa-arrow-down"></i> ' + result + ' %';
                $('#weekVisitPer').addClass('text-danger').html(str);
                $('#visitIcon').html('<i class="ion ion-android-arrow-down text-danger"></i> ' + result + ' %')

            }
        }
    });

    $.ajax({
        url: '/cust-mgt/anal-visit-week-cnt',
        type: 'get',
        success: (data) => {
            $('#weekVisitCnt').html(data[0].count + " 회");
        }
    });

    $("#dashboardTable").DataTable({
        ajax: {
            "type": "GET",
            "url": "/service-mgt/dashboardTable",
            "dataType": "JSON",
            dataSrc: "",
            destroy: true,
        },
        columns: [
            {data: "service_nm"},
            {
                data: "service_price", render: function (data) {
                    return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " 원";
                }
            },
            {
                data: "serviceCnt", render: function (data) {
                    return data + " 회";
                }
            }
        ],
        select: false,
        paging: false,
        info: false,
        searching: false
    });
});
