export type PostProps = {
  slug: string;
  title: string;
  author: string;
  date: string;
  tags: Array<string>;
  description: string;
  bannerUrl: string;
}[];

export type PostContentProps = {
  post: PostProps;
};
