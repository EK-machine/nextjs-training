import Link from "next/link";
import HTag from "../../components/HTag/HTag";
import { withLayout } from "../../components/Layout/Layout";
import styles from "./styles.module.css";

export const Error404: React.FC = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <HTag tag="h1">Ошибка 404</HTag>
      <Link className={styles.link} href={`/courses`}>
        {"Наши курсы -->"}
      </Link>
    </div>
  );
};

export default withLayout(Error404);
