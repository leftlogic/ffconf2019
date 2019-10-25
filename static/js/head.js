/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "fx" }] */
/* global md5 */
function fx(dates) {
  window.confDays = [new Date(`${dates[0]}T12:00Z`)];
  document.documentElement.className += ' 🦄';
  //=== Fonts
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
