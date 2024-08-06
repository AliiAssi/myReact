import React, { useState, useEffect } from "react";
import LoginPopup from "../components/AuthPopup/LoginPopup";
import RegisterPopup from "../components/AuthPopup/RegisterPopup";
import { useLocation, useNavigate } from 'react-router-dom';
import DashPopup from "../components/AuthPopup/DashPopup";
import { useSelector } from "react-redux";
import ProductList from "../components/ProductList/ProductList";

export default function Home() {
  const location = useLocation();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.value);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    setIsLoginOpen(queryParams.get('login') === 'true');
    setIsRegisterOpen(queryParams.get('register') === 'true');
    setIsDashboardOpen(queryParams.get('dash') === 'true');
  }, [location.search]);

  const closePopups = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
    setIsDashboardOpen(false);
    navigate('/');
  };

  return (
    <>
      {(isLoginOpen || isRegisterOpen || isDashboardOpen) && (
        <div className="relative bg-gray-100 flex flex-col items-center justify-center">
          {isLoginOpen && <LoginPopup isOpen={isLoginOpen} onClose={closePopups} />}
          {isRegisterOpen && <RegisterPopup isOpen={isRegisterOpen} onClose={closePopups} />}
          {isDashboardOpen && <DashPopup isOpen={isDashboardOpen} onClose={closePopups} />}
        </div>
      )}
      {!isLoginOpen && !isRegisterOpen && !isDashboardOpen && (
        <div className="relative flex flex-col justify-center items-center">
          {user ? (
            <h1 className="text-3xl font-bold">Welcome, {user.firstName}!</h1>
          ) : (
            <h1 className="text-3xl font-bold">Welcome to My Website!</h1>
          )}
          <ProductList />
        </div>
      )}
    </>
  );
}
