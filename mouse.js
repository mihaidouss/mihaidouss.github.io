$(function() {
    // Close popin hamburger menu after touching an item
    $("#menu li").click(function() {

        $('#menuToggle input[type="checkbox"]').prop('checked', false);

    });

    $(".h2-container").mouseover(function() {
        $("#circle-big").css("display", "none");
    });

    $(".h2-container").mouseout(function() {
        $("#circle-big").css("display", "block");
    });

});



// Options

function resetOptions() {

    $("body").removeClass("option2");
    $("body").removeClass("option3");
    $(".mainmenu").removeClass("option3");
    $("#intro").removeClass("option2");
    $("#intro").removeClass("option3");
    $(".intro-titles h1").removeClass("option2");
    $(".intro-titles h1").removeClass("option3");
    $(".logo-bg").removeClass("option2");
    $(".logo-bg").removeClass("option3");
    $(".logo-bg img").attr("src", "images/corner-white.png");

    $(".bottom-left img").attr("src", "images/bottom-left.png");
    $(".top-right img").attr("src", "images/top-right.png");

    $(".dna").removeClass("difference");




}


$(function() {
    // Get rid of mouse circle when over slideshows

    $(".slides-navigation").mouseover(function() {
        $("#circle-big").addClass("zindex");
    });
    $(".slides-navigation").mouseout(function() {
        $("#circle-big").removeClass("zindex");
    });



    $("#option1").click(function() {
        resetOptions();

    });

    $("#option2").click(function() {

        resetOptions();

        $(".dna").addClass("difference");

        $("body").addClass("option2");
        $("#intro").addClass("option2");
        $(".intro-titles h1").addClass("option2");
        $(".logo-bg").addClass("option2");
    });

    $("#option3").click(function() {

        resetOptions();
        $("body").addClass("option3");
        $(".mainmenu").addClass("option3");
        $("#intro").addClass("option3");
        $(".intro-titles h1").addClass("option3");
        $(".logo-bg").addClass("option3");
        $(".logo-bg img").attr("src", "images/corner-white.png");

        $(".bottom-left img").attr("src", "images/bottom-left-white.png");
        $(".top-right img ").attr("src", "images/top-right-white.png");
    });

});


$(document).ready(function() {

    var TempTemp = 0.10;

    setTimeout(function() {
        $(".intro-container1").addClass("showIntro");
    }, 1000 * TempTemp);
    setTimeout(function() {
        $(".intro-container1").removeClass("showIntro");
    }, 3000 * TempTemp);

    setTimeout(function() {
        $(".intro-container2").addClass("showIntro");
    }, 3500 * TempTemp);
    setTimeout(function() {
        $(".intro-container2").removeClass("showIntro");
    }, 5500 * TempTemp);

    setTimeout(function() {
        $(".intro-container3").addClass("showIntro");
    }, 6000 * TempTemp);
    setTimeout(function() {
        $(".intro-container3").removeClass("showIntro");
    }, 8000 * TempTemp);

    setTimeout(function() {
        $(".introtext").addClass("hideIntro");
    }, 8500 * TempTemp);






    setTimeout(function() {
        $(".logo-bg").removeClass("finalPOS2");
    }, 2000);


});


$(function() {


    $(".mainmenu li").mouseover(function() {
        // $(".section").addClass("blurIt");
        $(".mainmenu").addClass("blackOverlay");
        // $(".overlayOnHover").addClass("showOverlay");
        // $(".overlayOnHover h1").text("This is something and some other stuff");
        $(".logo-bg").addClass("opacity0");
        // $(".mainmenu").addClass("noBlending");  


    });


    $(".mainmenu li").mouseout(function() {
        // $(".section").removeClass("blurIt");
        $(".mainmenu").removeClass("blackOverlay");
        // $(".overlayOnHover").removeClass("showOverlay");
        $(".logo-bg").removeClass("opacity0");
        // $(".mainmenu").removeClass("noBlending");
    });

    /*
    $(".mainmenu").mouseout(function() {
    	$(".mainmenu").removeClass("noBlending");
    });
    */


    $(".mainmenu li a").click(function() {
        // $(".section").removeClass("blurIt");
        $(".mainmenu").removeClass("blackOverlay");
        // $(".overlayOnHover").removeClass("showOverlay");
        $(".logo-bg").removeClass("opacity0");
        //$(".mainmenu").removeClass("noBlending");
    });

});


