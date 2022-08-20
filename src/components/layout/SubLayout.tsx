import styled from '@emotion/styled'
type LayoutContainerProps = {
  isWorkPage: boolean
}

const LayoutContainer = styled('div')<LayoutContainerProps>`
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
    padding: 1rem;
    width: calc(100% - 2rem);
    ${(props) => props.theme.mq.tablet} {
      width: calc(50% - 1rem);
    }
  }
  .right__box {
    display: none;
    margin-left: calc(50% + 1rem);
    ${(props) => props.theme.mq.tablet} {
      width: calc(50% - 2rem);
      display: flex;
      flex-direction: column;
      padding: 1rem;

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
  isWorkPage: boolean
}

export default function SubLayout({ children, isWorkPage }: SubLayoutProps) {
  return <LayoutContainer isWorkPage={isWorkPage}>{children}</LayoutContainer>
}
