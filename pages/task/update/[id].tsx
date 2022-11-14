import React from "react";
import router from "next/router";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

import TaskCreateOrUpdate from "../../../components/pages/task/TaskCreateOrUpdate";
import { tasksGetByIdAsync, tasksUpdateAsync } from "../../../utils/request-task";
import { ITask } from "../../../@types/task";
import { redirectTo } from "../../../utils/redirect-to";

interface ITaskUpdate {
  values: ITask;
}

function Update({ values }: ITaskUpdate) {
  const submitAsync = async (values: ITask) => {
    try {
      const result = await tasksUpdateAsync(values);
      if (result.status === 204) {
        router.push("/task");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return <TaskCreateOrUpdate onSubmitResult={submitAsync} values={values} mode={"UPDATE"} />;
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const id = context.params?.id;
  try {
    const result = await tasksGetByIdAsync(id);
    if (result.status === 404) {
      return redirectTo("/task");
    }
    const values = result.data;
    return { props: { values } };
  } catch (error) {
    return redirectTo("/task");
  }
};

export default Update;
