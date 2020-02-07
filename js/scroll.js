$(document).ready(function(){
    var href = window.location.href; 
    var splitit = (href.split('#'))[1]; //split url to get sec1 name
    if(splitit !== "" || splitit !== "undefined"){
        $('html, body').animate({
            scrollTop: $('#'+splitit).offset().top
        }, 2000);
    }
});