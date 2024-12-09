import { Link, useNavigate } from 'react-router-dom';
import { 
  FaHome, FaBriefcase, FaNewspaper, FaLightbulb, FaGraduationCap, 
  FaCalendarAlt, FaUsers, FaUser, FaComments, FaVideo, FaSignOutAlt 
} from 'react-icons/fa';
import logo from '../assets/luck.svg';

function Navbar({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={logo} alt="Luck League Logo" className="h-12" />
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <NavLink to="/" icon={<FaHome />} text="Home" />
            <NavLink to="/jobs" icon={<FaBriefcase />} text="Jobs" />
            <NavLink to="/feed" icon={<FaNewspaper />} text="Feed" />
            <NavLink to="/opportunities" icon={<FaLightbulb />} text="Opportunities" />
            <NavLink to="/courses" icon={<FaGraduationCap />} text="Courses" />
            <NavLink to="/events" icon={<FaCalendarAlt />} text="Events" />
            <NavLink to="/groups" icon={<FaUsers />} text="Groups" />
            <NavLink to="/messages" icon={<FaComments />} text="Messages" />
            <NavLink to="/video-call" icon={<FaVideo />} text="Video Call" />
            <NavLink to="/profile" icon={<FaUser />} text="Profile" />
            <button
              onClick={handleLogout}
              className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              <FaSignOutAlt className="mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, icon, text }) {
  return (
    <Link
      to={to}
      className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
    >
      <span className="mr-2">{icon}</span>
      {text}
    </Link>
  );
}

export default Navbar;