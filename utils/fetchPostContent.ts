import path from 'path';
import fs from 'fs';
import type { PostProps } from '../pages/types/posts';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';

const postsPath = path.join(process.cwd(), 'posts');

let postCache: PostProps;

export function fetchPostContent(): PostProps {
  if (postCache) {
    return postCache;
  }

  const postFileNames = fs.readdirSync(postsPath);
  const postContentData = postFileNames
    .filter((item: string) => item.endsWith('.mdx'))
    .map((fileName: string) => {
      const filePath = path.join(postsPath, fileName);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { content, data: frontmatter } = matter(fileContent);
      // const MdxSource = serialize(content);
      const json = JSON.parse(JSON.stringify(frontmatter));
      const jsonData = json as {
        slug: string;
        title: string;
        author: string;
        date: string;
        tags: Array<string>;
        description: string;
        bannerUrl: string;
      };

      return jsonData;
    });

  postCache = postContentData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
  return postCache;
}
