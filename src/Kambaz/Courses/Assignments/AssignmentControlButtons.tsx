import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

export default function AssignmentControlButtons() {
  return (
    <div className="d-flex flex-row float-end">
      <div className="border border-2 rounded-pill p-1 me-2">
        {" "}
        40% of Total{" "}
      </div>
      <BsPlus className="fs-2" style={{ bottom: "1px" }} />
      <IoEllipsisVerticalSharp className="fs-4 mt-1" />
    </div>
  );
}
