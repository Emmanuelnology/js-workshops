/*
jQuery Challenges

- Add books to top of list when clicking 'Add' button
- Add link to list items
- Remove books from list when clicking 'Remove' button
- Remove text (value) of input after add
- Move focus to title after add
- Add button to delete all items in the list
- Only display the 'Delete all' button when there are no books in the list
- Introduce a book count
- Show 'There are no items in the list' when the list is empty
- Disable the add button when either input is empty
- Disable the add button when the link is invalid

*/

$(document).ready(function(){
  
  function createBookItem(bookTitle, bookLink) {
    html = '<li class="list-group-item"><a target="_blank" href="' + bookLink + '"><i class="mr-3 fa fa-amazon"></i></a>' + bookTitle + '<button class="js-remove-button btn btn-danger btn-sm float-right">Remove</button></li>';
    return html;
  }
  
  function titleFocus() {
    $('#book-title').focus();
  }
  
  function addBookToList(e) {
    e.preventDefault();
    var title = $('#book-title').val();
    var link = $('#book-link').val();
    var bookHtml = createBookItem(title,link);        
    $('#book-list').prepend(bookHtml);
    $('#book-link').val('');
    $('#book-title').val('');
    titleFocus();
    countBooks();
    disableAddButton();
    $('.js-remove-button').click(removeSingleBook);
  }
  
  function removeSingleBook(e) {
    e.preventDefault();
    $(this).closest('li').remove();
    countBooks();
  }
  
  function deleteAllBooks(e) {
    e.preventDefault();
    $('#book-list').empty();
    countBooks();
  }
  
  function countBooks() {
    var numberOfBooks = $('#book-list li').length;
    if (numberOfBooks == 0) {
      $('#delete-all').hide();
      $('#no-books').show();
    }
    else {
      $('#delete-all').show();
      $('#no-books').hide();
    }
    $('#book-count').text(numberOfBooks);
  }
  
  function disableAddButton() {
    if (validInputs()) {
      $('#add-book').attr('disabled',false);
    }
    else {
      $('#add-book').attr('disabled',true);
    }
  }
  
  function validInputs() {
    return $('#book-title').val().length && $('#book-link').val().length;
  }
  
  $('input').keyup(disableAddButton);
  $('#add-book').click(addBookToList);
  $('#delete-all').click(deleteAllBooks);
  countBooks();
});