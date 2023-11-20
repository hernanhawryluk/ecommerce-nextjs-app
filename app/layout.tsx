import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NavBar from "./components/nav/nav-bar";
import Footer from "./components/footer/footer";
import CartProvider from "@/provider/cart-provider";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "E-Shop",
  description: "E-commerce App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}, flex flex-col min-h-screen text-slate-700`}
      >
        <Toaster
          toastOptions={{
            style: {
              background: "rgb(51, 65, 85",
              color: "#fff",
            },
          }}
        />
        <CartProvider>
          <NavBar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
