import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className="flex justify-between items-center bg-gradient-to-r from-[#040D12] to-[#1B5778] sm:px-6 md:px-12 lg:px-16 p-4 w-full">
            <Link to={'/'}>
                <h3 className='sm:block md:block hidden font-medium text-stone-200 text-xl hover:text-red-500 transition-all cursor-pointer'>
                    NextTool
                </h3>
            </Link>


            <ul className='flex space-x-4 mx-auto sm:mx-0 md:mx-0 lg:mx-0 xl:mx-0'>
                <li className='font-medium text-lg text-stone-200 hover:text-stone-400 transition-all'>
                    <Link to={'/'}>Home</Link>
                </li>
                <li className='font-medium text-lg text-stone-200 hover:text-stone-400 transition-all'>
                    <Link to={'/about'}>About Me</Link>
                </li>
                <li className='font-medium text-lg text-stone-200 hover:text-stone-400 transition-all'>
                    <Link to={'/projects'}>Projects</Link>
                </li>
                <li className='font-medium text-lg text-stone-200 hover:text-stone-400 transition-all'>
                    <Link to={'/dashboard'}>Dashboard</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header
