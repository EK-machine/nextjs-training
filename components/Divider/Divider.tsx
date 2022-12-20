import { DividerProps } from "../../types/types";
import styles from "./styles.module.css";
import cn from "classnames";

const Divider: React.FC<DividerProps> = ({
  className,
  ...props
}): JSX.Element => {
  return <hr {...props} className={cn(className, styles.hr)} />;
};

export default Divider;
