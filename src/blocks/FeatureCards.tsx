import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  LinkBox,
  LinkOverlay,
  useColorModeValue,
} from '@chakra-ui/react'
import MotionBox from 'motion-box'
import CypressLogo from 'assets/logos/cypress.svg'
import ViteLogo from 'assets/logos/vite.svg'
import TypeSriptLogo from 'assets/logos/typescript.svg'
import { FC } from 'react'

const Features: FC = () => {
  const bg = useColorModeValue('white', 'gray.800')
  const headerColor = useColorModeValue('gray.700', 'white')
  const textColor = useColorModeValue('gray.500', 'gray.300')

  return (
    <Box
      display={{ sm: 'flex' }}
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      gridGap="8"
    >
      <MotionBox
        w={{ base: 'full', md: '50%', lg: '25%' }}
        px="4"
        py="4"
        mt="6"
        bg={bg}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        shadow="lg"
        rounded="lg"
      >
        <LinkBox as="article">
          <Box flexShrink={0}>
            <Flex align="center" justify="center" mx="auto" rounded="md" color="white">
              <Image src={ViteLogo} h="24" w="24" alt="Vite logo" />
            </Flex>
          </Box>
          <Heading
            as="h3"
            color={headerColor}
            fontSize={{ base: '2xl', sm: 'xl' }}
            fontWeight="semibold"
            py="4"
          >
            <LinkOverlay href="https://vitejs.dev/">Vite</LinkOverlay>
          </Heading>
          <Text fontSize="md" color={textColor} py="4">
            Lightning-fast ESM module-based development server and esbuild compiler for ultimate
            developer experience.
          </Text>
        </LinkBox>
      </MotionBox>
      <MotionBox
        w={{ base: 'full', md: '50%', lg: '25%' }}
        px="4"
        py="4"
        mt={{ base: '6', sm: '16', md: '20', lg: '24' }}
        bg={bg}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        shadow="lg"
        rounded="lg"
      >
        <LinkBox as="article">
          <Box flexShrink={0}>
            <Flex align="center" justify="center" mx="auto" rounded="md" color="white">
              <Image src={TypeSriptLogo} h="24" w="24" alt="TypeScript logo" />
            </Flex>
          </Box>
          <Heading
            as="h3"
            color={headerColor}
            fontSize={{ base: '2xl', sm: 'xl' }}
            fontWeight="semibold"
            py="4"
          >
            <LinkOverlay href="https://www.typescriptlang.org/">TypeScript</LinkOverlay>
          </Heading>
          <Text fontSize="md" color={textColor} py="4">
            All code written in TypeScript, so you get full type safety in your app. Code hinting
            and autocomplete in your IDE for top-notch developer experience.
          </Text>
        </LinkBox>
      </MotionBox>
      <MotionBox
        w={{ base: 'full', md: '50%', lg: '25%' }}
        mt={{ base: '6', sm: '16', md: '20', lg: '6' }}
        px="4"
        py="4"
        bg={bg}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        shadow="lg"
        rounded="lg"
      >
        <LinkBox as="article">
          <Box flexShrink={0}>
            <Flex align="center" justify="center" mx="auto" rounded="md" color="white">
              <Image src={CypressLogo} h="24" w="24" alt="Cypress logo" />
            </Flex>
          </Box>
          <Heading
            as="h3"
            color={headerColor}
            fontSize={{ base: '2xl', sm: 'xl' }}
            fontWeight="semibold"
            py="4"
          >
            <LinkOverlay href="https://www.cypress.io/">Cypress</LinkOverlay>
          </Heading>
          <Text fontSize="md" color={textColor} py="4">
            Write end-to-end, integration, and unit tests for your components using a single testing
            framework.
          </Text>
        </LinkBox>
      </MotionBox>
    </Box>
  )
}

export default Features
