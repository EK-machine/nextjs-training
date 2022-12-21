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
      <div className={styles.sortName} id="sort">
        Сортировка
      </div>
      <button
        id="rating"
        onClick={() => setSort(SortEnum.Rating)}
        className={cn({
          [styles.active]: sort === SortEnum.Rating,
        })}
        aria-selected={sort === SortEnum.Rating}
        aria-labelledby="sort rating"
      >
        <SortIcon className={styles.sortIcon} /> По рейтингу
      </button>
      <button
        id="price"
        onClick={() => setSort(SortEnum.Price)}
        className={cn({
          [styles.active]: sort === SortEnum.Price,
        })}
        aria-selected={sort === SortEnum.Price}
        aria-labelledby="sort price"
      >
        <SortIcon className={styles.sortIcon} /> По цене
      </button>
    </div>
  );
};

export default Sort;
