export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">
        <h2>
          <b>Assignment Name</b>
        </h2>
      </label>
      <p> </p>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
        your Web application running on Netlify. The landing page should include
        the following: Your full name and section Links to each of the lab
        assignments Link to the Kambaz application Links to all relevant source
        code repositories The Kambaz application should include a link to
        navigate back to the landing page.
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" type="number" defaultValue={100} />
          </td>
        </tr>
        <p></p>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select defaultValue="Assignment" id="wd-group">
              <option value="Assignment">ASSIGNMENT</option>{" "}
              <option value="Project">PROJECT</option>{" "}
              <option value="Exam">EXAM</option>
              <option value="Quiz">QUIZ</option>
            </select>
          </td>
        </tr>

        <p></p>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as"> Display Grade as</label>
          </td>
          <td>
            <select defaultValue="Percentage" id="wd-display-grade-as">
              <option value="Percentage">Percentage</option>{" "}
              <option value="Letter">Letter</option>{" "}
            </select>
          </td>
        </tr>
        <p></p>

        <p></p>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type"> Submission Type</label>
          </td>
          <td>
            <select defaultValue="Online" id="wd-submission-type">
              <option value="Online">Online</option>{" "}
              <option value="OnPaper">On Paper</option>{" "}
            </select>
          </td>
        </tr>
        <p></p>
        <tr>
          <td align="right" valign="top">
            <label>Online Entry Options</label>
          </td>
          <td>
            <input type="checkbox" name="check-entry" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Only</label>
            <br />
            <input type="checkbox" name="check-entry" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label>
            <br />
            <input
              type="checkbox"
              name="check-entry"
              id="wd-media-recordings"
            />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />
            <input
              type="checkbox"
              name="check-entry"
              id="wd-student-annotation"
            />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br />
            <input type="checkbox" name="check-entry" id="wd-file-upload" />
            <label htmlFor="wd-file-upload	"> File Uploads</label>
          </td>
        </tr>
        <p></p>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign to</label>
          </td>
          <td>
            <input id="wd-assign-to" defaultValue="Everyone" />
          </td>
        </tr>
        <p></p>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-due-date">Due</label>
          </td>
          <td>
            <input id="wd-due-date" type="date" defaultValue="2024-05-13" />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-from">Available from</label>
          </td>
          <td>
            <input
              id="wd-available-from"
              type="date"
              defaultValue="2024-05-06"
            />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-until">Until</label>
          </td>
          <td>
            <input
              id="wd-available-until"
              type="date"
              defaultValue="2024-05-20"
            />
          </td>
        </tr>
      </table>
      <hr />
      {/* Buttons */}
      <div style={{ textAlign: "right" }}>
        <button>Cancel</button>
        <button>Save</button>
      </div>
    </div>
  );
}

//		wd-available-from	wd-available-until	wd-name
