import { Container, Box, Heading } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <>
      <Box borderRadius="lg" bg="gray" p={3} mb={6} align={"center"}>
        Hi, I&apos;m Austin. I'm a software developer.
      </Box>

      <Box display="flex">
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Austin Tao
          </Heading>
          <p>
            Student / Developer / gamer?
          </p>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
