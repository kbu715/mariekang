import styled from '@emotion/styled'
import SubLayout from '../components/layout/SubLayout'
import ListItem from '../components/ListItem'

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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores accusantium vitae, rerum
        ut minima eligendi labore sint a, tenetur soluta architecto sequi, fugit facere? Repellendus
        vel doloremque rerum repudiandae temporibus consequatur harum eius reiciendis molestias
        nobis ipsum ipsam dolorum asperiores a dolor facere ullam totam nulla magni quaerat itaque
        quod, hic natus quae. Officiis accusamus tenetur sapiente eum! Hic, et! Veritatis soluta ut
        cupiditate minima sequi esse tenetur inventore eligendi ipsum corrupti molestias, quaerat
        saepe nam commodi laborum aliquid debitis? Totam vitae distinctio quasi nostrum sequi eos
        magnam soluta officia iusto vel? Alias nisi aut itaque iusto dolorum mollitia fuga?
      </div>
    </WorkContainer>
  )
}

Work.getLayout = function getLayout(page: React.ReactElement) {
  return <SubLayout isWorkPage={true}>{page}</SubLayout>
}
