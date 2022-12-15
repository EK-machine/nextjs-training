import { ButtonProps } from "../../types/types";
import style from "./Button.module.css";
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
        [style.button]: true,
        [style.primary]: appearance === "primary",
        [style.ghost]: appearance === "ghost",
      })}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(style.arrow, {
            [style.down]: arrow === "down",
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};

export default Button;
