import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.copyright}>
        <div className={styles.logo} />
        <p className={styles.heading}>&copy;2024 NSWS</p>
      </div>
      <div className={styles.contacts}>
        <p>Контакты</p>
      </div>
    </footer>
  );
}

export default Footer;
