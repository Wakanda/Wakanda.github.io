jQuery(document).ready(function ($) {

    'use strict';
   
	
    //SMOOTH SCROLL
    smoothScroll.init({
        speed: 500, // How fast to complete the scroll in milliseconds
        easing: 'easeInOutCubic', // Easing pattern to use
        updateURL: false, // Boolean. Whether or not to update the URL with the anchor hash on scroll
        callbackBefore: function (toggle, anchor) { }, // Function to run before scrolling
        callbackAfter: function (toggle, anchor) { } // Function to run after scrolling
    });
	
    //Count-Down  
    var timer;
    var now = new Date();
    var eventStart = new Date(Date.UTC(2016, 1, 13, 4, 30, 0)); // 4:30 + 5:30 = 10:00 AM 
    var eventFinish = new Date(Date.UTC(2016, 1, 14, 4, 30, 0)); // 4:30 + 5:30 = 10:00 AM 
    /*var eventStart  = new Date(2016,1,12,13,44,0); // 4:30 + 5:30 = 10:00 AM 
    var eventFinish = new Date(2016,1,12,13,45,0); // 4:30 + 5:30 = 10:00 AM */

    if (now < eventStart) {
        $(".hide-before-event-start").hide();
        $(".hide-before-event-end").hide();
        timer = new CountdownTimer('event-counter', eventStart, '', function () {
            window.location.reload();
        });
        timer.countDown();
    } else if (now > eventFinish) {
        $(".hide-before-event-end").show();
        $(".hide-after-event-end").hide();
        $(".hide-after-event-start").hide();
    } else {
        $(".hide-after-event-start").hide();
        $(".hide-before-event-end").hide();
        $(".hide-before-event-start").show();
        timer = new CountdownTimer('event-counter', eventFinish, '', function () {
            window.location.reload();
        });
        timer.countDown();
    }
	
    //MAGNIFIC POPUP LOAD CONTENT VIA AJAX
    $('.speaker-detail').magnificPopup({ type: 'ajax' });
    $('.register').magnificPopup({ type: 'ajax' });	
 	
    //MAGNIFIC POPUP IMAGE
    $('.image-link').magnificPopup({ type: 'image' });	
	
    //OWLCAROUSEL SCHEDULE
    var timetable = $("#timetable");
    var days = $("#days");

    timetable.owlCarousel({
        singleItem: true,
        slideSpeed: 1000,
        navigation: false,
        pagination: false,
        afterAction: syncPosition,
        responsiveRefreshRate: 200,
    });

    days.owlCarousel({
        items: 4,
        itemsMobile: [479, 4],
        pagination: false,
        responsiveRefreshRate: 100,
        afterInit: function (el) {
            el.find(".owl-item").eq(0).addClass("synced");
        }
    });

    function syncPosition(el) {
        var current = this.currentItem;
        $("#days")
            .find(".owl-item")
            .removeClass("synced")
            .eq(current)
            .addClass("synced")
        if ($("#days").data("owlCarousel") !== undefined) {
            center(current)
        }
    }

    $("#days").on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).data("owlItem");
        timetable.trigger("owl.goTo", number);
    });

    function center(number) {
        var daysvisible = days.data("owlCarousel").owl.visibleItems;
        var num = number;
        var found = false;
        for (var i in daysvisible) {
            if (num === daysvisible[i]) {
                var found = true;
            }
        }

        if (found === false) {
            if (num > daysvisible[daysvisible.length - 1]) {
                days.trigger("owl.goTo", num - daysvisible.length + 2)
            } else {
                if (num - 1 === -1) {
                    num = 0;
                }
                days.trigger("owl.goTo", num);
            }
        } else if (num === daysvisible[daysvisible.length - 1]) {
            days.trigger("owl.goTo", daysvisible[1])
        } else if (num === daysvisible[0]) {
            days.trigger("owl.goTo", num - 1)
        }

    }

    //OWLCAROUSEL GALLERY
    var owl = $(".gallery");

    owl.owlCarousel({
        itemsCustom: [
            [0, 2],
            [450, 2],
            [600, 4],
            [700, 4],
            [1000, 4],
            [1200, 4],
            [1600, 4]
        ],
        navigation: true,
        navigationText: ['<i class="fa fa-4x fa-chevron-circle-left"></i>', '<i class="fa fa-4x  fa-chevron-circle-right"></i>'],
    });

	  
    //OWLCAROUSEL TESTIMONIAL
    $("#quote").owlCarousel({

        pagination: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        navigation: true,
        navigationText: ['<i class="fa fa-3x fa-chevron-circle-left"></i>', '<i class="fa fa-3x  fa-chevron-circle-right"></i>'],
    });
	
	
    //FIX HOVER EFFECT ON IOS DEVICES
    document.addEventListener("touchstart", function () { }, true);



});




$(window).load(function () {
	
	
    //PARALLAX BACKGROUND
    $(window).stellar({
        horizontalScrolling: false,
    });
    
	
    //PRELOADER
    $('#preload').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	
	
    //HEADER ANIMATION
    $(window).scroll(function () {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

});

// CONTACT FORM FUNCTION
var contact_send = function () {

    'use strict';

    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var type = $("#type").val();

    if (name == "") { alert("name area is empty!"); $("#name").focus(); }
    else if (email == "") { alert("email address area is empty!"); $("#email").focus(); }
    else if (phone == "") { alert("phone number area is empty!"); $("#phone").focus(); }
    else if (type == "") { alert("register type isn't selected!"); $("#type").focus(); }
    else {
        $.post("contact.send.php", { name: name, email: email, phone: phone, type: type }, function (result) {
            if (result == "SUCCESS") {
                alert("Your contact form is sent.");
                setTimeout(function () {
                    $("#name").val("");
                    $("#email").val("");
                    $("#phone").val("");
                    $("#type").val("");
                }, 3000);
            } else {
                alert("Your contact form isn't sent. Please check fields and try again.");
            }
        });
    }

};

/* Newsletter Functions */
var newsletter_send = function () {

    'use strict';

    var email = $("#newsletter_email").val();
    if (email == "") { alert("Your email address is empty!"); $("#newsletter_email").focus(); }
    else {
        $.post("newsletter.send.php", { email: email }, function (result) {

            console.log(result);

            if (result == "SUCCESS") {
                alert("Thank you. Your email is added to our database.");
                setTimeout(function () { $("#newsletter_email").val(""); }, 3000);
            }

            else if (result == "EXIST") {
                alert("Error. Your email address is already exist our database.");
                $("#newsletter_email").focus();
            }

            else {
                alert("Error. Your email isn't added to our database.");
                $("#newsletter_email").focus();
            }

        });
    }

};
	

//GOOGLE MAP
function init_map() {
    var myOptions = {
        zoom: 14,
        center: new google.maps.LatLng(40.801485408197856, -73.96745953467104), //change the coordinates
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        styles: [{ featureType: 'all', stylers: [{ saturation: -100 }, { gamma: 0.50 }] }]
    };
    map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
    marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(40.801485408197856, -73.96745953467104) //change the coordinates
    });
    infowindow = new google.maps.InfoWindow({
        content: "<b>Evential 2014</b><br/>1571 Hidden Terrace<br/> New York"  //add your address
    });
    google.maps.event.addListener(marker, "click", function () {
        infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
}
google.maps.event.addDomListener(window, 'load', init_map);
	

	