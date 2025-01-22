export default function Modules() {
  return (
    <div>
      <button>Cooapse All</button> <button>View Progress</button>
      <select defaultValue="Publish All" id="wd-publish">
        <option value="Publish All">Publish All</option>{" "}
        <option value="Publish Selected">Publish Selected</option>{" "}
      </select>
      {<button> + Module</button>}{" "}
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">
                  Learn what is Web Development
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">Reading</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Full Stack Developer - Chapter 1 - Introduction
                </li>
                <li className="wd-content-item">
                  Full Stack Developer - Chapter 2 - Creating User Interfaces
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">Slides</span>
              <ul className="wd-content">
                <li>Introduction to Web Development</li>
                <li>Creating an HTTP server with Node.js</li>
                <li>Creating a React Application</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">
            Week 1, Lecture 2 - Formatting User Interfaces with HTML
          </div>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 3</div>
        </li>
      </ul>
    </div>
  );
}
