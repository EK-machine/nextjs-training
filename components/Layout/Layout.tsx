import { IAppContext, LayoutProps } from "../../types/types";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import styles from "./styles.module.css";
import { FunctionComponent, useState } from "react";
import { AppContextProvider } from "../../context/app.context";
import Up from "../Up/Up";
import { useScrollY } from "../../hooks/hooks";
import cn from "classnames";
import { KeyboardEvent, useRef } from "react";

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  const [isDisplayed, setIsDisplayed] = useState<boolean>(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  const skipContent = (key: KeyboardEvent) => {
    if (key.code === "Enter" || key.code === "Space") {
      key.preventDefault();
      bodyRef.current?.focus();
    }
    setIsDisplayed(false);
  };

  const yPos = useScrollY();
  return (
    <div className={styles.wrapper}>
      <a
        onFocus={() => setIsDisplayed(true)}
        tabIndex={1}
        className={cn(styles.skipLink, {
          [styles.displayed]: isDisplayed,
        })}
        onKeyDown={skipContent}
      >
        Сразу к содержанию
      </a>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <main tabIndex={0} ref={bodyRef} className={styles.body} role="main">
        {children}
      </main>
      <Footer className={styles.footer} />
      {yPos < 85 ? null : <Up />}
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
