// JavaScript Document
$(document).ready(function() {
    document.addEventListener("deviceready",function(){    //espera que el documento este listo
	$('#B1').tap(function(){
		navigator.notification.beep(1);
	});//tap B1
	$('#B1').tap(function(){
		navigator.notification.vibrate(500);
	});
	});   //deviceready
}); //read
