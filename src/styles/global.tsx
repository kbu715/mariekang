import { Global, css } from '@emotion/react'

const style = css`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Albert Sans', sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  html {
    font-family: 'Albert Sans', sans-serif;
    font-size: 16px;
  }

  body {
    box-sizing: border-box;
    font-family: 'Albert Sans', sans-serif;
  }

  h1 {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  select,
  textarea {
    background-color: transparent;
    border: 0;
  }

  button:hover,
  input:hover,
  select:hover,
  textarea:hover {
    outline: none;
    box-shadow: none;
  }

  a,
  button {
    cursor: pointer;
  }

  button {
    padding: 0;
  }

  ul,
  ol {
    padding-left: 0;
    list-style: none;
  }

  address {
    font-style: normal;
  }
`

const GlobalStyle = () => {
  return <Global styles={style} />
}

export default GlobalStyle
