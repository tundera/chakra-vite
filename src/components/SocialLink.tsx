import type { FC, ReactElement } from 'react'

import { IconButton, Link, useColorModeValue } from '@chakra-ui/react'

interface Props {
  title: string
  icon: ReactElement
  href: string
}

const SocialLink: FC<Props> = ({ icon, title, href }) => {
  const hoverColor = useColorModeValue('whiteAlpha.900', 'brand.500')
  const color = useColorModeValue('brand.500', 'whiteAlpha.900')

  return (
    <Link href={href} title={title} isExternal mx={2}>
      <IconButton
        aria-label={`${title} icon link`}
        icon={icon}
        size="lg"
        color={color}
        _hover={{ bgBlendMode: 'difference', bgColor: 'gray.300', color: hoverColor }}
        variant="ghost"
      />
    </Link>
  )
}

export default SocialLink
