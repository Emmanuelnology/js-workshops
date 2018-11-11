/* 

Challenge - When the mouse is over the no button - swap the yes/no buttons so that the user can only ever click on yes

*/

$(document).ready(function(){

  function manageButtons() {
    $(this).index() ? $(this).insertBefore($("#yes")) : $(this).insertAfter($("#yes"));
  }

  $('#no').mouseenter(manageButtons);
});