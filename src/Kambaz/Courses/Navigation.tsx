import { Link, useLocation, useParams } from "react-router-dom";
import "../styles.css";
export default function CourseNavigation() {
  const location = useLocation();
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  const { cid } = useParams();
  console.log(cid);
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          to={`/Kambaz/Courses/${cid}/${link}`}
          id={`wd-course-${link.toLocaleLowerCase()}-link`}
          className={`list-group-item  border-0 ${
            location.pathname === `/Kambaz/Courses/${cid}/${link}`
              ? "active"
              : "text-danger"
          }`}
        >
          {link}{" "}
        </Link>
      ))}
    </div>
  );
}
