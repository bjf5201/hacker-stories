const NavItem = ({
  item: {
    objectID,
    ...item},
  }) => {
  return (
    <li>
        <a href={item.url}>{item.title}</a>
    </li>
  );
}

export default NavItem;