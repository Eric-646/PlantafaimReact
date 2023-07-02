import styles from "./Header.module.scss";
import { Link} from "react-router-dom";

function Header() {
  return (
    <header className={styles.main}>
      <div className={styles.container}>
      <div className={styles.logo}>
        <img src="/logo192.png" alt="logo" />
      </div>

      <nav className={styles.nav}>
        <ul>
          <li className={styles.link}><Link to ="/">Home</Link></li>
          <li className={styles.link}><Link to ="/about">About</Link></li>
        </ul>
      </nav>
      </div>
    </header>
  );
}

export default Header;
