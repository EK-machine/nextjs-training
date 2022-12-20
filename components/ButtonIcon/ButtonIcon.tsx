import { ButtonIconProps, icons } from "../../types/types";
import styles from "./styles.module.css";
import cn from "classnames";

const ButtonIcon: React.FC<ButtonIconProps> = ({
  appearance,
  icon,
  className,
  ...props
}): JSX.Element => {
  const IconComponent = icons[icon];

  return (
    <button
      {...props}
      onClick={props.onClick}
      className={cn(className, {
        [styles.button]: true,
        [styles.primary]: appearance === "primary",
        [styles.white]: appearance === "white",
      })}
    >
      <IconComponent />
    </button>
  );
};

export default ButtonIcon;
