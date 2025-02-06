import { Container, Form, Button, Row, Col } from "react-bootstrap";

export default function AssignmentEditor() {
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
              defaultValue="The assignment is available online Submit a link to the landing page of
        your Web application running on Netlify. The landing page should include
        the following: Your full name and section Links to each of the lab
        assignments Link to the Kambaz application Links to all relevant source
        code repositories The Kambaz application should include a link to
        navigate back to the landing page."
            />
          </Form.Group>

          {/* Points */}
          <Form.Group className="mb-3" id="wd-points">
            <Form.Label>
              <strong>Points</strong>
            </Form.Label>
            <Form.Control type="number" defaultValue="100" />
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
                  defaultValue="2024-05-13T23:59"
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
                  defaultValue="2024-05-06T12:00"
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
            <Button variant="danger">Save</Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}
