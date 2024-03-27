import { NavLink } from "react-router-dom";

const Header = () => {
    const links=<>
    <li><NavLink to='/' className='text-[18px] font-normal'>Home</NavLink></li>
    <li><NavLink to='/listedBooks' className='text-[18px] font-normal'>Listed Books</NavLink></li>
    <li><NavLink to='/pageToRead' className='text-[18px] font-normal'>Page to Read</NavLink></li>
    <li><NavLink to='*' className='text-[18px] font-normal'>Blank</NavLink></li>
    <li><NavLink to='/aboutUs' className='text-[18px] font-normal'>FAQ</NavLink></li>
    </>
    return (
        <div className="my-10">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-bold">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-6">
                    <button className="bg-[#23BE0A] px-5 py-3 rounded-lg text-white">Sign In</button>
                    <button className="bg-[#59C6D2] px-5 py-3 rounded-lg text-white">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Header;