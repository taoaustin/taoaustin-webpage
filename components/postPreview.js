import { Box, Heading, Text, useColorModeValue, Link } from "@chakra-ui/react";
import { format, parseISO } from "date-fns";
import NextLink from "next/link";

const PostPreview = ({
  title,
  date,
  excerpt,
  id
}) => {
  return (
    <Box 
      border="1px" 
      borderRadius="xl" 
      p={4} 
      w="100%" 
      _hover={{
        bg: useColorModeValue("blackAlpha.400", "whiteAlpha.100"),
        transitionDuration: "0.2s"
      }}>
      <Heading size="md">
        <NextLink href={`/blog/${id}`} passHref>
          <Link>
            {title}
          </Link>
        </NextLink>
      </Heading>
      <Text fontSize="xs">
        {format(parseISO(date), "LLL d, yyyy")} 
      </Text>
      <Text fontSize="sm" noOfLines="1" mt="1">
        {excerpt}
      </Text>
    </Box>
  )
}

export default PostPreview;

