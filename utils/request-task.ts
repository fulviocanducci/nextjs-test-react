import { ITask } from "../@types/task";
import request from "./request";
import { url } from "./url";

export const tasksListAsync = () => {
  return request.get<ITask[]>(url.api("tasks"));
};

export const tasksCreateAsync = (values: ITask) => {
  return request.post(url.api("tasks"), values);
};

export const tasksUpdateAsync = (values: ITask) => {
  return request.put(url.api("tasks/" + values.id), values);
};

export const tasksGetByIdAsync = (id: number | string | string[] | undefined) => {
  return request.get<ITask>(url.api("tasks/" + id));
};
