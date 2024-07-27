const navList = [
    {
        title: 'Home',
        url: '/',
        objectID: 0,
    },
    {
        title: 'About',
        url: '/about',
        objectID: 1,
    },
    {
        title: 'Contact',
        url: '/contact',
        objectID: 2,
    },
    {
        title: 'Services',
        url: '/services',
        objectID: 3,
    },
]

const Nav = () => {
  return (
    <ul>
        {navList.map(function (item) {
            return <li key={item.objectID}>
                <a href={item.url}>{item.title}</a></li>
        })}
    </ul>
  )
}

export default Nav;