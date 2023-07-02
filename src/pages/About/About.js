import styles from "./About.module.scss";
import Title from "components/Title/Title";

function About() {
 
  return <div className={styles.main}>
    <Title text={`A propos`} />
    </div>;
}

export default About;
