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



$('.customer-slide').jCarouselLite({
    btnNext: '.customer-next',
    btnPrev: '.customer-prev',
    speed: 500,
    visible: 3
});


$('.gallery-slide').jCarouselLite({
    btnNext: '.gallery-next',
    btnPrev: '.gallery-prev',
    speed: 500,
    visible: 5
});


$(".callback, .remind, .enter").fancybox({
    "padding" : 0,
    'closeBtn' : false
});

$('.modal-close, .modal-body button[type="reset"]').click(function(){
    $.fancybox.close();
});

$(".gallery-item, .modal-link").fancybox({
    "padding" : 0
});

// Подключние Яндекс-Карты

ymaps.ready(init);
var myMap,
    myPlacemark;

function init(){
    myMap = new ymaps.Map("map", {
        center: [56.8369,60.5827],
        zoom: 16,
        controls: ['smallMapDefaultSet']
    });

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Собственный значок метки'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/placemark.png ',
        // Размеры метки.
        iconImageSize: [70, 79],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-50, -130]
    });

    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(myPlacemark);
}

// End of cart


/* Поле отправки файла */

function getName (str){
    if (str.lastIndexOf('\\')){
        var i = str.lastIndexOf('\\')+1;
    }
    else{
        var i = str.lastIndexOf('/')+1;
    }
    var filename = str.slice(i);
    var uploaded = document.getElementById("fileformlabel");
    uploaded.innerHTML = filename;
}
