$(function(){
    var mr_input="input[type=text]";
    $(mr_input).each(function() {    $(this).data('stext',$(this).val());                                               });
    $(mr_input).focus(function(){	 $(this).val()==$(this).data('stext')  ?   $(this).val(''): "0";	               	});
    $(mr_input).blur(function() {    $(this).val().length<=0               ?   $(this).val($(this).data('stext')): "0"; });
});



var slider = $('.slider');
slider.owlCarousel({
    loop:true,
    margin:10,
    items: 1
});

$('.slide-next').click(function() {
    slider.trigger('next.owl.carousel');
});

$('.slide-prev').click(function() {
    slider.trigger('prev.owl.carousel');
});



var customer = $('.customer-slide');
customer.owlCarousel({
    loop:true,
    margin:10,
    items: 3
});

$('.customer-next').click(function() {
    customer.trigger('next.owl.carousel');
});

$('.customer-prev').click(function() {
    customer.trigger('prev.owl.carousel');
});

$(".callback, .remind, .enter").fancybox({
    "padding" : 0,
    'closeBtn' : false
});

$('.modal-close, .modal-body button[type="reset"]').click(function(){
    $.fancybox.close();
});
