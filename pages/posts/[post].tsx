import type { GetStaticPaths } from 'next';
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import { fetchContent } from 'pages/api/staticData';

type postProps = {
  slug: string;
  title: string;
  date: string;
}[];

type PostContentProps = {
  post: postProps
};

export default function postDetail({ post }: PostContentProps) {
  console.log('post', post)

  return (
    <div>
      <header></header>

      <main>
        <div className="container">
          <h1>Post slug - {post[0].slug}</h1>
          <h1>Post title - {post[0].title}</h1>
          <h1>Post date - {post[0].date}</h1>
        </div>
        <img src="/vercel.svg" alt="" />
      </main>

      <footer></footer>
    </div>
  )
}

export const getStaticProps = async ({ params }: any) =>  {
  const post = fetchContent().filter(post => {
    if(post.slug.toString() === params.post) {
      return post
    }
  });
  
  // const filePath = path.join(process.cwd(), 'json/file1.json');
  // const jsonData = await fsPromises.readFile(filePath);
  // const objectData = JSON.parse(jsonData.toString());

  return {
    props: {
      post
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fetchContent().map(post => `/posts/${post.slug}`)

  // const paths = fetchContent().map(post => ({
  //   params: {slug: post.slug.toString()},
  // }))

  // const paths = fetchContent().map(post => {
  //   const postSlug = post.slug;
  //   return {
  //     params: {
  //       postSlug
  //     }
  //   }
  // });
  // console.log('paths', paths)

  return {
    paths,
    fallback: false,
  };
};