import { FaPlus } from "react-icons/fa6";
import { Button, Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const searchBarStyle = {
  width: "",
  borderRadius: "8px",
};

const searchIconStyle = {
  background: "transparent",
  borderRight: "none",
  color: "#6c757d",
};

const inputStyle = {
  borderLeft: "none",
  boxShadow: "none",
  fontSize: "20px",
  padding: "6px 10px",
};

export default function AssignmentsControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <Button
        variant="danger"
        size="lg"
        className="me-1 float-end"
        id="wd-add-module-btn"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </Button>

      <Button
        variant="light"
        size="lg"
        className="me-1 float-end"
        id="wd-add-group"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </Button>
      <InputGroup style={searchBarStyle}>
        <InputGroup.Text style={searchIconStyle}>
          <FaSearch />
        </InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Search for Assignment"
          style={inputStyle}
        />
      </InputGroup>
    </div>
  );
}
