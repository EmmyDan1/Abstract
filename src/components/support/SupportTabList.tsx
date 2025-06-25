import { supportData } from "../../data/SupportData";
import type { supportDataType } from "../../data/SupportData";
import { useActiveId } from "../../hooks/useActiveId";

const SupportTabList = () => {
  const ids = supportData.map((item: supportDataType) => item.id);
  const activeId = useActiveId(ids);
  console.log("activeId:", activeId);
  return (
    <section className="">
      <div className="hidden lg:flex flex-col pr-6">
        {supportData.map((item: supportDataType) => (
          <a
            href={`#${item.id}`}
            key={item.id}
            className={`py-2 px-3 text-sm rounded font-medium ${
              activeId === item.id
                ? "bg-blue-600 text-white"
                : "text-blue-700 hover:bg-gray-100 "
            }`}
          >
            {item.tabTitle}
          </a>
        ))}
      </div>
    </section>
  );
};

export default SupportTabList;
