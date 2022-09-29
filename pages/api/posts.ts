import fs from 'fs';
import path from 'path';
import type { PostProps } from 'pages/types/posts';

const jsonDirectory = path.join(process.cwd(), './json');

let postCache: PostProps;

export function fetchContent(): PostProps {
  if (postCache) {
    return postCache;
  }

  const fileNames = fs.readdirSync(jsonDirectory);
  const allPostsContentData = fileNames
    .filter((item: string) => item.endsWith(".json"))
    .map((fileName: string) => {
      const fullPath = path.join(jsonDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const json = JSON.parse(fileContents);
      const jsonData = json as {
        slug: string;
        title: string;
        date: string;
      };

      return jsonData
    });

  postCache = allPostsContentData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
  return postCache;
}