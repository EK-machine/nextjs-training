import { TextAreaProps } from "../../types/types";
import styles from "./styles.module.css";
import cn from "classnames";

const TextArea: React.FC<TextAreaProps> = ({
  className,
  ...props
}): JSX.Element => {
  return <textarea className={cn(className, styles.textarea)} {...props} />;
};

export default TextArea;