$(function() {

    $(".slides-navigation a").mouseover(function() {
        $("#circle").addClass("hideCircle");
        $("#circle-big").addClass("hideCircle");
    });

    $(".slides-navigation a").mouseout(function() {
        $("#circle").removeClass("hideCircle");
        $("#circle-big").removeClass("hideCircle");
    });

});


$(function() {
    $(".logo-bg").mouseover(function() {
        $(".logo-bg").addClass("gradient");
    });
    $(".logo-bg").mouseout(function() {
        $(".logo-bg").removeClass("gradient");
    });
});

$('body').mouseover(function() {
    $(this).css({
        cursor: 'none'
    });
});

$(document).on('mousemove', function(e) {
    $('#circle-big').css({
        left: e.pageX,
        top: e.pageY
    });
    $('#circle').css({
        left: e.pageX,
        top: e.pageY
    });
});
$('a').hover(function() {
    $('#circle-big').toggleClass('on-link');
})




$(document).on('mousemove', function() {
    var xxx = getRandomInt(1, 7);
    var xxx2 = getRandomInt(1, 9);


    $('#circle-big').addClass('blur' + xxx);

    setTimeout(function() {
        $('#circle-big').removeClass('blur' + xxx);
    }, 200);


    /*
    $('#circle-big').addClass('rotate' + xxx);
	
    setTimeout(function(){
    		$('#circle-big').removeClass('rotate' + xxx);
    	}, 200);
	
    */

    // $('#circle-big').css('filter', 'blur(' + xxx + ')');

    // $('#circle-big').css('opacity', xxx2 * 0.10);
});



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


$(function() {
    $(".next").on("mouseover", function() {
        $('#circle-big').css("display", "none");
        $('#circle').css("display", "none");
    });

    $(".next").on("mouseout", function() {
        $('#circle-big').css("display", "block");
        $('#circle').css("display", "block");
    });

    $(".prev").on("mouseover", function() {
        $('#circle-big').css("display", "none");
        $('#circle').css("display", "none");
    });

    $(".prev").on("mouseout", function() {
        $('#circle-big').css("display", "block");
        $('#circle').css("display", "block");
    });

});

function pageLoadEffects() {

    setTimeout(function() {

        $(".menu-li-1").removeClass("hide");
    }, 800);

    setTimeout(function() {
        $(".menu-li-2").removeClass("hide");
    }, 1000);

    setTimeout(function() {
        $(".menu-li-3").removeClass("hide");
    }, 1200);

    setTimeout(function() {
        $(".menu-li-4").removeClass("hide");
    }, 1400);

    setTimeout(function() {
        $(".menu-li-5").removeClass("hide");
    }, 1600);



    setTimeout(function() {
        $(".it-line-1").removeClass("hideop");
    }, 200);

    setTimeout(function() {
        $(".it-line-2").removeClass("hideop");
    }, 400);

    setTimeout(function() {
        $(".it-line-3").removeClass("hideop");
    }, 600);

}


$(document).ready(function() {
    // pageLoadEffects();
});



