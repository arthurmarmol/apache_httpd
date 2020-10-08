function gerenciarAltoContraste() {
	
    $("body").css("backgroundColor", "black");
	$("body").css('color', "white");
	$(".ref").css('color', "white");
	$("p").css('color', "black");
	
}
function gerenciarModoPersonalizado() {
	
    $("body").css("backgroundColor", "#B96D6D");
	$("body").css('color', "white");
	$(".ref").css('color', "white");
	$("p").css('color', "black");


}
function gerenciarModoNormal() {
	
    $("body").css("backgroundColor", "white");
	$("body").css('color', "black");
	$(".ref").css('color', "black");
	
}

function scrollto() {
	
	$('#oquee_menu').click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top},'slow');});
	
	$('#paraqueserve_menu').click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top},'slow');});
	
	$('#screenshots_menu').click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top},'slow');});
	
	$('#contato_menu').click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top},'slow');});

	$('#referencias_menu').click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top},'slow');});

	$('#exemplos_menu').click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top},'slow');});

	$('#comentarios_menu').click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top},'slow');});
	
	$('#avaliacoes_menu').click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top},'slow');});

}