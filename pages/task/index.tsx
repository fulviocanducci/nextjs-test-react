import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Link from "next/link";
import router from "next/router";

import { GetServerSideProps } from "next";

import TableThead from "../../components/TableThead";
import { FiEdit2, FiPlusSquare } from "react-icons/fi";
import { ITask, ITaskArray } from "../../@types/task";
import { TableTrSuper } from "../../components/TableTr";

import { tasksListAsync } from "../../utils/request-task";

function Task({ data }: ITaskArray) {
  const [tasks, setTasks] = useState<ITask[] | null>(data);
  return (
    <>
      <div className="text-center mb-2 mt-1">
        <Link className="btn btn-primary btn-sm" href="/task/create">
          <FiPlusSquare /> Novo
        </Link>
      </div>
      <Table responsive striped bordered hover size="sm">
        <TableThead items={["Id", "Description", "..."]}></TableThead>
        <tbody>
          {tasks &&
            tasks.map((item, index) => (
              <tr key={index + item.id}>
                <td className="col-md-2 text-end pe-2">{item.id}</td>
                <td className="col-md-8 text-start">{item.description}</td>
                <td className="col-md-2 text-center">
                  <Button variant="primary" size="sm" onClick={(e) => router.push("task/update/" + item.id)}>
                    <FiEdit2></FiEdit2>
                  </Button>
                </td>
              </tr>
            ))}
          <TableTrSuper data={tasks} cols={3}></TableTrSuper>
        </tbody>
      </Table>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const result = await tasksListAsync();
  const data = result.data;
  return { props: { data } };
};

//

export default Task;
