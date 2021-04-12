import type { FC } from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import { Global } from '@emotion/react'

import fonts from 'styles/font-face'
import { theme } from 'styles/theme'

const ThemeProvider: FC = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={fonts} />
      {children}
    </ChakraProvider>
  )
}

export default ThemeProvider
