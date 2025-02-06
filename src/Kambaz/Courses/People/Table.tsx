import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
  const student = [
    {
      id: 1,
      firstname: "Tony",
      lastname: "Stark",
      LoginId: "001234561S",
      Section: "S101",
      Role: "STUDENT",
      LastActivity: "2020-10-01",
      TotalActivity: "10:21:32",
    },
    {
      id: 2,
      firstname: "Bruce",
      lastname: "Wayne",
      LoginId: "001234562S",
      Section: "S101",
      Role: "STUDENT",
      LastActivity: "2020-11-02",
      TotalActivity: "15:21:32",
    },
    {
      id: 3,
      firstname: "Steve",
      lastname: "Rogers",
      LoginId: "001234563S",
      Section: "S101",
      Role: "STUDENT",
      LastActivity: "2020-12-01",
      TotalActivity: "10:24:32",
    },
    {
      id: 4,
      firstname: "Natasha",
      lastname: "Romanoff",
      name: "Thor Odinson",
      LoginId: "001234564S",
      Section: "S101",
      Role: "STUDENT",
      LastActivity: "2020-11-01",
      TotalActivity: "10:22:32",
    },
  ];

  return (
    <div id="wd-people-table">
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {student.map((student, index) => (
            <tr key={index}>
              <td className="wd-full-name text-nowrap">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name">{student.firstname}</span>{" "}
                <span className="wd-last-name">{student.lastname}</span>
              </td>
              <td className="wd-login-id">{student.LoginId}</td>
              <td className="wd-section">{student.Section}</td>
              <td className="wd-role">{student.Role}</td>
              <td className="wd-last-activity">{student.LastActivity}</td>
              <td className="wd-total-activity">{student.TotalActivity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
