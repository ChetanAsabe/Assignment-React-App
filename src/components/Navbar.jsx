import { useEffect, useState } from "react";
import NavItem from "./NavItem";
import "../components/Styles.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth > 700) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };

    handleSize();

    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return (
    <nav className="navbar">
      <div>
        <h1>Brand Name</h1>
      </div>
      <div>
        {open && (
          <ul className={`navmenu`}>
            <NavItem navItemName={"Home"} />
            <NavItem navItemName={"About"} />
            <NavItem navItemName={"Contact"} />
            <NavItem navItemName={"Account"} />
          </ul>
        )}
      </div>

      <div className="navToggle" onClick={() => setOpen(!open)}>
        <div className="bar">
          <svg
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 18.0048C22 18.5544 21.5544 19 21.0048 19H12.9952C12.4456 19 12 18.5544 12 18.0048C12 17.4552 12.4456 17.0096 12.9952 17.0096H21.0048C21.5544 17.0096 22 17.4552 22 18.0048Z"
              fill="currentColor"
            />
            <path
              d="M22 12.0002C22 12.5499 21.5544 12.9954 21.0048 12.9954H2.99519C2.44556 12.9954 2 12.5499 2 12.0002C2 11.4506 2.44556 11.0051 2.99519 11.0051H21.0048C21.5544 11.0051 22 11.4506 22 12.0002Z"
              fill="currentColor"
            />
            <path
              d="M21.0048 6.99039C21.5544 6.99039 22 6.54482 22 5.99519C22 5.44556 21.5544 5 21.0048 5H8.99519C8.44556 5 8 5.44556 8 5.99519C8 6.54482 8.44556 6.99039 8.99519 6.99039H21.0048Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
