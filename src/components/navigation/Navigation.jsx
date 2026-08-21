import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Hamburger from "hamburger-react";
import { toast } from "react-toastify";
import logo from "../../assets/icons/logo.png";
import styles from './navigation.module.css'
import { useAuthContext } from "../../context/useAuthContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, logout } = useAuthContext();
  const navigate = useNavigate();

  const closeMenu = () => setIsOpen(false);

  const handleLogout = () => {
    logout();
    closeMenu();
    toast.success("Du er nu logget ud");
    navigate("/");
  };


  return (
    <nav className={styles.navbar}>
      <Link to="/" onClick={closeMenu}>
        <img src={logo} alt="logo" className={styles.logo} />
      </Link>

      <div className={styles["burger-menu"]}>
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={28} color="#fff" />
      </div>

      <ul
        className={
          isOpen ? `${styles["nav-links"]} ${styles.open}` : styles["nav-links"]
        }
      >
        <li>
          <NavLink onClick={closeMenu} to="/services">
            Tjenester
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeMenu} to="/traners">
            Trænere
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeMenu} to="/prices">
            Priser
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeMenu} to="/about">
            Om os
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeMenu} to="/login">
            Log in
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
