import { FooterProps } from "../../types/types";
import styles from "./styles.module.css";
import cn from "classnames";
import { format } from "date-fns";

const Footer: React.FC<FooterProps> = ({
  className,
  ...props
}): JSX.Element => {
  return (
    <footer className={cn(className, styles.wrapper)} {...props}>
      <div className={styles.bla}>
        EK-Machine © 2022 - {format(new Date(), "yyyy")} Все права защищены
      </div>
      <a className={styles.bla} href="#" target="_blank">
        Пользовательское соглашение
      </a>
      <a className={styles.bla} href="#" target="_blank">
        Политика конфиденциальности
      </a>
    </footer>
  );
};

export default Footer;
