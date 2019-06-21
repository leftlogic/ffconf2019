/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "fx" }] */
function fx(dates) {
  window.confDays = [
    new Date(`${dates[0]}T12:00Z`),
    new Date(`${dates[1]}T12:00Z`),
  ];
  document.documentElement.className += ' 🦄';
  //=== Safari 8
  if (
    /constructor/i.test(window.HTMLElement) &&
    !('flexWrap' in document.documentElement.style)
  ) {
    document.documentElement.className += ' i-hate-safari (╯°□°)╯︵ ┻━┻';
  }
  //=== Fonts
  var md5 = 'fa1ebe5e6b92238afab1551cc4616287'; // IMPORTANT: this is also used in `_meta.js` for prefetch
  var fontUrl = `/static/js/ff-fonts.${md5}.json`;
  var fontMd5 = md5;
  var fontKey = 'fonts';
  var fontCache = null;
  function fontInsert(value) {
    var style = document.createElement('style');
    style.innerHTML = value;
    document.head.appendChild(style);
  }
  // PRE-RENDER
  try {
    fontCache = window.localStorage.getItem(fontKey);
    if (fontCache) {
      fontCache = JSON.parse(fontCache);
      if (fontCache.md5 === fontMd5) {
        fontInsert(fontCache.value);
      } else {
        // Busting cache when md5 doesn't match
        window.localStorage.removeItem(fontKey);
        fontCache = null;
      }
    }
    window.fontUrl = fontUrl;
    window.fontCache = fontCache;
    window.fontKey = fontKey;
    window.fontInsert = fontInsert;
  } catch (e) {
    // Most likely LocalStorage disabled
  }
}
