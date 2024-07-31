import NavItem from './NavItem';
import navList from '../data/navData';

const NavList = () => {
  return (
    <ul>
      {navList.map((item) => (
        <NavItem
          key={item.objectID}
          url={item.url}
          title={item.title} />
        ))}
    </ul>
  )
}

export default NavList;