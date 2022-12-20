import { HeaderProps } from "../../types/types";
import styles from "./styles.module.css";
import cn from "classnames";
import LogoIcon from "../../public/svgs/logo.svg";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Header: React.FC<HeaderProps> = ({
  className,
  ...props
}): JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const router = useRouter();
  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20,
      },
    },
    closed: {
      opacity: 0,
      x: "100%",
    },
  };
  useEffect(() => {
    setIsOpened(false);
  }, [router]);
  return (
    <header className={cn(className, styles.header)} {...props}>
      <LogoIcon />
      <ButtonIcon
        appearance="white"
        icon="menu"
        onClick={() => setIsOpened(true)}
      />
      <motion.div
        variants={variants}
        initial={"closed"}
        animate={isOpened ? "opened" : "closed"}
        className={styles.mobileMenu}
      >
        <Sidebar />
        <ButtonIcon
          className={styles.menuClose}
          appearance="white"
          icon="close"
          onClick={() => setIsOpened(false)}
        />
      </motion.div>
    </header>
  );
};

export default Header;
