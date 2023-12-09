dayjs.extend(window.dayjs_plugin_advancedFormat);

// need today date in header, picking up id currentDay, use dayjs
const todayDate = dayjs();
$("#currentDay").text(todayDate.format("dddd, MMMM Do"));

// textAreas need id and class added in html? need to add if else if statements to dynamically add class of past present or future. if adding class in js can leave blank in html, don't need id's? and use single if else statement for all textAreas based on element?

// save button need click event listener added 
// when clicked need to save user input to local storage -  array?
// when clicked needs to flash an  alert to screen

// page needs to keep saved inputs between refreshes/  reloads

