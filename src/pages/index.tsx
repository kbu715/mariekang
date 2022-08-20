import styled from '@emotion/styled'
import Head from 'next/head'
// import type { NextPage } from 'next'
import SubLayout from '../components/layout/SubLayout'
import ListItem from '../components/ListItem'
import Poster from '../components/Poster'
import { NextPageWithLayout } from './_app'

const List = styled('ul')`
  width: 100%;
  margin-bottom: 50px;
`

const Intro = styled('h2')`
  margin-bottom: 96px;
`

type HomeProps = {
  title?: string
}

const Home: NextPageWithLayout = ({ title }: HomeProps) => {
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
      </Head>
      <div className="left__box">
        <Intro>
          About Work Carolina Feijó (Oct 27, 1998) is a graphic designer based in Porto, Portugal.
          Currently working as a freelancer and as Intern at AMAG PUBLISHER and Studio Dobra. For
          collaborations or more information: carolmfeijo@gmail.com
        </Intro>

        <h2>Work Experience</h2>
        <List>
          <ListItem
            year="2015"
            info1="Internship - Designer"
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

        <h2>Education</h2>
        <List>
          <ListItem
            year="2015"
            info1="Internship - Designer"
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
        </List>
      </div>
      <div className="right__box">
        <div className="grid">
          <Poster src="images/work-1.jpeg" desc="my-work" />
          <Poster src="images/work-2.jpeg" desc="ddd" />
          <Poster src="images/work-3.jpeg" desc="ddd" />
          <Poster src="images/work-5.png" desc="ddd" />
          <Poster src="images/work-7.png" desc="ddd" />
        </div>
      </div>
    </div>
  )
}

export default Home

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <SubLayout>{page}</SubLayout>
}

Home.getInitialProps = () => {
  return { title: 'Marie Kang' }
}
