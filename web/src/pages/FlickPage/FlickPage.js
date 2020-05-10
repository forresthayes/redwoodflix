import ApplicationLayout from 'src/layouts/ApplicationLayout'
import FlickCell from 'src/components/FlickCell'

const FlickPage = ({ id }) => {
  return (
    <ApplicationLayout>
      <FlickCell id={id} />
    </ApplicationLayout>
  )
}

export default FlickPage
