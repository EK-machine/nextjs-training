import { PTagProps } from "../../types/types";
import style from "./PTag.module.css";
import cn from "classnames";

const PTag: React.FC<PTagProps> = ({
  size = "m",
  children,
  ...props
}): JSX.Element => {
  return (
    <p
      className={cn({
        [style.p]: true,
        [style.b]: size === "b",
        [style.m]: size === "m",
        [style.s]: size === "s",
      })}
      {...props}
    >
      {children}
    </p>
  );
};

export default PTag;
