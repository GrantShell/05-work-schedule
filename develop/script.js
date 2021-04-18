$("#currentDay").text(dayjs().format("MMMM Do, YYYY"));
//cant figure out why it wont hold a day
//{ time: "12AM", event: "" },
//{ time: "1AM", event: "" },
//{ time: "2AM", event: "" },
//{ time: "3AM", event: "" },
//{ time: "4AM", event: "" },
//{ time: "5AM", event: "" },
//{ time: "6AM", event: "" },
//{ time: "7AM", event: "" },
//{ time: "7PM", event: "" },
/// { time: "8PM", event: "" },
// { time: "9PM", event: "" },
// { time: "10PM", event: "" },
//{ time: "11PM", event: "" },
var dailyHours = [
  { time: "8AM", event: "" },
  { time: "9AM", event: "" },
  { time: "10AM", event: "" },
  { time: "11AM", event: "" },
  { time: "12PM", event: "" },
  { time: "1PM", event: "" },
  { time: "2PM", event: "" },
  { time: "3PM", event: "" },
  { time: "4PM", event: "" },
  { time: "5PM", event: "" },
  { time: "6PM", event: "" },
];

dailyHours.forEach(function (timeBlock, index) {
  var timeLabel = timeBlock.time;
  var blockColor = rowColor(timeLabel);
  var row =
    '<div class="time-block" id="' +
    index +
    '"><div class="row no-gutters input-group"><div class="col-sm col-lg-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3">' +
    timeLabel +
    '</div><textarea class="form-control ' +
    blockColor +
    '">' +
    timeBlock.event +
    '</textarea><div class="col-sm col-lg-1 input-group-append"><button class="saveBtn btn-block" type="submit"><i class="fa fa-save"></i></button></div></div></div>';

  $(".container").append(row);
});

var now = moment().format("hh A");

function rowColor(time) {
  var entryNow = moment(now, "hh A");
  var entryFuture = moment(time, "hh A");
  if (entryNow.isBefore(entryFuture) === true) {
    return "future";
  } else if (entryNow.isAfter(entryFuture) === true) {
    return "past";
  } else {
    return "present";
  }
}

localStorage.setItem("dailyHours", JSON.stringify(dailyHours));
