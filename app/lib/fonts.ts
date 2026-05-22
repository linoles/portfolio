import {
  Montserrat,
  Nunito,
  Roboto_Slab,
  Shantell_Sans,
  Unkempt,
} from "next/font/google";

export const mainFont = Montserrat({
  subsets: ["cyrillic", "latin"],
});

export const boldFont = Nunito({
  weight: "900",
  subsets: ["latin", "cyrillic"],
});

export const headingsFont = Roboto_Slab({
  weight: "600",
  subsets: ["latin", "cyrillic"],
});

export const enPlayfulFont = Unkempt({
  weight: "400",
  subsets: ["latin"],
});

// I tryed to choose actually similar font
export const ruPlayfulFont = Shantell_Sans({
  weight: "400",
  subsets: ["cyrillic", "latin"],
});