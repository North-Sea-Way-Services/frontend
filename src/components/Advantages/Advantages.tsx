import clsx from "clsx";
import styles from "./Advantages.module.scss";

import ship1 from "../../assets/images/ship-1.png";
import ship2 from "../../assets/images/ship-2.png";
import ship3 from "../../assets/images/ship-3.png";
import ship4 from "../../assets/images/ship-4.png";

function Advantages() {
  return (
    <section className={styles.advantages}>
      <div className={styles.container}>
        <div className={clsx(styles.card, styles.big)}>
          <div className={styles.layout}>
            <p className={styles.text}>
              Протяженность Севморпути практически в два раза меньше, чем
              аналогичный путь через Суэцкий канал (14 тыс. км против 23 тыс.
              км)
            </p>
          </div>
          <div className={styles.image_container}>
            <img className={styles.image} src={ship1} alt="ship" />
          </div>
        </div>
        <div className={clsx(styles.card, styles.small)}>
          <div className={styles.layout}>
            <p className={styles.text}>
              Объем грузоперевозок за 2023 год составил 36.2 млн тонн
            </p>
          </div>
          <div className={styles.image_container}>
            <img className={styles.image} src={ship2} alt="ship" />
          </div>
        </div>
        <div className={clsx(styles.card, styles.big)}>
          <div className={styles.layout}>
            <p className={styles.text}>
              К 2030 году объем грузоперевозок вырастет до 160 млн тонн
            </p>
          </div>
          <div className={styles.image_container}>
            <img className={styles.image} src={ship4} alt="ship" />
          </div>
        </div>
        <div className={clsx(styles.card, styles.small)}>
          <div className={styles.layout}>
            <p className={styles.text}>
              В развитие Севморпути планируется инвестировать 735 млрд. рублей
            </p>
          </div>
          <div className={styles.image_container}>
            <img className={styles.image} src={ship3} alt="ship" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advantages;
