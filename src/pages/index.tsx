import styled from '@emotion/styled'
import type { NextPage } from 'next'
import { hoverStyles } from '../styles/shared'

const HomeContainer = styled('div')`
  display: flex;
  h2 {
    font-size: 1rem;
    line-height: 1.2;
    font-weight: 400;

    ${(props) => props.theme.mq.tablet} {
      font-size: 24px;
    }
  }
  .intro {
    margin-bottom: 96px;
  }
  .left__box {
    position: fixed;
    top: 0;
    left: 0;
    margin-top: calc(61px + 50px);
    padding: 0.5rem;
    ${(props) => props.theme.mq.tablet} {
      width: 50%;
    }
  }
  .right__box {
    display: none;
    margin-left: calc(50% + 1rem + 0.5rem);
    ${(props) => props.theme.mq.tablet} {
      width: 50%;
      display: flex;
      flex-direction: column;
      padding: 1rem;

      .poster {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 50px;
        img {
          width: 80%;
          height: auto;
        }
      }
    }
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

const Home: NextPage = () => {
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
                <a href="https://www.naver.com" target="_blank">
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
                <a href="https://www.naver.com" target="_blank">
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
