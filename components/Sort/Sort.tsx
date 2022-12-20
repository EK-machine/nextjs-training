import { SortEnum, SortProps } from "../../types/types";
import SortIcon from "../../public/svgs/sort.svg";
import styles from "./styles.module.css";
import cn from "classnames";

const Sort: React.FC<SortProps> = ({
  sort,
  setSort,
  className,
  ...props
}): JSX.Element => {
  return (
    <div className={cn(styles.sort, className)} {...props}>
      <span
        onClick={() => setSort(SortEnum.Rating)}
        className={cn({
          [styles.active]: sort === SortEnum.Rating,
        })}
      >
        <SortIcon className={styles.sortIcon} /> По рейтингу
      </span>
      <span
        onClick={() => setSort(SortEnum.Price)}
        className={cn({
          [styles.active]: sort === SortEnum.Price,
        })}
      >
        <SortIcon className={styles.sortIcon} /> По цене
      </span>
    </div>
  );
};

export default Sort;
