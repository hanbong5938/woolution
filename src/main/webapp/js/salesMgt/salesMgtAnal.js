$(function () {
    const ticksStyle = {
        fontColor: '#495057',
    };

    //--------------
    //- AREA CHART -
    //--------------
    $.ajax({
        type: 'get',
        url: '/sales-mgt/anal-sales-month',
        dataType: "JSON",
        success: ((data) => {
            const today = new Date();
            let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nob', 'Dec'];

            for (let i = 0; i <= today.getMonth(); i++) {
                month[i + 12] = month[i];
                month.splice(i, 1);
            }

            let lastYearData = [];
            for (let i = 0; i < 12; i++) {
                lastYearData[i] = data[i].monthSales;
            }

            let thisYearData = [];
            for (let i = 0; i < 12; i++) {
                thisYearData[i] = data[i + 12].monthSales;
            }

            const areaChartCanvas = $('#areaChart').get(0).getContext('2d');
            const areaChartData = {
                labels: [...month],
                datasets: [
                    {
                        label: 'This Year',
                        backgroundColor: 'rgba(60,141,188,0.9)',
                        borderColor: 'rgba(60,141,188,0.8)',
                        pointRadius: false,
                        pointColor: '#3b8bba',
                        pointStrokeColor: 'rgba(60,141,188,1)',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(60,141,188,1)',
                        data: [...thisYearData]
                    },
                    {
                        label: 'Last Year',
                        backgroundColor: 'rgba(210, 214, 222, 1)',
                        borderColor: 'rgba(210, 214, 222, 1)',
                        pointRadius: false,
                        pointColor: 'rgba(210, 214, 222, 1)',
                        pointStrokeColor: '#c1c7d1',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        data: [...lastYearData]
                    },
                ]
            };

            const areaChartOptions = {
                maintainAspectRatio: false,
                responsive: true,
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
                }
            };

            const areaChart = new Chart(areaChartCanvas, {
                type: 'line',
                data: areaChartData,
                options: areaChartOptions
            });
        })
    });

    //-------------
    //- DONUT CHART -
    //-------------
    $.ajax({
        type: 'get',
        url: '/sales-mgt/anal-sales-per',
        dataType: "JSON",
        success: ((data) => {

            let labelData = [];
            for (let i = 0; i < data.length; i++) {
                labelData[i] = data[i].service_nm;
            }

            let datasetsData = [];
            for (let i = 0; i < data.length; i++) {
                datasetsData[i] = data[i].result;
            }
            let randomColor = [];
            for (let i = 0; i < data.length; i++) {

                const letters = '0123456789ABCDEF'.split('');
                let temp = '#';

                for (let j = 0; j < 6; j++) {
                    temp += letters[Math.floor(Math.random() * 16)];
                }

                randomColor[i] = temp;
            }

            const donutChartCanvas = $('#donutChart').get(0).getContext('2d');
            const donutData = {
                labels: [
                    ...labelData
                ],
                datasets: [
                    {
                        data: [...datasetsData],
                        backgroundColor: [...randomColor],
                    }
                ]
            };
            const donutOptions = {
                maintainAspectRatio: false,
                responsive: true,
            };

            const donutChart = new Chart(donutChartCanvas, {
                type: 'doughnut',
                data: donutData,
                options: donutOptions
            })
        })
    });

    //progress
    const progressAnal = $("#progressAnal").DataTable({
        ajax: {
            type: "GET",
            url: "/sales-mgt/anal-sales-rank",
            dataType: "JSON",
            dataSrc: "",
            destroy: true,
        },
        columns: [
            {data: "cust_nm"},
            {
                data: "groupSum", searchable: false, render: function (data) {
                    return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " 원";
                }
            },
            {data: "cnt", searchable: false},
            {
                data: "per",
                render: function (data) {
                    let color = '';
                    if (data <= 3) {
                        color += 'bg-danger';
                    } else if (3 < data && data <= 10) {
                        color += 'bg-warning';
                    } else if (10 <= data && data <= 20) {
                        color += 'bg-primary';
                    } else {
                        color += 'bg-success';
                    }
                    return '<div class="progress progress-xs">' +
                        '<div class="progress-bar ' + color + '" style="width:' + data + '%"></div>'
                        + '</div>';
                }
            },
            {
                data: "per",
                render: function (data) {
                    let color = '';
                    if (data <= 3) {
                        color += 'bg-danger';
                    } else if (3 < data && data <= 10) {
                        color += 'bg-warning';
                    } else if (10 <= data && data <= 20) {
                        color += 'bg-primary';
                    } else {
                        color += 'bg-success';
                    }
                    return '<span class="badge ' + color + '">' + data + '%</span>'
                }
            }
        ],
        select: true,
    }).order([4, 'desc']);
});