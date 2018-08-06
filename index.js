import SVG from 'svg.js'
import svgdom from 'svgdom'
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
    const draw = SVG(svgdom)(svgdom.document.documentElement).clear().size(this.badgeWidth, this.badgeHeight)

    draw.ellipse(this.badgeWidth, this.badgeHeight).fill(this.bgColor)

    draw.text(t => {
      t.tspan(this.text)
        .attr('x', '50%')
        .attr('y', '50%')
        .attr('alignment-baseline', 'central')
    }).fill(this.color)
      .attr('x', '50%')
      .attr('y', '50%')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'central')
      .font('size', this.fontSize + 'px')

    return draw.svg()
  }

  png () {
    return sharp(Buffer.from(this.svg())).png().toBuffer()
  }
}

export default BadgeIcon
