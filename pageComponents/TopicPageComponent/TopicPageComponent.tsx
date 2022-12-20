import { useEffect, useReducer } from "react";
import { sortReducer } from "./sort.reducer";
import {
  SortEnum,
  TopCategory,
  TopicPageComponentProps,
} from "../../types/types";
import styles from "./styles.module.css";
import HTag from "../../components/HTag/HTag";
import Tag from "../../components/Tag/Tag";
import HhData from "../../components/HhData/HhData";
import Advantages from "../Advantages/Advantages";
import Sort from "../../components/Sort/Sort";
import Product from "../../components/Product/Product";

const TopicPageComponent: React.FC<TopicPageComponentProps> = ({
  page,
  products,
  firstCategory,
  ...props
}): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(
    sortReducer,
    {
      products,
      sort: SortEnum.Rating,
    }
  );

  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  useEffect(() => {
    dispatchSort({ type: "reset", initialState: products });
  }, [products]);

  return (
    <div className={styles.wrapper} {...props}>
      <div className={styles.title}>
        <HTag tag="h1">{page.title}</HTag>
        {products && (
          <Tag color="gray" size="m">
            {products.length}
          </Tag>
        )}
        <Sort setSort={setSort} sort={sort} />
      </div>

      <div>
        {sortedProducts &&
          sortedProducts.map((p) => (
            <Product layout product={p} key={p.title} />
          ))}
      </div>

      <div className={styles.hhTitle}>
        <HTag tag="h2">Вакансии - {page.category}</HTag>
        <Tag color="red" size="m">
          hh.ru
        </Tag>
      </div>

      {firstCategory === TopCategory.Courses && page.hh && (
        <HhData {...page.hh} />
      )}
      {page.advantages && page.advantages.length > 0 && (
        <>
          <HTag tag="h2">Преимущества</HTag>
          <Advantages advantages={page.advantages} />
        </>
      )}
      {page.seoText && (
        <div
          className={styles.seo}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
      )}
      <HTag tag="h2">Получаемые навыки</HTag>
      <div className={styles.skills}>
        {page.tags.map((t) => (
          <Tag size="m" color="primary" key={t}>
            {t}
          </Tag>
        ))}
      </div>
    </div>
  );
};

export default TopicPageComponent;
