$(document).ready(function(){
     var scrollLink = $('.scroll');
        scrollLink.on("click",function(e){
            e.preventDefault();
            if($(this.hash).offset().top>5000){
                $('body,html').animate({
                    scrollTop: $(this.hash).offset().top - 100
                }, 4000);
            }else if($(this.hash).offset().top>3000){
                $('body,html').animate({
                    scrollTop: $(this.hash).offset().top - 100
                }, 3000);
            }else{
                $('body,html').animate({
                    scrollTop: $(this.hash).offset().top - 100
                }, 2000);
            }
        });
            
        $('.product-slide').owlCarousel({
            loop:true,
            margin:20,
            nav:true,
            dot:false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive:{
                0:{
                    items:1,
                },
                500:{
                    items:2,
                    
                },
                800:{
                    items:3,
                },
                1000:{
                    items:4,
                }
            }
        });
        $('.services-slide').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            autoplay:true,
            autoplaySpeed:2000,
            center:true,
            responsive:{
                0:{
                    items:2,
                },
                500:{
                    items:2,
                    
                },
                800:{
                    items:3,
                    center:false,
                },
                1000:{
                    items:4,
                    center:false,
                }
            }
        });

        wow = new WOW({
            boxClass: 'wow', // default
            animateClass: 'animated', // default
            offset: 150, // default
            mobile: true, // default
            live: true // default
        })
        wow.init();
    
    
    $('.s-bar').on('click',function(){
        $('.search-box').addClass('animated fadeIn');
        $('.search-box').css("display", "block");
    })
    $('.search-box .times').on('click',function(){
        
        $('.search-box').removeClass('fadeIn');
        $('.search-box').css("display", "none");
    })
    
    
    
    
    });