import { ForwardedRef, forwardRef } from "react";
import { TextAreaProps } from "../../types/types";
import styles from "./styles.module.css";
import cn from "classnames";

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    { className, error, ...props },
    ref: ForwardedRef<HTMLTextAreaElement>
  ): JSX.Element => {
    return (
      <div className={styles.wrapper}>
        <textarea
          ref={ref}
          className={cn(className, styles.textarea, {
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

export default TextArea;
