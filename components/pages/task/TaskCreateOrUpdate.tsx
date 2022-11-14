import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FiRewind, FiSave } from "react-icons/fi";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ITask } from "../../../@types/task";
import ICreateOrUpdate from "../../../@types/create_or_update";
import Link from "next/link";

const schema = yup
  .object({
    id: yup.number().required(),
    description: yup.string().required(),
    done: yup.boolean(),
  })
  .required();

export default function TaskCreateOrUpdate({ values, mode, onSubmitResult }: ICreateOrUpdate<ITask>) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ITask>({
    mode: "onChange",
    defaultValues: values || undefined,
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: ITask) => onSubmitResult(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" id="id" {...register("id")} />
      <div className="form-group">
        <label className="form-label mb-1">Descrição</label>
        <input className={errors.description ? "form-control form-control-sm is-invalid" : "form-control form-control-sm is-valid"} id="description" {...register("description")} autoFocus />
        <div className="mt-1 text-danger">{errors && errors.description?.message}</div>
      </div>
      <div className="form-check mb-1 mt-2">
        <input className="form-check-input" type="checkbox" value="" id="done" {...register("done")} />
        <label className="form-check-label" htmlFor="done">
          Status
        </label>
      </div>
      <div className="mt-1 mb-2">
        <Button variant="primary" size="sm" type="submit" className="mb-2" disabled={!isValid}>
          <FiSave></FiSave>
          {mode && mode === "ADD" && " Adicionar"} {mode && mode === "UPDATE" && " Atualizar"}
        </Button>
        <Link href="/task" className="ms-1 mb-2 btn btn-secondary btn-sm">
          <FiRewind /> Voltar
        </Link>
      </div>
    </form>
  );
}
