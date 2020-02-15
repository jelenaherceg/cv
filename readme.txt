"Community" HTML template.

AUTHORS:
Denis Shepovalov - management
Bakhtiyar Sattarov - design
Maxim Kirpichev - development

USAGE:
1.	Upload all files to your hosting.
2.	Enjoy!

FAQ:
Q.	How to receive emails from contact form?
A.	Open form-handler.php in editor and change:
	$to = "mail@mail.ru";
	to your email.
	Also, your hosting must support PHP and you should create email address info@yoursitename.com (it's not nessesary, but will be better to do it)
	
Q. 	How to set animations?
A. 	Simply add class="animatable" to element that you'd like to show with animation. 
	Once page will be scrolled to this element, it will be showed.
	Also, you can add data-delay="300" (300=any value in milliseconds) to set some delay before showing this element. 
	It'll allow you to create "cascades" of elements.
	
Q.	How to open larger image / video / youtube in popup?
A. 	We've included last version of FancyBox - you can simply add "data-fancybox" to your <a> element and set it's href to image/video/youtube link.
	Check their docs for more info: https://fancyapps.com/fancybox/3/
	
Q.	What slider plugin do you use?
A.	We use Slick slider - it's very flexible, free, have MIT license so you can use it everywhere.
	Check their docs to learn how it works: http://kenwheeler.github.io/slick/
	
Q.	Google Map doesn't working!
A.	First of all, on your local server/PC it will be working only in demo mode.
	To make it work on your hosting, go to Google Developers Console, get an API key and add it to your code of contacts page.
	More information how to create API key here: https://developers.google.com/maps/documentation/javascript/get-api-key