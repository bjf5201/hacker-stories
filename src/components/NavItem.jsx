const NavItem = (props) => {
  return (
    <li>
        <a href={props.item.url}>{props.item.title}</a>
    </li>
  );
}

export default NavItem;