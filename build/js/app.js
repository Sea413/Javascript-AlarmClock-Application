(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var alert = function(){
  $('#alarm').show();
}

},{}],2:[function(require,module,exports){
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

var alert = function(){
  $('#alarm').show();
}

},{"./../js/clock.js":1}]},{},[2]);
