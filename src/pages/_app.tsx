import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import theme from '../styles/theme'
import GlobalStyle from '../styles/global'
import AppLayout from '../components/AppLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  )
}

export default MyApp
