import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addEnrollment,
  deleteEnrollment,
  setEnrollments,
} from "./Enrollments/reducer";
import * as enrollmentClient from "./Enrollments/client";
export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();

  const isFaculty = currentUser && currentUser.role === "FACULTY";
  const fetchEnrollments = async () => {
    const enrollments = await enrollmentClient.getEnrollments();
    dispatch(setEnrollments(enrollments));
  };
  useEffect(() => {
    fetchEnrollments();
  }, []);

  const createEnrollemnt = async (userId: string, courseId: string) => {
    if (!course._id) return;
    const newEnrollment = await enrollmentClient.createEnrollment(
      userId,
      courseId
    );
    dispatch(addEnrollment(newEnrollment));
  };

  const removeEnrollment = async (userId: string, courseId: string) => {
    await enrollmentClient.deleteEnrollment(userId, courseId);
    dispatch(deleteEnrollment({ user: userId, course: courseId }));
  };
  const [checkAllCourses, setcheckAllCourses] = useState(false);
  const userEnrollments = enrollments.filter(
    (e: any) => e.user === currentUser._id
  );
  const isEnrolled = (courseId: string) =>
    userEnrollments.some((e: any) => e.course === courseId);
  return (
    <div className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {!isFaculty && (
        <>
          <h2 id="wd-dashboard-published">
            {checkAllCourses
              ? `Published Courses (${courses.length})`
              : `Enrolled Courses (${userEnrollments.length})`}
            <Button
              className="btn btn-primary float-end"
              onClick={() => setcheckAllCourses(!checkAllCourses)}
            >
              {checkAllCourses ? "Enrolled Course" : "Enrollments"}
            </Button>
          </h2>
          <hr />
        </>
      )}
      {isFaculty && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add{" "}
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            value={course.description}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
          <h2 id="wd-dashboard-published">
            Published Courses ({courses.length})
          </h2>{" "}
        </>
      )}
      <hr />
      <div className="row" id="wd-dashboard-courses">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses
            .filter((course) => checkAllCourses || isEnrolled(course._id))
            .map((course) => (
              <div
                className="wd-dashboard-course col"
                style={{ width: "300px" }}
              >
                <Card>
                  <Card.Img
                    src="/images/reactjs.jpg"
                    variant="top"
                    width="100%"
                    height={160}
                  />
                  <Card.Body className="card-body">
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}{" "}
                    </Card.Title>
                    <Card.Text
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {course.description}{" "}
                    </Card.Text>
                    <Link
                      to={`/Kambaz/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark"
                    >
                      <button className="btn btn-primary">Go </button>{" "}
                    </Link>
                    {!isFaculty &&
                      (isEnrolled(course._id) ? (
                        <Button
                          variant="danger"
                          onClick={() =>
                            removeEnrollment(currentUser._id, course._id)
                          }
                        >
                          Unenroll
                        </Button>
                      ) : (
                        <Button
                          variant="success"
                          onClick={() =>
                            createEnrollemnt(currentUser._id, course._id)
                          }
                        >
                          Enroll
                        </Button>
                      ))}

                    {isFaculty && (
                      <>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                        <button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>
                      </>
                    )}
                  </Card.Body>
                </Card>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
