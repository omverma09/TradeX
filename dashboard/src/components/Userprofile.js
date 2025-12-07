import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Userprofile() {

    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const dropdownRef = useRef(null);  // Ye ek refrence generate karega

    useEffect(() => {
        const handleOutSideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsProfileOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutSideClick);
        return () => document.removeEventListener("mousedown", handleOutSideClick);
    }, []);


    const handleProfileClick = () => {
        setIsProfileOpen(!isProfileOpen);
        console.log(isProfileOpen);
    }

    return (
        <div className='profleContainer' ref={dropdownRef}>
            <div className="profile" onClick={handleProfileClick}>
                <div className="avatar">ZU</div>
                <p className="username">USERID</p>
            </div>


            {/* check if its open or not. */}

            {isProfileOpen && (
                <div className="profile-dropdown">
                    <Link to="/profile" className="dropdown-item">
                        <AccountCircleIcon/><span>My Profile</span>
                    </Link>
                    <Link to="/settings" className="dropdown-item">
                        <AccountBalanceWalletIcon/> 0.00
                    </Link>
                    <Link to="/settings" className="dropdown-item">
                        <FormatListNumberedIcon/> All Orders
                    </Link>
                    <Link to="/settings" className="dropdown-item">
                        <AccountBalanceIcon/> BankBallance
                    </Link>
                    <Link to="/settings" className="dropdown-item">
                        <SupportAgentIcon/> 24 / 7 Support
                    </Link>
                    <Link to="/settings" className="dropdown-item">
                        <ReportProblemIcon/> Report
                    </Link>
                    <div className='logout'>
                        <DarkModeIcon/>
                        <button className="dropdown-item logout-btn">Logout</button>
                    </div>
                </div>
            )}
        </div>
    )
}
