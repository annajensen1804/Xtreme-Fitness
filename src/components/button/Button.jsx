import styles from './button.module.css'

const Button = ({
  buttonText,
  type = "button",
  onClick,
  variant = "default",
  icon
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant] || ""}`}
      onClick={onClick}
      type={type}
    >
      <span>{buttonText}</span>
      {icon && <img src={icon} alt="" className={styles.icon} />}
    </button>
  );
};

export default Button;