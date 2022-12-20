import { CardProps } from "../../types/types";
import styles from "./styles.module.css";
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";

const Card = forwardRef(
  (
    { color = "white", children, className, ...props }: CardProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    return (
      <div
        ref={ref}
        className={cn(styles.card, className, {
          [styles.blue]: color === "blue",
        })}
        {...props}
      >
        {children}
      </div>
    );
  }
);

export default Card;
