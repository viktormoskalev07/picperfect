const header=document.querySelector(".header");
let scrollPos=0 ;
window.addEventListener("load", function () {
  window.addEventListener("scroll", function () {
   
    if(scrollPos<window.scrollY){
      header.classList.add("header-hide");
          scrollPos=window.scrollY;
        } else{
          header.classList.remove("header-hide");
          scrollPos=window.scrollY;
        }

    if (window.scrollY >= 50) {
    
     header.classList.add("header-shadow");
     
      // document.querySelector("body").classList.add("fixed-header");
    } else {
  
     header.classList.remove("header-shadow");
      // document.querySelector("body").classList.remove("fixed-header");
    }
  });
  body = document.body;
  html=document.querySelector("html");
  let ii =0;
  document
    .querySelector(".header .menu-btn")
    .addEventListener("click", function (e) {
     header.classList.toggle("menu-open");
     if(header.classList.contains("menu-open")){
      body.style.paddingRight=window.innerWidth-html.offsetWidth +"px";
     } else{
      body.style.paddingRight=0;
     }
      document.querySelector("body").classList.toggle("overflow");
      
      e.preventDefault();
    });

  const elems = document.querySelectorAll(".header .menu > .has-sub-menu");

  elems.forEach((elem) =>
    elem.addEventListener("click", function () {

      if (this.classList.contains('active')) {
        elems.forEach((elem) => elem.classList.remove("active"));
      } else {

        elems.forEach((elem) => elem.classList.remove("active"));
        this.classList.add("active");
      }
    })
  );
});
