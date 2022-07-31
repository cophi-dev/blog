import Head from "next/head";
import styles from "../../styles/Slug.module.css";
import { GraphQLClient, gql } from "graphql-request";
import Header from "../../components/Header";

const graphcms = new GraphQLClient(
  "https://api-eu-central-1.hygraph.com/v2/cl64t5n1j8dbq01uka85vdum1/master"
);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      datePublished
      author {
        id
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
      content {
        html
      }
      coverPhoto {
        id
        url
      }
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 30,
  };
}

export default function BlogPost({ post }) {
  const title = `Cophi - ${post.title}`;
  return (
    <main className={styles.blog}>
      <Head>
        <title>{title}</title>
        <meta name="twitter:card" content={post.category.name} />
        <meta name="twitter:site" content="https://twitter.com/_cophi_" />
        <meta name="twitter:title" content="Cophi's Blog" />
        <meta name="twitter:description" content="test" />
        <meta name="twitter:image" content={category.image.url} />
      </Head>
      <Header />
      <img src={post.coverPhoto.url} className={styles.cover} />
      <div className={styles.title}>
        <div className={styles.details}>
          <div className={styles.auth}>
            <img src={post.author.avatar.url} />
            <div className={styles.authtext}>
              <h6>By {post.author.name}</h6>
              <h6 className={styles.date}>{post.datePublished}</h6>
            </div>
          </div>
          <div className={styles.cat}>
            <div className={styles.cattext}>
              <h6>By {post.category.name}</h6>
            </div>
            <img src={post.category.image.url} />
          </div>
        </div>
        <h2>{post.title}</h2>
      </div>

      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content.html }}
      ></div>
    </main>
  );
}
