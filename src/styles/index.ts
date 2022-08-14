// phone // tablet // desktop
const breakpoints = [576, 768, 1200]

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`)

export { mq }
