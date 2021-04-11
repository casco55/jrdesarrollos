
$(window).on("scroll", function () {
	if ($(window).scrollTop() > $("#clientes").offset().top -250) {
		$("#clientes h1").addClass('zoomer visible');
	} else {
		
	};
});
$(window).on("scroll", function () {
	if ($(window).scrollTop() > $("#nos1").offset().top -250) {
		$("#nos1").removeClass('oculto')
		$("#nos1").addClass('slideRight visible');
	} else {		
	};
});
$(window).on("scroll", function () {
	if ($(window).scrollTop() > $("#nos2").offset().top -250) {
		$("#nos2").removeClass('oculto')
		$("#nos2").addClass('zoomer visible');
	} else {		
	};
});
$(window).on("scroll", function () {
	if ($(window).scrollTop() > $("#nos3").offset().top -250) {
		$("#nos3").removeClass('oculto')
		$("#nos3").addClass('slideLeft visible');
	} else {		
	};
});
$(window).on("scroll", function () {
	if ($(window).scrollTop() > $("#servicios").offset().top -150) {
		$("#servicios h1").addClass('zoomer visible');
	} else {
		
	};
});
$(window).on("scroll", function () {
	if ($(window).scrollTop() > $("#serv1").offset().top -250) {
		$("#serv1").removeClass('oculto')
		$("#serv1").addClass('slideUp visible');
	} else {		
	};
});
$(window).on("scroll", function () {
	if ($(window).scrollTop() > $("#serv2").offset().top -250) {
		$("#serv2").removeClass('oculto')
		$("#serv2").addClass('slideUp visible');
	} else {		
	};
});