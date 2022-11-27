export type PostItemProps = {
  slug: string;
  title: string;
  author: string;
  date: string;
  tags: Array<string>;
  description?: string;
  bannerUrl?: string;
}

export type PostsProps = PostItemProps[];

export type PostItemContentProps = {
  postItem: PostItemProps;
};

export type PostContentProps = {
  post: PostsProps;
  postContent: object;
};
