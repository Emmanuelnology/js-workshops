	
// $(document).ready(function(){

//   // $('#book-title').hide(); hiding book title
//   $('input').val('boo'); // changing the value of input
//   console.log($('#book-link').val());

//   function sayHello (){ 
//     console.log('Hello');
//   } // shows Hello in the console

//   $('#add-book').click(addBookHandler); //.click listens out for a click in the code
//   $('#add-book').hover(addBookHandler);//.hover listens out for a mouse to hover over the button in the code
//   $('h1').hover(buttonIn, buttonOut);

//   function hideInput(){
//     $('input').hide();
//   }

//   function addBookHandler(e){
//     e.preventDefault();// prevents the submit button refreshing the page on click // e is globally accepted as event
//     sayHello();
//     hideInput();
//     hide();
//     show();
//   } 

//   function buttonOut (e){
//     e.preventDefault();
//     $('input').hide();
//   }

//   function buttonIn (e){
//     e.preventDefault();
//     $('input').show();
//   }

//   // addclass and removeclass and .text
//   $('#btn1').hover(yesNoHandler);
//   $('#btn2').hover(yesNoHandler);
 

//   function add(){
//     $('#btn1').removeClass('btn btn-success m-2');
//     $('#btn2').removeClass('btn btn-danger m-2');
//     $('#btn1').addClass('btn btn-danger m-2');
//     $('#btn2').addClass('btn btn-success m-2');
//     $('#btn1').text('No');
//     $('#btn2').text('Yes');
//   }

//   function remove(){
//     $('#btn1').removeClass();
//     $('#btn2').removeClass();
//     $('#btn1').addClass('btn btn-success m-2');
//     $('#btn2').addClass('btn btn-danger m-2');
//     $('#btn1').text('Yes');
//     $('#btn2').text('No');
//   }

//   function yesNoHandler (e){
//     e.preventDefault();
//     add();
//     remove();
//   }
// });

{/* <div>
<button id='btn1' class='btn btn-success m-2'>Yes</button>
<button id='btn2' class='btn btn-danger m-2'>No</button>
// // </div> */}

$(document).ready(function(){

  function createBookItem(bookTitle, bookLink) {
    html = '<li class="list-group-item">' +'<a href="'+ bookLink +'" <i class="fa fa-amazon"></i></a>' + bookTitle + '<button class="btn btn-danger btn-sm float-right js-remove-button">Remove</button></li>';
    return html;
  }

  function addBookTolist(e){
    e.preventDefault();
    var link=$('#book-link').val();
    var title=$('#book-title').val();
    var bookHTML=createBookItem(title, link);

    
    $('#book-list').prepend(bookHTML); //moves the new book to the bottom of the list
    $('#book-title').focus(); //mvoes cursor back to first input
    $('#book-title').val(""); // clears value of input
    $('#book-link').val(""); // clears value of input
    $('.js-remove-button').click(removeBook); //remove button event listner 
  }

  //removes list item

  function removeBook(){
    $(this).closest("li").remove();
    console.log("Book be gone!");
  }


  $('#delete-all').click(removeAll)

  function removeAll (e) {
    e.preventDefault();
    $("#list-group li").remove();
  }

  // function disableButton() {
  //   $(".js-remove-button").prop(disable, true);
  // }

  // function enableButton() {
  //   $('.js-remove-button').prop(disable, false);
  // }

 $('#add-book').click(addBookTolist);
;
});