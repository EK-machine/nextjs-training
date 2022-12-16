import { SidebarProps } from "../../types/types";
import Menu from "../Menu/Menu";
import styles from "./styles.module.css";
import cn from "classnames";

const Sidebar: React.FC<SidebarProps> = ({ ...props }): JSX.Element => {
  return (
    <div {...props}>
      <Menu />
    </div>
  );
};

export default Sidebar;
