import { CardProps } from "../../types/types";
import styles from "./styles.module.css";
import cn from "classnames";

const Card: React.FC<CardProps> = ({
  color = "white",
  children,
  className,
  ...props
}): JSX.Element => {
  return (
    <div
      {...props}
      className={cn(styles.card, className, {
        [styles.blue]: color === "blue",
      })}
    >
      {children}
    </div>
  );
};

export default Card;
