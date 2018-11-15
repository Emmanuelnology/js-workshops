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
  $('#no-books').hide();
  $('#add-book').attr('disabled',false);
});