function textLoop() {



    setTimeout(function() {
        $(".it-line-3").text("SEXY");
    }, 1000);

    setTimeout(function() {
        $(".it-line-3").text("BEAUTY");
    }, 2000);

    setTimeout(function() {
        $(".it-line-3").text("STUNNING");
    }, 3000);

    setTimeout(function() {
        $(".it-line-3").text("PASSION");
    }, 4000);

    setTimeout(function() {
        $(".it-line-3").text("EMOTION");
    }, 5000);

    setTimeout(function() {
        $(".it-line-3").text("INSPIRATION");
    }, 6000);

    setTimeout(function() {
        $(".it-line-3").text("ART");
    }, 7000);

    setTimeout(function() {
        textLoop();
    }, 7000);



}

$(document).ready(function() {

    textLoop();

});


// Hover over effect for menu items
$(function() {
    $(".menu-item").mouseover(function() {
        $("#circle-big").addClass("makeSolid");
    });
    $(".menu-item").mouseout(function() {
        $("#circle-big").removeClass("makeSolid");
    });
});


// Smooth page scrolling

/* 
if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;
function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 120;
    else if (event.detail) delta = -event.detail / 3;
    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}
function handle(delta) {
    var time = 500;
	var distance = 500;
    
    $('html, body').stop().animate({
        scrollTop: $(window).scrollTop() - (distance * delta)
    }, time );
}

*/

// SMOOTH ANCHOR SCROLLING

$(function() {



    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1500, "swing", function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });


});



$(function() {

    /* 
    $(".logo-bg").mouseover(function() {
    	$("#logo").attr("src", "logo.png");
    })
    $(".logo-bg").mouseout(function() {
    	$("#logo").attr("src", "logo0.png");
    });
	
    */
    $(".logo-bg, .fadearea, .fadearea2").mouseover(function() {
        $("#circle-big").addClass("fadeaway");
    });
    $(".logo-bg, .fadearea, .fadearea2").mouseout(function() {
        $("#circle-big").removeClass("fadeaway");
    });
});




// Items that used to be in index.html, new location:

function setHeight() {
    var winHeight = $(window).height();
    $(".section").css("height", winHeight);
}

function showSplash(line1, line2, line3) {

    $(".line1").html(line1 + "<br />" + line2 + "<br />" + line3);

    $("#splash").addClass("show");
}

