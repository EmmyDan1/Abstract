import { supportData } from "../../data/SupportData";
import ContentCard from "../layout/ContentCard";

const SupportContentSection = () => {
  return (
    <div className="w-full space-y-12">
      {supportData.map((item) => (
        <div key={item.id} id={item.id} className="scroll-mt-24">
          <h2 className="text-[32px] mb-4 font-normal tracking-tighter leading-tight font-inter">
            {item.tabTitle}
          </h2>

          {item.steps ? (
            <ol className="list-decimal pl-5 space-y-4 text-black font-inter text-lg lg:w-[700px]">
              {item.steps.map((step, index) => (
                <li key={index}>
                  <p className="">{step.title}</p>
                  {step.subpoints && (
                    <ul className="list-disc pl-5">
                      {step.subpoints.map((subpoint, subIndex) => (
                        <li key={subIndex}>{subpoint}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          ) : (
            <>
              {item.cardText && <ContentCard text={item.cardText} ClassName="text-[16px] " />}
              <p className="text-[18px] mt-4 font-inter lg:w-[700px] ">{item.content}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default SupportContentSection;
