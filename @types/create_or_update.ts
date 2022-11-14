interface ICreateOrUpdate<T> {
  values?: T | undefined | null;
  mode: "ADD" | "UPDATE" | "DELETE";
  onSubmitResult(data: T): void;
}

export default ICreateOrUpdate;
