$(function () {
    var mySwiper = new Swiper ('#banner', {
        direction: 'horizontal',
        loop: true,
        autoplay : 3000,
        pagination: '.swiper-pagination',
    });
    var mySwiper = new Swiper ('#title', {
        direction: 'vertical',
        loop: true,
        autoplay : 3000,
        pagination: '.hot .swiper-pagination',
    });
    var mySwiper = new Swiper ('#live', {
        direction: 'horizontal',
        width:176,
        freeMode : true,
        freeModeMomentumBounce : false,
    });
    var head=$('.header');
    var iconbox=$('.iconBox');
    var ih=iconbox.offset().top;
    var midbox=$('.header .mid');
    var tanchu=$('.tanchu');
    var left=$('.tanchu .left');
    var footer=$('.footer');
    var chahao=$('.footer .cha');
    var leftbox=$('.lileft .liy');
    var rightbox=$('.contentBox .liright');
    var listboxx=$('.listbox');
    var right=$('.bigbox');
    var jieshao=$('.jieshao');
    var icon=$('.header .left');
    $(window).on('scroll',function(){
        var iw=document.body.scrollTop||document.documentElement.scrollTop;
        if(iw>ih){
            head.addClass('active');
        }else{
            head.removeClass('active');
        }
    });
    midbox.on('touchstart',function(){
        tanchu.addClass('tanact');
        $('body').css('overflow','hidden');
    });
    left.on('touchstart',function(){
        tanchu.removeClass('tanact');
        $('body').css('overflow','auto');
    })
    chahao.on('touchstart',function(){
        footer.css({display:'none'})
    })
    leftbox.eq(0).css({background:'#fff',color:'#333'});
    leftbox.on('touchstart',function(){
        leftbox.each(function(i,v){

            leftbox.css({background:'#eee',color:'#9B9B9B'});

        });
        index=$(this).index();
        rightbox.each(function(i,v){
            rightbox.css({display:'none'});
        });
        rightbox.eq(index).css({display:'block'});
        $(this).css({background:'#fff',color:'#333'});
    })
    right.on('touchstart',function(){
        listboxx.addClass('xiaoshi').removeClass('xianshi');
        jieshao.addClass('jiexiao').removeClass('jiexian');
    })
    icon.on('touchstart',function(){
        listboxx.removeClass('xiaoshi').addClass('xianshi');
        jieshao.removeClass('jiexiao').addClass('jiexian')
    })
});