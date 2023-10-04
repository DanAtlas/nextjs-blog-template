import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';
import type { PostsProps } from '../types/posts';

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

  postCache = postHeaderData.sort((a, b) => (a.date < b.date ? 1 : -1));
  return postCache;
}

/**
 * Util to get headings from mdx file content
 */
export async function getHeadings(source: string) {
  const headingLines = source.split("\n").filter((line: string) => {
    return line.match(/^###*\s/);
  });

  return headingLines.map((raw: string) => {
    const text = raw.replace(/^###*\s/, "");
    const level = raw.slice(0, 3) === "###" ? 3 : 2;

    return { text, level };
  });
}

export function countPosts(tag?: string): number {
  return fetchPostHeader().filter(
    (post) => !tag || (post.tags && post.tags.includes(tag))
  ).length;
}