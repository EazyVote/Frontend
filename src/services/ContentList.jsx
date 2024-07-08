import { FaShieldAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";

const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "elections",
    title: "Elections",
  },
  {
    id: "history",
    title: "History",
  },
];

const iconMap = {
  star: FaStar,
  shield: FaShieldAlt,
  paperPlane: FaPaperPlane,
};

const features = [
  {
    id: "feature-1",
    icon: "star",
    title: "Advantages",
    content:
      "Our blockchain voting system offers a unique combination of transparency and efficiency.",
  },
  {
    id: "feature-2",
    icon: "shield",
    title: "100% Secured",
    content:
      "We take proactive steps to ensure your votes and information are secure.",
  },
  {
    id: "feature-3",
    icon: "paperPlane",
    title: "Eazy Voting",
    content:
      "Our platform makes casting and counting votes simple and accurate, saving time and reducing errors.",
  },
];

export { features, navLinks, iconMap };
