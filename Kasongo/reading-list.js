
$(document).ready(function(){  
    
    function createdBookItem(bookTitle, bookLink) {
        html = ('<li class="list-group-item">'+ '<a href ="' + bookLink + '"><i class="fa fa-amazon" aria-hidden="true"></i></a>' + bookTitle + '' + '<button class="removeButton btn btn-danger btn-sm float-right">Remove</button></li>');
        return html;
    };

    function addBookToList(e) {
        e.preventDefault();
        var bookHTML=createdBookItem($('#book-title').val(), $('#book-link').val());

        $('#book-list').prepend(bookHTML);
        $('#book-title').val('');
        $('#book-link').val('');
        $('#book-title').focus();
        $('.removeButton').click(removeBook);
    }

    function removeBook() {
        $(this).closest('li').remove();
        console.log('remove');
    }
    function removeAll(e) {
        e.preventDefault();
        $('#book-list li').remove();
        console.log('removeAll');
    }

    
    $('#add-book').click(addBookToList);
    $('#remove-book').click(removeAll);
});