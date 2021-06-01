if (document.querySelector(".section-blog__nav")) {
  const cards = document.querySelectorAll(".blog-card");

  document
    .querySelector("#blog-item-filter")
    .addEventListener("click", startFilter);

  function startFilter(e) {
    target = e.target;
    btnData = target.getAttribute('data-filter')

    // не работает
    if(btnData == 'all') {
      console.log(counter);
      showElement()
    }

    if (target.classList.contains("filter-btn")) {
      showElement()

      for (i = 0; i < cards.length; i++) {
        const cardData = cards[i].getAttribute("data-category").split(",");

        let counter = 0;


        for (x = 0; x < cardData.length; x++) {

          if (cardData[x].replace(/\s/g, '') == btnData.replace(/\s/g, '')) {
            counter = 1;
          }
        }

        if (counter == 0) {
          toggleHide(cards[i])
        } 
      }
    }
  }

  function showElement() {
    for (i = 0; i < cards.length; i++) {
      toggleShow(cards[i])
    }
  }

  function toggleShow(item) {
      
    item.style.display = 'block'
    item.classList.add('showed')
    item.classList.remove('hided')
  }

  function toggleHide(item) {
    item.classList.add('hided')
    item.classList.remove('showed')

    setTimeout(() => {

      item.style.display = 'none'
    }, 500)
  }
}