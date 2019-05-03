$(document).ready(function () {
  /*
  0 - Ngày chưa đc click
  1 - Cả ngày có phép
  2 - Nửa ngày có phép
  3 - Cả ngày không phép
  4 - Nửa ngày không phép
   */

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd
  }

  if (mm < 10) {
    mm = '0' + mm
  }
  today = yyyy + '-' + mm + '-' + dd;

  // var today = new Date();
  // var dd = today.getDate();
  // var date = $('#monthYear').val().split('/');
  // today = date[1] + '-' + date[0] + '-01';
  // debugger

  $('#calendar').fullCalendar({
    header: {
      // left: 'prev,next today',
      left: '',

      center: 'title',
      // right: 'month,agendaWeek,agendaDay,listWeek'
      right: ''

    },
    defaultDate: today,
    navLinks: false, // can click day/week names to navigate views
    editable: true,
    selectable: true,
    eventLimit: true, // allow "more" link when too many events
    // events: {
    //   url: 'php/get-events.php',
    //   error: function() {
    //     $('#script-warning').show();
    //   }
    // },
    loading: function (bool) {
      $('#loading').toggle(bool);
    },
    eventRender: function (event, el) {
      // render the timezone offset below the event title
      if (event.start.hasZone()) {
        el.find('.fc-title').after(
          $('<div class="tzo"/>').text(event.start.format('Z'))
        );
      }
    },
    dayClick: function (date) {
      var x = new Date(today); //Ngày hiện tại
      var y = new Date(date.format()); //Ngày chọn

      //Chỉ cho phép chọn ngày >= hiện tại   
      if (x < y == true) {
        var s = $(this);
        var className = s[0].className;
        //Xác định hành động cho sự kiện click
        //Lấy trạng thái nút hiện tại
        var level = 0;
        if (className.includes("all-day-allowed")) level = 1;
        if (className.includes("haft-day-allowed")) level = 2;
        if (className.includes("all-day-not-allowed")) level = 3;
        if (className.includes("haft-day-not-allowed")) level = 4;

        if (level == 0) { //Nút chưa đc click
          //Chuyển nút qua level 1
          s[0].className += ' all-day-allowed';
          s[0].className = s[0].className.replace(" haft-day-not-allowed", "");
        }
        if (level == 1) { //Nút đang ở trạng thái Cả ngày có phép
          //Chuyển nút qua level 2
          s[0].className += ' haft-day-allowed';
          s[0].className = s[0].className.replace(" all-day-allowed", "");

        }
        if (level == 2) { //Nút đang ở trạng thái Nửa ngày có phép
          //Chuyển nút qua level 3
          s[0].className += ' all-day-not-allowed';
          s[0].className = s[0].className.replace(" haft-day-allowed", "");
        }
        if (level == 3) { //Nút đang ở trạng thái Cả ngày không phép
          //Chuyển nút qua level 4
          s[0].className += ' haft-day-not-allowed';
          s[0].className = s[0].className.replace(" all-day-not-allowed", "");
        }
        if (level == 4) { //Nút đang ở trạng thái Nửa ngày không phép
          //Chuyển nút về level 0
          s[0].className = s[0].className.replace(" haft-day-not-allowed", "");
        }
        console.log('dayClick', date.format());
      }
    },
    select: function (startDate, endDate) {
      console.log('select', startDate.format(), endDate.format());
    }
  });

  // // load the list of available timezones, build the <select> options
  // $.getJSON('php/get-timezones.php', function(timezones) {
  //   $.each(timezones, function(i, timezone) {
  //     if (timezone != 'UTC') { // UTC is already in the list
  //       $('#timezone-selector').append(
  //         $("<option/>").text(timezone).attr('value', timezone)
  //       );
  //     }
  //   });
  // });

  // when the timezone selector changes, dynamically change the calendar option
  $('#timezone-selector').on('change', function () {
    $('#calendar').fullCalendar('option', 'timezone', this.value || false);
  });

  $(".monthpicker").datepicker({
    dateFormat: 'mm/yy',
    onSelect: function (date) {
      $(".monthpicker").click()
    }
  });
});