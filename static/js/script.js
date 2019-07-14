(function() {
  const $ = s => {
    try {
      return document.querySelectorAll(s);
    } catch (e) {
      return [];
    }
  };
  const $$ = s => {
    try {
      return document.querySelector(s);
    } catch (e) {
      return [];
    }
  };

  //=== Fonts
  // http://crocodillon.com/blog/non-blocking-web-fonts-using-localstorage
  // POST-RENDER
  (function() {
    if (!window.fontCache) {
      // Fonts not in LocalStorage or md5 did not match
      window.addEventListener('load', () => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', window.fontUrl, true);
        xhr.onload = () => {
          if (xhr.status === 200) {
            try {
              const response = JSON.parse(xhr.response);
              window.fontInsert(response.value);
              window.localStorage.setItem(window.fontKey, xhr.response);
            } catch (e) {
              // LocalStorage is probably full
            }
          }
        };
        xhr.send();
      });
    }
  })();

  //=== Quotes
  (function() {
    function shuffle(arr) {
      let array = arr.slice();
      let currentIndex = array.length;
      let temporaryValue;
      let randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

    let sorted = shuffle(window.quotesData);

    class FFQuoteElement extends HTMLElement {
      constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        if (!sorted.length) {
          sorted = shuffle(window.quotesData);
        }

        const { text, url, author } = sorted.pop() || {};

        shadowRoot.innerHTML = `
<style>
.quote__wrapper {
  margin: 0 var(--outer-gap-horizontal);
  margin: 0 10%;
  padding: var(--inner-gap-vertical) var(--inner-gap-horizontal);
  text-align: center;
}

.quote__icon {
  color: var(--c-red3);
  height: 34px;
  margin: 0 auto 24px;
  width: 44px;
}

.quote__text {
  font-family: var(--f-special);
  font-size: 2.4rem;
  line-height: 1;
  margin: 0 0 16px;
  text-transform: uppercase;
}

.quote__link {
  color: var(--c-red3);
  font-style: normal;
  font-weight: 600;
  text-decoration: none;
}

@media (min-width: 768px) {
  .quote__text {
    font-size: 4rem;
  }
}
</style>
<blockquote class="quote__wrapper">
  <div aria-hidden="true" class="icon icon--quote quote__icon">
    <object data="/static/images/style/quote.svg" type="image/svg+xml"></object>
  </div>
  <p class="quote__text">${text}</p>
  <footer class="quote__footer">
    <cite class="quote__author">
      <a href="${url}" target="_blank" rel="noopener" class="quote__link">${author}</a>
    </cite>
  </footer>
</blockquote>
`;
      }
    }

    window.customElements.define('ff-quote', FFQuoteElement);
  })();

  //=== Scroll to session
  (function() {
    /**
     * Find current slot in relation to a given date
     * @param {string|Date} date Current day or today
     * @param {Date[]} confDates Conference dates
     * @returns {HTMLElement}
     */
    const getCurrentSlot = (date, confDates = []) => {
      const today = typeof date === 'string' ? new Date(date) : date;
      const todayYear = today.getFullYear();
      const todayMonth = today.getMonth();
      const todayDay = today.getDate();

      let isConfDay = false;
      let whichConfDay = 0;

      confDates.forEach(function(confDate, index) {
        if (
          confDate.getFullYear() === todayYear &&
          confDate.getMonth() === todayMonth &&
          confDate.getDate() === todayDay
        ) {
          isConfDay = true;
          whichConfDay = index + 1;
        }
      });

      if (!isConfDay) {
        return false;
      }

      const fiveMinutes = 5 * 1000 * 60;
      const slots = [...$('.js-session')];

      // Loop through the slots, the first with a starting time earlier
      // than now is the current one.
      // Set the starting time 5 minutes earlier to consider the break
      // between each slot
      const next = slots.reduce((acc, slot) => {
        const slotAttr = slot.getAttribute(`data-date${whichConfDay}`);
        const slotDate = new Date(`${slotAttr}`);
        const slotTimestamp = slotDate.getTime();
        const todayTimestamp = today.getTime();

        if (slotTimestamp - fiveMinutes < todayTimestamp) {
          acc = slot;
        }

        return acc;
      }, false);

      return next;
    };

    /**
     * Scroll to given element
     * @param {HTMLElement} el Element to scroll to
     */
    const scrollToElement = el => {
      if (el) {
        el.scrollIntoView(true);
      }
    };

    /**
     * Scroll to slot
     */
    const scrollToSlot = () => {
      // const date = '2019-11-08T10:26Z';
      const date = new Date();

      // sticky element height
      const header = $$('main.main');
      // https://davidwalsh.name/pseudo-element
      const height = window
        .getComputedStyle(header, ':before')
        .getPropertyValue('height');
      const headerHeight = header ? parseInt(height, 10) : 0;

      const slot = getCurrentSlot(date, window.confDays);

      if (slot && !window.location.hash) {
        scrollToElement(slot);

        // now account for sticky element
        const scrolledY = window.scrollY;

        if (scrolledY) {
          window.scroll(0, scrolledY - headerHeight);
        }
      }
    };

    /**
     * To run when the page is loaded first time
     */
    const onPageLoad = () => {
      setTimeout(() => {
        scrollToSlot();
      }, 0);
    };

    window.addEventListener('load', onPageLoad);
  })();
})();
