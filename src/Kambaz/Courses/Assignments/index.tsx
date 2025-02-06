import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import { FaPlus } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import AssignmentsControls from "./AssignmentControls";
const assignments = [
  {
    id: 1,
    title: "A1",
    due: "Due May 13 at 11:59pm",
    available: "Not available until May 6 at 12:00am",
    points: "100 pts",
  },
  {
    id: 2,
    title: "A2",
    due: "Due May 20 at 11:59pm",
    available: "Not available until May 13 at 12:00am",
    points: "100 pts",
  },
  {
    id: 3,
    title: "A3",
    due: "Due May 27 at 11:59pm",
    available: "Not available until May 20 at 12:00am",
    points: "100 pts",
  },
];

export default function Assignments() {
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
            <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0" id="wd-assigment-list">
            {assignments.map((assignment) => (
              <ListGroup.Item
                border-start
                border-4
                border-success
                p-3
                style={{ borderLeft: "4px solid green" }}
                key={assignment.id}
                className="d-flex align-items-center p-3 border-start border-success "
              >
                <BsGripVertical className="me-2 fs-4 text-muted " />
                <BsPencilSquare />
                <div className="flex-grow-1">
                  <a
                    href="#/Kambaz/Courses/1234/Assignments/123"
                    className="wd-assignment-link"
                  >
                    {assignment.title}
                  </a>
                  <div className="text-muted small">
                    <span className="text-danger">Multiple Modules</span> |{" "}
                    <b>{assignment.available} </b> | {assignment.due} |{" "}
                    {assignment.points}
                  </div>
                </div>
                <FaPlus className="text-secondary" />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
