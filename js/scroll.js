$(document).ready(function (){
    $('a[href^="#"]').on('click', function(e){
        e.preventDefault(); //e = Event.

        var target = this.hash; // 'this.hash' references the # in the href of the anchor tag.
        var $target = $(target); // Turns 'target' variable to jQuery object.

        $('html, body').animate({'scrollTop': $target.offset().top}, 1000, 'swing');
    });
});