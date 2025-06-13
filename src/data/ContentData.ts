import Icon1 from "../assets/Images/iconImg1.png";
import Icon2 from "../assets/Images/icon-account.png";
import Icon3 from "../assets/Images/icon-organizations.png";
import Icon4 from "../assets/Images/icon-billing.png";
import Icon5 from "../assets/Images/icon-authenticate.png";
import Icon6 from "../assets/Images/icon-comment.png";
import type { ContentTableType } from "./types";

const data: ContentTableType[] = [
  {
    id: 1,
    title: "Using Abstract",
    text: "Abstract lets you manage, version, and document your designs in one place.",
    img: Icon1,
    link: "/",
  },

  {
    id: 2,
    title: "Manage your account",
    text: "Configure your account settings, such as your email, profile details, and password.",
    img: Icon2,
    link: "/",
  },
  {
    id: 3,
    title: "Manage organizations, teams, and projects",
    text: "Use Abstract organizations, teams, and projects to organize your people and your work.",
    img: Icon3,
    link: "/",
  },
  {
    id: 4,
    title: "Manage billing",
    text: "Change subscriptions and payment details.",
    img: Icon4,
    link: "/",
  },
  {
    id: 5,
    title: "Authenticate to Abstract",
    text: "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
    img: Icon5,
    link: "/",
  },
  {
    id: 6,
    title: "Abstract support",
    text: "Get in touch with a human.",
    img: Icon6,
    link: "/",
  },
];

export default data;
