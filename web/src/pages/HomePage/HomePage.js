import ApplicationLayout from 'src/layouts/ApplicationLayout'
import FlixCell from 'src/components/FlixCell'
import { Title, Content } from 'rbx'

const HomePage = () => {
  return (
    <ApplicationLayout>
      <Content>
        <Title>Movies</Title>
        <ul>
          <FlixCell />
        </ul>
      </Content>
    </ApplicationLayout>
  )
}

export default HomePage
