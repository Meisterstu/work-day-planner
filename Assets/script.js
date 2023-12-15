dayjs.extend(window.dayjs_plugin_advancedFormat);

// need today date in header, picking up id currentDay, use dayjs
const todayDate = dayjs();
$("#currentDay").text(todayDate.format("dddd, MMMM Do"));

// textAreas need to add if else if statements to dynamically add class of past present or future, use single if else statement for all textAreas based on element?


const timeNow = dayjs().format("HH");
console.log(timeNow);

// const reformatTime = dayjs().format("HH");
// $(".hour").text(reformatTime);
// console.log("this should be true", timeNow);


$('.time-block').each(function () {
    console.log($('.hour').text());
    if ($('.time-block').attr('data-hour') < timeNow) {
        console.log("this should be true", timeNow);
        $("textarea").addClass("past");
    } else if ($('.time-block').attr('data-hour') > timeNow) {
        $("textarea").addClass("future");
    } else {
        $("textarea").addClass("present");
    }
});


// console.log($('.time-block').attr('data-hour'));
// save button need click event listener added 
// when clicked need to save user input to local storage -  array?


$('.saveBtn').on('click', function () {
    // console.log($(this).siblings('.hour').text());
    let userInput = $(this).siblings('textarea').val();
    let userHour = $(this).siblings('.hour').text();
    // console.log(userHour);
    localStorage.setItem('hour', userHour);
    localStorage.setItem('textarea', userInput);
});

let retrieveTime = localStorage.getItem('hour');
console.log(retrieveTime);
let retrieveText = localStorage.getItem('textarea');
console.log(retrieveText);


// page needs to keep saved inputs between refreshes/  reloads
$(document).ready(function () {
    $('hour').val(retrieveTime);
    $('textarea').text(retrieveText);
});



