import styled from '@emotion/styled'
// import type { NextPage } from 'next'
import React from 'react'
import SubLayout from '../components/SubLayout'
import { hoverStyles } from '../styles/shared'
import { NextPageWithLayout } from './_app'

const HomeContainer = styled('div')`
  .intro {
    margin-bottom: 96px;
  }
`

const List = styled('ul')`
  margin-bottom: 50px;
  .list__item {
    border-top: 1px solid #111;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .item__left {
        span:first-of-type {
          margin-right: 25px;
        }
      }

      span {
        font-size: 12px;
        line-height: 1.2;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);

        a {
          ${hoverStyles}
        }

        ${(props) => props.theme.mq.mobile} {
          font-size: 16px;
        }

        ${(props) => props.theme.mq.tablet} {
          font-size: 18px;
        }
      }
    }
  }
`

const Home: NextPageWithLayout = () => {
  return (
    <HomeContainer>
      <div className="left__box">
        <h2 className="intro">
          About Work Carolina Feijó (Oct 27, 1998) is a graphic designer based in Porto, Portugal.
          Currently working as a freelancer and as Intern at AMAG PUBLISHER and Studio Dobra. For
          collaborations or more information: carolmfeijo@gmail.com
        </h2>

        <h2>Work Experience</h2>
        <List>
          <li className="list__item">
            <div>
              <div className="item__left">
                <span>2015</span>
                <span>Internship - Designer</span>
              </div>
              <span>
                <a href="https://www.naver.com" target="_blank" rel="noreferrer">
                  Naver corp.
                </a>
              </span>
            </div>
          </li>
          <li className="list__item">
            <div>
              <div className="item__left">
                <span>2015</span>
                <span>Graphic Designer</span>
              </div>
              <span>Luís Mendonça, Gémeo</span>
            </div>
          </li>
          <li className="list__item">
            <div>
              <div className="item__left">
                <span>2015</span>
                <span>Internship - Designer</span>
              </div>
              <span>
                <a href="https://www.naver.com" target="_blank" rel="noreferrer">
                  Naver corp.
                </a>
              </span>
            </div>
          </li>
          <li className="list__item">
            <div>
              <div className="item__left">
                <span>2015</span>
                <span>Graphic Designer</span>
              </div>
              <span>Luís Mendonça, Gémeo</span>
            </div>
          </li>
        </List>

        <h2>Education</h2>
        <List>
          <li className="list__item">
            <div>
              <div className="item__left">
                <span>2015</span>
                <span>Internship - Designer</span>
              </div>
              <span>Luís Mendonça, Gémeo</span>
            </div>
          </li>
          <li className="list__item">
            <div>
              <div className="item__left">
                <span>2015</span>
                <span>Graphic Designer</span>
              </div>
              <span>Luís Mendonça, Gémeo</span>
            </div>
          </li>
          <li className="list__item">
            <div>
              <div className="item__left">
                <span>2015</span>
                <span>Internship - Designer</span>
              </div>
              <span>Luís Mendonça, Gémeo</span>
            </div>
          </li>
          <li className="list__item">
            <div>
              <div className="item__left">
                <span>2015</span>
                <span>Graphic Designer</span>
              </div>
              <span>Luís Mendonça, Gémeo</span>
            </div>
          </li>
        </List>
      </div>
      <div className="right__box">
        <div className="poster">
          <img src="item-1.jpeg" alt="poster" />
        </div>
        <div className="poster">
          <img src="item-1.jpeg" alt="poster" />
        </div>
        <div className="poster">
          <img src="item-1.jpeg" alt="poster" />
        </div>
        <div className="poster">
          <img src="item-1.jpeg" alt="poster" />
        </div>
        <div className="poster">
          <img src="item-1.jpeg" alt="poster" />
        </div>
      </div>
    </HomeContainer>
  )
}

export default Home

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <SubLayout>{page}</SubLayout>
}
