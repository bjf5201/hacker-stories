import NavItem from "./NavItem";

const NavList = (props) => {
  return (
    <ul>
        {props.list.map((item) => ( <NavItem key={item.objectID} item={item} />
        ))}
    </ul>
  )
}

export default NavList;