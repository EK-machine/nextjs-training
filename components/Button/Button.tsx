import { ButtonProps } from "../../types/types";
import styles from "./styles.module.css";
import cn from "classnames";
import ArrowIcon from "../../public/svgs/Arrow.svg";

const Button: React.FC<ButtonProps> = ({
  appearance,
  children,
  className,
  arrow = "none",
  ...props
}): JSX.Element => {
  return (
    <button
      onClick={props.onClick}
      className={cn(className, {
        [styles.button]: true,
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === "down",
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};

export default Button;
