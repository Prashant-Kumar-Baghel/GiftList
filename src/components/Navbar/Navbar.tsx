

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

interface NavbarProps {
  window?: () => Window;
  authorize: boolean;
}

const drawerWidth = 240;

const Navbar: React.FC<NavbarProps> = (props) => {
  const { window, authorize } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div className="flex flex-col gap-5 items-center h-full font-semibold text-base">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/"><img className="w-[100px] rounded-[4rem]" src="/images/Frame.png" alt="Logo" /></Link>
          </Typography>
          <div className="justify-center items-center gap-10 flex">
            <div className="px-2 bg-gradient-to-r from-sky-400 to-fuchsia-500 rounded-[7px] justify-center items-center gap-1 flex">
              <img src="/images/Buttons.png" alt="" className="h-[17px] w-[17px]" />
              <div className="text-center text-white text-[15px] font-semibold font-['Poppins'] leading-[33px]">
                AI Gift Ideas
              </div>
            </div>
          </div>
          <div>Lists</div>
          <div>Gift Exchange</div>
          <div>Shop</div>
          <div>Occasions</div>
          <div>Ecards</div>
          <div>Blog</div>
          <div>FAQ</div>
        </div>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar sx={{ background: "#F7F7F7", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' }, color: "black" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}
          >
            <Link to="/" ><img className="w-[100px] rounded-[4rem]" src="/images/Frame.png" alt="Logo" /></Link>
          </Typography>
          <List sx={{ display: { xs: 'none', md: 'flex' }, alignItems: "center", gap: "20px" }}>
            <div className="flex gap-[32px] justify-between items-center h-full font-semibold text-base mr-[14vw]">
              <div className="justify-center items-center gap-10 flex">
                <div className="px-2 bg-gradient-to-r from-sky-400 to-fuchsia-500 rounded-[7px] justify-center items-center gap-1 flex">
                  <img src="/images/Vector.png" alt="" className='h-[17px] w-[17px]' />
                  <div className="text-center text-white text-[15px] font-semibold font-['Poppins'] leading-[33px]">
                    AI Gift Ideas
                  </div>
                </div>
              </div>
              <div className="text-black">Lists</div>
              <div className="text-black">Gift Exchange</div>
              <div className="text-black">Shop</div>
              <div className="text-black">Occasions</div>
              <div className="text-black">Ecards</div>
              <div className="text-black">Blog</div>
              <div className="text-black">FAQ</div>
            </div>
          </List>
          <Box sx={{ display: { xs: 'flex', md: 'flex' }, alignItems: 'center', gap: 1.5 }}>
            {authorize && <div className="flex items-center gap-1.5 font-semibold">
              <div className="text-black">Jane Smith</div>
              <img src="/images/Userpic.png" alt="" />
            </div>}
            {!authorize && <div className="flex items-center gap-1.5 font-semibold h-[40px]">
              <button className="text-black h-full w-[100px] px-4 rounded-lg">Log in</button>
              <button className="bg-black text-white h-full w-[100px] px-4 rounded-lg">Sign Up</button>
            </div>}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navbar;


