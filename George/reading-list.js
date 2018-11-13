$(document).ready(function(){
    var bookCount=0;
    function createBookItem(bookTitle, bookLink){
        var book = '<li class="list-group-item"> <a href = ' + bookLink + '> <i class="fab fa-amazon"></i></a> ' + bookTitle + '<button class="btn btn-danger btn-sm float-right removeButton">Remove</button></li>';
        bookCount++;
        return book;
    }

    function addBookToList(e){
        e.preventDefault();
        var title = $('#book-title').val();
        var link = $('#book-link').val();
        
        if(title.length !=0 && link.length != 0){
            if(link.includes("http://") || link.includes("https://")  ) {
                var bookHTML = createBookItem(title, link);
                console.log(bookCount + "book count");
                $('#book-list').append(bookHTML);
                $('#book-title').focus();
                $('.removeButton').click(removeIndividualBook);
                $('form').trigger("reset");
                $( "#numberOfBooks" ).text('There are: ' + bookCount + ' books');
            }
            else
                alert("Link address is not formatted correctly. Double check it.");
        }
        else
            alert("Cannot add a book without both a title and a link.");
    }

    function removeIndividualBook(){
        $(this).parent().remove();
        bookCount--;
        $( "#numberOfBooks" ).text('There are: ' + bookCount + ' books');
        console.log(bookCount)
    }

    function removeEveryBook(){

    }

    $('#add-book').click(addBookToList);
    $('#delete-all-books').click(removeEveryBook);
    $( "#numberOfBooks" ).text('There are: ' + bookCount + ' books');
});
