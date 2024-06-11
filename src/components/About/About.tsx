import styles from "./About.module.scss";

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.logo} />
      <p className={styles.description}>
        {" "}
        Севморпуть Системы - созданная при поддержке Госкорпорации Росатом,
        единая цифровая платформа сервисов, обеспечеивающих безопасность и
        удобство грузовых перевозок по транспортным магистралям Северного
        морского пути
      </p>
    </section>
  );
}

export default About;
