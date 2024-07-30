import NavItem from './NavItem';
import navList from '../data/navData';

const NavList = () => {
  return (
    <ul>
        {navList.map((item) => ( <NavItem key={item.objectID} item={item} />
        ))}
    </ul>
  )
}

export default NavList;