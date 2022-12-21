import { ForwardedRef, forwardRef } from "react";
import { InputProps } from "../../types/types";
import styles from "./styles.module.css";
import cn from "classnames";

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, error, ...props },
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <div className={styles.wrapper}>
        <input
          ref={ref}
          className={cn(className, styles.input, {
            [styles.error]: error,
          })}
          {...props}
        />
        {error && (
          <span role="alert" className={styles.errorMessage}>
            {error.message}
          </span>
        )}
      </div>
    );
  }
);

export default Input;
