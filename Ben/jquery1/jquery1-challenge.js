/* 

Challenge - When the mouse is over the no button - swap the yes/no buttons so that the user can only ever click on yes

*/

$(document).ready(function() {
  
  function hoverRight(e) {
    e.preventDefault(); 
    swap('#no','#yes');
  }
  
  function hoverLeft(e) {
    e.preventDefault(); 
    swap('#yes','#no');
  }
  
  function swap(a,b) {
    $(a).removeClass('btn-danger')
    .addClass('btn-success')
    .text('Yes');
    $(b).removeClass('btn-success')
    .addClass('btn-danger')
    .text('No');
  }
  
  $('#no').hover(hoverRight);
  $('#yes').hover(hoverLeft);
  
});