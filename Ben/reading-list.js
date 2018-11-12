$(document).ready(function() {
    
    function createBookItem(bookTitle,bookLink) {
        var html = '<li class="list-group-item"><a href="' + bookLink + '" target="_blank"><i class="fa fa-amazon" aria-hidden="true"></i></a> ' + bookTitle + '<button class="js-remove-button btn btn-danger btn-sm float-right">Remove</button></li>';
        return html;
    }
    
    function titleFocus() {
        $('#book-title').focus();      
    }
    
    
    function countBooks() {
        var numberOfBooks = $('#book-list li').length;
        $('#book-count').text('(' + numberOfBooks + ')');
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
        $('.js-remove-button').click(removeBookFromList);
    }
    
    function removeBookFromList(e) {
        e.preventDefault();
        $(this).closest('li').remove();
        titleFocus();
        countBooks();
    }
    
    function removeAllBooks(e) {
        e.preventDefault();
        $('#book-list').empty();
        titleFocus();
        countBooks();
    }

    $('#add-book').click(addBookToList);
    $('#delete-all').click(removeAllBooks);
    
});