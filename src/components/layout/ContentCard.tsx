import infoboxImg from "../../assets/Images/infobox3.png";

type ContentCardType = {
  text: string;
  ClassName?: string;
};

const ContentCard = ({ text, ClassName }: ContentCardType) => {
  return (
    <div className="flex bg-[#FFE496] p-4 rounded-md lg:w-[700px]">
      <img src={infoboxImg} className="w-4 h-4 mt-2" />
    <p className={`text-[20px] font-inter ml-4 ${ClassName}`}>{text}</p>
    </div>
  );
};

export default ContentCard;
