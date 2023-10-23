import type { Metadata } from "next";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "./globals.css";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemProvider from "@/providers/ThemProvider";
export const metadata: Metadata = {
  title: "Huy Blog",
  description: "Blog Nextjs13!",
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
            <div className="container">
              <div className="wrapper">
                <Header />
                {children}
                <Footer />
              </div>
            </div>
          </ThemProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
