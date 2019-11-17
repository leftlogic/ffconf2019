(function() {
  const quotesData = [
    {
      text: `Loved #ffconf soooooo much! most inspiring conference I've ever been. Many thanks!`,
      url: 'https://twitter.com/diessicode/status/928681821537267713',
      author: 'Diéssica Gurskas, computer programmer and 2017 attendee',
    },

    {
      text: `Thank you for such a brilliant #ffconf @rem @Julieanne, the phenomenal speakers & everyone who made it a wonderful day.  😍`,
      url: 'https://twitter.com/Sareh88/status/928681448273563649',
      author: 'Sareh Heidari, web developer and 2017 attendee',
    },

    {
      text: `Being the 5th #ffconf I was going to, I knew there will be a great collection of brilliant talks, but now at the end of it my expectations were definitely exceeded - big hattip to @Julieanne, @rem and all the organizers for putting this together again`,
      url: 'https://twitter.com/MCirlanaru/status/928729152781520896',
      author: 'Mihai Cîrlănaru, 2017 attendee',
    },

    {
      text: `Absolutely brilll #ffconf !! All 8 speakers were amazing! This developer has learned a LOT and excited and inspired to do better 🙋🏽`,
      url: 'https://twitter.com/KeishMarieUK/status/928720143785562116',
      author:
        'Keish Marie, Digital and Communications Professional and 2017 attendee',
    },

    {
      text: `Third time at #ffconf 🎉👩‍💻 Line up gets better every year! 👩‍🎤🦄`,
      url: 'https://twitter.com/natkuTala/status/928920748961554433',
      author: 'Natalia Waniczek, JS developer and regular ffconf attendee',
    },

    {
      text: `#ffconf has just, in a single day, changed me as person — we can become good tech friends of so many more people than I had thought! 💛 Made possible thanks to dazzling captioning by @whitecoatcapxg 😍`,
      url: 'https://twitter.com/bjfletcher/status/929049799592239104',
      author: 'Ben Fletcher, principle engineer at FT and 2017 attendee',
    },

    {
      text: `First time at #ffconf and had a seriously good day. Every talk was interesting and super enjoyable to watch`,
      url: 'https://twitter.com/iamdanpalmer/status/929055078815883270',
      author: 'Dan Palmer, front end developer and 2017 attendee',
    },

    {
      text: `Thank you so much @Julieanne @rem for putting on an amazing conference! You are superstars. I loved every minute and cannot wait for the next 😄 #ffconf`,
      url: 'https://twitter.com/ninjanails/status/929098766367502337',
      author: 'Seren Davies, award winning software engineer and 2017 attendee',
    },

    {
      text: `“be brave enough to be kind” plus more inspiring thoughts — not quite what I expected from my first JS conference, but even better💪😌 #ffconf`,
      url: 'https://twitter.com/_psee/status/929138465706598400',
      author: 'unicorn пэси, 2017 attendee',
    },
  ];

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

  let sorted = shuffle(quotesData);

  class FFQuoteElement extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: 'open' });

      if (!sorted.length) {
        sorted = shuffle(quotesData);
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
    display: block;
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
    <img class="quote__icon" src="/images/style/quote.svg" alt="" />
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
