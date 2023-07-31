import { LinearlyScaledWrapper } from "../../../components/LinearlyScaledWrapper";
import styles from "./styles.module.css";

export default function LinearlyScaledWrapperDemo() {
  return (
    <div className={styles.layout}>
      <h1 className={styles.heading}>
        <code>LinearlyScaledWrapper</code>
      </h1>

      <LinearlyScaledWrapper className={styles["item-wrapper"]}>
        <div className={styles.item} />
      </LinearlyScaledWrapper>
    </div>
  );
}
