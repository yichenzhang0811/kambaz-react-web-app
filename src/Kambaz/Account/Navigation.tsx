import { Link, useLocation } from "react-router-dom";
import "../styles.css";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const location = useLocation();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          to={`/Kambaz/Account/${link}`}
          id={`wd-course-${link.toLowerCase()}-link`}
          className={`list-group-item border border-0 ${
            location.pathname === `/Kambaz/Account/${link}`
              ? "active"
              : "text-danger"
          }`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
