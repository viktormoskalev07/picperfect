const header = document.querySelector(".header");
let scrollPos = 0;
window.addEventListener("load", function () {
  window.addEventListener("scroll", function () {
    if (scrollPos < window.scrollY && scrollPos >= 50) {
      header.classList.add("header-hide");
      scrollPos = window.scrollY;
    } else {
      header.classList.remove("header-hide");
      scrollPos = window.scrollY;
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
  html = document.querySelector("html");
  openedNav = document.querySelector(".nav-wrap");
  headerNav = document.querySelector(".header-nav");
  let ii = 0;
  document
    .querySelector(".header .menu-btn")
    .addEventListener("click", function (e) {
      header.classList.toggle("menu-open");
      if (header.classList.contains("menu-open")) {
        scrollWidth = window.innerWidth - html.offsetWidth + "px";
        body.style.paddingRight = scrollWidth;
      } else {
        body.style.paddingRight = 0;
      }
      document.querySelector("body").classList.toggle("overflow");

      e.preventDefault();
    });

  const elems = document.querySelectorAll(".header .menu > .has-sub-menu");

  elems.forEach((elem) =>
    elem.addEventListener("click", function () {
      if (this.classList.contains("active")) {
        elems.forEach((elem) => elem.classList.remove("active"));
      } else {
        elems.forEach((elem) => elem.classList.remove("active"));
        this.classList.add("active");
      }
    })
  );
});





// share buttons 
function shareButtons(){

  var Shares = {
    title: 'share',
    width: 320,
    height: 500,
    init: function() {
      var share = document.querySelectorAll('.social');
      for (var i = 0, l = share.length; i < l; i++) {
        var url = share[i].getAttribute('data-url') || location.href,
          title = share[i].getAttribute('data-title') || '',
          desc = share[i].getAttribute('data-desc') || '',
          el = share[i].querySelectorAll('.push');
        for (var a = 0, al = el.length; a < al; a++) {
          var id = el[a].getAttribute('data-id');
          if (id) this.addEventListener(el[a], 'click', {
            id: id,
            url: url,
            title: title,
            desc: desc
          });
        }
      }
    },
    addEventListener: function(el, eventName, opt) {
      var _this = this,
        handler = function() {
          _this.share(opt.id, opt.url, opt.title, opt.desc);
        };
      if (el.addEventListener) {
        el.addEventListener(eventName, handler);
      } else {
        el.attachEvent('on' + eventName, function() {
          handler.call(el);
        });
      }
    },
    share: function(id, url, title, desc) {
      url = encodeURIComponent(url);
      desc = encodeURIComponent(desc);
      title = encodeURIComponent(title);
      switch (id) {
        case 'fb':
          this.popupCenter('https://www.facebook.com/sharer/sharer.php?u=' + url, this.title, this.width, this.height);
          break; 
        case 'tw':
          var text = title || desc || '';
          if (title.length > 0 && desc.length > 0) text = title + ' - ' + desc;
          if (text.length > 0) text = '&text=' + text;
          this.popupCenter('https://twitter.com/intent/tweet?url=' + url + text, this.title, this.width, this.height);
          break; 
        case 'pin':
          this.popupCenter('https://pinterest.com/pin/create/button/?url=' + url, this.title, this.width, this.height);
          break; 	 
        case 'lin':
          this.popupCenter('https://www.linkedin.com/sharing/share-offsite/?url=' + url, this.title, this.width, this.height);
          break; 	 
      }
    },
    newTab: function(url) {
      var win = window.open(url, '_blank');
      win.focus();
    },
    popupCenter: function(url, title, w, h) {
      var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
      var dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;
      var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
      var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
      var left = ((width / 2) - (w / 2)) + dualScreenLeft;
      var top = ((height / 3) - (h / 3)) + dualScreenTop;
      var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
      if (window.focus) {
        newWindow.focus();
      }
    }
  };
   
   
  
  window.addEventListener('load', forLoad)
   
  
  function forLoad (){
   const socialIinfo = document.getElementById('social-info');
  const buttons =	document.querySelectorAll('.push-share');	
        for(i=0 ; i < buttons.length ; i++){
          buttons[i].addEventListener('click', function(){
          const id =this.getAttribute('data-id');
          if(id){ 
           
              const  url = socialIinfo.dataset.url || location.href;
                 const title = socialIinfo.dataset.title || '';
                 const	desc = socialIinfo.dataset.desc || ''; 
               Shares.share(id, url, title, desc);
          }
  
          })
        }
  } 
}


try{
  shareButtons();
} catch (e){
  console.log(e);
}
//share buttons 


// filter 
 
function  showCard(item) { 
  item.classList.remove('hided'); 
  item.classList.remove('hided-safary-fix');
}

function hideCard(item) {
  item.classList.add('hided') ;
  setTimeout(() => {
    item.classList.add('hided-safary-fix') ;
  }, 450);
}

function cardFilter(){ 
  if (document.querySelector(".section-blog__nav")) {
    const cards = document.querySelectorAll(".blog-card"); 
    document
      .querySelector("#blog-item-filter")
      .addEventListener("click", startFilter);
  
    function startFilter(e) {
      target = e.target;
      btnData = target.getAttribute('data-filter') 
      if (target.classList.contains("filter-btn")) {
        if(btnData.toLowerCase() == 'all') {
          for (i = 0; i < cards.length; i++) {
          showCard(cards[i]); 
          }
          return true; 
        }
  
        for (i = 0; i < cards.length; i++) {
          const cardData = cards[i].getAttribute("data-category").split(","); 
          let counter = 0;  
          for (x = 0; x < cardData.length; x++) { 
            if (cardData[x].replace(/\s/g, '').toLowerCase() == btnData.replace(/\s/g, '').toLowerCase()) {
              counter = 1;
            }
          }
  
          if (counter == 0) { 
            hideCard(cards[i])
          } else{
            showCard(cards[i]);
          }
        }
      }
    } 
  } 
}

try{
  cardFilter();
} catch (e){
 console.log(e);
}

// filter 

//promobar
const xhr = new XMLHttpRequest();
const promoText = document.querySelector('#promo-place-text');
const promoCode = document.querySelector('#promo-place-code');
 
xhr.open('GET', 'https://www.pikperfect.com/get-discount' );  
xhr.responseType='json';
xhr.addEventListener('load', function(){
  if (xhr.status < 400) { 
   console.log(xhr.response.code); 
   console.log(xhr.response.text); 
   promoCode.innerHTML='Code:'+xhr.response.code;
   promoText.innerHTML=' '+xhr.response.text;
   promoText.classList.remove('promobar-hide');
   setTimeout(() => {
       promoCode.classList.remove('promobar-hide');
   }, 600);
  
} 
})
xhr.send();

//promobar


 