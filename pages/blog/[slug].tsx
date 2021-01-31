import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import { getPostBySlug, getAllPostsWithSlug } from "../../lib/api";
import Layout from "../../components/Layout";
const BlogPost = ({ preview, post }) => {
  return (
    <Layout preview={preview}>
      <h2>Title: {post.title}</h2>
      <img src={post.mainImage} />
      <BlockContent
        blocks={post.body}
        imageOptions={{ w: 320, h: 240, fit: "max" }}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        dataset={process.env.NEXT_PUBLIC_SANITY_DATA_SET}
      />
      <h2>author</h2>
      <p>Name: {post.author.name}</p>
      <p>
        Image: <img src={post.author.image} />
      </p>
      <p>{post.publishedAt}</p>
    </Layout>
  );
};

export default BlogPost;

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostBySlug(params.slug, preview);
  console.log("data", data);
  return {
    props: {
      preview,
      post: data || null,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  };
}
