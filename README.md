# ffconf 2019

## Todo

- [x] use web components for the quotes
- [x] speakers pics as img not as css bg (even if Remy will say he doesn't want to show them on mobile, he will eventually change his mind)
- [x] move the `public/static` just to `public`
- [ ] check which other changes were introduced in Next 9
- [ ] check what is different between netlify and now servers, because the sw was working differently
- [x] do the querystring stripping in the sw
- [ ] do I want to try storybook for the different phases?
- [ ] use next js dynamic routing `[slug]` for the workshop pages
- [ ] make a script for the whole favicon / manifest generation?
- [x] robots.txt content
- [ ] fonts improvements
  - [ ] check the font-display values
  - [ ] maybe use font files raher than json
  - [ ] maybe have a sw cache just for the font to use since phase 0
  - [ ] add as a script into this repo the script to convert the fonts into JSON
  - [ ] add script to extrapolate only certain characters from the font, to reduce its size

## Content to change

- [ ] google analytics code
- [ ] web manifest colors

## Howto

### Convert fonts into JSON

Source: http://crocodillon.com/blog/non-blocking-web-fonts-using-localstorage

Use this repo https://github.com/electricg/localstorage-font, locally in a different folder it's fine, with this `config.json` and the related font files in the same folder:

```json
{
  "google": [
    {
      "name": "Lato",
      "formats": ["400"],
      "display": "swap"
    }
  ],
  "local": [
    {
      "name": "Lollipop",
      "file": "hipopotam_studio_-_mrslollipop-regular-webfont.woff",
      "display": "fallback"
    }
  ]
}
```

and then run

```bash
npm install
npm start
```

### Create favicons

Use https://realfavicongenerator.net

- Favicon for iOS - Web Clip: use the original favicon as is
- Favicon for Android Chrome: no background color, theme color #cb4d4d
- Windows Metro: color is `#da532c`
- Safari Pinned Tab: turn your picture into a monochrom icon, threshold as default
- Touch Bar: theme color #111111
- Favicon Generator Options:
  - path: `/images/favicons`
  - app name: `ffconf 2019`

Delete the generated `manifest.json`, we already have our own, just check to reference the images correctly.  
Do not use the generated `safari-pinned-tab.svg` but keep the one in the repo.
