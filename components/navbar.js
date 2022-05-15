import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  HStack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const Navlink = ({navhref, children}) => {
  <NextLink href={navhref} passHref>
    <Link

    >
      {children}
    </Link>
  </NextLink>
}


const Navbar = () => {
  return (
    <>
      {/* backdropFilter/Blur don't work in firefox, https://chakra-ui.com/docs/styled-system/features/style-props#filter */}
      <Box 
        position="fixed" 
        w="full" 
        bg={useColorModeValue('rgba(237, 242, 247, 0.5)', 
                              'rgba(23, 25, 35, 0.5)')} 
        px={5}
        backdropFilter='auto'
        backdropBlur='5px'
      >
        <Flex h={16} align="center">
          <Container maxW="container.md">
              <Logo />
              <HStack>

              </HStack>
          </Container>
        </Flex>
      </Box>
    </>
  )
}

export default Navbar
