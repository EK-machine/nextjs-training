import { TopCategory, TopicPageComponentProps } from "../../types/types";
import styles from "./styles.module.css";
import cn from "classnames";
import HTag from "../../components/HTag/HTag";
import Tag from "../../components/Tag/Tag";
import Card from "../../components/Card/Card";
import HhData from "../../components/HhData/HhData";

const TopicPageComponent: React.FC<TopicPageComponentProps> = ({
  page,
  products,
  firstCategory,
  ...props
}): JSX.Element => {
  return (
    <div className={styles.wrapper} {...props}>
      <div className={styles.title}>
        <HTag tag="h1">{page.title}</HTag>
        {products && (
          <Tag color="grey" size="m">
            {products.length}
          </Tag>
        )}
        <span>Sort it</span>
      </div>

      <div>
        {products && products.map((p) => <div key={p.title}>{p.title}</div>)}
      </div>

      <div className={styles.hhTitle}>
        <HTag tag="h2">Вакансии - {page.category}</HTag>
        <Tag color="red" size="m">
          hh.ru
        </Tag>
      </div>

      {firstCategory === TopCategory.Courses && <HhData {...page.hh} />}
    </div>
  );
};

export default TopicPageComponent;
