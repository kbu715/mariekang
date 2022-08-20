import styled from '@emotion/styled'
import { LayoutProps } from './AppLayout'

const LayoutContainer = styled('div')`
  display: flex;
  h2 {
    font-size: 1rem;
    line-height: 1.2;
    font-weight: 400;

    ${(props) => props.theme.mq.tablet} {
      font-size: 24px;
    }
  }
  .left__box {
    position: fixed;
    top: 0;
    left: 0;
    margin-top: calc(61px + 50px);
    padding: 0.5rem;
    ${(props) => props.theme.mq.tablet} {
      width: calc(50% - 1rem);
    }
  }
  .right__box {
    display: none;
    margin-left: calc(50%);
    ${(props) => props.theme.mq.tablet} {
      width: calc(50% - 2rem);
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
          object-fit: cover;
        }
      }
    }
  }
`

export default function SubLayout({ children }: LayoutProps) {
  return <LayoutContainer>{children}</LayoutContainer>
}
