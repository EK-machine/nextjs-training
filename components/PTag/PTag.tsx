import { PTagProps } from "../../types/types";
import styles from "./styles.module.css";
import cn from "classnames";

const PTag: React.FC<PTagProps> = ({
  size = "m",
  children,
  ...props
}): JSX.Element => {
  return (
    <p
      className={cn({
        [styles.p]: true,
        [styles.b]: size === "b",
        [styles.m]: size === "m",
        [styles.s]: size === "s",
      })}
      {...props}
    >
      {children}
    </p>
  );
};

export default PTag;
