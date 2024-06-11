import styles from "./Main.module.scss";

import Title from "../Title/Title.tsx";
import About from "../About/About.tsx";
import Advantages from "../Advantages/Advantages.tsx";

function Main() {
  return (
    <main className={styles.main}>
      <Title />
      <About />
      <Advantages />
    </main>
  );
}

export default Main;
