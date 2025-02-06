import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-signup-screen">
      <h1>Profile</h1>
      <Form.Control
        id="wd-username"
        defaultValue="alice"
        placeholder="username"
        className="wd-username mb-2"
      />

      <Form.Control
        defaultValue="123"
        id="wd-password"
        placeholder="password"
        type="password"
        className="mb-2 wd-password"
      />

      <Form.Control
        defaultValue="Alice"
        placeholder="First Name"
        id="wd-firstname"
        className="mb-2"
      />

      <Form.Control
        defaultValue="Wonderland"
        placeholder="Last Name"
        id="wd-lastname"
        className="mb-2"
      />

      <Form.Control
        defaultValue="2000-01-01"
        type="date"
        id="wd-dob"
        className="mb-2"
      />

      <Form.Control
        placeholder="email"
        type="email"
        id="wd-dob"
        defaultValue="alice@wonderland.com"
        className="mb-2"
      />

      <Form.Select className="mb-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </Form.Select>

      <Link
        id="wd-signin-btn"
        to="/Kambaz/Account/Signin"
        className="btn btn-danger w-100 mb-2"
      >
        Sign out
      </Link>
    </div>
  );
}
