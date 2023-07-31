import { ParallaxWrapper } from "../../../components/ParallaxWrapper";
import styles from "./styles.module.css";

export default function ParallaxWrapperDemo() {
  return (
    <div className={styles.layout}>
      <h1 className={styles.heading}>
        <code>ParallaxWrapper</code>
      </h1>

      <div className={styles.message}>
        <p>Start scrolling</p>
      </div>

      <div className={styles.container}>
        <ParallaxWrapper layer={-5} className={styles["item-wrapper"]}>
          <div className={`${styles.item} ${styles["item-1"]}`} />
        </ParallaxWrapper>

        <ParallaxWrapper layer={0} className={styles["item-wrapper"]}>
          <div className={`${styles.item} ${styles["item-2"]}`} />
        </ParallaxWrapper>

        <ParallaxWrapper layer={5} className={styles["item-wrapper"]}>
          <div className={`${styles.item} ${styles["item-3"]}`} />
        </ParallaxWrapper>
      </div>
    </div>
  );
}
