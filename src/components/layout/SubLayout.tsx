import styled from '@emotion/styled'

const LayoutContainer = styled('div')`
  display: flex;
  .container {
    width: 100%;
  }
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
    padding: 1rem;
    width: calc(100% - 2rem);
    ${(props) => props.theme.mq.tablet} {
      width: calc(50% - 2rem);
    }
  }
  .right__box {
    display: none;
    margin-left: calc(50% + 1rem);
    width: calc(100% - 2rem);
    padding: 1rem;
    ${(props) => props.theme.mq.tablet} {
      width: calc(50% - 2rem);
      display: flex;
      flex-direction: column;

      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        grid-auto-flow: row dense;
      }
    }
  }
`
type SubLayoutProps = {
  children: React.ReactNode
}

export default function SubLayout({ children }: SubLayoutProps) {
  return <LayoutContainer>{children}</LayoutContainer>
}
