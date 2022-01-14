import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'
import {MainContainer} from './styledComponents'

const PlanetsSlider = props => {
  const {planetsList} = props
  return (
    <MainContainer data-testid="planets">
      <Slider>
        {planetsList.map(each => (
          <PlanetItem key={each.id} details={each} />
        ))}
      </Slider>
    </MainContainer>
  )
}

export default PlanetsSlider
