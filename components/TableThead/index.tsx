import IArrayString from "../../@types/array_string";

function TableThead({ items }: IArrayString) {
  return (
    <thead>
      <tr>
        {items &&
          items.map((item, index) => (
            <th key={index} className="text-center">
              {item}
            </th>
          ))}
      </tr>
    </thead>
  );
}

export default TableThead;
