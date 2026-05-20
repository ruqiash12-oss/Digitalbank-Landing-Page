import  { useState } from 'react';
import Logo from '../assets/images/logo-dark.svg';
import menuIcon from '../assets/images/icon-hamburger.svg';
import closeIcon from '../assets/images/icon-close.svg';
import {Box, Modal,List,ListItem,ListItemButton,ListItemText} from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  
  // 1. تحديث المصفوفة لإضافة مسار (path) لكل صفحة، وخاصية end لـ Home
  const menuItems = [
    { text: 'Home', path: '/', end: true },
    { text: 'About', path: '/about' },
    { text: 'Contact', path: '/contact' },
    { text: 'Blog', path: '/blog' },
    { text: 'Careers', path: '/careers' },
  ];

  return (
    <nav className="bg-white relative p-6 shadow-md flex items-center justify-between md:px-6 md:py-4">
      <div className="container mx-auto flex md:justify-around items-center">
        {/* Logo */}
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-7 text-white">
          <li><NavLink 
            end 
            to="/" 
            className={({ isActive }) => isActive ? "text-green-400" : "text-gray-400 hover:text-green-400"}>
            Home
          </NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-green-400" : "text-gray-400 hover:text-green-400"}>About</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-green-400" : "text-gray-400 hover:text-green-400"}>Contact</NavLink></li>
          <li><NavLink to="/blog" className={({ isActive }) => isActive ? "text-green-400" : "text-gray-400 hover:text-green-400"}>Blog</NavLink></li>
          <li><NavLink to="/careers" className={({ isActive }) => isActive ? "text-green-400" : "text-gray-400 hover:text-green-400"}>Careers</NavLink></li>
        </ul>
        
        <button className="hidden bg-gradient-to-bl from-green-500 to-cyan-400 hover:from-green-600 hover:to-cyan-500 text-white py-3 px-9 font-semibold text-base rounded-full md:inline-block shadow-md shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/50 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer">
          Request Invite
        </button>
      </div>

      <div className="navbar-menu-container">
        <button className="inline-flex justify-center align-center w-7 h-4 p-0 md:hidden" onClick={() => setOpen(!open)}>
          <img src={open ? closeIcon : menuIcon} alt="Menu" />
        </button>
        
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '100px', backgroundColor: 'rgba(0, 0, 0, 0.1)'}}
        >
          <Box
            sx={{
              width: 'calc(100% - 40px)',
              maxWidth: '350px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: 24,
              p: 2,
            }}
            role="presentation"
            onClick={() => setOpen(false)}
            onKeyDown={() => setOpen(false)}
          >
            <List sx={{width:'100%', padding:0}}>
              {menuItems.map((item) => (
                <ListItem key={item.text} disablePadding>
                  {/* 2. ربط الـ NavLink بـ ListItemButton وتنسيق حالة التفعيل النشطة */}
                  <ListItemButton
                    component={NavLink}
                    to={item.path}
                    end={item.end}
                    sx={{
                      textAlign: 'center',
                      margin: '4px 0',
                      borderRadius: '4px',
                      color: 'text.secondary', // اللون الافتراضي للخط
                      '&.active': {
                        color: 'hsl(136, 64%, 51%)', // اللون الأخضر عند التفعيل
                        fontWeight: 'bold',
                      },
                      '&:hover': {
                        color: 'hsl(136, 64%, 51%)',
                      },
                    }}
                  >
                    <ListItemText primary={item.text} sx={{ textAlign: 'center' }} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Modal>
      </div>
    </nav>
  );
}
