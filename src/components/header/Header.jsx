import { useLocation } from "react-router-dom";
import styles from "./header.module.css";
import homeHeaderImg from "../../assets/headers/mainHeader.jpg";
import aboutHeaderImg from "../../assets/headers/aboutHeader.png";
import employeesHeaderImg from "../../assets/headers/employeesHeader.jpg";
import exerciseDetailsHeaderImg from "../../assets/headers/exerciseDetailsHeader.png";
import loginHeaderImg from "../../assets/headers/loginHeader.png";
import myPageHeaderImg from "../../assets/headers/myPageHeader.png";

const IMAGES_MAP = {
    "/": homeHeaderImg,
    "/about": aboutHeaderImg,
  };

const Header = ({ title, leadText }) => {

    const location = useLocation();
    const currentBg = IMAGES_MAP[location.pathname];

  return (
    <header
      className={styles.headerContainer}
      style={{ backgroundImage: `url(${currentBg})` }}
    >
      <div className={styles.headerContent}>
        {title && <h1 className={styles.title}>{title}</h1>}
        {leadText && <p className={styles.leadText}>{leadText}</p>}
      </div>
    </header>
  );
};

export default Header;
