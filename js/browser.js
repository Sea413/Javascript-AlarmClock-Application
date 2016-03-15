var clock = require('./../js/clock.js').timeGrab;


$(document).ready(function(){
  (function update_time(){
      var instantId;
      var userTime;
      var now = moment().format('HH:mm');
      $('.timer').text(now);
      setTimeout(update_time, 1000);

      var checker = function(){
        now = moment().format('HH:mm');
        if (now != userTime) {
          setInterval(checker, 1000);
        }else if ((now === userTime)) {
          $('#alarm').show();
        }
      };

  $('#alarmSet').submit(function() {
    event.preventDefault();
     userTime = $('#setAlarm').val();
    console.log(userTime);
    var textTest = $("#test1").val();

    checker();

    });
  })();
});
