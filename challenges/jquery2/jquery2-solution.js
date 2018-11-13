$(document).ready(function(){
  
  function createBookItem(bookTitle, bookLink) {
    html = '<li class="list-group-item"><a target="_blank" href="' + bookLink + '"><i class="mr-3 fa fa-amazon"></i></a>' + bookTitle + '<button class="js-removeButton btn btn-danger btn-sm float-right">Remove</button></li>';
    return html;
  }
  
  function addBookTolist(e){
    e.preventDefault();
    var title=$('#book-title').val();
    var link=$('#book-link').val();
    var bookHTML=createBookItem(title, link);
    
    $('#book-list').prepend(bookHTML);
    $('#book-title').focus();
    $(".js-removeButton").click(removeBook);
    
    clearInputs();
    manageAddButtonState();
    setBookCount();
  }
  
  function clearInputs(){
    $('#book-title').val('');
    $('#book-link').val('');
  }
  
  function hasBooks() {
    return $('#book-list li').length;
  }
  
  function removeBook() {
    $(this).closest('li').remove();
    setBookCount();
  }
  
  function removeAllHandler(e) {
    e.preventDefault();
    removeAllBooks();
  }
  
  function removeAllBooks() {
    $("#book-list li").remove();
    $('#book-title').focus();
    setBookCount();
  }
  
  function setBookCount() {
    if(hasBooks()){
      $('#no-books').hide();
      $('#delete-all').show();
    }
    else {
      $('#no-books').show();
      $('#delete-all').hide();
    }
    $('#book-count').text(hasBooks());
  }
  
  function manageAddButtonState(){
    if(validateInputs()){
      $('#add-book').attr('disabled',false);
    }
    else {
      $('#add-book').attr('disabled',true);
    }
  }
  
  function validateInputs(){
    return $('#book-title').val().length && $('#book-link').val().length && isValidURL($('#book-link').val());
  }
  
  function isValidURL(url) {
    var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return pattern.test(url);
  }
  
  $('input').keyup(manageAddButtonState);
  $('#add-book').click(addBookTolist);
  $('#delete-all').click(removeAllHandler);
  removeAllBooks();
  
});