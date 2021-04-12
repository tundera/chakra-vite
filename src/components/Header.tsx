import type { FC } from 'react'

import styled from '@emotion/styled'
import {
  chakra,
  Text,
  Flex,
  useColorModeValue,
  useDisclosure,
  HStack,
  Image,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import Navigation from 'components/Navigation'
import logo from 'assets/logos/vite.svg'

const StickyFlex = styled(chakra.header)`
  position: sticky;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`

const Header: FC = ({ ...props }) => {
  const mobileNav = useDisclosure()
  const bg = useColorModeValue('white', 'brand.700')

  return (
    <StickyFlex
      bg={bg}
      w="100%"
      px={{ base: 2, sm: 4, lg: 8 }}
      py={4}
      boxShadow="md"
      zIndex={20}
      top="0"
      minHeight="5vh"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      {...props}
    >
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <Link to="/">
          <HStack spacing="2" alignItems="center">
            <Image src={logo} className="App logo" alt="logo" w="10" h="10" />
            <Text fontSize="xl" fontWeight="bold">
              Vite Starter
            </Text>
          </HStack>
        </Link>
        <Navigation disclosure={mobileNav} />
      </Flex>
    </StickyFlex>
  )
}

export default Header
