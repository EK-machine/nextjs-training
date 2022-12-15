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
