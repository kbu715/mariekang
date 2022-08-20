import styled from '@emotion/styled'
import SubLayout from '../components/layout/SubLayout'
import ListItem from '../components/ListItem'
import Poster from '../components/Poster'

const WorkContainer = styled('div')`
  .intro {
    margin-bottom: 96px;
  }
`

const List = styled('ul')`
  margin-bottom: 50px;
`

export default function Work() {
  return (
    <WorkContainer>
      <div className="left__box">
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
    </WorkContainer>
  )
}

Work.getLayout = function getLayout(page: React.ReactElement) {
  return <SubLayout isWorkPage={true}>{page}</SubLayout>
}
