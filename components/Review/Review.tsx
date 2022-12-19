import { ReviewProps } from "../../types/types";
import styles from "./styles.module.css";
import cn from "classnames";
import UserIcon from "../../public/svgs/user.svg";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import Rating from "../Rating/Rating";

const Review: React.FC<ReviewProps> = ({
  review,
  className,
  ...props
}): JSX.Element => {
  const { name, title, description, createdAt, rating } = review;
  return (
    <div {...props} className={cn(styles.review, className)}>
      <UserIcon className={styles.user} />
      <div className={styles.top}>
        <span className={styles.name}>{name}: </span>
        <span>{title}</span>
      </div>
      <div className={styles.date}>
        {format(new Date(createdAt), "dd MMMM yyyy", { locale: ru })}
      </div>
      <div className={styles.rating}>
        <Rating rating={rating} />
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default Review;
