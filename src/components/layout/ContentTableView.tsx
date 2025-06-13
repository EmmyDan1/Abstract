import type { ContentTableType } from "../../data/types";
import { ArrowRight } from "lucide-react";

const ContentTableView = ({ title, text, img, link }: ContentTableType) => {
  return (
    <section>
      <div className="flex flex-col p-6">
        <div className="flex ">
          <img src={img} alt="" className="w-16 h-16" />
          <div className="flex flex-col ml-4 ">
            <h2 className="text-[24px] font-inter font-bold mb-4">{title}</h2>
            <p className="font-inter text-[24px] mb-4">{text}</p>
            <a
              href={link}
              className="inline-flex items-center text-blue-600 hover:underline group text-xl "
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 mt-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentTableView;