function hideSplash() {
    $("#splash").removeClass("show");
}
$(function() {



    function menuColor(menucolor) {

        $(".mainmenu").removeClass("white-menu");

        if (menucolor == "white") {
            $(".mainmenu").addClass("white-menu");
        } else {
            $(".mainmenu").removeClass("white-menu");
        }
    }

    $(document).ready(function() {
        setTimeout(function() {
            $(".logo-bg").removeClass("offScreen");
        }, 500);
        setTimeout(function() {
            $(".intro-titles").removeClass("offScreen");
        }, 1000);


        setTimeout(function() {
            $(".mainmenu li:nth-child(1)").removeClass("offScreen");
        }, 1500);
        setTimeout(function() {
            $(".mainmenu li:nth-child(2)").removeClass("offScreen");
        }, 1750);
        setTimeout(function() {
            $(".mainmenu li:nth-child(3)").removeClass("offScreen");
        }, 2000);
        setTimeout(function() {
            $(".mainmenu li:nth-child(4)").removeClass("offScreen");
        }, 2250);
        setTimeout(function() {
            $(".mainmenu li:nth-child(5)").removeClass("offScreen");
        }, 2500);
        setTimeout(function() {
            $(".mainmenu li:nth-child(6)").removeClass("offScreen");
        }, 2750);
        setTimeout(function() {
            $(".mainmenu li:nth-child(7)").removeClass("offScreen");
        }, 3000);

        setTimeout(function() {
            $("#option1").removeClass("offScreen");
        }, 3500);
        setTimeout(function() {
            $("#option2").removeClass("offScreen");
        }, 3750);
        setTimeout(function() {
            $("#option3").removeClass("offScreen");
        }, 4000);



    });


    $(function() {

        // Contact page effects

        // Remove circle-big on hover over text area, so it doesn't block it.

        $("#contact .h2-container").mouseover(function() {
            $("#contact").addClass("con1");
        });

        $("#contact .h2-container").mouseout(function() {
            $("#contact").removeClass("con1");
        });



        // Hide circle cursor when hovering over #intro

        $("#about").mouseover(function() {
            $("#circle-big").css("opacity", 1);
            $("#circle-big").css("display", "block");
        });


        $(".intro-titles").mouseover(function() {
            $("#circle-big").css("display", "none");
        });

        $("#intro").mouseover(function() {
            $("#circle-big").css("opacity", 0);
        });


        // Hide circle cursor when hovering over #approach

        $("#contact, #our-work").mouseover(function() {
            $("#circle-big").css("opacity", 1);
        });

        $("#approach").mouseover(function() {
            $("#circle-big").css("opacity", 0);
        });

    });


    $(window).on('resize', function() {


        $('.dna').each(function() {
            this.contentWindow.location.reload(true);
        });

    });



    $(window).on('scroll', function() {



        // $("#debug").text( $(window).scrollTop() );
        var anchor_about = $('#about').offset().top;
        var anchor_ourwork = $('#our-work').offset().top;
        var anchor_int = $('#intro').offset().top;
        var anchor_portfolioItem = $('.section.sliderSection').offset().top;
        var anchor_ourWork = $('#our-work').offset().top;


        if ($(window).scrollTop() < anchor_about) {
            $("#about").removeClass("opened");
            $(".top-right").removeClass("finalPOS");
            $(".bottom-left").removeClass("finalPOS");
            $(".center-text").removeClass("fadeTextIn");

            // Enable our circle cursor on About section
            $("#circle-big").addClass("show-show-show");
        }

        if ($(window).scrollTop() > anchor_about - 200) {
            $("#about").addClass("opened");
            $(".top-right").addClass("finalPOS");
            $(".bottom-left").addClass("finalPOS");
            $(".center-text").addClass("fadeTextIn");

            // Enable our circle cursor on About section
            $("#circle-big").addClass("show-show-show");
        }

        if ($(window).scrollTop() > anchor_ourwork) {
            $("#about").removeClass("opened");
            $(".top-right").removeClass("finalPOS");
            $(".bottom-left").removeClass("finalPOS");
            $(".center-text").removeClass("fadeTextIn");

            // Enable our circle cursor on About section
            $("#circle-big").removeClass("show-show-show");
        }

        if ($(window).scrollTop() > anchor_int) {

            // Enable our circle cursor on intro section
            $("#circle-big").removeClass("show-show-show");
        }

        if ($(window).scrollTop() > anchor_portfolioItem) {

            // Enable our circle cursor on all portfolios sections
            $("#circle-big").removeClass("show-show-show");
        }

        if ($(window).scrollTop() > anchor_ourWork) {

            // Enable our circle cursor on our works section
            $("#circle-big").removeClass("show-show-show");
        }





        // Shrink #intro and change colors of it when scrolling down to next slide

        var winHeight = $(window).height();


        if ($(window).scrollTop() == 0) {
            // $("#intro").css("background-size", "100%");
            // $("#intro").css("filter", "invert(0%)");
            // $("#intro").css("background-position", "50% 0px");

            $(".intro-titles").css("margin-left", "0px");
        }



        if ($(window).scrollTop() >= winHeight / 10) {
            // $("#intro").css("background-size", "100%");
            // $("#intro").css("filter", "invert(0%)");
            // $("#intro").css("background-position", "50% -50px");
            // $(".intro-titles").css("left", "0px");
        }

        if ($(window).scrollTop() >= winHeight / 9) {
            // $("#intro").css("background-size", "95%");
            // $("#intro").css("filter", "invert(10%)");
            // $("#intro").css("background-position", "50% -100px");
            // $(".intro-titles").css("left", "-50px");
        }

        if ($(window).scrollTop() >= winHeight / 8) {
            // $("#intro").css("background-size", "90%");
            // $("#intro").css("filter", "invert(30%)");
            // $("#intro").css("background-position", "50% -150px");
            // $(".intro-titles").css("left", "-100px");
        }

        if ($(window).scrollTop() >= winHeight / 7) {
            // $("#intro").css("background-size", "85%");
            // $("#intro").css("filter", "invert(40%)");
            // $("#intro").css("background-position", "50% -200px");
            // $(".intro-titles").css("left", "-200px");
        }

        if ($(window).scrollTop() >= winHeight / 6) {
            // $("#intro").css("background-size", "80%");
            // $("#intro").css("filter", "invert(50%)");
            // $("#intro").css("background-position", "50% -250px");
            // $(".intro-titles").css("left", "-250px");
        }

        if ($(window).scrollTop() >= winHeight / 5) {
            // $("#intro").css("background-size", "75%");
            // $("#intro").css("filter", "invert(60%)");
            // $("#intro").css("background-position", "50% -300px");
        }

        if ($(window).scrollTop() >= winHeight / 4) {
            // $("#intro").css("background-size", "70%");
            // $("#intro").css("filter", "invert(80%)");
            // $("#intro").css("background-position", "50% -350px");
            // $(".intro-titles").css("left", "-400px");

            $(".intro-titles").css("margin-left", "-700px");
        }

        if ($(window).scrollTop() >= winHeight / 3) {
            // $("#intro").css("background-size", "65%");
            // $("#intro").css("filter", "invert(100%)");
            // $("#intro").css("background-position", "50% -400px");
            // $(".intro-titles").css("left", "-500px");
        }



        if ($(window).scrollTop() > 200) {
            $(".mainmenu").addClass("sticky");

        } else {
            $(".mainmenu").removeClass("sticky");
        }



        var anchor_offset = $('#title').offset().top;
        var anchor_intro = $('#intro').offset().top;
        var anchor_about = $('#about').offset().top;
        var anchor_about2 = $('#about2').offset().top;
        var anchor_second = $('#second').offset().top;
        var anchor_final = $('#contact').offset().top;

        var anchor_third = $('#third').offset().top;
        var anchor_fourth = $('#fourth').offset().top;
        var anchor_fifth = $('#fifth').offset().top;
        var anchor_sixth = $('#sixth').offset().top;


        var anchor_third = $('#third').offset().top;
        var anchor_fourth = $('#fourth').offset().top;




        // $(".intro-titles h1").text($(window).scrollTop());


        if ($(window).scrollTop() <= anchor_about || $(window).scrollTop() == 0) {

            $(".mainmenu, .intro-titles").addClass("makeWhite");
            $("#logo").addClass("makeWhite");

        }

        if ($(window).scrollTop() <= anchor_intro && $(window).scrollTop() != 0) {

            $(".mainmenu, .intro-titles").removeClass("makeWhite");
            $("#logo").removeClass("makeWhite");

        }


        /*

        if ( $(window).scrollTop() < anchor_about -100 )  {

        	// $("#circle-bi").css("opacity", 0);
        	
        	$("#about").addClass("opened");
        	
        			$(".top-right").addClass("finalPOS");
        			$(".bottom-left").addClass("finalPOS");
        			$(".center-text").addClass("fadeTextIn");
        }

        if ( $(window).scrollTop() > anchor_about -100 )  {

        	$("#about").removeClass("opened");
        	
        	$(".top-right").removeClass("finalPOS");
        	$(".bottom-left").removeClass("finalPOS");
        	$(".center-text").removeClass("fadeTextIn");
        }

        */



        if ($(window).scrollTop() >= anchor_final - 250) {
            setTimeout(function() {
                $("#top4").addClass("finalBricks");
            }, 0);
            setTimeout(function() {
                $("#bottom4").addClass("finalBricks");
            }, 0);

            setTimeout(function() {
                $("#top3").addClass("finalBricks");
            }, 0);
            setTimeout(function() {
                $("#bottom3").addClass("finalBricks");
            }, 0);

            setTimeout(function() {
                $("#top2").addClass("finalBricks");
            }, 0);
            setTimeout(function() {
                $("#bottom2").addClass("finalBricks");
            }, 0);

            setTimeout(function() {
                $("#top1").addClass("finalBricks");
            }, 0);
            setTimeout(function() {
                $("#bottom1").addClass("finalBricks");
            }, 0);

            $(".h2-container").addClass("showh2");



        } else {
            setTimeout(function() {
                $("#top4").removeClass("finalBricks");
            }, 0);
            setTimeout(function() {
                $("#bottom4").removeClass("finalBricks");
            }, 0);

            setTimeout(function() {
                $("#top3").removeClass("finalBricks");
            }, 0);
            setTimeout(function() {
                $("#bottom3").removeClass("finalBricks");
            }, 0);

            setTimeout(function() {
                $("#top2").removeClass("finalBricks");
            }, 0);
            setTimeout(function() {
                $("#bottom2").removeClass("finalBricks");
            }, 0);

            setTimeout(function() {
                $("#top1").removeClass("finalBricks");
            }, 0);
            setTimeout(function() {
                $("#bottom1").removeClass("finalBricks");
            }, 0);

            $(".h2-container").removeClass("showh2");

        }


    });
});


