import React from "react";
import { ITask } from "../../../@types/task";
import TaskCreateOrUpdate from "../../../components/pages/task/TaskCreateOrUpdate";
import { tasksCreateAsync } from "../../../utils/request-task";
import router from "next/router";

function Create() {
  const submitAsync = async (values: ITask) => {
    try {
      const result = await tasksCreateAsync(values);
      if (result.status === 201) {
        router.push("/task/update/" + result.data.id);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return <TaskCreateOrUpdate onSubmitResult={submitAsync} values={{ id: 0, description: "", done: true }} mode={"ADD"} />;
}

export default Create;
