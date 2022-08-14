import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    color: {
      primary: string
      secondary: string
    }
    mq: {
      mobile: string
      tablet: string
      laptop: string
    }
  }
}

// If you were previously relying on theme being an any type, you can restore compatibility with:
/*
declare module '@emotion/react' {
  export interface Theme extends Record<string, any> {}
}
*/
