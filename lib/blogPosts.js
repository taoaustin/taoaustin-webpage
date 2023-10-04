import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), '_posts');

// returns metadata for all posts
export function getAllPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDir);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
// straight up stolen from https://nextjs.org/learn/basics/data-fetching/blog-data

// just returns all the slugs, which would just be the filenames
export function getAllSlugs() {
  const fileNames = fs.readdirSync(postsDir);
  const allSlugs = fileNames.map((fileName) => 
    fileName.replace(/\.md$/, '')
  )
  return allSlugs;
}

export function getFullPostFromSlug(slug) {
  const fullPath = path.join(postsDir, slug + ".md")
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  return {
    content: matterResult.content,
    ...matterResult.data,
  }
}


