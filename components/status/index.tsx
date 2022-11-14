import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

function StatusTrue() {
  return <AiOutlineCheck className="text-success" />;
}
function StatusFalse() {
  return <AiOutlineClose className="text-danger" />;
}

interface IStatus {
  status: boolean;
}

function StatusIcon({ status }: IStatus) {
  return <>{status ? <StatusTrue /> : <StatusFalse />}</>;
}

export { StatusIcon, StatusFalse, StatusTrue };
