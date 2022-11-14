import IArrayCol from "../../@types/array_col";
import ICol from "../../@types/col";

function TableTrDefault({ cols }: ICol) {
  return (
    <tr>
      <td colSpan={cols} className="text-center">
        Nenhum item encontrado ...
      </td>
    </tr>
  );
}

function TableTrWait({ cols }: ICol) {
  return (
    <tr>
      <td colSpan={cols} className="text-center">
        Aguarde ...
      </td>
    </tr>
  );
}

function TableTrSuper<T>({ data, cols }: IArrayCol<T>) {
  if (data === null) {
    return <TableTrWait cols={cols}></TableTrWait>;
  }
  if (data !== null && data.length === 0) {
    return <TableTrDefault cols={cols}></TableTrDefault>;
  }
  return null;
}

export { TableTrDefault, TableTrWait, TableTrSuper };
