import type { FC } from 'react'

import Emoji from 'a11y-react-emoji'
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import { GitHub, Mail, Twitter, Youtube } from 'react-feather'

import SocialLink from 'components/SocialLink'

const Footer: FC = () => {
  const bg = useColorModeValue('whiteAlpha.900', 'brand.800')
  const color = useColorModeValue('brand.500', 'whiteAlpha.900')

  return (
    <Flex
      bottom="0"
      align="center"
      direction="column"
      bg={bg}
      color={color}
      w="100%"
      minHeight="5vh"
    >
      <Box mt="2">
        <SocialLink
          href={`https://twitter.com/${import.meta.env.TWITTER_USERNAME}`}
          title="Twitter"
          icon={<Twitter size="20" />}
        />
        <SocialLink
          href={`https://github.com/${import.meta.env.GITHUB_USERNAME}`}
          title="GitHub"
          icon={<GitHub size="20" />}
        />
        <SocialLink
          href={`https://www.youtube.com/channel/${import.meta.env.YOUTUBE_CHANNEL}`}
          title="YouTube"
          icon={<Youtube size="20" />}
        />
        <SocialLink
          href={`mailto:${import.meta.env.EMAIL_ADDRESS}`}
          title="Email"
          icon={<Mail size="20" />}
        />
      </Box>
      <Text mt={2} mb={4} fontWeight="bold">
        Made with Vite <Emoji symbol="🔥" label="Fire emoji" />
      </Text>
    </Flex>
  )
}

export default Footer
