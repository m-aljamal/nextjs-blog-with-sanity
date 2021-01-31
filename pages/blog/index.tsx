import { getAllPostsForHome } from "../../lib/api";
import BlockContent from "@sanity/block-content-to-react";
import NextLink from "next/link";
import Layout from "../../components/Layout";
const Blog = ({ allPosts, preview }) => {
  console.log({ allPosts, preview });
  return (
    <Layout preview={preview}>
      {allPosts &&
        allPosts.map((p) => (
          <div key={p.slug} style={{ border: "1px solid" }}>
            <NextLink href={`/blog/${p.slug}`}>
              <a>
                <h2>Title: {p.title}</h2>
              </a>
            </NextLink>
          </div>
        ))}
    </Layout>
  );
};

export default Blog;

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
  };
}
