import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SocialFeed from './pages/SocialFeed';
import JobPortal from './pages/JobPortal';
import Opportunities from './pages/Opportunities';
import SuccessStories from './pages/SuccessStories';
import Courses from './pages/Courses';
import Events from './pages/Events';
import Membership from './pages/Membership';
import Profile from './pages/Profile';
import Messages from './pages/Messages';
import VideoCall from './pages/VideoCall';
import Groups from './pages/Groups';
import Feedback from './pages/Feedback';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {isAuthenticated && <Navbar onLogout={handleLogout} />}
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/login" 
              element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/" replace />} 
            />
            <Route 
              path="/signup" 
              element={!isAuthenticated ? <Signup onLogin={handleLogin} /> : <Navigate to="/" replace />} 
            />
            {/* Protected Routes */}
            {[
              { path: "/", element: <Home /> },
              { path: "/about", element: <About /> },
              { path: "/contact", element: <Contact /> },
              { path: "/jobs", element: <JobPortal /> },
              { path: "/feed", element:<SocialFeed/>},
              { path: "/opportunities", element: <Opportunities /> },
              { path: "/success-stories", element: <SuccessStories /> },
              { path: "/courses", element: <Courses /> },
              { path: "/events", element: <Events /> },
              { path: "/membership", element: <Membership /> },
              { path: "/profile", element: <Profile /> },
              { path: "/messages", element: <Messages /> },
              { path: "/video-call", element: <VideoCall /> },
              { path: "/groups", element: <Groups /> },
              { path: "/feedback", element: <Feedback /> }
            ].map(({ path, element }) => (
              <Route
                key={path}
                path={path}
                element={isAuthenticated ? element : <Navigate to="/login" replace />}
              />
            ))}
          </Routes>
        </main>
        {isAuthenticated && <Footer />}
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </Router>
  );
}

export default App;