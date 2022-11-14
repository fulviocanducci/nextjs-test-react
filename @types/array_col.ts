import ICol from "./col";

interface IArrayCol<T> extends ICol {
  data: T[] | null;
}

export default IArrayCol;
