$(document).ready(function(){

    function createBookItem(bookTitle, bookLink) {
        html = "<li class='list-group-item'><a href=" + bookLink + "><i class='fa fa-amazon' aria-hidden='true'></i></a>" + bookTitle + "<button class='js-remove-btn btn btn-danger btn-sm float-right'>Remove</button></li>";
        return html;
    }

    function addBookToList(e) {
        e.preventDefault();
        var title = $('#book-title').val();
        var link = $('#book-link').val();
        var bookHTML = createBookItem(title, link);
        var bookTotal = $('#book-list').length;
        $('#book-list').prepend(bookHTML);
        $('#book-title').val("");
        $('#book-link').val("");
        $('#book-title').focus();
        $('.js-remove-btn').click(removeBook);
        $('#delete-all').show();
        $('#book-count').val("Total books = " + bookTotal);
    }

    function deleteBooks(e) {
        e.preventDefault();
        $('#book-list li').remove();
        $('#delete-all').hide();
    }

    function removeBook() {
        $(this).parent().remove();
    }

    $('#delete-all').click(deleteBooks);
    $('#add-book').click(addBookToList);
}); 