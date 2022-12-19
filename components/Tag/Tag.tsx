import { TagProps } from "../../types/types";
import style from "./Tag.module.css";
import cn from "classnames";

const Tag: React.FC<TagProps> = ({
  size,
  children,
  color = "ghost",
  href,
  className,
  ...props
}): JSX.Element => {
  return (
    <div
      className={cn(className, {
        [style.tag]: true,
        [style.m]: size === "m",
        [style.s]: size === "s",
        [style.ghost]: color === "ghost",
        [style.red]: color === "red",
        [style.gray]: color === "gray",
        [style.green]: color === "green",
        [style.primary]: color === "primary",
      })}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};

export default Tag;
