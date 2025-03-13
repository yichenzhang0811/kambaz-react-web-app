import { Link, useLocation } from "react-router-dom";
import "../styles.css";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const location = useLocation();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        to="/Kambaz/Account/Signin"
        id="wd-account-signin-link"
        className={`list-group-item border-0 ${
          location.pathname === "/Kambaz/Account/Signin"
            ? "active"
            : "text-danger"
        }`}
      >
        Signin{" "}
      </Link>
      <Link
        to="/Kambaz/Account/Signup"
        id="wd-account-signin-link"
        className={`list-group-item border-0 ${
          location.pathname === "/Kambaz/Account/Signup"
            ? "active"
            : "text-danger"
        }`}
      >
        Signup{" "}
      </Link>
      <Link
        to="/Kambaz/Account/Profile"
        id="wd-account-signin-link"
        className={`list-group-item border-0 ${
          location.pathname === "/Kambaz/Account/Profile"
            ? "active"
            : "text-danger"
        }`}
      >
        Profile{" "}
      </Link>
    </div>
  );
}
