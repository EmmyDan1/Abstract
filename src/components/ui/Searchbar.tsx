import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
type SearchbarProps = {
  className: string;
  ArrowIcon?: boolean;
  placeholder?: string;
};

const Searchbar = ({
  className,
  ArrowIcon = false,
  placeholder,
}: SearchbarProps) => {
  const [input, setInput] = useState("");
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }
  return (
    <div className="relative">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder={placeholder}
        className={className}
      />
      {ArrowIcon && (
        <button>
          {" "}
          <FiArrowRight
            size={27}
            className="absolute right-2 top-3 text-primary hover:text-blue-600 transition ease-in-out duration-300"
          />
        </button>
      )}
    </div>
  );
};

export default Searchbar;
