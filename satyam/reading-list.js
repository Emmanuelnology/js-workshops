$(document).ready(function(){

    function createBookItem(bookTitle, bookLink) {
        html = ('<li class="list-group-item">' + '<a href="' + bookLink + '"><i class="fab fa-amazon"></i></a> ' + ' ' + bookTitle + ' ' + '<button class="js-removeBook btn btn-danger btn-sm float-right">Remove</button></li>');
        return html;
    }
  
    function addBookTolist(e) {
      e.preventDefault();
      var title=$('#book-title').val();
      var link=$('#book-link').val();
      var bookHTML=createBookItem(title, link);

      $('#book-list').prepend(bookHTML);
      $('#book-title').val('');
      $('#book-link').val('');
      $('#book-title').focus();
      $('.js-removeBook').click(removeBookFromList);

    }

    function removeBookFromList() {
        $(this).closest('li').remove();
        console.log("Removed!");
    }

    function removeAllBooks(e) {
        e.preventDefault();
        $('#book-list li').remove();
        console.log("Removed All");
    }

    function disableAdd() {
        if (('#book-list', '#book-link').length > 0) {
            $('#add-book').attr('disabled', false);
            $('#add-book').removeClass('btn-primary');
            $('#add-book').addClass('btn-danger');
        }
        else {
            $('#add-book').attr('disabled', true);
        };
        console.log('button no work')
    }

    $('#add-book').click(disableAdd);
   $('#add-book').click(addBookTolist);
   $('#remove-book').click(removeAllBooks);

  });