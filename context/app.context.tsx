import { createContext, PropsWithChildren, ReactNode, useState } from "react";
import { MenuItem, TopCategory, IAppContext } from "../types/types";

export const AppContext = createContext<IAppContext>({
  menu: [],
  firstCategory: TopCategory.Courses,
});

export const AppContextProvider = ({
  menu,
  firstCategory,
  children,
}: PropsWithChildren<IAppContext>): JSX.Element => {
  const [menuState, setMenuState] = useState<MenuItem[]>(menu);
  const setMenu = (newMenu: MenuItem[]) => {
    setMenuState(newMenu);
  };

  const value = {
    menu: menuState,
    firstCategory,
    setMenu,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