function tagShow(text, time) {
    setTimeout(function() {
        $(".intro h1").text(text);
    }, time);
}

$(document).ready(function() {




    setHeight();

    var Increment = 1;
    var currentTime = 0;

    // Intro

    currentTime = currentTime + Increment;
    tagShow("MOVIE", currentTime);

    currentTime = currentTime + Increment;
    tagShow("AND", currentTime);

    currentTime = currentTime + Increment;
    tagShow("TELEVISION", currentTime);

    currentTime = currentTime + Increment;
    tagShow("POSTERS", currentTime);

    currentTime = currentTime + Increment;
    tagShow("BY", currentTime);

    currentTime = currentTime + Increment;
    tagShow("CLEVERBIRD", currentTime);

    currentTime = currentTime + Increment;
    tagShow("CREATIVE", currentTime);

    // Hide Intro
    currentTime = currentTime + Increment;
    setTimeout(function() {
        $(".intro").css("display", "none");
    }, currentTime);




});

$(window).resize(function() {
    setHeight();
});






// slides
$(function() {


    var $slides = $('#slides');

    Hammer($slides[0]).on("swipeleft", function(e) {
        $slides.data('superslides').animate('next');
    });

    Hammer($slides[0]).on("swiperight", function(e) {
        $slides.data('superslides').animate('prev');
    });

    $slides.superslides({
        hashchange: false
    });



    var $slides2 = $('#slides2');

    Hammer($slides2[0]).on("swipeleft", function(e) {
        $slides2.data('superslides').animate('next');
    });

    Hammer($slides2[0]).on("swiperight", function(e) {
        $slides2.data('superslides').animate('prev');
    });

    $slides2.superslides({
        hashchange: false
    });



    var $slides3 = $('#slides3');

    Hammer($slides3[0]).on("swipeleft", function(e) {
        $slides3.data('superslides').animate('next');
    });

    Hammer($slides3[0]).on("swiperight", function(e) {
        $slides3.data('superslides').animate('prev');
    });

    $slides3.superslides({
        hashchange: false
    });




    var $slides4 = $('#slides4');

    Hammer($slides4[0]).on("swipeleft", function(e) {
        $slides4.data('superslides').animate('next');
    });

    Hammer($slides4[0]).on("swiperight", function(e) {
        $slides4.data('superslides').animate('prev');
    });

    $slides4.superslides({
        hashchange: false
    });



    var $slides5 = $('#slides5');

    Hammer($slides5[0]).on("swipeleft", function(e) {
        $slides5.data('superslides').animate('next');
    });

    Hammer($slides5[0]).on("swiperight", function(e) {
        $slides5.data('superslides').animate('prev');
    });

    $slides5.superslides({
        hashchange: false
    });





    var $slides6 = $('#slides6');

    Hammer($slides6[0]).on("swipeleft", function(e) {
        $slides6.data('superslides').animate('next');
    });

    Hammer($slides6[0]).on("swiperight", function(e) {
        $slides6.data('superslides').animate('prev');
    });

    $slides6.superslides({
        hashchange: false
    });


    var $slides7 = $('#slides7');

    Hammer($slides7[0]).on("swipeleft", function(e) {
        $slides7.data('superslides').animate('next');
    });

    Hammer($slides7[0]).on("swiperight", function(e) {
        $slides7.data('superslides').animate('prev');
    });

    $slides7.superslides({
        hashchange: false
    });



    var $slides8 = $('#slides8');

    Hammer($slides8[0]).on("swipeleft", function(e) {
        $slides8.data('superslides').animate('next');
    });

    Hammer($slides8[0]).on("swiperight", function(e) {
        $slides8.data('superslides').animate('prev');
    });

    $slides8.superslides({
        hashchange: false
    });



    var $slides9 = $('#slides9');

    Hammer($slides9[0]).on("swipeleft", function(e) {
        $slides9.data('superslides').animate('next');
    });

    Hammer($slides9[0]).on("swiperight", function(e) {
        $slides9.data('superslides').animate('prev');
    });

    $slides9.superslides({
        hashchange: false
    });



    var $slides10 = $('#slides10');

    Hammer($slides10[0]).on("swipeleft", function(e) {
        $slides10.data('superslides').animate('next');
    });

    Hammer($slides10[0]).on("swiperight", function(e) {
        $slides10.data('superslides').animate('prev');
    });

    $slides10.superslides({
        hashchange: false
    });


});




