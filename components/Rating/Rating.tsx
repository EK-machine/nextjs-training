import { ForwardedRef, forwardRef, useRef } from "react";
import { useEffect, useState, KeyboardEvent } from "react";
import styles from "./styles.module.css";
import { RatingProps } from "../../types/types";
import StarIcon from "../../public/svgs/star.svg";
import cn from "classnames";

const Rating = forwardRef<HTMLDivElement, RatingProps>(
  (
    { error, isEditable = false, rating, tabIndex, setRating, ...props },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
      new Array(5).fill(<></>)
    );
    const ratingArrayRef = useRef<HTMLSpanElement[]>([]);

    const computeFocus = (r: number, i: number): number => {
      if (!isEditable) {
        return -1;
      }
      if (!r && i === 0) {
        return tabIndex ?? 0;
      }
      if (rating === i + 1) {
        return tabIndex ?? 0;
      }
      return -1;
    };

    const constructRating = (currentRating: number) => {
      const updatedArr = ratingArray.map((e: JSX.Element, i: number) => {
        return (
          <span
            onMouseEnter={() => changeDisplay(i + 1)}
            onMouseLeave={() => changeDisplay(rating as number)}
            onClick={() => onclick(i + 1)}
            className={cn({
              [styles.star]: true,
              [styles.filled]: i < currentRating,
              [styles.editable]: isEditable,
            })}
            onKeyDown={handleKey}
            tabIndex={computeFocus(rating as number, i)}
            ref={(e) => ratingArrayRef.current?.push(e as HTMLSpanElement)}
            role={isEditable ? "slider" : ""}
            aria-valuenow={rating}
            aria-valuemax={5}
            aria-valuemin={1}
            aria-label={isEditable ? "Укажите рейтинг" : `рейтинг ${rating}`}
            aria-invalid={error ? true : false}
          >
            <StarIcon />
          </span>
        );
      });
      setRatingArray(updatedArr);
    };

    const handleKey = (e: KeyboardEvent<HTMLSpanElement>) => {
      if (!isEditable || !setRating) {
        return;
      }
      if (e.code === "ArrowRight" || e.code === "ArrowUp") {
        if (!rating) {
          setRating(1);
        } else {
          setRating(rating < 5 ? rating + 1 : 5);
          e.preventDefault();
        }
      }
      if (e.code === "ArrowLeft" || e.code === "ArrowDown") {
        e.preventDefault();
        setRating((rating as number) > 1 ? (rating as number) - 1 : 1);
      }
    };

    const onclick = (i: number) => {
      if (!isEditable || !setRating) {
        return;
      }
      setRating(i);
    };

    const changeDisplay = (i: number) => {
      if (!isEditable) {
        return;
      }
      constructRating(i);
    };

    useEffect(() => {
      constructRating(rating as number);
    }, [rating, tabIndex]);

    return (
      <div
        className={cn(styles.wrapper, {
          [styles.error]: error,
        })}
        ref={ref}
        {...props}
      >
        {ratingArray.map((r, i) => (
          <span key={i}>{r}</span>
        ))}
        {error && (
          <span role="alert" className={styles.errorMessage}>
            {error.message}
          </span>
        )}
      </div>
    );
  }
);

export default Rating;
