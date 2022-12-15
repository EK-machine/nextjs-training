import { SidebarProps } from "../../types/types";
import styles from "./styles.module.css";
import cn from "classnames";

const Sidebar: React.FC<SidebarProps> = ({ ...props }): JSX.Element => {
  return <div {...props}>sidebar</div>;
};

export default Sidebar;
