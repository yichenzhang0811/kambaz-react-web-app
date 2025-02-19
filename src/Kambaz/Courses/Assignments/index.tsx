import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import { FaPlus } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import AssignmentsControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  console.log("thisi is agg", cid);
  const assignments = db.assignments;

  return (
    <div>
      <AssignmentsControls />
      <br />
      <br />
      <br />
      <br />
      {/* Assignments List using ListGroup */}
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS{" "}
            <AssignmentControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0" id="wd-assigment-list">
            {assignments.map((assignment) => (
              <ListGroup.Item
                border-start
                border-4
                border-success
                p-3
                style={{ borderLeft: "4px solid green" }}
                className="d-flex align-items-center p-3 border-start border-success "
              >
                <BsGripVertical className="me-2 fs-4 text-muted " />
                <BsPencilSquare />
                <div className="flex-grow-1">
                  <a
                    href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                    className="wd-assignment-link"
                  >
                    {assignment.title}
                  </a>
                  <div className="text-muted small">
                    <span className="text-danger">Multiple Modules</span> |{" "}
                    <b>Not Available until {assignment.avaible_at} </b> |{" "}
                    {assignment.due_date} | {assignment.points}
                  </div>
                </div>
                <GreenCheckmark />
                <IoEllipsisVerticalSharp className="fs-4 mt-1" />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
