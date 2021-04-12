import type { FC } from 'react'

import { Flex } from '@chakra-ui/react'

import Container from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'

const MainLayout: FC = ({ children, ...props }) => (
  <Flex direction="column" align="center" flexDirection="column" {...props}>
    <Header />
    <Container>{children}</Container>
    <Footer />
  </Flex>
)

export default MainLayout
