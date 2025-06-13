import ContentData from "../../data/ContentData";
import ContentTableView from "./ContentTableView";

const ContentTable = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:p-24  gap-4">
        {ContentData.map((item) => (
          <ContentTableView key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ContentTable;
