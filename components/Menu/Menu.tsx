import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { FirstLevelMenuItem, PageItem } from "../../types/types";
import { FirstLevelMenu } from "../../helpers/helpers";
import styles from "./styles.module.css";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

const Menu: React.FC = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();

  const openSlevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory === secondCategory) {
            m.isOpened = !m.isOpened;
          }
          return m;
        })
      );
  };

  const firstLevel = () => {
    return (
      <>
        {FirstLevelMenu.map((m) => (
          <div key={m.route}>
            <Link href={`/${m.route}`} legacyBehavior>
              <div
                className={cn({
                  [styles.fLevel]: true,
                  [styles.fLevelActive]: m.id === firstCategory,
                })}
              >
                {m.icon}
                <span>{m.name}</span>
              </div>
            </Link>
            {m.id === firstCategory && secondLevel(m)}
          </div>
        ))}
      </>
    );
  };

  const secondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.sLevelWrapper}>
        {menu.map((m) => {
          if (
            m.pages.map((p) => p.alias).includes(router.asPath.split("/")[2])
          ) {
            m.isOpened = true;
          }
          return (
            <div key={m._id.secondCategory}>
              <div
                className={styles.secondLevel}
                onClick={() => openSlevel(m._id.secondCategory)}
              >
                {m._id.secondCategory}
              </div>
              <div
                className={cn({
                  [styles.sLevel]: true,
                  [styles.sLevelActive]: m.isOpened,
                })}
              >
                {thirdLevel(m.pages, menuItem.route)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const thirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <Link
        href={`/${route}/${p.alias}`}
        className={cn({
          [styles.tLevel]: true,
          [styles.tLevelActive]: `/${route}/${p.alias}` === router.asPath,
        })}
      >
        {p.category}
      </Link>
    ));
  };

  return <div className={styles.menu}>{firstLevel()}</div>;
};

export default Menu;