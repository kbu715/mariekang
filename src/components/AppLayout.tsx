import Head from 'next/head'
import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { hoverStyles } from '../styles/shared'

export type LayoutProps = {
  children: React.ReactNode
}

type HeaderProps = {
  pathname: string
}

const Header = styled('header')<HeaderProps>`
  z-index: 10;
  background-color: #fff;
  width: 100%;
  /* padding: 1rem; */
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      cursor: pointer;
      ${hoverStyles}
    }
    .links {
      a {
        cursor: pointer;
        font-size: 18px;
        margin-right: 15px;
        color: ${(props) => props.pathname === '/'};

        ${hoverStyles}
      }
    }

    ${(props) => props.theme.mq.tablet} {
      width: 50%;
    }
  }

  .right {
    display: none;

    a {
      ${hoverStyles}
    }

    ${(props) => props.theme.mq.tablet} {
      padding: 1rem;
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
`

const Main = styled('main')`
  padding: 2rem;

  ${(props) => props.theme.mq.tablet} {
    padding: 1rem;
  }
  margin-top: 61px;
`

export default function AppLayout({ children }: LayoutProps) {
  const router = useRouter()
  console.log(router)

  return (
    <div className="container">
      <Head>
        <title>Marie Portfolio</title>
        <meta name="description" content="This is Marie's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header pathname={router.pathname}>
        <div className="left">
          <Link href="/">
            <a>
              <h2 className="title">Carolina Feijó</h2>
            </a>
          </Link>
          <div className="links">
            <Link href="/">
              <a>About</a>
            </Link>
            <Link href="/work">
              <a>Work</a>
            </Link>
          </div>
        </div>
        <div className="right">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </Header>

      <Main>{children}</Main>
    </div>
  )
}
