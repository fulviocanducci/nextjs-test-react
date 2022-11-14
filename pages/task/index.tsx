import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Table } from "react-bootstrap";
import { FiEdit2 } from "react-icons/fi";
import { ITask, ITaskArray } from "../../@types/task";
import { TableTrSuper } from "../../components/TableTr";
import TableThead from "../../components/TableThead";
import request from "../../utils/request";
import { GetServerSideProps } from "next";

function Task({ data }: ITaskArray) {
  const [tasks, setTasks] = useState<ITask[] | null>(data);
  return (
    <Table striped bordered hover size="sm">
      <TableThead items={["Id", "Description", "..."]}></TableThead>
      <tbody>
        {tasks &&
          tasks.map((item, index) => (
            <tr key={index + item.id}>
              <td className="col-md-2 text-end pe-2">{item.id}</td>
              <td className="col-md-8 text-start">{item.description}</td>
              <td className="col-md-2 text-center">
                <Button variant="primary" size="sm">
                  <FiEdit2></FiEdit2>
                </Button>
              </td>
            </tr>
          ))}
        <TableTrSuper data={tasks} cols={3}></TableTrSuper>
      </tbody>
    </Table>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  //const id = context.params.id // Get ID from slug `/book/1`
  const result = await request.get<ITask[]>("https://localhost:7290/api/tasks");
  const data = result.data;
  return { props: { data } };
};

//https://localhost:7290/api/

export default Task;
