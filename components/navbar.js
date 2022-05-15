import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
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
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={5}>
        <Container maxW="container.md">
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Logo />
          </Flex>
        </Container>
      </Box>
    </>
  )
};

export default Navbar;
