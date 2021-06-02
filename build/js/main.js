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
  
    // function showCards() {
    //   for (i = 0; i < cards.length; i++) {
    //     toggleShow(cards[i])
    //   }
    // }
  
    function  showCard(item) { 
      item.classList.remove('hided');
    }
  
    function hideCard(item) {
      item.classList.add('hided') ;
    }
  } 
}

try{
  cardFilter();
} catch (e){
 console.log(e);
}

// filter 
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xyXG5sZXQgc2Nyb2xsUG9zID0gMDtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoc2Nyb2xsUG9zIDwgd2luZG93LnNjcm9sbFkgJiYgc2Nyb2xsUG9zID49IDUwKSB7XHJcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLWhpZGVcIik7XHJcbiAgICAgIHNjcm9sbFBvcyA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoZWFkZXItaGlkZVwiKTtcclxuICAgICAgc2Nyb2xsUG9zID0gd2luZG93LnNjcm9sbFk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID49IDUwKSB7XHJcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLXNoYWRvd1wiKTtcclxuXHJcbiAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTGlzdC5hZGQoXCJmaXhlZC1oZWFkZXJcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcImhlYWRlci1zaGFkb3dcIik7XHJcbiAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJmaXhlZC1oZWFkZXJcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcbiAgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpO1xyXG4gIG9wZW5lZE5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LXdyYXBcIik7XHJcbiAgaGVhZGVyTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXItbmF2XCIpO1xyXG4gIGxldCBpaSA9IDA7XHJcbiAgZG9jdW1lbnRcclxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlciAubWVudS1idG5cIilcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoXCJtZW51LW9wZW5cIik7XHJcbiAgICAgIGlmIChoZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVudS1vcGVuXCIpKSB7XHJcbiAgICAgICAgc2Nyb2xsV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGh0bWwub2Zmc2V0V2lkdGggKyBcInB4XCI7XHJcbiAgICAgICAgYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBzY3JvbGxXaWR0aDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuY2xhc3NMaXN0LnRvZ2dsZShcIm92ZXJmbG93XCIpO1xyXG5cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZWFkZXIgLm1lbnUgPiAuaGFzLXN1Yi1tZW51XCIpO1xyXG5cclxuICBlbGVtcy5mb3JFYWNoKChlbGVtKSA9PlxyXG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAodGhpcy5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcclxuICAgICAgICBlbGVtcy5mb3JFYWNoKChlbGVtKSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1zLmZvckVhY2goKGVsZW0pID0+IGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIHNoYXJlIGJ1dHRvbnMgXHJcbmZ1bmN0aW9uIHNoYXJlQnV0dG9ucygpe1xyXG5cclxuICB2YXIgU2hhcmVzID0ge1xyXG4gICAgdGl0bGU6ICdzaGFyZScsXHJcbiAgICB3aWR0aDogMzIwLFxyXG4gICAgaGVpZ2h0OiA1MDAsXHJcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIHNoYXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNvY2lhbCcpO1xyXG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHNoYXJlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIHZhciB1cmwgPSBzaGFyZVtpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdXJsJykgfHwgbG9jYXRpb24uaHJlZixcclxuICAgICAgICAgIHRpdGxlID0gc2hhcmVbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLXRpdGxlJykgfHwgJycsXHJcbiAgICAgICAgICBkZXNjID0gc2hhcmVbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLWRlc2MnKSB8fCAnJyxcclxuICAgICAgICAgIGVsID0gc2hhcmVbaV0ucXVlcnlTZWxlY3RvckFsbCgnLnB1c2gnKTtcclxuICAgICAgICBmb3IgKHZhciBhID0gMCwgYWwgPSBlbC5sZW5ndGg7IGEgPCBhbDsgYSsrKSB7XHJcbiAgICAgICAgICB2YXIgaWQgPSBlbFthXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgICAgICAgIGlmIChpZCkgdGhpcy5hZGRFdmVudExpc3RlbmVyKGVsW2FdLCAnY2xpY2snLCB7XHJcbiAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgZGVzYzogZGVzY1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oZWwsIGV2ZW50TmFtZSwgb3B0KSB7XHJcbiAgICAgIHZhciBfdGhpcyA9IHRoaXMsXHJcbiAgICAgICAgaGFuZGxlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgX3RoaXMuc2hhcmUob3B0LmlkLCBvcHQudXJsLCBvcHQudGl0bGUsIG9wdC5kZXNjKTtcclxuICAgICAgICB9O1xyXG4gICAgICBpZiAoZWwuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlbC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnROYW1lLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGhhbmRsZXIuY2FsbChlbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzaGFyZTogZnVuY3Rpb24oaWQsIHVybCwgdGl0bGUsIGRlc2MpIHtcclxuICAgICAgdXJsID0gZW5jb2RlVVJJQ29tcG9uZW50KHVybCk7XHJcbiAgICAgIGRlc2MgPSBlbmNvZGVVUklDb21wb25lbnQoZGVzYyk7XHJcbiAgICAgIHRpdGxlID0gZW5jb2RlVVJJQ29tcG9uZW50KHRpdGxlKTtcclxuICAgICAgc3dpdGNoIChpZCkge1xyXG4gICAgICAgIGNhc2UgJ2ZiJzpcclxuICAgICAgICAgIHRoaXMucG9wdXBDZW50ZXIoJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PScgKyB1cmwsIHRoaXMudGl0bGUsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICBjYXNlICd0dyc6XHJcbiAgICAgICAgICB2YXIgdGV4dCA9IHRpdGxlIHx8IGRlc2MgfHwgJyc7XHJcbiAgICAgICAgICBpZiAodGl0bGUubGVuZ3RoID4gMCAmJiBkZXNjLmxlbmd0aCA+IDApIHRleHQgPSB0aXRsZSArICcgLSAnICsgZGVzYztcclxuICAgICAgICAgIGlmICh0ZXh0Lmxlbmd0aCA+IDApIHRleHQgPSAnJnRleHQ9JyArIHRleHQ7XHJcbiAgICAgICAgICB0aGlzLnBvcHVwQ2VudGVyKCdodHRwczovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD91cmw9JyArIHVybCArIHRleHQsIHRoaXMudGl0bGUsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICBjYXNlICdwaW4nOlxyXG4gICAgICAgICAgdGhpcy5wb3B1cENlbnRlcignaHR0cHM6Ly9waW50ZXJlc3QuY29tL3Bpbi9jcmVhdGUvYnV0dG9uLz91cmw9JyArIHVybCwgdGhpcy50aXRsZSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgICAgYnJlYWs7IFx0IFxyXG4gICAgICAgIGNhc2UgJ2xpbic6XHJcbiAgICAgICAgICB0aGlzLnBvcHVwQ2VudGVyKCdodHRwczovL3d3dy5saW5rZWRpbi5jb20vc2hhcmluZy9zaGFyZS1vZmZzaXRlLz91cmw9JyArIHVybCwgdGhpcy50aXRsZSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgICAgYnJlYWs7IFx0IFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbmV3VGFiOiBmdW5jdGlvbih1cmwpIHtcclxuICAgICAgdmFyIHdpbiA9IHdpbmRvdy5vcGVuKHVybCwgJ19ibGFuaycpO1xyXG4gICAgICB3aW4uZm9jdXMoKTtcclxuICAgIH0sXHJcbiAgICBwb3B1cENlbnRlcjogZnVuY3Rpb24odXJsLCB0aXRsZSwgdywgaCkge1xyXG4gICAgICB2YXIgZHVhbFNjcmVlbkxlZnQgPSB3aW5kb3cuc2NyZWVuTGVmdCAhPT0gdW5kZWZpbmVkID8gd2luZG93LnNjcmVlbkxlZnQgOiBzY3JlZW4ubGVmdDtcclxuICAgICAgdmFyIGR1YWxTY3JlZW5Ub3AgPSB3aW5kb3cuc2NyZWVuVG9wICE9PSB1bmRlZmluZWQgPyB3aW5kb3cuc2NyZWVuVG9wIDogc2NyZWVuLnRvcDtcclxuICAgICAgdmFyIHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggPyB3aW5kb3cuaW5uZXJXaWR0aCA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA6IHNjcmVlbi53aWR0aDtcclxuICAgICAgdmFyIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCA/IHdpbmRvdy5pbm5lckhlaWdodCA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IDogc2NyZWVuLmhlaWdodDtcclxuICAgICAgdmFyIGxlZnQgPSAoKHdpZHRoIC8gMikgLSAodyAvIDIpKSArIGR1YWxTY3JlZW5MZWZ0O1xyXG4gICAgICB2YXIgdG9wID0gKChoZWlnaHQgLyAzKSAtIChoIC8gMykpICsgZHVhbFNjcmVlblRvcDtcclxuICAgICAgdmFyIG5ld1dpbmRvdyA9IHdpbmRvdy5vcGVuKHVybCwgdGl0bGUsICdzY3JvbGxiYXJzPXllcywgd2lkdGg9JyArIHcgKyAnLCBoZWlnaHQ9JyArIGggKyAnLCB0b3A9JyArIHRvcCArICcsIGxlZnQ9JyArIGxlZnQpO1xyXG4gICAgICBpZiAod2luZG93LmZvY3VzKSB7XHJcbiAgICAgICAgbmV3V2luZG93LmZvY3VzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gICBcclxuICAgXHJcbiAgXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmb3JMb2FkKVxyXG4gICBcclxuICBcclxuICBmdW5jdGlvbiBmb3JMb2FkICgpe1xyXG4gICBjb25zdCBzb2NpYWxJaW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb2NpYWwtaW5mbycpO1xyXG4gIGNvbnN0IGJ1dHRvbnMgPVx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnB1c2gtc2hhcmUnKTtcdFxyXG4gICAgICAgIGZvcihpPTAgOyBpIDwgYnV0dG9ucy5sZW5ndGggOyBpKyspe1xyXG4gICAgICAgICAgYnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICBjb25zdCBpZCA9dGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgICAgICAgIGlmKGlkKXsgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgY29uc3QgIHVybCA9IHNvY2lhbElpbmZvLmRhdGFzZXQudXJsIHx8IGxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBzb2NpYWxJaW5mby5kYXRhc2V0LnRpdGxlIHx8ICcnO1xyXG4gICAgICAgICAgICAgICAgIGNvbnN0XHRkZXNjID0gc29jaWFsSWluZm8uZGF0YXNldC5kZXNjIHx8ICcnOyBcclxuICAgICAgICAgICAgICAgU2hhcmVzLnNoYXJlKGlkLCB1cmwsIHRpdGxlLCBkZXNjKTtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gIH0gXHJcbn1cclxuXHJcblxyXG50cnl7XHJcbiAgc2hhcmVCdXR0b25zKCk7XHJcbn0gY2F0Y2ggKGUpe1xyXG4gIGNvbnNvbGUubG9nKGUpO1xyXG59XHJcbi8vc2hhcmUgYnV0dG9ucyBcclxuXHJcblxyXG4vLyBmaWx0ZXIgXHJcbmZ1bmN0aW9uIGNhcmRGaWx0ZXIoKXtcclxuXHJcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VjdGlvbi1ibG9nX19uYXZcIikpIHtcclxuICAgIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9nLWNhcmRcIik7XHJcbiAgXHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNibG9nLWl0ZW0tZmlsdGVyXCIpXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRGaWx0ZXIpO1xyXG4gIFxyXG4gICAgZnVuY3Rpb24gc3RhcnRGaWx0ZXIoZSkge1xyXG4gICAgICB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgYnRuRGF0YSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmlsdGVyJykgXHJcbiAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmlsdGVyLWJ0blwiKSkge1xyXG4gICAgICAgIGlmKGJ0bkRhdGEudG9Mb3dlckNhc2UoKSA9PSAnYWxsJykge1xyXG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNhcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBzaG93Q2FyZChjYXJkc1tpXSk7IFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHRydWU7IFxyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2FyZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGNvbnN0IGNhcmREYXRhID0gY2FyZHNbaV0uZ2V0QXR0cmlidXRlKFwiZGF0YS1jYXRlZ29yeVwiKS5zcGxpdChcIixcIik7IFxyXG4gICAgICAgICAgbGV0IGNvdW50ZXIgPSAwOyAgXHJcbiAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgY2FyZERhdGEubGVuZ3RoOyB4KyspIHsgXHJcbiAgICAgICAgICAgIGlmIChjYXJkRGF0YVt4XS5yZXBsYWNlKC9cXHMvZywgJycpLnRvTG93ZXJDYXNlKCkgPT0gYnRuRGF0YS5yZXBsYWNlKC9cXHMvZywgJycpLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICBjb3VudGVyID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgaWYgKGNvdW50ZXIgPT0gMCkgeyBcclxuICAgICAgICAgICAgaGlkZUNhcmQoY2FyZHNbaV0pXHJcbiAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIHNob3dDYXJkKGNhcmRzW2ldKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC8vIGZ1bmN0aW9uIHNob3dDYXJkcygpIHtcclxuICAgIC8vICAgZm9yIChpID0gMDsgaSA8IGNhcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgdG9nZ2xlU2hvdyhjYXJkc1tpXSlcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gIHNob3dDYXJkKGl0ZW0pIHsgXHJcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZWQnKTtcclxuICAgIH1cclxuICBcclxuICAgIGZ1bmN0aW9uIGhpZGVDYXJkKGl0ZW0pIHtcclxuICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlZCcpIDtcclxuICAgIH1cclxuICB9IFxyXG59XHJcblxyXG50cnl7XHJcbiAgY2FyZEZpbHRlcigpO1xyXG59IGNhdGNoIChlKXtcclxuIGNvbnNvbGUubG9nKGUpO1xyXG59XHJcblxyXG4vLyBmaWx0ZXIgIl0sImZpbGUiOiJtYWluLmpzIn0=
