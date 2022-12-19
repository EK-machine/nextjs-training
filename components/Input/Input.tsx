import { InputProps } from "../../types/types";
import styles from "./styles.module.css";
import cn from "classnames";

const Input: React.FC<InputProps> = ({ className, ...props }): JSX.Element => {
  return <input className={cn(className, styles.input)} {...props} />;
};

export default Input;
