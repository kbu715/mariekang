import styled from '@emotion/styled'

type PostProps = {
  src: string
  desc: string
}

const PosterContainer = styled('div')`
  img {
    max-width: 100%;
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  h6 {
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    padding-top: 4px;
    font-size: 0.7rem;
    line-height: 1.3;
    letter-spacing: 0rem;
  }
`

export default function Poster({ src, desc }: PostProps) {
  return (
    <PosterContainer>
      <img src={src} alt="poster" loading="lazy" />
      <h6>{desc}</h6>
    </PosterContainer>
  )
}
