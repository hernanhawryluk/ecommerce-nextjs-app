import { AiOutlineDesktop, AiOutlineLaptop } from "react-icons/ai";
import {
  MdOutlineKeyboard,
  MdSmartphone,
  MdStorefront,
  MdTv,
  MdWatch,
} from "react-icons/md";

export const categories = [
  {
    label: "All",
    icon: MdStorefront,
  },
  {
    label: "Phone",
    icon: MdSmartphone,
  },
  {
    label: "Laptop",
    icon: AiOutlineLaptop,
  },
  {
    label: "Desktop",
    icon: AiOutlineDesktop,
  },
  {
    label: "Watch",
    icon: MdWatch,
  },
  {
    label: "Tv",
    icon: MdTv,
  },
  {
    label: "Accessories",
    icon: MdOutlineKeyboard,
  },
];
