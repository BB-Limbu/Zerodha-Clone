import React, { useState } from 'react';

const  Menu = () => {
    const [selectedMenu, setSelectedMenu] = useState(0);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const handleMenuClick = (index) =>{
        setSelectedMenu(index);
    }

    const handleProfileClick = (index) =>{
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    }

    const menuClass = "menu";
    const activeMenuClass = "menu selected";

}

export default Menu;