window.addEventListener("load", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
      document.querySelector(".header").classList.add("fixed");
      document.querySelector("body").classList.add("fixed-header");
    } else {
      document.querySelector(".header").classList.remove("fixed");
      document.querySelector("body").classList.remove("fixed-header");
    }
  });

  document
    .querySelector(".header .menu-btn")
    .addEventListener("click", function (e) {
      document.querySelector(".header").classList.toggle("menu-open");
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
