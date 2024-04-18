//لتغير تنسيق navbar 
//عند النزول لاكثر من 200px
function scrollFunction() {
     if(document.documentElement.scrollTop > 200){
          document.getElementById("navbar").classList.add("noTransparrent")
     } else {
          document.getElementById("navbar").classList.remove("noTransparrent")
     }
};

window.onscroll = function(){
     scrollFunction();
};

//طريقة عمل عدادات الارقام في قسم الإحصائيات

window.onload = function(){
     let website = new CountUp('websit-count', 0, 250, 0, 2.5)
     website.start();
     let websiteApp = new CountUp('app-count', 0, 290, 0, 2.5)
     websiteApp.start();
     let websiteUes = new CountUp('user-count', 0, 580, 0, 2.5)
     websiteUes.start();
     let websiteVid = new CountUp('video-count', 0, 1069, 0, 2.5)
     websiteVid.start();
};

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
   })();

   document.getElementById("fullYear").innerHTML = new Date().getFullYear();