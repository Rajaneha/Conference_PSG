/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Home Slider
5. Init Timer
6. Init Tabs
7. Init Gallery


******************************/
console.log("helloooo");

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var header = $('.header');

	setHeader();
	initMenu();
	initHomeSlider();
	initTimer();
	initTabs();
	initTabs1();
	initTabs2();
	//initTabsver();
	
	initGallery();

	$(window).on('resize', function()
	{
		setHeader();

		setTimeout(function()
		{
			$(window).trigger('resize.px.parallax');
		}, 375);
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		var header = $('.header');

		if($(window).scrollTop() > 91)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		if($('.menu').length && $('.hamburger').length)
		{
			var menu = $('.menu');
			var hamburger = $('.hamburger');
			var close = $('.menu_close');

			hamburger.on('click', function()
			{
				menu.toggleClass('active');
			});

			close.on('click', function()
			{
				menu.toggleClass('active');
			});
		}
	}

	/* 

	4. Init Home Slider

	*/

	function initHomeSlider()
	{
		if($('.home_slider').length)
		{
			var homeSlider = $('.home_slider');
			homeSlider.owlCarousel(
			{
				items:1,
				autoplay:true,
				autoplayTimeout:8000,
				loop:true,
				smartSpeed:1200,
				nav:false
			});

			/* Custom dots events */
			if($('.home_slider_custom_dot').length)
			{
				$('.home_slider_custom_dot').on('click', function()
				{
					$('.home_slider_custom_dot').removeClass('active');
					$(this).addClass('active');
					homeSlider.trigger('to.owl.carousel', [$(this).index(), 1200]);
				});
			}

			/* Change active class for dots when slide changes by nav or touch */
			homeSlider.on('changed.owl.carousel', function(event)
			{
				$('.home_slider_custom_dot').removeClass('active');
				$('.home_slider_custom_dots li').eq(event.page.index).addClass('active');
			});
		}
	}

	/* 

	5. Init Timer

	*/

	function initTimer()
    {
    	if($('.timer').length)
    	{
	    	var target_date = new Date("Dec 14, 2023 09:00:00").getTime();

	 
			// variables for time units
			var days, hours, minutes, seconds;

			var d = $('#day');
			var h = $('#hour');
			var m = $('#minute');
			var s = $('#second');

			var interval = setInterval(function () {
				// find the amount of "seconds" between now and target
				var current_date = new Date().getTime();
				var seconds_left = (target_date - current_date) / 1000;
	
				// Check if the target date is reached
				if (seconds_left <= 0) {
					clearInterval(interval); // Stop the interval
					// Set timer values to 0
					d.text('0');
					h.text('0');
					m.text('0');
					s.text('0');
					return; // Exit the interval function
				}
			    // do some time calculations
			    days = parseInt(seconds_left / 86400);
			    seconds_left = seconds_left % 86400;
			     
			    hours = parseInt(seconds_left / 3600);
			    seconds_left = seconds_left % 3600;
			     
			    minutes = parseInt(seconds_left / 60);
			    seconds = parseInt(seconds_left % 60);

			    // display result
			    d.text(days);
			    h.text(hours);
			    m.text(minutes);
			    s.text(seconds); 
			 
			}, 1000);
    	}	
    }
	


	
    /* 

	6. Init Tabs

	*/

	function initTabs()
	{
		if($('.tab').length)
		{
			$('.tab').on('click', function()
			{
				$('.tab').removeClass('active');
				$(this).addClass('active');
				var clickedIndex = $('.tab').index(this);
				console.log(clickedIndex);
				var panels = $('.tab_panel');
				panels.removeClass('active');
				$(panels[clickedIndex]).addClass('active');

				setTimeout(function()
				{
					$(window).trigger('resize.px.parallax');
				}, 375);
			});
		}
	}
	function initTabs1()
	{
		if($('.tab1').length)
		{
			$('.tab1').on('click', function()
			{
				$('.tab1').removeClass('active');
				$(this).addClass('active');
				var clickedIndex = $('.tab1').index(this);
				
				var panels = $('.tab_panel1');
				panels.removeClass('active');
				$(panels[clickedIndex]).addClass('active');

				setTimeout(function()
				{
					$(window).trigger('resize.px.parallax');
				}, 375);
			});
		}
	}
	function initTabs2()
	{
		if($('.tab2').length)
		{
			$('.tab2').on('click', function()
			{
				$('.tab2').removeClass('active');
				$(this).addClass('active');
				var clickedIndex = $('.tab2').index(this);
				
				var panels = $('.tab_panel2');
				panels.removeClass('active');
				$(panels[clickedIndex]).addClass('active');

				setTimeout(function()
				{
					$(window).trigger('resize.px.parallax');
				}, 375);
			});
		}
	}

	/*function initTabsver()
	{
		if($('.tabver').length)
		{
			$('.tabver').on('click', function()
			{
				$('.tabver').removeClass('active');
				$(this).addClass('active');
				var clickedIndex = $('.tabver').index(this);
				
				var panels = $('.tab_panelver');
				panels.removeClass('active');
				$(panels[clickedIndex]).addClass('active');

				setTimeout(function()
				{
					$(window).trigger('resize.px.parallax');
				}, 375);
			});
		}
	}*/
	
	const tabs = document.querySelectorAll(".tabs-container .tab");
const contents = document.querySelectorAll(".tabs-container .content");

const removeActiveClass = () => {
  tabs.forEach((t) => {
    t.classList.remove("active");
  });

  contents.forEach((c) => {
    c.classList.remove("active");
  });
};

tabs.forEach((t, i) => {
  t.addEventListener("click", () => {
    removeActiveClass();
    contents[i].classList.add("active");
    t.classList.add("active");
  });
});

	/* 
	
	7. Init Gallery

	*/

	function initGallery()
	{
		if($('.gallery_item').length)
		{
			$('.colorbox').colorbox(
			{
				rel:'colorbox',
				photo: true,
				maxWidth:'95%',
				maxHeight:'95%'
			});
		}
	}

	
	
});
