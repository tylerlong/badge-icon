import BadgeIcon from './index'
import fs from 'fs'

const icon8 = new BadgeIcon({
  badgeWidth: 128, // badge width
  badgeHeight: 128, // badge height
  text: '8', // badge text
  fontSize: 96, // font size
  color: 'white', // text color
  bgColor: 'red' // background color
})

fs.writeFileSync('8.svg', icon8.svg())

const icon66 = new BadgeIcon({
  badgeWidth: 128, // badge width
  badgeHeight: 128, // badge height
  text: '66', // badge text
  fontSize: 64, // font size
  color: 'white', // text color
  bgColor: 'green' // background color
})

fs.writeFileSync('66.svg', icon66.svg())

const icon99Plus = new BadgeIcon({
  badgeWidth: 128, // badge width
  badgeHeight: 64, // badge height
  text: '99+', // badge text
  fontSize: 48, // font size
  color: 'white', // text color
  bgColor: 'blue' // background color
})

fs.writeFileSync('99+.svg', icon99Plus.svg())
