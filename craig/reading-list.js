    
    $(document).ready(function(){
      
      var newBook={
        $title: $('#book-title'),
        $link: $('#book-link'),
        $addButton: $('#add-book'),
        getHTML: function (){
          return createBookItem(newBook.$title.val(), newBook.$link.val());
        }
      }
      
      var $bookList = $('#book-list');   
      
      function createBookItem(bookTitle, bookLink){
        return '<li class="list-group-item"> <a target="_blank" href="' + bookLink + '"> <i class="fa fa-amazon mr-3"></i> </a>' + bookTitle + ' <button class="js-removeBtn btn btn-sm float-right btn-danger"> Remove </button></li>';
      }
            
      function addBook(bookHTML){
        $bookList.append(bookHTML);
        $('.js-removeBtn').click(function(){
          $(this).parent().remove();
        });
      }

      function addItemHandler(e) {
        e.preventDefault();
        addBook(newBook.getHTML());
      }

      newBook.$addButton.click(addItemHandler);
      
      addBook(createBookItem("Clean code", "https://www.amazon.co.uk/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882"));

     
      
    });