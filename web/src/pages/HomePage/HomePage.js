import ApplicationLayout from 'src/layouts/ApplicationLayout'
import { Content } from 'rbx'
import FlixCell from 'src/components/FlixCell'

const HomePage = () => {
  return (
    <ApplicationLayout>
      <Content>
        <FlixCell />
      </Content>
    </ApplicationLayout>
  )
}

export default HomePage
