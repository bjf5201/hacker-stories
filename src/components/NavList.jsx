import NavItem from "./NavItem";

const NavList = ({ data }) => {
  return (
    <ul>
        {data.map((item) => ( <NavItem key={item.objectID} item={item} />
        ))}
    </ul>
  )
}

export default NavList;