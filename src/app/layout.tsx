import type { Metadata } from "next";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "./globals.css";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemProvider from "@/providers/ThemProvider";
import { ReduxProvider } from "@/providers/Provider";

export const metadata: Metadata = {
  title: "SieuBuong",
  description: "Shopping",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode | any;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeContextProvider>
          <ThemProvider>
            <ReduxProvider>
              <div className="container">
                <div className="wrapper">
                  <Header />
                  {children}
                  <Footer />
                </div>
              </div>
            </ReduxProvider>
          </ThemProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
