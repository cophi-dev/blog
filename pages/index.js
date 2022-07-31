import Head from "next/head";
import styles from "../styles/Home.module.css";
import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "../components/BlogCard";
import Header from "../components/Header";

const graphcms = new GraphQLClient(
  "https://api-eu-central-1.hygraph.com/v2/cl64t5n1j8dbq01uka85vdum1/master"
);

const QUERY = gql`
  {
    posts {
      id
      title
      datePublished
      slug
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      category {
        name
        image {
          url
        }
      }
      coverPhoto {
        publishedAt
        createdBy {
          id
        }
        url
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 30,
  };
}

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cophi's Code</title>
        <meta name="twitter:card" content={post.category.name} />
        <meta name="twitter:site" content="https://twitter.com/_cophi_" />
        <meta name="twitter:title" content="Cophi's Blog" />
        <meta name="twitter:description" content="test" />
        <meta name="twitter:image" content={category.image.url} />
      </Head>

      <main className={styles.main}>
        <Header />
        {posts.map((post) => (
          <BlogCard
            title={post.title}
            author={post.author}
            coverPhoto={post.coverPhoto}
            key={post.id}
            datePublished={post.datePublished}
            slug={post.slug}
            category={post.category}
          />
        ))}
      </main>
    </div>
  );
}
