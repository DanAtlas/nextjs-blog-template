import styles from './BlogList.module.scss';
import PostCard from 'components/post-card/PostCard';
import type { PostsContentProps } from 'types/posts';

function BlogList({ post, postItem, limit }: PostsContentProps) {
  return (
    <>
      <ul className={styles['blog-list']}>
        {limit 
          ? post.slice(0, limit).map((postItem) => {
              return (
                <PostCard post={post} postItem={postItem} key={postItem.slug} />
              )
            })
          : post.map((postItem) => {
              return (
                <PostCard post={post} postItem={postItem} key={postItem.slug} />
              );
          })
        }
      </ul>
    </>
  );
}

export default BlogList;
