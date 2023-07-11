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

export type HeadingProps = {
  text: string;
  level: number; 
};

export type PostsContentProps = {
  post: PostsProps;
  postContent?: object;
  headings?: Array<HeadingProps>;
  postItem: PostItemProps;
  tag?: string;
  limit?: number;
};
