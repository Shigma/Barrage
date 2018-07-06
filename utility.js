function rgb(red, green, blue) {
  function to256(scale) {
    scale *= 256
    return scale > 255 ? 255 : scale < 0 ? 0 : Math.floor(scale)
  }
  return `rgb(${to256(red)},${to256(green)},${to256(blue)})`
}

function interval(period, previous, current) {
  return Math.floor(current / period) > Math.floor(previous / period)
}

function smooth(x1, x2, t) {
  return x1 + (x2 - x1) / 2 * (1 - Math.cos(Math.PI * t))
}

function rpm() {
  return Math.floor(Math.random() * 2) * 2 - 1
}

module.exports = {
  rgb,
  interval,
  smooth,
  rpm
}