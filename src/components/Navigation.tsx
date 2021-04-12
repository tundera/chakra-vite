import type { FC } from 'react'

import {
  Box,
  Button,
  CloseButton,
  HStack,
  IconButton,
  Slide,
  useColorModeValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Menu } from 'react-feather'

import DarkModeToggle from 'components/DarkModeToggle'

interface Props {
  disclosure: ReturnType<typeof useDisclosure>
}

const Navigation: FC<Props> = ({ disclosure }) => {
  const bg = useColorModeValue('whiteAlpha.900', 'indigo.700')
  const iconColor = useColorModeValue('gray.800', 'inherit')

  return (
    <HStack display="flex" alignItems="center" spacing={1}>
      <HStack
        spacing={2}
        mr={1}
        color={useColorModeValue('indigo.500', 'whiteAlpha.900')}
        display={{ base: 'none', md: 'inline-flex' }}
      >
        <Link to="/">
          <Button variant="ghost" w="100%">
            Home
          </Button>
        </Link>
        <Link to="/features">
          <Button variant="ghost" w="100%">
            Features
          </Button>
        </Link>
      </HStack>
      <HStack
        spacing={1}
        mr={1}
        color={useColorModeValue('indigo.500', 'whiteAlpha.900')}
        display={{ base: 'none', md: 'inline-flex' }}
      >
        <HStack spacing={3} display={disclosure.isOpen ? 'none' : 'flex'} alignItems="center">
          <DarkModeToggle />
        </HStack>
      </HStack>

      <Box display={{ base: 'inline-flex', md: 'none' }}>
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          aria-label="Open menu"
          fontSize="20px"
          color={iconColor}
          variant="ghost"
          icon={<Menu />}
          onClick={disclosure.onOpen}
        />
        <Slide direction="top" in={disclosure.isOpen} style={{ zIndex: 30 }}>
          <VStack
            top={0}
            left={0}
            right={0}
            display={disclosure.isOpen ? 'flex' : 'none'}
            flexDirection="column"
            py={4}
            px={8}
            bg={bg}
            spacing={3}
            borderRadius="sm"
            boxShadow="sm"
          >
            <CloseButton aria-label="Close menu" onClick={disclosure.onClose} />
            <Link to="/">
              <Button variant="ghost" w="100%">
                Home
              </Button>
            </Link>
            <Link to="/features">
              <Button variant="ghost" w="100%">
                Features
              </Button>
            </Link>
            <DarkModeToggle />
          </VStack>
        </Slide>
      </Box>
    </HStack>
  )
}

export default Navigation
