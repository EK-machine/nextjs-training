import { HeaderProps } from "../../types/types";
import styles from "./styles.module.css";
import cn from "classnames";

const Header: React.FC<HeaderProps> = ({ ...props }): JSX.Element => {
  return <header {...props}>Header</header>;
};

export default Header;
