import styles from "./footer.module.css"
import logo from "../../assets/icons/logo.png"
import fb from "../../assets/icons/footer_fb_icon.png";
import twit from "../../assets/icons/footer_twit_icon.png";
import insta from "../../assets/icons/footer_insta_icon.png";


const Footer = () => {
    return (
      <footer className={styles.footerContainer}>
        <img src={logo} alt="logo" />
        <p className={styles.gray}>
          Hos os handler træning om glæde, kvalitet og resultater
        </p>
        <div className={styles.some}>
          <img src={fb} alt="facebook" />
          <img src={twit} alt="twitter" />
          <img src={insta} alt="instagram" />
        </div>
        <h3>Kontakt os</h3>
        <p className={styles.white}>Adresse:</p>
        <p className={styles.gray}>Nørregade 42, 9000 Aalborg</p>
        <p className={styles.white}>Email:</p>
        <p className={styles.gray}>info@xtremefitness.dk</p>
        <p className={styles.white}>Telefon:</p>
        <p className={styles.gray}>+ 45 99751642</p>
        <p className={styles.grayCopyright}>
          Copyright 2025 xtremefitness.dk - All Rights Reserved
        </p>
      </footer>
    );
}

export default Footer;