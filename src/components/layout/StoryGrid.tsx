import React from "react";


type Story = {
  image: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  bgColor: string;

};

const stories: Story[] = [
  {
    image: new URL("../../assets/Images/cardImg1.svg", import.meta.url).href,
    title: "Customer Spotlight",
    description:
      "Empowering design teams and transforming workflows with Abstract",
    linkText: "Read their stories",
    linkUrl: "#",
    bgColor: "bg-[#fdf6e7]",
  },
  {
    image: new URL("../../assets/Images/cardImg2.jpg", import.meta.url).href,
    title: "Design Inspiration",
    description:
      "Scaling design ops, collaboration, and the impact of design",
    linkText: "Get inspired",
    linkUrl: "#",
    bgColor: "bg-[#eae7e3]",
    
  },
  {
    image: new URL("../../assets/Images/cardImg3.png", import.meta.url).href,
    title: "Our Blog",
    description: "Stories, news, and tips from behind the Artboards",
    linkText: "Browse Abstract’s blog",
    linkUrl: "#",
    bgColor: "bg-[#fce2eb]",
  },
];

const StoryGrid: React.FC = () => {
  return (
    <section className="py-12 px-4 max-w-[1300px] mx-auto">
      <h2 className="text-4xl font-serif font-medium text-center mb-6">
        Dedicated to product designers
      </h2>
      <p className="text-center max-w-xl mx-auto mb-10 text-lg font-inter text-gray-700">
        Get inspired by stories and resources from the best product design leaders and teams.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stories.map((story, index) => (
          <div
            key={index}
            className={`group transform transition duration-300 hover:animate-bounceSm hover:shadow-xl ${story.bgColor} rounded border border-black`}
          >
            {/* Image Placeholder */}
            <div className="h-44 flex items-center justify-center border-b border-black">
              <img src={story.image} alt={story.title} className="h-full object-contain p-4" />
            </div>

            {/* Content */}
            <div className="grid  divide-x divide-black border-t border-black lg:grid-cols-2 divide-y">
              <div className="p-4 font-bold text-xl">{story.title}</div>
              <div className="p-4 text-md font-inter">{story.description}</div>
            </div>

            {/* Footer link */}
            <div className="border-t border-black p-4 text-blue-600 underline text-md">
              <a href={story.linkUrl}>{story.linkText}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StoryGrid;
