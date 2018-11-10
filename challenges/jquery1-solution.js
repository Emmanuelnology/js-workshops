/* 

Challenge - On mouseover - swap the yes/no buttons so that the user can only ever click on yes

*/

$(document).ready(function(){
  function manageButtons(e) {
    e.preventDefault();
    //.. do stuff
  }
  $('#yesno button').hover(manageButtons);

});