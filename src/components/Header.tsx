import React, { FC } from 'react'

import styled from '@emotion/styled'
import { chakra, Text, Flex, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import Navigation from 'components/Navigation'

const StickyFlex = styled(chakra.header)`
  position: sticky;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`

const Header: FC = ({ ...props }) => {
  const navigate = useNavigate()
  const mobileNav = useDisclosure()
  const bg = useColorModeValue('white', 'brand.700')
  const hoverColor = useColorModeValue('brand.500', 'gray.800')

  const handleClick = () => {
    navigate('/')
  }

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
        <Text onClick={handleClick} fontSize="xl" fontWeight="bold" _hover={{ color: hoverColor }}>
          Vite Starter
        </Text>
        <Navigation disclosure={mobileNav} />
      </Flex>
    </StickyFlex>
  )
}

export default Header
