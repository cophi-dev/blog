import Image from "next/image";
import Link from "next/link";
import styles from "../styles/BlogCard.module.css";

function BlogPost({
  title,
  author,
  coverPhoto,
  datePublished,
  slug,
  category,
}) {
  return (
    <div className={styles.card}>
      <Link href={`/posts/${slug}`}>
        <div className={styles.imgContainer}>
          <Image layout="fill" src={coverPhoto.url} alt="" />
        </div>
      </Link>
      <div className={styles.text}>
        <h2>{title}</h2>
        <div className={styles.details}>
          <div className={styles.author}>
            <img src={author.avatar.url} alt={author.name} />
            <h3>{author.name}</h3>
          </div>
          <div className={styles.category}>
            <img src={category.image.url} alt={category.name} />
            <h3>{category.name}</h3>
          </div>
          <div className={styles.date}>
            <h3>{datePublished}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div dangerouslySetInnerHTML={{ __html: content.html }}></div> */
}
export default BlogPost;
