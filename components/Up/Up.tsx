import styles from "./styles.module.css";
import { motion, useAnimation } from "framer-motion";
import { useScrollY } from "../../hooks/hooks";
import { useEffect } from "react";
import ButtonIcon from "../ButtonIcon/ButtonIcon";

const Up: React.FC = (): JSX.Element => {
  const controls = useAnimation();
  const yPos = useScrollY();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    controls.start({ opacity: yPos / document.body.scrollHeight });
  }, [yPos, controls]);

  return (
    <motion.div
      animate={controls}
      className={styles.up}
      initial={{ opacity: 0 }}
    >
      <ButtonIcon onClick={scrollToTop} appearance="primary" icon="up" />
    </motion.div>
  );
};

export default Up;
