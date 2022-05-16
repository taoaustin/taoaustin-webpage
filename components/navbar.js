import Logo from "./logo";
import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  HStack,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";

const Navlink = ({ navhref, children }) => {
  return (
    <NextLink href={navhref} passHref>
      <Link display="flex" alignItems="center" gap="5px">
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = () => {
  return (
    <>
      {/* backdropFilter/Blur don't work in firefox, https://chakra-ui.com/docs/styled-system/features/style-props#filter */}
      <Box
        position="fixed"
        w="full"
        bg={useColorModeValue(
          "rgba(237, 242, 247, 0.5)",
          "rgba(23, 25, 35, 0.5)"
        )}
        px={5}
        backdropFilter="auto"
        backdropBlur="5px"
      >
        <Flex h={16} align="center">
          <Container maxW="container.md" display="flex" flexDirection="row">
            <Logo />

            <HStack spacing={8} display={{ base: "none", md: "flex" }}>
              <Navlink navhref="/resume">Resume</Navlink>
              <Navlink navhref="/nice">Blog</Navlink>
              <Navlink navhref="https://github.com/buttonmashing/taoaustin-webpage">
                <FaGithub />
                Source
              </Navlink>
            </HStack>

            {/* displays the hamburger menu when viewport is small enough */}
            <Flex flex={1}>
              <Box
                display={{ base: "inline-block", md: "none" }}
                mr={0}
                ml="auto"
              >
                <Menu isLazy>
                  <MenuButton
                    as={IconButton}
                    icon={<HamburgerIcon />}
                    aria-label="Options"
                    variant="outline"
                    mr={1.5}
                  />
                  <MenuList>
                    <Navlink navhref="/resume">
                      <MenuItem>Resume</MenuItem>
                    </Navlink>
                    <Navlink navhref="/blog">
                      <MenuItem>Blog</MenuItem>
                    </Navlink>
                    <Navlink navhref="https://github.com/buttonmashing/taoaustin-webpage">
                      <MenuItem gap="5px">Source</MenuItem>
                    </Navlink>
                  </MenuList>
                </Menu>
              </Box>
            </Flex>
          </Container>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
