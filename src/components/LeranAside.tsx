
import {NavLink } from 'react-router-dom';

const Aside = () => {
    return (
        <aside className='mx-1 max-w-48 '>
           <nav className=' my-0 text-xl'>
            <ul className='flex flex-col space-y-5'>
                    <li className='hover:text-red-400 duration-500 w-full hover:bg-[#555555] p-2 rounded-md'>
                        <NavLink to="/learn" end>Quick Start</NavLink>
                    </li>
                    <li className='hover:text-red-400 duration-500 w-full hover:bg-[#555555] p-2 rounded-md'>
                        <NavLink to="/learn/Installation">Installation</NavLink>
                    </li>
                    <li className='hover:text-red-400 duration-500 w-full hover:bg-[#555555] p-2 rounded-md'>
                        <NavLink to="/learn/Thinking-In-React">Thinking-In-React</NavLink>
                    </li>
                
                </ul>
           </nav>
        </aside>
    );
};

export default Aside;

