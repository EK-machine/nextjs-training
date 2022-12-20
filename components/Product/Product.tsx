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
import { ForwardedRef, forwardRef, useRef, useState } from "react";
import Review from "../Review/Review";
import Form from "../Form/Form";
import { motion } from "framer-motion";

const Product = motion(
  forwardRef(
    (
      { product, className, ...props }: ProductProps,
      ref: ForwardedRef<HTMLDivElement>
    ): JSX.Element => {
      const [isOpened, setIsOpened] = useState<boolean>(false);
      const reviwRef = useRef<HTMLDivElement>(null);

      const variants = {
        visible: {
          opacity: 1,
          height: "auto",
        },
        hidden: {
          opacity: 0,
          height: 0,
        },
      };

      const scrollToReview = () => {
        setIsOpened(true);
        reviwRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      };

      return (
        <div ref={ref} {...props}>
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
              <a href="#ref" onClick={scrollToReview}>
                {product.reviewCount}
                {declOfNum(product.reviewCount)}
              </a>
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
          <motion.div
            animate={isOpened ? "visible" : "hidden"}
            variants={variants}
            initial="hidden"
          >
            <Card className={styles.reviews} color="blue" ref={reviwRef}>
              {product.reviews.map((r) => (
                <Review key={r._id} review={r} />
              ))}
              <Divider />
              <Form productId={product._id} />
            </Card>
          </motion.div>
        </div>
      );
    }
  )
);

export default Product;
