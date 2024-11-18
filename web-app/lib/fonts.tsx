import {
  Alex_Brush,
  Inter,
  Montserrat,
  Poppins,
  Roboto,
} from "next/font/google";

export const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"],
});

export const inter = Inter({ subsets: ["latin"] });
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const monsterrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
