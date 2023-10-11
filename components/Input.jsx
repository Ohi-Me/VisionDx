import React from "react";

const Input = ({ label, name, value, onChange, variation }) => {
  const primaryClass = "bg-gray-700 hover:bg-transparent border-transparent hover:border-gray-700 border-2 text-gray-100 hover:text-gray-700";
  const secondaryClass = "transparent border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-gray-100";

  const inputClass = `shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${variation === "primary" ? primaryClass : secondaryClass}`;

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        type="number"
        name={name}
        value={value}
        onChange={onChange}
        className={inputClass}
      />
    </div>
  );
};

export default Input;
