import {Container, Heading, Image, PlanetNamesHeading} from './styledComponents'

const PlanetItem = props => {
  const {details} = props
  const {imageUrl, name} = details
  return (
    <Container>
      <Heading>Planet</Heading>
      <Image src={imageUrl} alt={`planet ${name}`} />
      <PlanetNamesHeading>{name}</PlanetNamesHeading>
    </Container>
  )
}
export default PlanetItem
