$(document).ready(function() {
 
    $('#book-title').val('Boo');
    console.log($('#book-title').val());

    function sayHello() {
        console.log('Hello');
    }

    function hideInputs() {
        $('input').hide();
    }

    function showInputs() {
        $('input').show();
    }

    function addBookHandler (e) {
        e.preventDefault();
        sayHello();
        hideInputs();
    }

    function removeBookHandler (e) {
        e.preventDefault();
        sayHello();
        showInputs();
    }

    function swap(a,b) {
        $(a).removeClass('btn-danger')
            .addClass('btn-success')
            .text('Yes');
        $(b).removeClass('btn-success')
            .addClass('btn-danger')
            .text('No');
    }

    function noToYes (e) {
        e.preventDefault();        
        swap ('#btn2','#btn1');
    }

    function yesToNo (e) {
        e.preventDefault();        
        swap ('#btn1','#btn2');
    }

    $('h1').hover(addBookHandler,removeBookHandler);

    $('#btn2').hover(noToYes);
    $('#btn1').hover(yesToNo);
  
 });