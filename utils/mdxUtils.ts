import path from 'path';
import fs from 'fs';
import type { PostsProps } from '../types/posts';
import matter from 'gray-matter';

export const postsPath = path.join(process.cwd(), 'posts');

let postCache: PostsProps;

export function fetchPostHeader(): PostsProps {
  if (postCache) {
    return postCache;
  }

  const postFileNames = fs.readdirSync(postsPath);
  const postHeaderData = postFileNames
    .filter((item: string) => item.endsWith('.mdx'))
    .map((fileName: string) => {
      const filePath = path.join(postsPath, fileName);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data: frontmatter } = matter(fileContent);
      const json = JSON.parse(JSON.stringify(frontmatter));
      const jsonData = json as {
        slug: string;
        title: string;
        author: string;
        date: string;
        tags: Array<string>;
        description?: string;
        bannerUrl?: string;
      };

      return jsonData;
    });

  postCache = postHeaderData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
  return postCache;
}
