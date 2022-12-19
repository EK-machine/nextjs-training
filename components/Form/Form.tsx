import { FormProps } from "../../types/types";
import styles from "./styles.module.css";
import cn from "classnames";
import Input from "../Input/Input";
import Rating from "../Rating/Rating";
import TextArea from "../TextArea/Input";
import Button from "../Button/Button";
import CloseIcon from "../../public/svgs/close.svg";

const Form: React.FC<FormProps> = ({
  productId,
  className,
  ...props
}): JSX.Element => {
  return (
    <>
      <form {...props} className={cn(styles.form, className)}>
        <Input placeholder="Имя" />
        <Input placeholder="Заголовок" className={styles.title} />
        <div className={styles.rating}>
          <span>Оценка: </span>
          <Rating rating={0} />
        </div>
        <TextArea placeholder="Текст отзыва" className={styles.description} />
        <div className={styles.submit}>
          <Button appearance="primary">Отправить</Button>
          <span className={styles.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </span>
        </div>
      </form>
      <div className={styles.success}>
        <CloseIcon className={styles.close} />
        <div className={styles.successTitle}>Ваш отзыв отправлен</div>
        <div>Спасибо, Ваш отзыв будет опубликован после проверки</div>
      </div>
    </>
  );
};

export default Form;
