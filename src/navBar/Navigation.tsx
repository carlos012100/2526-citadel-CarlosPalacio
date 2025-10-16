import { Link } from "react-router";

function NavBar()
{
    const links = [
        {name: 'Location', path: '/location'},
        {name: 'Defenses', path: '/defenses'},
        {name: 'Inhabitants', path: '/inhabitants'},
        {name: 'Resources', path: '/Resources'},
        {name: 'History', path: '/history'},

    ]
    return (
        <header className="bg-gray-800 text-white p-4 flex justify-center space-x-4">
            {links.map(link => (
            <Link key={link.path} to={link.path} className="hover:text-blue-400
            px-4 py-2 rounded">
            {link.name}
            </Link>
            ))}
        </header>
    )

    
}
export default NavBar;