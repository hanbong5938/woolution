$(function () {

    /* initialize the external events
     -----------------------------------------------------------------*/
    function ini_events(ele) {
        ele.each(function () {

            // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
            // it doesn't need to have a start or end
            const eventObject = {
                title: $.trim($(this).text()) // use the element's text as the event title
            };

            // store the Event Object in the DOM element so we can get to it later
            $(this).data('eventObject', eventObject)

        })
    }

    ini_events($('#external-events div.external-event'));

    /* initialize the calendar
     -----------------------------------------------------------------*/
    const Calendar = FullCalendar.Calendar;
    const Draggable = FullCalendarInteraction.Draggable;

    //서비스 리스트
    $.ajax({
        type: "GET",
        url: "/service-mgt/infoList",
        dataType: "JSON",
        success: (data) => {
            let line = '';
            //랜덤 컬러 사용시
            let randomColor = [];
            for (let i = 0; i < data.length; i++) {
                const letters = '0123456789ABCDEF'.split('');
                let temp = '#';

                for (let j = 0; j < 6; j++) {
                    temp += letters[Math.floor(Math.random() * 16)];
                }

                randomColor[i] = temp;

                line += '<div class=external-event style="background-color:' + randomColor[i] + '; color: white; text-shadow: 0 0 2px darkgrey;">' + data[i].service_nm + '</div>'
            }

            $('#external-events').html(line)
        }
    });

    const containerEl = document.getElementById('external-events');

    const calendarEl = document.getElementById('calendar');

    // initialize the external events
    // -----------------------------------------------------------------

    new Draggable(containerEl, {
        itemSelector: '.external-event',
        eventData: function (eventEl) {
            return {
                title: eventEl.innerText,
                backgroundColor: window.getComputedStyle(eventEl, null).getPropertyValue('background-color'),
                borderColor: window.getComputedStyle(eventEl, null).getPropertyValue('background-color'),
                textColor: window.getComputedStyle(eventEl, null).getPropertyValue('color'),
            };
        }
    });


    $.ajax({
        url: '/service-mgt/book-list',
        type: 'get',
        dataType: 'JSON',
        success: (data) => {
            let bookData = [];
            for (let i = 0; i < data.length; i++) {

                //컬러 설정
                const letters = '0123456789ABCDEF'.split('');
                let temp = '#';

                for (let j = 0; j < 6; j++) {
                    temp += letters[Math.floor(Math.random() * 16)];
                }

                bookData[i] = {
                    title: data[i].book_title,
                    start: data[i].book_start,
                    end: data[i].book_end,
                    color: temp,
                    textColor: 'white',
                    // textShadow: 'black'
                }
            }

            const calendar = new Calendar(calendarEl, {
                plugins: ['interaction', 'dayGrid', 'timeGrid'],
                customButtons: {
                    saveButton: {
                        text: "save",
                        click: () => {
                            let temp = [];
                            temp = calendar.getEvents();
                            console.log(temp);
                            let saveArr = [];

                            for (let i = 0; i < temp.length; i++) {
                                saveArr[i] = {
                                    book_title: temp[i].title,
                                    book_start: temp[i].start,
                                    book_end: temp[i].end
                                };
                            }

                            $.ajax({
                                type: "POST",
                                url: "/service-mgt/book-insert",
                                data: JSON.stringify(saveArr),
                                contentType: "application/json; charset=utf-8",
                                success: () => {
                                    alert('저장되었습니다.')
                                },
                            })
                        }
                    }
                },
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,saveButton'
                },

                events: [
                    ...bookData
                ],
                editable: true,
                droppable: true, // this allows things to be dropped onto the calendar !!!
            });

            calendar.render();

        }
    });
});