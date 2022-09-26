import fs from 'fs';
import path from 'path';

const jsonDirectory = path.join(process.cwd(), './json');

export type PostContentProps = {
  readonly slug: string;
  readonly title: string;
  readonly date: string;
};

let postCache: PostContentProps[];

export function fetchContent(): PostContentProps[] {
  if (postCache) {
    return postCache;
  }

  const fileNames = fs.readdirSync(jsonDirectory);
  const allPostsContentData = fileNames
    .filter((it: string) => it.endsWith(".json"))
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

  // const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');

  // const dirPath = path.resolve(__dirname, '../../../json')
  // const jsonsInDir = (await fs.readdir(dirPath)).filter(file => path.extname(file) === '.json')
  // const fileContent = jsonsInDir.forEach(async file => {
  //   console.log(file)
  //   // const fileData = fs.readFile(path.join('../../../json', file));
  //   return await fs.readFile(file, 'utf8');
  //   // const json = JSON.parse(fileData.toString());
  //   // console.log(json)
  // });

  // res.status(200).json(fileContent);
}