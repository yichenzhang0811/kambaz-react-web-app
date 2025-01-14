import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <br />
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        {/* Course 1 */}
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/CS5001/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/reactjs.jpg" width={200} />

            <div>
              <h5> CS5001 </h5>
              <p className="wd-dashboard-course-title">
                Intensive Foundations of Computer Science{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* Course 2 */}
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/CS5002/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/reactjs.jpg" width={200} />

            <div>
              <h5> CS5002 </h5>
              <p className="wd-dashboard-course-title">Discrete Structures </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* Course 3 */}
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/CS5004/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/reactjs.jpg" width={200} />

            <div>
              <h5> CS5004 </h5>
              <p className="wd-dashboard-course-title">
                Object-Oriented Design{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* Course 4 */}
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/CS5008/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/reactjs.jpg" width={200} />

            <div>
              <h5> CS5008 </h5>
              <p className="wd-dashboard-course-title">
                Data Structures, Algorithms, and Their Applications within
                Computer Systems{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* Course 5 */}
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/CS5400/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/reactjs.jpg" width={200} />

            <div>
              <h5> CS5400 </h5>
              <p className="wd-dashboard-course-title">
                Principles of Programming Language{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* Course 6 */}
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/CS5500/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/reactjs.jpg" width={200} />

            <div>
              <h5> CS5500 </h5>
              <p className="wd-dashboard-course-title">
                Foundations of Software Engineering{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* Course 7 */}
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/CS5520/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/reactjs.jpg" width={200} />

            <div>
              <h5> CS5520 </h5>
              <p className="wd-dashboard-course-title">
                Mobile Application Development{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* Course 8 */}
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/CS5600/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/reactjs.jpg" width={200} />

            <div>
              <h5> CS5600 </h5>
              <p className="wd-dashboard-course-title">Computer Systems </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
