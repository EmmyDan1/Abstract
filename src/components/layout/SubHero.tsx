import { Link } from "react-router-dom";

type SubHeroProps = {
  children?: React.ReactNode;
  text: string;
  className?: string;
  showButtons?: boolean;
};

function SubHero({ children, text, className, showButtons }: SubHeroProps) {
  return (
    <section>
      <div
        className={`flex flex-col items-center justify-center bg-[#dadbf1] h-[376px] shadow lg:items-start   ${className} ${
          showButtons ? "" : "items-center justify-center"
        }`}
      >
        {showButtons && (
          <div className="flex flex-col lg:-translate-x-0 lg:pl-24 lg:pt-8">
            <div className="flex gap-2 font-medium text-[12px]  ">
              <Link to="/helpcenter">
                <button className="hover:text-blue-500 hover:underline">
                  Abstract
                  <span className="inline-block align-middle -mt-1 ml-1">
                    &gt;
                  </span>
                </button>
              </Link>
              <Link to="/contactsupport">
                <button className="hover:text-blue-500 hover:underline">
                  Abstract Support
                  <span className="inline-block align-middle -mt-1 ml-1">
                    &gt;
                  </span>
                </button>
              </Link>
              <Link to="/contactsupport">
                <button className="hover:text-blue-500 hover:underline">
                  Abstract Support
                </button>
              </Link>
            </div>
            <h2 className="text-[40px] font-normal font-inter leading-tight tracking-tighter lg:text-[80px]">
              Contact Support
            </h2>
          </div>
        )}

        <h1 className="text-[40px] font-normal  -tracking-[3px] -translate-y-8 font-sans-serif text-black lg:text-[70px] lg:font-medium">
          {text}
        </h1>
        {children}
      </div>
    </section>
  );
}

export default SubHero;
