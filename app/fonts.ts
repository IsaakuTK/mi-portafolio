import { Rubik } from 'next/font/google';

export const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-rubik', // 👈 Define como variable CSS
});