import "./globals.css";
import { Inter } from "next/font/google";
import NavMenu from "./NavMenu";
import AuthProvider from "./AuthProvider";
import Providers from "../../components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Crypto.Blogs",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <Providers>
          <body className={inter.className}>
            <NavMenu />
            {children}
          </body>
        </Providers>
      </html>
    </AuthProvider>
  );
}
