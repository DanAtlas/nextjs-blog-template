import styles from './BlogList.module.scss';
import PostCard from 'components/post-card/PostCard';
import type { PostsContentProps } from 'types/posts';

function BlogList({ post, postItem }: PostsContentProps) {
  return (
    <>
      <ul className={styles['blog-list']}>
        {post.map((postItem) => {
          return (
            <PostCard post={post} postItem={postItem} key={postItem.slug} />
          );
        })}
      </ul>
    </>
  );
}

export default BlogList;
