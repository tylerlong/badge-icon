# badge-icon

[![npm version](https://badge.fury.io/js/badge-icon.svg)](https://badge.fury.io/js/badge-icon)

Create badge icon image

![8](./8.svg) ![66](./66.svg) ![99+](./99+.svg)


## Why?

I want to set badge icon to an electron based Windows app. First of all I need to create such an icon, then invoke `setOverlayIcon` of `BrowserWindow`:

```js
// todo: create the badge icon image
mainWndow.setOverlayIcon(electron.nativeImage.createFromPath('path-to-badge-icon-image'), 'badge description')
```



## Install

```
yarn add badge-icon
```

```js
import BadgeIcon from 'badge-icon'
```

Or you include it in your web page directly:

```html
<script src="https://unpkg.com/badge-icon@0.1.0/dist/badge-icon.js"></script>
```



## Samples

```js
const icon8 = new BadgeIcon({
  badgeWidth: 128, // badge width
  badgeHeight: 128, // badge height
  text: '8', // badge text
  fontSize: 96, // font size
  color: 'white', // text color
  bgColor: 'red' // background color
})

fs.writeFileSync('8.svg', icon8.svg())
```

![8](./8.svg)


```js
const icon66 = new BadgeIcon({
  badgeWidth: 128, // badge width
  badgeHeight: 128, // badge height
  text: '66', // badge text
  fontSize: 64, // font size
  color: 'white', // text color
  bgColor: 'green' // background color
})

fs.writeFileSync('66.svg', icon66.svg())
```

![66](./66.svg)


```js
const icon99Plus = new BadgeIcon({
  badgeWidth: 128, // badge width
  badgeHeight: 64, // badge height
  text: '99+', // badge text
  fontSize: 48, // font size
  color: 'white', // text color
  bgColor: 'blue' // background color
})

fs.writeFileSync('99+.svg', icon99Plus.svg())
```

![99+](./99+.svg)
