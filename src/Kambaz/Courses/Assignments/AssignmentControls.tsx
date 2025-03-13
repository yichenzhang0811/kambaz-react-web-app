import { FaPlus } from "react-icons/fa6";
import { Button } from "react-bootstrap";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
export default function AssignmentsControls({
  isFaculty,
}: {
  isFaculty: boolean;
}) {
  const { cid } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <div className="d-flex flex-row">
        <div className="input-group float-left" style={{ width: "50%" }}>
          <span className="input-group-text ">
            {" "}
            <IoSearch />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search ..."
          />
        </div>

        <div id="wd-assignment-controls" className="text-nowrap ms-auto">
          {isFaculty && (
            <>
              <Button
                variant="danger"
                size="lg"
                className="me-1 float-end"
                id="wd-add-module-btn"
                onClick={() =>
                  navigate(`/Kambaz/Courses/${cid}/Assignments/new`)
                }
              >
                <FaPlus
                  className="position-relative me-2"
                  style={{ bottom: "1px" }}
                />
                Assignment
              </Button>

              <Button
                variant="light"
                size="lg"
                className="me-1 float-end"
                id="wd-add-group"
              >
                <FaPlus
                  className="position-relative me-2"
                  style={{ bottom: "1px" }}
                />
                Group
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
