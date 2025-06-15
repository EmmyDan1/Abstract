import React from "react";

type Company = {
  name: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  bgColor: string;
  img: string;
};

const companies: Company[] = [
  {
    name: "Cisco",
    title: "Design system management",
    description: "How Cisco built an enterprise global design system",
    linkText: "Read Cisco’s Story",
    linkUrl: "#",
    bgColor: "bg-[#e6e1dd]",
    img: new URL("../../assets/Images/cisImg.svg", import.meta.url).href,
  },
  {
    name: "Salesforce",
    title: "Radical transparency",
    description: "How designers at Salesforce fostered trust and teamwork",
    linkText: "Read Salesforce’s Story",
    linkUrl: "#",
    bgColor: "bg-[#dce3e2]",
    img: new URL("../../assets/Images/SaleForceimg.svg", import.meta.url).href,
  },
  {
    name: "Banner Health",
    title: "Remote collaboration",
    description:
      "How Banner Health is navigating the remote future no one planned for",
    linkText: "Read Banner Health’s Story",
    linkUrl: "#",
    bgColor: "bg-[#dfdcf1]",
    img: new URL("../../assets/Images/BannerHealthImg.svg", import.meta.url)
      .href,
  },
];

const CompanyGrid: React.FC = () => {
  return (
    <section className="py-12 px-4 max-w-[1300px] mx-auto">
      <h2 className="text-4xl font-inter font-semibold text-center mb-12">
        Why design teams love Abstract
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
        {companies.map((company, index) => (
          <div
            key={index}
            className={`group transform transition duration-300 hover:animate-bounceSm hover:shadow-xl ${company.bgColor} rounded border-2 border-black`}
          >
           
            <div className="flex items-center justify-center h-[192px] text-2xl font-bold">
             <img src={company.img} alt={company.title} className="object-contain w-full h-[120px] p-4" />

            </div>

        
            <div className="grid grid-cols-2 border-t  border-black divide-x divide-black">
              <div className="p-4 h-[136px] font-bold text-2xl">
                {company.title}
              </div>
              <div className="p-4 h-[136px] text-md font-inter ">
                {company.description}
              </div>
            </div>

           
            <div className="border-t border-black p-4 text-blue-600 underline text-sm">
              <a href={company.linkUrl}>{company.linkText}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyGrid;
