import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "jquery/dist/jquery.min.js";
import $ from 'jquery';
import "@popperjs/core";
import "@fortawesome/fontawesome-free/css/all.css";
import "../css/style.css";
import "./circle-progress.min.js";
$(function(){
    
    $(window).scroll(function(){
        if($(this).scrollTop()>= 500){
            $("#navbar").addClass("notrans");
        }
        else{
            $("#navbar").removeClass("notrans");
        }
    });
    $(".copyright span").text(new Date().getFullYear());

    $(".circle").circleProgress({
        startAngle:-Math.PI / 2,
        fill:"#0575e6"
    }).on("circle-animation-progress", function(event, progress, stepValue){
        $(this).find("span").html(Math.round(stepValue*100)+"%");
    });
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (() => {
        'use strict'
    
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')
    
        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            }
    
            form.classList.add('was-validated')
        }, false)
        })
    })()
});
