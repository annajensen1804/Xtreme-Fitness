import styles from './about.module.css'
import Button from "../button/Button"
import aboutUsImg from "../../assets/images/about_us2.png"

const About = ({ buttonText, onClick, buttonIcon, variant = 'dark' }) => {
    const componentClass = `sectionsContainer ${styles[variant]}`;
    
  return (
    <article className={componentClass}>
      <img src={aboutUsImg} alt="" />
      <p className="kicker">Om os</p>
      <h2>VELKOMMEN TIL XTREME FITNESS</h2>
      <p>
        Xtreme Fitness er stedet, hvor sved, grin og god musik går hånd i hånd.
        Vi lover ikke mirakler - men vi lover, at du bliver stærkere, gladere og
        får ondt i muskler, du ikke vidste, du havde!
      </p>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <p className={styles.cardNumber}>600K+</p>
          <p className={styles.cardText}>ARBEJDSTIMER</p>
        </div>
        <div className={styles.card}>
          <p className={styles.cardNumber}>2560+</p>
          <p className={styles.cardText}>GLADE KUNDER</p>
        </div>
        <div className={styles.card}>
          <p className={styles.cardNumber}>790+</p>
          <p className={styles.cardText}>PROGRAMMER</p>
        </div>
        <div className={styles.card}>
          <p className={styles.cardNumber}>2560+</p>
          <p className={styles.cardText}>SUNDERE KROPPE</p>
        </div>
      </div>
      <Button
        buttonText={buttonText}
        onClick={onClick}
        icon={buttonIcon}
      ></Button>
    </article>
  );
};

export default About;