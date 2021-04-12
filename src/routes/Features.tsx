import { Flex, Heading } from '@chakra-ui/layout'
import FeatureCards from 'components/FeatureCards'
import MainLayout from 'layouts/MainLayout'

function Features() {
  return (
    <MainLayout>
      <Flex direction="column" alignItems="center">
        <Heading as="h1" fontSize="4xl" mt="8">
          Features
        </Heading>
        <FeatureCards />
      </Flex>
    </MainLayout>
  )
}

export default Features
