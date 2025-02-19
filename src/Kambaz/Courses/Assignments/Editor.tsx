import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  console.log(aid);
  const assignment = db.assignments.find(
    (assignment) => assignment._id === aid
  );
  console.log(assignment);
  return (
    <div>
      <Container className="p-4" id="wd-assignments-editor">
        {/* Assignment Name */}
        <Form id="wd-name">
          <Form.Group className="mb-3">
            <Form.Label>
              <strong>Assignment Name</strong>
            </Form.Label>
            <Form.Control type="text" placeholder="A1" />
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
            />
          </Form.Group>

          {/* Points */}
          <Form.Group className="mb-3" id="wd-points">
            <Form.Label>
              <strong>Points</strong>
            </Form.Label>
            <Form.Control type="number" defaultValue={assignment?.points} />
          </Form.Group>

          {/* Assignment Group */}
          <Form.Group className="mb-3" id="wd-group">
            <Form.Label>
              <strong>Assignment Group</strong>
            </Form.Label>
            <Form.Select>
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
            <Form.Select>
              <option value="Percentage">Percentage</option>{" "}
              <option value="Letter">Letter</option>{" "}
            </Form.Select>
          </Form.Group>

          {/* Submission Type */}
          <Form.Group className="mb-3" id="wd-submission-type">
            <Form.Label>
              <strong>Submission Type</strong>
            </Form.Label>
            <Form.Select>
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
                  defaultValue={assignment?.due_date}
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
                  defaultValue={assignment?.avaible_at}
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
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Buttons */}
          <div className="d-flex justify-content-end mt-3">
            <Button variant="light" className="me-2">
              Cancel
            </Button>
            <Button
              href={`#/Kambaz/Courses/${cid}/Assignments`}
              variant="danger"
            >
              Save
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}
