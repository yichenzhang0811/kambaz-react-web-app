import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import AssignmentsControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { Link, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { setAssignments, deleteAssignment } from "./reducer";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";
import { useEffect } from "react";
export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role === "FACULTY";
  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(
      cid as string
    );
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);

  const removeAssignment = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };
  return (
    <div>
      <AssignmentsControls isFaculty={isFaculty} />
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
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
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
                    {isFaculty ? (
                      <Link
                        to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                        className="text-decoration-none text-dark me-2"
                      >
                        {assignment.title}
                      </Link>
                    ) : (
                      <span className="text-dark me-2">{assignment.title}</span>
                    )}

                    <div className="text-muted small">
                      <span className="text-danger">Multiple Modules</span> |{" "}
                      <b>Not Available until {assignment.avaible_at} </b> |{" "}
                      {assignment.due_date} | {assignment.points} pts
                    </div>
                  </div>
                  <GreenCheckmark />
                  {isFaculty && (
                    <FaTrash
                      onClick={() => removeAssignment(assignment._id)}
                      className="text-danger me-3"
                    />
                  )}
                  <IoEllipsisVerticalSharp className="fs-4 mt-1" />
                </ListGroup.Item>
              ))}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
