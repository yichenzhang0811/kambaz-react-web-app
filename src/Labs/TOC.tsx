import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { useLocation } from "react-router";

export default function TOC() {
  const { pathname } = useLocation();

  return (
    <Nav variant="pills" id="wd-toc">
      <Nav.Item>
        <Nav.Link href="#/Labs">Labs</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/Labs/Lab1">Lab 1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        {" "}
        <Nav.Link
          as={Link}
          to="/Labs/Lab2"
          id="wd-a2"
          active={pathname.includes("Lab2")}
        >
          {" "}
          Lab 2{" "}
        </Nav.Link>{" "}
      </Nav.Item>

      <Nav.Item>
        {" "}
        <Nav.Link
          as={Link}
          to="/Labs/Lab3"
          id="wd-a3"
          active={pathname.includes("Lab3")}
        >
          {" "}
          Lab 3{" "}
        </Nav.Link>{" "}
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href="#/Kambaz">Kambaz</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://github.com/yichenzhang0811/kambaz-react-web-app/tree/a2">
          My GitHub Link
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
