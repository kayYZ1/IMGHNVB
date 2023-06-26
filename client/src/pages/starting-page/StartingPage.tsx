import { Divider } from 'antd'

import StarterPageTourComponent from '../../components/StarterPageTourComponent'

const StartingPage = () => {
  return (
    <div>
      <h2>Starter pack</h2>
      <Divider></Divider>
      <p>We at IMGHNVB know that accomodating to a entirely new software can sometimes be annoying and tiring.</p>
      <p>That's why our set of talented and handsome developers decided to include a simple tour component which purpose is to help you out.</p>
      <p>Please check your seatbelts, grab a drink of fresh coca-cola from a fridge and enjoy the ride.</p>
      <Divider>Ready for a ride?</Divider>
      <StarterPageTourComponent />
    </div>
  )
}

export default StartingPage