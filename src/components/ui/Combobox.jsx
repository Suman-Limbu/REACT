import React, { useState } from "react";

const Combobox = () => {
  const [formData, setFormData] = useState("");

  const data = ["om", "sameer", "paras", "rajiv"];
  const suggest = data.filter((word) => word.includes(formData));
  return (
    <div className="w-1/2 bg-gray-300 rounded m-6 h-40 p-6">
      <input
        onChange={(e) => setFormData(e.target.value)}
        name="name"
        value={formData}
        type="text"
        placholder="search name..."
        className="border bg-white border-gray-200 px-2"
      />
     {formData &&  <div className="p-3 bg-white border">
        {suggest}
      </div>}
    </div>
  );
};

export default Combobox;
