import { Link } from "react-router-dom";
import styles from "./blogSection.module.css";

const BlogSection = ({ post }) => {

    const formatDate = (dateString) => {
        const date = new Date(dateString);

        return date.toLocaleDateString("da-DK", {
            day: "numeric",
            month: "short",
        })
        .replace('.', '')
    };

    return (
      <section className="sectionsContainer">
        <p className="kicker">VORES NYHEDER</p>
        <h2 className="black">SENESTE BLOGINDLÆG</h2>
        <img className={styles.blogImage} src={post.image} alt={post.title} />
        <div className={styles.blogDate}>{formatDate(post.createdAt)}</div>
        <h3 className="black">{post.title}</h3>
        <p className={styles.teaser}>{post.teaser}</p>
        <Link to={`/blog/${post.id}`} className={styles.readMore}>
          Læs mere
        </Link>
      </section>
    );
}

export default BlogSection;