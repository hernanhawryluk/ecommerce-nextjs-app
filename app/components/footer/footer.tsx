import React from "react";
import Container from "../container";
import FooterList from "./footer-list";
import Link from "next/link";
import { MdFacebook } from "react-icons/md";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { categories } from "@/utils/categories";
import Categories from "./categories";

const Footer = () => {
  const socialClasses =
    "text-[1.6rem] hover:text-slate-50 hover:scale-[1.2] active:scale-95 transition";
  const highlight = "hover:text-slate-50 transition";

  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="px-8 flex flex-col md:flex-row justify-between pt-10 pb-4">
          <FooterList>
            <h3 className="font-bold text-base mb-2">Shop Categories</h3>
            {categories.map((item) => (
              <Categories key={item.label} label={item.label} />
            ))}
          </FooterList>

          <FooterList>
            <h3 className="font-bold text-base mb-2">Customer Service</h3>
            <Link href="#" className={highlight}>
              Contact Us
            </Link>
            <Link href="#" className={highlight}>
              Shipping Policy
            </Link>
            <Link href="#" className={highlight}>
              Returns & Exchanges
            </Link>
            <Link href="#" className={highlight}>
              FAQs
            </Link>
          </FooterList>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="mb-2">
              At our electronics store, we are dedicated to providing the latest
              and greatest devices and accessories to our customers. With a wide
              selection of phones, TVs, laptops, watches, and accessories.
            </p>
            <p>
              &copy; {new Date().getFullYear()} Smart Store. All rights
              reserved.
            </p>
          </div>
          <FooterList>
            <h3 className="font-bold text-base mb-2">Follow Us</h3>
            <div className="flex gap-3">
              <Link href="#">
                <MdFacebook className={socialClasses} aria-label="Facebook" />
              </Link>
              <Link href="#">
                <AiFillTwitterCircle
                  className={socialClasses}
                  aria-label="Twitter"
                />
              </Link>
              <Link href="#">
                <AiFillInstagram
                  className={socialClasses}
                  aria-label="Instagram"
                />
              </Link>
              <Link href="#">
                <AiFillYoutube className={socialClasses} aria-label="Youtube" />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
