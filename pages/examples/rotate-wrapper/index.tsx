import { RotateWrapper } from "../../../components/RotateWrapper";
import styles from "./styles.module.css";

export default function RotateWrapperDemo() {
  return (
    <div className={styles.layout}>
      <h1 className={styles.heading}>
        <code>RotateWrapper</code>
      </h1>

      <RotateWrapper
        className={styles["item-wrapper"]}
        bottomLayer={<span>Animate on Scroll</span>}
        bottomLayerClassName={styles["bottom-layer"]}
        itemStyle={{ height: 200, width: 200 }}
      >
        <div className={`${styles["item"]} ${styles["item-1"]}`} />
        <div className={`${styles["item"]} ${styles["item-2"]}`} />
        <div className={`${styles["item"]} ${styles["item-3"]}`} />
        <div className={`${styles["item"]} ${styles["item-4"]}`} />
      </RotateWrapper>
    </div>
  );
}
