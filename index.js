import sharp from 'sharp'

class BadgeIcon {
  constructor ({
    badgeWidth = 128, // badge width
    badgeHeight = 64, // badge height
    text = '', // badge text
    fontSize = 48, // font size
    color = 'white', // text color
    bgColor = 'red' // background color
  }) {
    this.badgeWidth = badgeWidth
    this.badgeHeight = badgeHeight
    this.text = text
    this.fontSize = fontSize
    this.color = color
    this.bgColor = bgColor
  }

  svg () {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="${this.badgeWidth}" height="${this.badgeHeight}">
      <ellipse
        rx="${this.badgeWidth / 2}"
        ry="${this.badgeHeight / 2}"
        cx="${this.badgeWidth / 2}"
        cy="${this.badgeHeight / 2}"
        fill="${this.bgColor}">
      </ellipse>
      <text
        x="50%"
        y="50%"
        text-anchor="middle"
        dominant-baseline="central"
        fill="${this.color}"
        font-size="${this.fontSize}px"
        font-family="Helvetica, Arial, sans-serif">
        <tspan x="50%" y="50%" alignment-baseline="central">${this.text}</tspan>
      </text>
    </svg>
`.trim()
  }

  png () {
    return sharp(Buffer.from(this.svg())).png().toBuffer()
  }
}

export default BadgeIcon
