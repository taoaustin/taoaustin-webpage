import { Container, Box, Heading, Flex, useColorModeValue } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <>
      <Box mt={20} borderRadius="2xl" bg={useColorModeValue("blackAlpha.400", "whiteAlpha.100")} p={3} mb={6} align="center">
        Hi, I&apos;m Austin!
      </Box>

      <Flex direction="column">
        <Heading textDecoration={"underline"} fontSize="lg" as="h3" textUnderlineOffset={4} textDecorationThickness={1} marginBottom={2}>
          About
        </Heading>
        <p>
I am Computer Science student at the University of Waterloo currently in my 4th year. I&apos;m a software developer with experience working on the backend. While on the side, I enjoy messing around with game dev and some UI programming (like for this site!). Check out my resume!
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </p>
      </Flex>
    </>
  );
};

export default HomePage;
