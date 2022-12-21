import { FormInterface, FormProps, ReviewSendResp } from "../../types/types";
import styles from "./styles.module.css";
import cn from "classnames";
import Input from "../Input/Input";
import Rating from "../Rating/Rating";
import TextArea from "../TextArea/TextArea";
import Button from "../Button/Button";
import CloseIcon from "../../public/svgs/close.svg";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { API } from "../../helpers/api";
import { useState } from "react";

const Form: React.FC<FormProps> = ({
  productId,
  isOpened,
  className,
  ...props
}): JSX.Element => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm<FormInterface>({
    defaultValues: {
      name: "",
      title: "",
      description: "",
      rating: null,
    },
  });

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<string>("");

  const onSubmit = async (formData: FormInterface) => {
    try {
      const { data } = await axios.post<ReviewSendResp>(API.review.createDemp, {
        ...formData,
        productId,
      });

      if (data.message) {
        setIsSuccess(true);
        reset();
      } else {
        setIsError("Something went wrong");
      }
    } catch (e) {
      setIsError((e as { message: string }).message);
    }
  };

  return (
    <form {...props} onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.form, className)}>
        <Controller
          control={control}
          name="name"
          rules={{
            required: "Name is required",
          }}
          render={({ field }) => (
            <Input
              ref={field.ref}
              value={field.value}
              onChange={field.onChange}
              placeholder="Имя"
              error={errors.name}
              tabIndex={isOpened ? 0 : -1}
              aria-invalid={errors.name ? true : false}
            />
          )}
        />

        <Controller
          control={control}
          name="title"
          rules={{
            required: "Title is required",
          }}
          render={({ field }) => (
            <Input
              ref={field.ref}
              value={field.value}
              onChange={field.onChange}
              placeholder="Заголовок"
              className={styles.title}
              error={errors.title}
              tabIndex={isOpened ? 0 : -1}
              aria-invalid={errors.title ? true : false}
            />
          )}
        />

        <div className={styles.rating}>
          <span>Оценка: </span>
          <Controller
            control={control}
            name="rating"
            rules={{
              required: { value: true, message: "Vote from 1 to 5" },
            }}
            render={({ field }) => (
              <Rating
                ref={field.ref}
                setRating={field.onChange}
                isEditable
                rating={field.value}
                error={errors.rating}
                tabIndex={isOpened ? 0 : -1}
              />
            )}
          />
        </div>

        <Controller
          control={control}
          name="description"
          rules={{
            required: "Description is required",
          }}
          render={({ field }) => (
            <TextArea
              ref={field.ref}
              value={field.value}
              onChange={field.onChange}
              placeholder="Текст отзыва"
              className={styles.description}
              error={errors.description}
              tabIndex={isOpened ? 0 : -1}
              aria-label="Текст отзыва"
              aria-invalid={errors.description ? true : false}
            />
          )}
        />

        <div className={styles.submit}>
          <Button
            onClick={() => clearErrors()}
            tabIndex={isOpened ? 0 : -1}
            appearance="primary"
          >
            Отправить
          </Button>
          <span className={styles.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </span>
        </div>
      </div>
      {isSuccess && (
        <div className={styles.success} role="alert">
          <button
            aria-label="Закрыть оповещение"
            className={styles.close}
            onClick={() => setIsSuccess(false)}
          >
            <CloseIcon />
          </button>
          <div className={styles.successTitle}>Ваш отзыв отправлен</div>
          <div>Спасибо, Ваш отзыв будет опубликован после проверки</div>
        </div>
      )}
      {isError && (
        <div className={styles.error} role="alert">
          <button
            aria-label="Закрыть оповещение"
            className={styles.close}
            onClick={() => setIsError("")}
          >
            <CloseIcon />
          </button>
          <div className={styles.isError}>{isError}</div>
        </div>
      )}
    </form>
  );
};

export default Form;
