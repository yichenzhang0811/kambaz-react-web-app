import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Col, Row, Button, Card } from "react-bootstrap";
const courses = [
  {
    id: 1,
    title: "CS5001",
    img: "/images/reactjs.jpg",
    description: "Intensive Foundations of Computer Science{",
  },
  {
    id: 2,
    title: "CS5002",
    img: "/images/reactjs.jpg",
    description: "Discrete Structures",
  },
  {
    id: 3,
    title: "CS5004",
    img: "/images/reactjs.jpg",
    description: "Object-Oriented Design",
  },
  {
    id: 4,
    title: "CS5008",
    img: "/images/reactjs.jpg",
    description: "Data Structures, Algorithms",
  },
  {
    id: 5,
    title: "CS5400",
    img: "/images/reactjs.jpg",
    description: "Principles of Programming Language",
  },
  {
    id: 6,
    title: "CS5500",
    img: "/images/reactjs.jpg",
    description: "Foundations of Software Engineering",
  },
  {
    id: 7,
    title: "CS5520",
    img: "/images/reactjs.jpg",
    description: "Mobile Application Development",
  },
];

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={5} md={2} xl={10} className="g-4">
          {courses.map((course) => (
            <Col
              key={course.id}
              className="wd-dashboard-course"
              style={{ width: "300px" }}
            >
              <Card>
                <Link
                  to={`/Kambaz/Courses/${course.id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <Card.Img
                    variant="top"
                    src={course.img}
                    width="100%"
                    height={160}
                  />
                  <Card.Body>
                    <Card.Title className="wd-dashboard-course-title">
                      {course.title}
                    </Card.Title>
                    <Card.Text className="wd-dashboard-course-description">
                      {course.description}
                    </Card.Text>
                    <Button variant="primary">Go</Button>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
