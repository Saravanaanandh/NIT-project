import { Link } from "react-router-dom"; 
import logo from './../assets/logo.png';
import { BookMarked} from "lucide-react";

const Navbar = () => {  

    return (
        <div className={`fixed top-0 left-0 w-full bg-gray-900 text-white z-10 shadow-md`}>
            <div className="container mx-auto flex justify-between items-center px-6 py-4">
                
                {/* Logo Section */}
                <div className="flex items-center gap-3">
                    <img className="w-10 h-10 rounded-full" src={logo} alt="Shipyard Logo" />
                    <span className="text-xl font-bold uppercase">GALACTIC GATEWAY</span>
                </div>

                {/* Navigation Links */}
                
                <nav className="hidden md:flex space-x-6">
                    <Link to={'/'} className="hover:text-blue-400 transition">HOME</Link>
                    <Link to={'/destination'} className="hover:text-blue-400 transition">DESTINATION</Link>
                    <Link to={'/gallery'} className="hover:text-blue-400 transition">GALLERY </Link>
                    <Link to={'/package'} className="hover:text-blue-400 transition">PACKAGE</Link>
                    <Link to={'/contact'} className="hover:text-blue-400 transition">CONTACT US</Link>
                    <Link to={'/about'} className="hover:text-blue-400 transition">ABOUT US</Link> 
                </nav>
                <div className="flex space-x-4">
                    <button className="px-4 py-2 border border-yellow-500 text-yellow-400 rounded-md hover:bg-yellow-600 hover:text-white transition flex items-center gap-2">
                        <BookMarked size={18} /> Book Now
                    </button>
                </div>
            </div>
            <nav className="px-5 flex text-[11px] justify-between md:hidden">
                <Link to={'/'} className="hover:text-blue-400 transition">HOME</Link>
                <Link to={'/destination'} className="hover:text-blue-400 transition">DESTINATION</Link>
                <Link to={'/gallery'} className="hover:text-blue-400 transition">GALLERY </Link>
                <Link to={'/package'} className="hover:text-blue-400 transition">PACKAGE</Link>
                <Link to={'/contact'} className="hover:text-blue-400 transition">CONTACT US</Link>
                <Link to={'/about'} className="hover:text-blue-400 transition">ABOUT US</Link> 
            </nav> 

            
        </div>
        

    );
};

export default Navbar;
