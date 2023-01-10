$(function() {

	"use strict";

	/*---------------------------------------------------------------
		Launch NiceScroll In Notification & Messages Menu
	/*--------------------------------------------------------------*/
	var elementsList = $(".elements-list");
	if(elementsList.length) {
		var niceList = $(".elements-list").niceScroll({
			cursorcolor: '#313032', // Changing the scrollbar color
			cursorwidth: 6, // Changing the scrollbar width
			railalign: 'left', // alignment of vertical rail
			cursorborder: 'none', // Rempving the scrollbar border
		});
	} 

	$(".main-header .dropdown").on("shown.bs.dropdown",function(e){
		niceList.show().resize();
	});

	$(".main-header .dropdown").on("hiden.bs.dropdown",function(e){
		niceList.hide();
	});


	/*---------------------------------------------------------------
		Launch NiceScroll Plugin In Messages Page 
	/*--------------------------------------------------------------*/
	var msgArea = $(".message-area");
	if(msgArea.length) {
		msgArea.niceScroll({
			cursorcolor: '#313032', // Changing the scrollbar color
			cursorwidth: 8, // Changing the scrollbar width
			cursorborder: 'none', // Rempving the scrollbar border
			railalign: 'left', // alignment of vertical rail
			scrollspeed: 100, // scrolling speed
			mousescrollstep: 80 // scrolling speed with mouse wheel (pixel)
		});
	}

	/* ---------------------------------------------------
        Service Gallery ( Service Profile Page )
    ----------------------------------------------------- */
    var gallery = $(".owl-carousel");
    if(gallery.length) {
        gallery.owlCarousel({
            loop: true,
            margin: 0,
            rtl: true,
            autoplay: true,
            items: 1,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            dots: true,
            dotsSpeed: 200,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]   
        });
    }

    /*-----------------------------------------------
        Show/Hide Job Select
        ( SignUp Page )
    -----------------------------------------------*/
    $(".radio-tabs [name='tab_btns']").on("click", function() {
    	if($("#showSelect").is(":checked")) {
    		$("#jobSelect").show();
    	} else {
    		$("#jobSelect").hide();
    	}
    });


    /*---------------------------------------------------------------
		Add New Inputs When Click On Plus ( + ) Button
		( Add Company Page )
	/*--------------------------------------------------------------*/
    $('.add-details-btn').click(function(){
		var repeatedSec = $(this).parent().siblings('.repeated-inputs');
		var currentCount = repeatedSec.length;
		var newCount = currentCount + 1;
		var lastRepeatingGroup = repeatedSec.last();
		var newSection = lastRepeatingGroup.clone().removeClass("col-xs-pull-2");
		newSection.insertAfter(lastRepeatingGroup);
		// Append Remove Button only Once
		if(newCount < 3) {
			newSection.append('<span class="fa fa-close remove-inputs-btn" title="حذف"></span>');

		}
		// Append ClockPicker Plugin
		appendClockPicker();
	});
	// Remove Repeated Inputs When Click on Remove Btn
	$(document).on("click", ".remove-inputs-btn", function() {
		$(this).parent().remove();
	});

    /*-----------------------------------------------
        Launch DatePicker Plugin 
    -----------------------------------------------*/
    // User-Account Page
    var datePicker = $(".datepicker");
    if(datePicker.length) {
        datePicker.datepicker({
            language: "ar",
            autoclose: true,
            clearBtn: true,
            todayHighlight: true,
            format: "dd/mm/yyyy"
        });
    }

    /*---------------------------------------------------------------
		Launch ClockPicker Plugin 
	/*--------------------------------------------------------------*/
	// Add Shop Page
	function appendClockPicker() {
		var clockPickerInput = $('.clockpicker');
		if(clockPickerInput.length) {
			clockPickerInput.clockpicker({
				donetext: 'اختر',
				// autoclose: true,
				twelvehour: true
			});
		}
	}
	appendClockPicker();
});


/* ---------------------------------------------------
    Google Maps
----------------------------------------------------- */
function initMap() {
	/* Details Maps */

    // Styles a map in night mode.
    var myLatLng = {lat: 30.6074889, lng: 32.2666016}; // Change to your latitude and longitude 
    var map = new google.maps.Map(document.getElementById("map"), {
        center: myLatLng,
        // scrollwheel: false,
        zoom: 16,
          
    });
    // Adding Marker
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
    });
}

/* Add Pages Map */
function initAddMap() {
    // Styles a map in night mode.
    var myLatLng = {lat: 30.6074889, lng: 32.2666016}; // Change to your latitude and longitude 
    var map = new google.maps.Map(document.getElementById("addMap"), {
        center: myLatLng,
        // scrollwheel: false,
        zoom: 16,          
    });

	map.addListener('click', function(e) {
		marker.setPosition(e.latLng);
		map.panTo(e.latLng);
	});

	var marker = new google.maps.Marker({
		map: map
	});
}