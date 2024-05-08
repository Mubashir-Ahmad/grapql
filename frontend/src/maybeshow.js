import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";

const MayBeShowNav = ({children}) => {
    
    const location = useLocation();
    const [showNav, setShowNav] = useState(true);
    useEffect(() => {
        if (location.pathname === "/login" || location.pathname=== "/register" || location.pathname==="/" || location.pathname==="/forgot" || location.pathname==="/otp") {
            setShowNav(false);
        } else {
            setShowNav(true);
        }
    }, [location])
    
    return (
        // <div>
        <>
        {showNav && children}
        </>
        // </div>
    );
    }

export default MayBeShowNav;