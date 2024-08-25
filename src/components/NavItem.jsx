import "../components/Styles.css";

// eslint-disable-next-line react/prop-types
const NavItem = ({ navItemName }) => {
  return (
    <li>
      <a href="">{navItemName}</a>
    </li>
  );
};

export default NavItem;
