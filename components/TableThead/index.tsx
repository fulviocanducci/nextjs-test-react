import IArrayString from "../../@types/array_string";

function TableThead({ items }: IArrayString) {
  return (
    <thead>
      <tr className="table-primary">
        {items &&
          items.map((item, index) => (
            <th key={index} className="text-center">
              <small>{item}</small>
            </th>
          ))}
      </tr>
    </thead>
  );
}

export default TableThead;
