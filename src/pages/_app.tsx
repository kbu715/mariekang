import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import theme from '../styles/theme'
import GlobalStyle from '../styles/global'
import AppLayout from '../components/layout/AppLayout'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppLayout>{getLayout(<Component {...pageProps} />)}</AppLayout>
    </ThemeProvider>
  )
}

export default MyApp
