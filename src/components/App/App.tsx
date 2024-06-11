import styles from "./App.module.scss";

// Components
import Main from "../Main/Main.tsx";
import Footer from "../Footer/Footer.tsx";

function App() {
  return (
    <div className={styles.app}>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
