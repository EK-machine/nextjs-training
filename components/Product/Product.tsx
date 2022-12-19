import { ProductProps } from "../../types/types";
import styles from "./styles.module.css";
import Card from "../Card/Card";
import Rating from "../Rating/Rating";
import Tag from "../Tag/Tag";
import Button from "../Button/Button";
import Divider from "../Divider/Divider";
import { convertToRur, declOfNum } from "../../helpers/helpers";
import Image from "next/image";
import cn from "classnames";
import { useState } from "react";
import Review from "../Review/Review";
import Form from "../Form/Form";

const Product: React.FC<ProductProps> = ({ product }): JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  return (
    <>
      <Card
        color="white"
        className={cn(styles.product, {
          [styles.productOpened]: isOpened,
        })}
      >
        <div className={styles.logo}>
          <Image
            width={70}
            height={70}
            src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
            alt={product.title}
          />
        </div>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.price}>
          {convertToRur(product.price)}
          {product.oldPrice && (
            <Tag className={styles.gTag} size="s" color="green">
              {convertToRur(product.price - product.oldPrice)}
            </Tag>
          )}
        </div>
        <div className={styles.credit}>
          {convertToRur(product.credit)}/
          <span className={styles.month}>мес</span>
        </div>
        <div className={styles.rating}>
          <Rating rating={product.reviewAvg ?? product.initialRating} />
        </div>
        <div className={styles.tags}>
          {product.categories.map((c) => (
            <Tag className={styles.category} key={c} size="m" color="ghost">
              {c}
            </Tag>
          ))}
        </div>
        <div className={styles.priceTitle}>цена</div>
        <div className={styles.creditTitle}>в кредит</div>
        <div className={styles.rateTitle}>
          {product.reviewCount}
          {declOfNum(product.reviewCount)}
        </div>
        <Divider className={styles.hr} />
        <div className={styles.description}>{product.description}</div>
        <div className={styles.feature}>
          {product.characteristics.map((c) => (
            <div className={styles.c} key={c.name}>
              <span className={styles.cName}>{c.name}</span>
              <span className={styles.cDots}></span>
              <span className={styles.cValue}>{c.value}</span>
            </div>
          ))}
        </div>
        <div className={styles.advBlock}>
          {product.advantages && (
            <div className={styles.advantages}>
              <div className={styles.advTitle}>Преимущества</div>
              <div>{product.advantages}</div>
            </div>
          )}
          {product.disadvantages && (
            <div className={styles.disadvantages}>
              <div className={styles.advTitle}>Недостатки</div>
              <div>{product.disadvantages}</div>
            </div>
          )}
        </div>
        <Divider className={styles.hr2} />
        <div className={styles.actions}>
          <Button appearance="primary">Узнать подробнее</Button>
          <Button
            onClick={() => setIsOpened(!isOpened)}
            className={styles.secBtn}
            appearance="ghost"
            arrow={isOpened ? "down" : "right"}
          >
            Читать отзывы
          </Button>
        </div>
      </Card>
      <Card
        className={cn(styles.reviews, {
          [styles.opened]: isOpened,
          [styles.closed]: !isOpened,
        })}
        color="blue"
      >
        {product.reviews.map((r) => (
          <Review key={r._id} review={r} />
        ))}
        <Divider />
        <Form productId={product._id} />
      </Card>
    </>
  );
};

export default Product;
