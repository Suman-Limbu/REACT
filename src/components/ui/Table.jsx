import React from "react";

const Table = ({ columns, data, variant = "default" }) => {
  const variants = {
    default: {
      head: "bg-green-200 ",
      row: "hover:bg-green-100",
    },
    blue: {
      head: "bg-blue-200 ",
      row: "hover:bg-blue-100",
    },
  };

  const style = variants[variant];

  return (
    <table
      className={`border m-8 border-collapse max-w-4xl w-full bg-blue-300`}
    >
      <thead className={`border ${style.head}`}>
        <tr>
          {columns.map((itm, idx) => (
            <th key={itm.id || idx} className="border px-6">
              {itm.header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className={`border ${style.row}`}>
        {data.map((data, idx) => (
          <tr>
            {columns.map((itm, idx) => (
              <td key={itm.id || idx} className="border px-6">
                {itm.accessor(data)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
