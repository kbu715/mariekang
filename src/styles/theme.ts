const breakpoints = [576, 768, 1200]

const theme = {
  color: {
    primary: '#0000ff',
    secondary: 'fff',
  },
  mq: {
    mobile: `@media only screen and (min-width: ${breakpoints[0]}px)`,
    tablet: `@media only screen and (min-width: ${breakpoints[1]}px)`,
    laptop: `@media only screen and (min-width: ${breakpoints[2]}px)`,
  },
}

export default theme
