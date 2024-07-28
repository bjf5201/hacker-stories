import NavItem from "./NavItem";

const NavList = (props) => {
  return (
    <ul>
        {props.data.map((item) => ( <NavItem key={item.objectID} item={item} />
        ))}
    </ul>
  )
}

export default NavList;