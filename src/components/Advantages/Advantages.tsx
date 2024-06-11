import styles from "./Advantages.module.scss";

function Advantages() {
  return (
    <section className={styles.advantages}>
      {/* <h3 className={styles.heading}>Почему Севморпуть?</h3> */}
      <div className={styles.ship_1} />
      <div className={styles.textcard_1}>
        <p className={styles.text}>
          Протяженность Севморпути практически в два раза меньше, чем
          аналогичный путь через Суэцкий канал (14 тыс. км против 23 тыс. км)
        </p>
      </div>
      <div className={styles.textcard_2}>
        <p className={styles.text}>
          Объем грузоперевозок за 2023 год составил 36.2 млн тонн
        </p>
      </div>
      <div className={styles.textcard_2}>
        <p className={styles.text}>
          К 2030 году объем грузоперевозок вырастет до 160 млн тонн
        </p>
      </div>
      <div className={styles.ship_2} />
      <div className={styles.ship_3} />
      <button className={styles.button} type="button">
        Проложить маршрут
      </button>
    </section>
  );
}

export default Advantages;
