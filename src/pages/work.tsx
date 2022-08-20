import styled from '@emotion/styled'
import SubLayout from '../components/layout/SubLayout'

const WorkContainer = styled('div')``

export default function Work() {
  return (
    <WorkContainer>
      <div className="left__box">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dolor obcaecati error at!
        Possimus ullam corporis ipsam a! In similique atque animi eum voluptas est beatae voluptates
        enim? Possimus iusto eius eveniet omnis sed consequuntur nostrum sunt! Enim quia dolor
        inventore ipsum optio perspiciatis suscipit molestias quae assumenda voluptates! In deserunt
        sapiente alias officia doloremque harum voluptatem ducimus similique, perspiciatis et quam?
        Repellendus et sequi ab? Qui repellendus eaque quaerat sapiente, tempora doloremque minima
        beatae ad illum sit! Ratione temporibus, odio dolor quasi atque perspiciatis aliquid,
        accusantium enim esse, similique neque. Ut quam amet temporibus unde officia autem fuga
        doloremque!
      </div>
      <div className="right__box"></div>
    </WorkContainer>
  )
}

Work.getLayout = function getLayout(page: React.ReactElement) {
  return <SubLayout>{page}</SubLayout>
}
