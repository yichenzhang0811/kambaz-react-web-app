import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addAssignment, updateAssignment } from "./reducer";
import { v4 as uuidv4 } from "uuid";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  console.log(cid, aid);
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  const isNewAssigment = aid === "new";
  const currentAssignment = assignments.find(
    (assignment: any) => assignment.course === cid && assignment._id === aid
  );
  const [assignment, setAssignment] = useState(
    isNewAssigment
      ? {
          _id: uuidv4(),
          title: "",
          course: cid,
          avaible_at: new Date().toISOString(),
          avaible_until: new Date(
            new Date().setDate(new Date().getDate() + 20)
          ).toISOString(),
          due_date: new Date(
            new Date().setDate(new Date().getDate() + 14)
          ).toISOString(),
          points: 100,
          description: "",
        }
      : currentAssignment || {}
  );

  const handleSave = () => {
    if (isNewAssigment) {
      dispatch(addAssignment(assignment));
    } else {
      dispatch(updateAssignment(assignment));
    }
  };
  const formatDate = (isoString: string | undefined) => {
    if (!isoString) return "";
    return new Date(isoString).toISOString().slice(0, 16);
  };
  const handleDateChange = (field: string, value: string) => {
    setAssignment({ ...assignment, [field]: new Date(value).toISOString() });
  };
  return (
    <div>
      <Container className="p-4" id="wd-assignments-editor">
        {/* Assignment Name */}
        <Form id="wd-name">
          <Form.Group className="mb-3">
            <Form.Label>
              <strong>Assignment Name</strong>
            </Form.Label>
            <Form.Control
              value={assignment.title}
              onChange={(e) =>
                setAssignment({ ...assignment, title: e.target.value })
              }
              placeholder="Enter assignment name"
            />{" "}
          </Form.Group>

          {/* Assignment Description */}
          <Form.Group className="mb-3" id="wd-description">
            <Form.Label>
              <strong>Description</strong>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              defaultValue={assignment?.description}
              onChange={(e) =>
                setAssignment({ ...assignment, description: e.target.value })
              }
              placeholder="Write description"
            />
          </Form.Group>

          {/* Points */}
          <Form.Group className="mb-3" id="wd-points">
            <Form.Label>
              <strong>Points</strong>
            </Form.Label>
            <Form.Control
              type="number"
              value={assignment?.points}
              onChange={(e) =>
                setAssignment({ ...assignment, points: Number(e.target.value) })
              }
            />{" "}
          </Form.Group>

          {/* Assignment Group */}
          <Form.Group className="mb-3" id="wd-group">
            <Form.Label>
              <strong>Assignment Group</strong>
            </Form.Label>
            <Form.Select defaultValue="ASSIGNMENTS">
              <option value="Assignment">ASSIGNMENT</option>{" "}
              <option value="Project">PROJECT</option>{" "}
              <option value="Exam">EXAM</option>
              <option value="Quiz">QUIZ</option>
            </Form.Select>
          </Form.Group>

          {/* Display Grade As */}
          <Form.Group className="mb-3" id="wd-display-grade-as">
            <Form.Label>
              <strong>Display Grade as</strong>
            </Form.Label>
            <Form.Select defaultValue="Percentage">
              <option value="Percentage">Percentage</option>{" "}
              <option value="Letter">Letter</option>{" "}
            </Form.Select>
          </Form.Group>

          {/* Submission Type */}
          <Form.Group className="mb-3" id="wd-submission-type">
            <Form.Label>
              <strong>Submission Type</strong>
            </Form.Label>
            <Form.Select defaultValue="Online">
              <option value="Online">Online</option>{" "}
              <option value="OnPaper">On Paper</option>{" "}
            </Form.Select>
          </Form.Group>

          {/* Online Entry Options */}
          <Form.Group className="mb-3">
            <Form.Label>
              <strong>Online Entry Options</strong>
            </Form.Label>
            <div>
              <Form.Check
                type="checkbox"
                label="Text Entry"
                id="wd-text-entry"
              />
              <Form.Check
                id="wd-website-url"
                type="checkbox"
                label="Website URL"
                defaultChecked
              />
              <Form.Check
                id="wd-media-recordings"
                type="checkbox"
                label="Media Recordings"
              />
              <Form.Check
                id="wd-student-annotation"
                type="checkbox"
                label="Student Annotation"
              />
              <Form.Check
                id="wd-file-upload"
                type="checkbox"
                label="File Uploads"
              />
            </div>
          </Form.Group>

          {/* Assign To */}
          <Form.Group id="wd-assign-to" className="mb-3">
            <Form.Label>
              <strong>Assign to</strong>
            </Form.Label>
            <Form.Control type="text" defaultValue="Everyone" />
          </Form.Group>

          {/* Due Date */}
          <Row>
            <Col md={12}>
              <Form.Group className="mb-3" id="wd-due-date">
                <Form.Label>
                  <strong>Due</strong>
                </Form.Label>
                <Form.Control
                  type="datetime-local"
                  value={formatDate(assignment?.due_date)}
                  defaultValue={assignment?.due_date}
                  onChange={(e) => handleDateChange("due_date", e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" id="wd-available-from">
                <Form.Label>
                  <strong>Available from</strong>
                </Form.Label>
                <Form.Control
                  type="datetime-local"
                  value={formatDate(assignment?.avaible_at)}
                  defaultValue={assignment?.avaible_at}
                  onChange={(e) =>
                    handleDateChange("avaible_at", e.target.value)
                  }
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" id="wd-available-until">
                <Form.Label>
                  <strong>Available Until</strong>
                </Form.Label>
                <Form.Control
                  type="datetime-local"
                  defaultValue="2024-05-20T12:00"
                  value={formatDate(assignment?.avaible_until)}
                  onChange={(e) =>
                    handleDateChange("available_until", e.target.value)
                  }
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Buttons */}
          <div className="d-flex justify-content-end mt-3">
            <Link
              to={`/Kambaz/Courses/${cid}/Assignments`}
              className="wd-dashboard-course-link text-decoration-none text-dark"
            >
              <Button
                variant="light"
                className="me-2"
                onClick={() => alert("Cancelled assignment")}
              >
                Cancel
              </Button>
              <Button variant="danger" onClick={handleSave}>
                Save
              </Button>
            </Link>
          </div>
        </Form>
      </Container>
    </div>
  );
}
