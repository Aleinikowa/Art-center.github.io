var menuBurger = $('#menuBurgerJS');
var burger = $('#BurgerJS');

burger.click(function(){
    menuBurger.slideToggle('400');
});

var btn = $('#btnMobileJS');
var list = $('#mobileJS');
var caret = $('#caretJS');

btn.click(function() {
    list.slideToggle('400');
    caret.toggleClass('rotate');
});

var direct = $('#menuBtnJS');
var menuDirect = $('#menuJS');

direct.hover(function() {
    menuDirect.slideToggle('300');
})

var next = $('#nextJS');
var prev = $('#prevJS');
var img = $('.someimg');
var i = 0


prev.click(function() {
    $(img[i]).css("display", "none");
    i++;

    if(i >= img.length){
        i = 0;
    }

    $(img[i]).css("display", "block");
});

next.click(function() {
    $(img[i]).css("display", "none");
    i++;

    if(i >= img.length){
        i = 0;
    }

    $(img[i]).css("display", "block");
});

$(function () {
    var location = window.location.href;
    var url = location.split('/').pop();
  
    $('.menu__main li').each(function () {
        var link = $(this).find('a').attr('href');
        if (url == link) {
            $(this).addClass('link');
        }
    });
  });
  