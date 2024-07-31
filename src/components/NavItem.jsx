const NavItem = ({url, title}) => {
  return (
    <li>
        <a href={url}>{title}</a>
    </li>
  );
}

export default NavItem;