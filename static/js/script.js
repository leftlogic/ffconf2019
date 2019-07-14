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
    const quotesWrapper = [...$('.js-quote')];
    const quotesTemplate = [...$('.js-quote-template')];

    quotesWrapper.forEach(item => {
      const len = quotesTemplate.length;
      const rnd = Math.floor(Math.random() * len);
      const q = quotesTemplate.splice(rnd, 1);

      item.innerHTML = q[0].innerHTML;
    });
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
