import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "./Components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DonáClick",
  description:
    "Donáclick es un programa que te permite sumarte a una ONG con cada una de tus compras sin ningun costos extra.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body>
        <Providers>
          <Navbar />
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
