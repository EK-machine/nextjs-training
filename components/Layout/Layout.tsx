import { IAppContext, LayoutProps } from "../../types/types";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import styles from "./styles.module.css";
import { FunctionComponent } from "react";
import { AppContextProvider } from "../../context/app.context";
import cn from "classnames";

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer} />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
