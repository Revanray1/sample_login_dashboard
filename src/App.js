import React ,{useEffect,useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import ChartViewPage from './pages/ChartViewPage';
import CalendarViewPage from './pages/CalendarViewPage';
import './index.css';
import Dashboard from './pages/Dashboard';
import { useAuth } from './context/AuthContext';
import { navigationList, footerNavigation } from './utils/sampleData';


function ProtectedRoute({ element }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/login" />;
}

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [openSideBar, setOpenSieBar] = useState(true);
  const showMenuItems = () => {
    setShowMenu(!showMenu);
  };

  const changeSideBar = () => {
    setOpenSieBar(!openSideBar);
  };
  const { checkAuth } = useAuth();
  useEffect(() => {
    if(checkAuth ){
      checkAuth(); // Check authentication status on load
    }
  }, [checkAuth]);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Define the routes */}
          <Route path="/login" element={<LoginPage />} />
          
            {/* Protected Routes */}
          <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard showMenu={showMenu} openSideBar={openSideBar} showMenuItems={showMenuItems} changeSideBar={changeSideBar} navigationList={navigationList} footerNavigation={footerNavigation} />} />} />
          <Route path="/Home" element={<ProtectedRoute element={<Dashboard showMenu={showMenu} openSideBar={openSideBar} showMenuItems={showMenuItems} changeSideBar={changeSideBar} navigationList={navigationList} footerNavigation={footerNavigation} />} />} />
          <Route path="/Calender"  element={<ProtectedRoute element={<CalendarViewPage showMenu={showMenu} openSideBar={openSideBar} showMenuItems={showMenuItems} changeSideBar={changeSideBar} navigationList={navigationList} footerNavigation={footerNavigation} />} />} />

          {/* Redirect to /login if no match */}
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
