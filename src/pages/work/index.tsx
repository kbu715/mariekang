import styled from '@emotion/styled'
import Head from 'next/head'
import SubLayout from '../../components/layout/SubLayout'
import ListItem from '../../components/ListItem'
import Poster from '../../components/Poster'

const List = styled('ul')`
  width: 100%;
  margin-bottom: 50px;
`

type WorkProps = {
  title?: string
}

export default function Work({ title }: WorkProps) {
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
      </Head>
      <div className="left__box">
        <List>
          <ListItem
            year="2015"
            info1="Planners by AMAG"
            info2="Naver corp."
            href="https://www.naver.com"
          />
          <ListItem year="2015" info1="Graphic Desiner" info2="Luís Mendonça, Gémeo" href="#" />
          <ListItem
            year="2015"
            info1="Internship - Designer"
            info2="Naver corp."
            href="https://www.naver.com"
          />
          <ListItem year="2015" info1="Graphic Desiner" info2="Luís Mendonça, Gémeo" href="#" />
        </List>
      </div>
      <div className="right__box">
        <div className="grid">
          <Poster src="images/work-1.jpeg" desc="work-1" />
          <Poster src="images/work-2.jpeg" desc="work-1" />
          <Poster src="images/work-3.jpeg" desc="work-1" />
          <Poster src="images/work-4.jpeg" desc="work-1" />
          <Poster src="images/work-5.png" desc="work-1" />
          <Poster src="images/work-6.jpeg" desc="work-1" />
          <Poster src="images/work-7.png" desc="work-1" />
        </div>
      </div>
    </div>
  )
}

Work.getLayout = function getLayout(page: React.ReactElement) {
  return <SubLayout>{page}</SubLayout>
}

Work.getInitialProps = () => {
  return { title: 'Work - Marie Kang' }
}
