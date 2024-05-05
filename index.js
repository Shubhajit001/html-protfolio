// $(document).ready(function(){
// 	$('#nav-icon3').click(function(){
// 		$(this).toggleClass('open');
// 	});
// });



// document.addEventListener("DOMContentLoaded", function () {
//     var navIcon3 = document.getElementById("nav-icon3");
  
//     if (navIcon3) {
//       navIcon3.addEventListener("click", function () {
//         navIcon3.classList.toggle("open");
//       });
//     }
//   });
  

// document.querySelector('#nav-icon3').addEventListener("click", ()=>{
//     document.querySelector('.sidebar').classList.toggle('sidebarGo');
// })


document.addEventListener("DOMContentLoaded", function () {
    var navIcon3 = document.getElementById("nav-icon3");
  
    if (navIcon3) {
      navIcon3.addEventListener("click", function () {
        navIcon3.classList.toggle("open");
        document.querySelector('.sidebar').classList.toggle('sidebarGo');
      });
    }
  });
  