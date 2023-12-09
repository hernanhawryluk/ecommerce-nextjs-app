import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NavBar from "./components/nav/nav-bar";
import Footer from "./components/footer/footer";
import CartProvider from "@/provider/cart-provider";
import { Toaster } from "react-hot-toast";
import getCurrentUser from "@/actions/get-current-user";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "SmartStore",
  description: "SmartStore Portfolio App",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body
        className={`${poppins.className}, flex flex-col min-h-screen text-slate-700 bg-slate-100`}
      >
        <Toaster
          containerStyle={{ top: "88px" }}
          toastOptions={{
            position: "top-right",
            duration: 3000,

            style: {
              background: "rgb(51, 65, 85)",
              color: "#fff",
              fontSize: "16px",
              fontFamily: poppins.style.fontFamily,
            },
          }}
        />

        <CartProvider>
          <NavBar currentUser={currentUser} />
          <main className="flex-grow">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
