import { VerticalFlipWrapper } from "../../../components/VerticalFlipWrapper";
import styles from "./styles.module.css";

export default function VerticalFlipWrapperDemo() {
  return (
    <div className={styles.layout}>
      <h1 className={styles.heading}>
        <code>VerticalFlipWrapper</code>
      </h1>

      <div className={styles.message}>
        <p>Start scrolling</p>
      </div>

      <div className={styles.container}>
        <VerticalFlipWrapper className={styles["item-wrapper"]}>
          <div className={styles.item} />
        </VerticalFlipWrapper>
      </div>
    </div>
  );
}
