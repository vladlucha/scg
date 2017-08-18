
//E-mail Ajax Send
$('#form').submit(function() { 
var th = $(this);
$.ajax({
    type: 'POST',
    url: 'mail.php', 
    data: th.serialize()
}).done(function() {
    alert('Спасибо, скоро мы с вами свяжемся!');
    setTimeout(function() {
        // Done Functions
        th.trigger('reset');
    }, 1000);
});
return false;
});


//E-mail Ajax Send
$('#form2').submit(function() { 
var th = $(this);
$.ajax({
    type: 'POST',
    url: 'mail2.php', 
    data: th.serialize()
}).done(function() {
    alert('Спасибо, скоро мы с вами свяжемся!');
    setTimeout(function() {
        // Done Functions
        th.trigger('reset');
    }, 1000);
});
return false;
});