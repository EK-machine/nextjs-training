import { AdvantagesProps } from "../../types/types";
import styles from "./styles.module.css";
import CheckIcon from "../../public/svgs/check.svg";

const Advantages: React.FC<AdvantagesProps> = ({ advantages }): JSX.Element => {
  return (
    <>
      {advantages.map((a) => (
        <div key={a.title} className={styles.advantage}>
          <CheckIcon />
          <div className={styles.title}>{a.title}</div>
          <hr className={styles.vline} />
          <div>{a.description}</div>
        </div>
      ))}
    </>
  );
};

export default Advantages;
