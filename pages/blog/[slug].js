import { Box, Text, Heading } from "@chakra-ui/react"
import { format, parseISO } from "date-fns";
import { getAllSlugs, getFullPostFromSlug } from "../../lib/blogPosts";
import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

export default function Post(post) {
  console.log(post)
  return(
    <Box>
      <Box mb={8}>
        <Heading size="2xl">
          {post.title}
        </Heading>  
        <Text fontSize="sm">
          {format(parseISO(post.date), "LLL d, yyyy")} 
        </Text>
      </Box>
      <ReactMarkdown components={ChakraUIRenderer()} children={post.content} skipHtml />
    </Box>
    )
}

export const getStaticPaths = async () => {
  const slugs = getAllSlugs();
  const paths = slugs.map((slug) => {
    return ({
      params: { slug: slug }
    })
  });

  return { 
    paths,
    fallback: false
  }
}


export const getStaticProps = async({ params }) => {
  const post = getFullPostFromSlug(params.slug); 
  return {props: post}
}

 

