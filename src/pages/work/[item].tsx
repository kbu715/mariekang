import styled from '@emotion/styled'
import Head from 'next/head'
import { useRouter } from 'next/router'
import SubLayout from '../../components/layout/SubLayout'
import ListItem from '../../components/ListItem'

const List = styled('ul')`
  width: 100%;
  margin-bottom: 50px;
`

type WorkItemProps = {
  title?: string
}

export default function WorkItem({ title }: WorkItemProps) {
  const router = useRouter()

  console.log(router.query.item)
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
        <h1>{router.query.item}</h1>
      </div>
    </div>
  )
}

WorkItem.getLayout = function getLayout(page: React.ReactElement) {
  return <SubLayout>{page}</SubLayout>
}

WorkItem.getInitialProps = () => {
  return { title: 'Work - Marie Kang' }
}
