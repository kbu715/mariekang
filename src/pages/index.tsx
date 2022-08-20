import styled from '@emotion/styled'
// import type { NextPage } from 'next'
import React from 'react'
import SubLayout from '../components/layout/SubLayout'
import ListItem from '../components/ListItem'
import Poster from '../components/Poster'
import { NextPageWithLayout } from './_app'

const HomeContainer = styled('div')`
  .intro {
    margin-bottom: 96px;
  }
`

const List = styled('ul')`
  margin-bottom: 50px;
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
        </div>
      </div>
    </HomeContainer>
  )
}

export default Home

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <SubLayout isWorkPage={false}>{page}</SubLayout>
}
