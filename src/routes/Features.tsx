import { useColorModeValue } from '@chakra-ui/color-mode'
import { Flex, Heading } from '@chakra-ui/layout'
import FeatureCards from 'components/FeatureCards'
import MainLayout from 'layouts/MainLayout'

function Features() {
  const headingColor = useColorModeValue('black', 'white')

  return (
    <MainLayout>
      <Flex direction="column" alignItems="center">
        <Heading as="h1" fontSize="4xl" mt="8" color={headingColor}>
          Features
        </Heading>
        <FeatureCards />
      </Flex>
    </MainLayout>
  )
}

export default Features
