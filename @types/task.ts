export interface ITask {
  id: number;
  description: string;
  done: boolean;
}

export interface ITaskArray {
  data: ITask[] | null;
}
