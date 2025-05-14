
import {NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="flex justify-center">
            <nav className='max-w-full p-2 mx-auto my-7 text-2xl'>
                <ul className='flex items-center gap-20 text-center'>
                    <li className='hover:text-red-400 duration-500'>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className='hover:text-red-400 duration-500'>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li className='hover:text-red-400 duration-500'>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li className='hover:text-red-400 duration-500'>
                        <NavLink to="/learn">Learn</NavLink>
                    </li>
                    <li className='hover:text-red-400 duration-500'>
                        <NavLink to="/contribute">Contribute</NavLink>
                    </li>
                    <li className='hover:text-red-400 duration-500'>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
        
};

export default Navbar;