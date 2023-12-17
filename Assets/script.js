dayjs.extend(window.dayjs_plugin_advancedFormat);

// need today date in header, picking up id currentDay, use dayjs
const todayDate = dayjs();
$("#currentDay").text(todayDate.format("dddd, MMMM Do"));

// textAreas need to add if else if statements to dynamically add class of past present or future, use single if else statement for all textAreas based on element?

const timeNow = dayjs().hour();
console.log(timeNow);


$('.time-block').each(function () {
    let block = parseInt($(this).attr('id'))
    console.log(block);
    if (block < timeNow) {
        $(this).addClass("past");
    } else if (block === timeNow) {
        $(this).addClass("present");
    } else {
        $(this).addClass("future");
    }
});


// console.log($('.time-block').attr('data-hour'));
// save button need click event listener added 
// when clicked need to save user input to local storage


$('.saveBtn').on('click', function () {

    let userInput = $(this).siblings('textarea').val();
    let userHour = $(this).parent().attr('id');
    localStorage.setItem(userHour, userInput);


});

for (let i = 9; i < 18; i++) {

    $('#' + i + ' textarea').text(localStorage.getItem(i))

}

