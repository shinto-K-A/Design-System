import type { JSX } from "react";

export interface Props{
       text: string;
       tag: keyof JSX.IntrinsicElements;
}