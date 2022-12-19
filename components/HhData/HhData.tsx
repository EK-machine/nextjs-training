import { HhDataProps } from "../../types/types";
import styles from "./styles.module.css";
import cn from "classnames";
import Card from "../Card/Card";
import RoundStarIcon from "../../public/svgs/roundStar.svg";
import { convertToRur } from "../../helpers/helpers";

const HhData: React.FC<HhDataProps> = ({
  count,
  juniorSalary,
  middleSalary,
  seniorSalary,
}): JSX.Element => {
  return (
    <div className={styles.hh}>
      <Card className={styles.count}>
        <div className={styles.title}>Всего вакансий</div>
        <div className={styles.countValue}>{count}</div>
      </Card>

      <Card className={styles.salary}>
        <div>
          <div className={styles.title}>Начальный</div>
          <div className={styles.salaryValue}>{convertToRur(juniorSalary)}</div>
          <div className={styles.rate}>
            <RoundStarIcon className={styles.filled} />
            <RoundStarIcon className={styles.filled} />
            <RoundStarIcon />
          </div>
        </div>
        <div>
          <div className={styles.title}>Средьний</div>
          <div className={styles.salaryValue}>{convertToRur(middleSalary)}</div>
          <div className={styles.rate}>
            <RoundStarIcon className={styles.filled} />
            <RoundStarIcon />
            <RoundStarIcon />
          </div>
        </div>
        <div>
          <div className={styles.title}>Профессионал</div>
          <div className={styles.salaryValue}>{convertToRur(seniorSalary)}</div>
          <div className={styles.rate}>
            <RoundStarIcon className={styles.filled} />
            <RoundStarIcon className={styles.filled} />
            <RoundStarIcon className={styles.filled} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HhData;
