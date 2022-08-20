import styled from '@emotion/styled'
import Link from 'next/link'
import { hoverStyles } from '../styles/shared'

const StyledListItem = styled('li')`
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
`

type ListItemProps = {
  year: string
  info1: string
  info2: string
  href: string
}

export default function ListItem({ year, info1, info2, href }: ListItemProps) {
  return (
    <StyledListItem>
      <Link href={`/work/${info1}`}>
        <a>
          <div>
            <div className="item__left">
              <span>{year}</span>
              <span>{info1}</span>
            </div>
            <span>
              <a href={href} target="_blank" rel="noreferrer">
                {info2}
              </a>
            </span>
          </div>
        </a>
      </Link>
    </StyledListItem>
  )
}
