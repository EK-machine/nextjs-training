import CoursesIcon from "../public/svgs/hat.svg";
import ServicesIcon from "../public/svgs/cloud.svg";
import BooksIcon from "../public/svgs/book.svg";
import ProductIcon from "../public/svgs/pack.svg";
import { FirstLevelMenuItem, PageItem, TopCategory } from "../types/types";

export const FirstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "курсы",
    icon: <CoursesIcon />,
    id: TopCategory.Courses,
  },
  {
    route: "services",
    name: "сервисы",
    icon: <ServicesIcon />,
    id: TopCategory.Services,
  },
  {
    route: "books",
    name: "книги",
    icon: <BooksIcon />,
    id: TopCategory.Books,
  },
  {
    route: "products",
    name: "товары",
    icon: <ProductIcon />,
    id: TopCategory.Propducts,
  },
];

export const convertToRur = (s: number) =>
  s
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    .concat(" ₽");

export const declOfNum = (n: number): string => {
  const titles = [" отзыв", " отзыва", " отзывов"];
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    n % 100 > 4 && n % 100 < 20 ? 2 : cases[n % 10 < 5 ? n % 10 : 5]
  ];
};
