import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
} from "react";

export interface HTagProps {
  tag: "h1" | "h2" | "h3";
  children: ReactNode;
}

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  appearance: string;
  arrow?: "right" | "down" | "none";
}

export interface PTagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
  size: "b" | "m" | "s";
}

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size: "m" | "s";
  children: ReactNode;
  color: "ghost" | "red" | "grey" | "green" | "primary";
  href?: string;
}

export interface RatingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number) => void;
}

export interface LayoutProps {
  children: ReactNode;
}

export interface SidebarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export interface FooterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export interface ID {
  secondCategory: string;
}

export interface PageItem {
  alias: string;
  title: string;
  _id: string;
  category: string;
}

export interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

export interface TypeProps extends HomeProps {}

export enum TopCategory {
  Courses,
  Services,
  Books,
  Propducts,
}

export interface PageAdvantage {
  _id: string;
  title: string;
  description: string;
}

export interface HhData {
  _id: string;
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
  updated: Date;
}

export interface PageModel {
  tafs: string[];
  _id: string;
  secondCategory: string;
  alias: string;
  title: string;
  category: string;
  seoText: string;
  tagsTitle: string;
  metaTitle: string;
  metaDescription: string;
  firstCategory: TopCategory;
  advanrage: PageAdvantage[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  hh: HhData;
}

export interface ProductCharacteristic {
  value: string;
  name: string;
}

export interface ReviewModel {
  _id: string;
  name: string;
  title: string;
  description: string;
  rating: number;
  createdAt: Date;
}

export interface ProductModel {
  _id: string;
  categories: string[];
  tags: string[];
  title: string;
  link: string;
  price: number;
  credit: number;
  oldPrice: number;
  description: string;
  characteristics: ProductCharacteristic[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  image: string;
  initialRating: number;
  reviews: ReviewModel[];
  reviewCount: number;
  reviewAvg?: number;
  advantages: string;
}

export interface CourseProps extends Record<string, unknown> {
  page: PageModel;
  products: ProductModel[];
  menu: MenuItem[];
  firstCategory: TopCategory;
}

export interface IAppContext {
  menu: MenuItem[];
  firstCategory: TopCategory;
  setMenu?: (newMenu: MenuItem[]) => void;
}

export interface MenuItem {
  _id: {
    secondCategory: string;
  };
  isOpened?: boolean;
  pages: PageItem[];
}

export interface FirstLevelMenuItem {
  route: string;
  name: string;
  icon: JSX.Element;
  id: TopCategory;
}
