import styles from "./Main.module.scss";

import Title from "../Title/Title.tsx";
import About from "../About/About.tsx";
import Advantages from "../Advantages/Advantages.tsx";
import Map from "../Map/Map.tsx";

function Main() {
  return (
    <main className={styles.main}>
      <Title />
      <About />
      <Advantages />
      <Map />
    </main>
  );
}

export default Main;
