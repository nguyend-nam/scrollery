import { StackedWrapper } from "../../../components/StackedWrapper";
import styles from "./styles.module.css";

export default function StackedWrapperDemo() {
  return (
    <div className={styles.layout}>
      <h1 className={styles.heading}>
        <code>StackedWrapper</code>
      </h1>

      <StackedWrapper
        className={styles["item-wrapper"]}
        itemStyle={{ height: 300 }}
      >
        <div className={`${styles["item"]} ${styles["item-1"]}`} />
        <div className={`${styles["item"]} ${styles["item-2"]}`} />
        <div className={`${styles["item"]} ${styles["item-3"]}`} />
        <div className={`${styles["item"]} ${styles["item-4"]}`} />
      </StackedWrapper>
    </div>
  );
}