// Home dots stars

var camera, scene, renderer, particles, particle, material, particleCount, points, texture;
var xSpeed, ySpeed;
xSpeed = 0.0000005;
ySpeed = 0.000001;
var winWidth, winHeight;
winWidth = window.innerWidth;
winHeight = window.innerHeight;

init();
animate();

function init() {
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2('#000', 0.001);

    camera = new THREE.PerspectiveCamera(75, winWidth / winHeight, 1, 1000);
    camera.position.z = 500;

    // particle
    // transparent blending
    material = new THREE.PointsMaterial({
        color: '#FFF',
        size: 1,
        transparent: true,
        blending: THREE.AdditiveBlending
    });

    particleCount = 10000;
    particles = new THREE.Geometry();

    for (var i = 0; i < particleCount; i++) {
        var px = Math.random() * 2000 - 1000;
        var py = Math.random() * 2000 - 1000;
        var pz = Math.random() * 2000 - 1000;
        particle = new THREE.Vector3(px, py, pz);
        particle.velocity = new THREE.Vector3(0, Math.random(), 0);
        particles.vertices.push(particle);
    }

    points = new THREE.Points(particles, material);
    points.sortParticles = true;
    scene.add(points);

    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(winWidth, winHeight);
    renderer.setClearColor('#000', 1);
    document.getElementById('canvas').appendChild(renderer.domElement);
}

function animate() {
    requestAnimationFrame(animate);

    scene.rotation.y += xSpeed;


    var i = particleCount;
    while (i--) {
        var particle = particles.vertices[i];

        // y
        if (particle.y > 1000) {
            particle.y = -1000;
            particle.velocity.y = Math.random();
        }
        particle.velocity.y += Math.random() * ySpeed;

        particle.add(particle.velocity);
    }
    points.geometry.verticesNeedUpdate = true;

    render();
}

function render() {
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
}

// END homepage dots stars