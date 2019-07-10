# ffconf 2019

## Todo

- [ ] google analytics code
- [ ] tickets price
- [ ] workshops
- [ ] web manifest colors
- [ ] the links in scholarship don't work anymore
- [ ] svg icon should use `use`?
- [ ] sponsor pack link and text (see zeplin comments)
- [ ] speaker name hover (see zeplin comments)
- [ ] mobile menu toggle (see zeplin comments)
- [ ] proper margin and paddings

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
  - path: `/static/images/favicons`
  - app name: `ffconf 2019`

Delete the generated `manifest.json`, we already have our own, just check to reference the images correctly.  
Do not use the generated `safari-pinned-tab.svg` but keep the one in the repo.
