// Scroll.js

$(window).on('popstate',function(e){
	e.preventDefault();
	var target = window.location.href.split("#")[1];
	if(target != "" && window.location.href != "#"){
		$('html, body').stop().animate({'scrollTop': $("#"+target).offset().top}, 500, 'swing', function () {
			window.location.hash = target;
		});
	}
});

// Navigation

 $(".hamburger").click(function(){
	$(".main_nav").addClass("opened");
});

$(".main_nav .close").click(function(){
	$(".main_nav").removeClass("opened");
});

// Animate blocks

if($(".animatable").length>0){
	
	var window_width = $(window).width();
	var window_height = $(window).height();
	var window_height_offset = window_height * 3/4;
	var window_srollTop = $(window).scrollTop() + window_height_offset;
	
	$(window).resize(function(){
		window_width = $(window).width();
		window_height = $(window).height();
		window_height_offset = window_height * 3/4;
	});
	$(window).scroll(function(){
		window_srollTop = $(window).scrollTop() + window_height_offset;
		$(".animatable").each(function(){
			if(window_srollTop >= $(this).offset().top || $("body").height()<=$(window).scrollTop() + window_height + 20){
				if($(this).attr("data-delay")!=undefined && window_width >= 1200){
					var delay = parseInt($(this).attr("data-delay"));
					var _this = $(this);
					setTimeout(function(){
						_this.addClass("animated");
					}, delay);
				}else{
					$(this).addClass("animated");
				}
			}
		});
	});

	$(window).trigger("scroll");

	/* 
	var elements_on_1_screen = [];
	$("img").each(function(){
		if($(this).offset().top <= window_height ){
			elements_on_1_screen.push($(this));
		}
	});
	$.each(elements_on_1_screen, function(index, value){
		value.on("load", function (e) {
			
		});
		if(index+1 == elements_on_1_screen.length){
			$(window).trigger("scroll");
		}
	});
	 */
	$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$(this).find(".slick-slide .animatable").removeClass("animated");
	});
	
	$('.slider').on('afterChange', function(event, slick, currentSlide){
		$(this).find(".slick-current .animatable").each(function(){
			if($(this).attr("data-delay")!=undefined){
				var delay = parseInt($(this).attr("data-delay"));
				var _this = $(this);
				setTimeout(function(){
					_this.addClass("animated");
				}, delay);
			}else{
				$(this).addClass("animated");
			}
		});
	});
}

// Ajax form send
	
$(".contacts form").submit(function(event){
	event.preventDefault();
 
	var form = $(this),
		term = form.serialize(),
		url = form.attr("action");
 
	var posting = $.post( url, term );
 
	posting.done(function(data) {
		if(data=="ok"){
			form.removeClass("error").addClass("success");
		}else{
			form.addClass("error");
		}
	});
});

// Slick Sliders

if($(".section_about .slider").length>0){
	$(".section_about .slider").slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			  }
			}
		]
	});
}

if($(".section_features .slider").length>0){
	$(".section_features .slider").slick({
		dots: false,
		arrows: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		touchMove:false, 
		swipe:false,
	});
	
	$(".section_features .slider_menu a").click(function(){
		var slide = $(this).parent().index();
		$(".section_features .slider_menu a").removeClass("active");
		$(this).addClass("active");
		$(".section_features .slider").slick("slickGoTo",slide);
	});
}

if($(".section_projects .slider").length>0){
	$(".section_projects .slider").slick({
		dots: false,
		arrows: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		touchMove:false, 
		swipe:false,
		adaptiveHeight:true,
	});
	
	$(".section_projects .slider_menu a, .projects header .slider_menu a").click(function(){
		var slide = $(this).index();
		$(".section_projects .slider_menu a, .projects header .slider_menu a").removeClass("active");
		$(this).addClass("active");
		$(".section_projects .slider").slick("slickGoTo",slide);
	});
}

if($(".section_testimonials .slider").length>0){
	$(".section_testimonials .slider").slick({
		dots: false,
		arrows: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		touchMove:false, 
		swipe:false,
	});
	
	$(".section_testimonials .next").click(function(){
		$(".section_testimonials .slider").slick("slickNext");
	});
}

if($(".section_team .slider").length>0){
	$(window).resize(function(){
		if($(".section_team .slider").hasClass("slick-initialized")){
			if($(window).width()>1199){
				$(".section_team .slider").slick("unslick");
			}else{
				
			}
		}else{
			if($(window).width()>1199){
				
			}else{
				$(".section_team .slider").slick({
					dots: false,
					arrows: true,
					infinite: true,
					speed: 500,
					autoplay: true,
					autoplaySpeed: 20000,
					slidesToShow: 3,
					slidesToScroll: 1,
					responsive: [
						{
						  breakpoint: 992,
						  settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
						  }
						},
						{
						  breakpoint: 767,
						  settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						  }
						}
					]
				});
			}
		}
	});
	$(window).trigger("resize");
}

// Google map in contacts

if($("#google_map").length>0){

	var map, marker;
	var coords = $("#google_map").attr("data-coords").split(",");
	var infoboxContent = $("#google_map_infobox").html();

	// Create map
	var mapOptions = {
		zoom: 17,
		minZoom:3,
		maxZoom:18,
		//mapTypeControl: false,
		//streetViewControl: false,
		//fullscreenControl:false,
		//scaleControl:false,
		//zoomControl:false,
		
		center: new google.maps.LatLng(coords[0], coords[1]),
		styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
 	};
	map = new google.maps.Map(document.getElementById('google_map'), mapOptions);
	
	// create marker
	marker = new google.maps.Marker({
		position: new google.maps.LatLng(coords[0], coords[1]),
		map: map,
		icon: {
			url: 'i/marker.svg', 
			size: new google.maps.Size(20, 20), // picture size
			origin: new google.maps.Point(0,0), 
			anchor: new google.maps.Point(10, 10), // correction of position
			scaledSize: new google.maps.Size(20, 20)
		}
	});
			
	// create infobox
	box = document.createElement("div"),
	$(box).html('<div class="infobox">'+infoboxContent+'</div>');
	var infoboxOptions = {
		content: box,
		disableAutoPan: false,
		maxWidth: 170,
		alignBottom:false,
		pixelOffset: new google.maps.Size(20, -8),
		zIndex: null,
		boxStyle: {
			background: "",
			opacity: 1
		},
		closeBoxMargin: "0 0 0 0",
		closeBoxURL: '',
		infoBoxClearance: new google.maps.Size(1, 1),
		isHidden: false,
		pane: "floatPane",
		enableEventPropagation: false
	};

	var infobox = new InfoBox(infoboxOptions);
	// Add infobox on map
	infobox.open(map, marker);
	
	google.maps.event.addListener(marker, 'mouseover', function() {
		infobox.open(map, marker);
	});
	
	google.maps.event.addListener(marker, 'mouseout', function() {
		infobox.close();
	});

}
