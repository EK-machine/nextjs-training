import { SidebarProps } from "../../types/types";
import Menu from "../Menu/Menu";
import LogoIcon from "../../public/svgs/logo.svg";
import styles from "./styles.module.css";
import cn from "classnames";

const Sidebar: React.FC<SidebarProps> = ({
  className,
  ...props
}): JSX.Element => {
  return (
    <div
      className={cn(className, {
        [styles.sidebar]: true,
      })}
      {...props}
    >
      <LogoIcon
        className={cn({
          [styles.logo]: true,
        })}
      />
      <div>search here</div>
      <Menu />
    </div>
  );
};

export default Sidebar;
