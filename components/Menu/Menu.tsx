import { useContext, KeyboardEvent, useState } from "react";
import { AppContext } from "../../context/app.context";
import { FirstLevelMenuItem, PageItem } from "../../types/types";
import { FirstLevelMenu } from "../../helpers/helpers";
import styles from "./styles.module.css";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Menu: React.FC = (): JSX.Element => {
  const [announce, setAnnounce] = useState<"closed" | "opened" | undefined>();
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();

  const variants = {
    visible: {
      marginBottom: 20,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: {
      marginBottom: 0,
    },
  };

  const variantsChildren = {
    visible: {
      opacity: 1,
      height: 29,
    },
    hidden: {
      opacity: 0,
      height: 0,
    },
  };

  const openSlevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory === secondCategory) {
            setAnnounce(m.isOpened ? "closed" : "opened");
            m.isOpened = !m.isOpened;
          }
          return m;
        })
      );
  };

  const openSlevelKey = (key: KeyboardEvent, secondCategory: string) => {
    if (key.code === "Space" || key.code === "Enter") {
      key.preventDefault();
      openSlevel(secondCategory);
    }
  };

  const firstLevel = () => {
    return (
      <ul className={styles.fLevelWrapper}>
        {FirstLevelMenu.map((m) => (
          <li key={m.route} aria-expanded={m.id === firstCategory}>
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
          </li>
        ))}
      </ul>
    );
  };

  const secondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <ul className={styles.sLevelWrapper}>
        {menu.map((m) => {
          if (
            m.pages.map((p) => p.alias).includes(router.asPath.split("/")[2])
          ) {
            m.isOpened = true;
          }
          return (
            <li key={m._id.secondCategory}>
              <button
                className={styles.secondLevel}
                onKeyDown={(key: KeyboardEvent) =>
                  openSlevelKey(key, m._id.secondCategory)
                }
                onClick={() => openSlevel(m._id.secondCategory)}
                role=""
                aria-expanded={m.isOpened}
              >
                {m._id.secondCategory}
              </button>
              <motion.ul
                initial={m.isOpened ? "visible" : "hidden"}
                animate={m.isOpened ? "visible" : "hidden"}
                layout
                variants={variants}
                className={styles.sLevel}
              >
                {thirdLevel(m.pages, menuItem.route, !!m.isOpened)}
              </motion.ul>
            </li>
          );
        })}
      </ul>
    );
  };

  const thirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
    return pages.map((p) => (
      <motion.li key={p.alias} variants={variantsChildren}>
        <Link
          href={`/${route}/${p.alias}`}
          tabIndex={isOpened ? 0 : -1}
          className={cn({
            [styles.tLevel]: true,
            [styles.tLevelActive]: `/${route}/${p.alias}` === router.asPath,
          })}
          aria-current={
            `/${route}/${p.alias}` === router.asPath ? "page" : false
          }
        >
          {p.category}
        </Link>
      </motion.li>
    ));
  };

  return (
    <nav className={styles.menu} role="navigation">
      {announce && (
        <span className="visuallyHidden" role="log">
          {announce === "opened" ? "развёрнуто" : "свёрнуто"}
        </span>
      )}
      {firstLevel()}
    </nav>
  );
};

export default Menu;
