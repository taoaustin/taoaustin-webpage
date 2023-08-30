import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "./navbar";
const Layout = ({ children }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Austin Tao</title>
      </Head>
      <Navbar />
      <Container maxW="container.sm" pt={20}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
