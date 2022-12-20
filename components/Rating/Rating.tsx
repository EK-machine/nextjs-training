import { ForwardedRef, forwardRef } from "react";
import { useEffect, useState, KeyboardEvent } from "react";
import styles from "./styles.module.css";
import { RatingProps } from "../../types/types";
import StarIcon from "../../public/svgs/star.svg";
import cn from "classnames";

const Rating = forwardRef<HTMLDivElement, RatingProps>(
  (
    { error, isEditable = false, rating, setRating, ...props },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
      new Array(5).fill(<></>)
    );

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
          >
            <StarIcon
              tabIndex={isEditable ? 0 : -1}
              onKeyDown={(e: KeyboardEvent<SVGElement>) =>
                isEditable && handleSpace(i + 1, e)
              }
            />
          </span>
        );
      });
      setRatingArray(updatedArr);
    };

    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
      if (e.code !== "Space" || !setRating) {
        return;
      }
      setRating(i);
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
    }, [rating]);

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
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);

export default Rating;
