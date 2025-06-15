import img1 from "../assets/Images/icons8-time-50.png";
import img2 from '../assets/Images/icons8-growth-64.png';
import img3 from '../assets/Images/icons8-synchronize-50.png';


type HeroDataType = {
  id: number;
  title: string;
  text: string;
  img: string;
};

export const HeroData: HeroDataType[] = [
  {
    id: 1,
    title: "Less files, More flow.",
    text: "No more digging through Dropbox and Google Drive. Always know where to find “the latest,” so you can stay in your design flow.",
    img: img1,
  },
  {
    id: 2,
    title: "Design together, in real time.",
    text: "Explore and iterate in the same file at the same time, without losing the original. Simply create a branch, do your thing, then merge your changes when ready.",
    img: img2,
  },
  {
    id: 3,
    title: "Iterate with context.",
    text: "Know who made changes, when, and why. Compare changes side by side, resolve design conflicts, and merge work with precision.",
    img: img3,
  },
];
