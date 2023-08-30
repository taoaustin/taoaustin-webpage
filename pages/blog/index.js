import { Box, Flex, VStack, StackDivider } from "@chakra-ui/react";
import { getAllPostsData } from "../../lib/blogPosts";
import PostPreview from "../../components/postPreview";

const Blog = ({allPosts}) => {
  console.log(allPosts)
  return (
      // <Center bg="grey" p="0rem">{allPosts[0].id}!</Center>
    <VStack spacing={3} divider=<StackDivider />>
      {allPosts.map((post) => (
        <PostPreview key={post.id} {...post} />
      ))}
    </VStack>
  );
};


export const getStaticProps = async () => {
  const allPosts = getAllPostsData();
  return {
    props: { allPosts }
  }
}

export default Blog;
