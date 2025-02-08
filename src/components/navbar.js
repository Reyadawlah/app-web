import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Brightness4Icon from '@mui/icons-material/Brightness4';

const pages = [
  { name: 'Products', path: '/' },
  { name: 'Privacy Policy', path: '/privacy-policy' },
  { name: 'Contact Us', path: '/contact' }
];

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (path) => {
    setAnchorElNav(null);
    if (path) {
      navigate(path);
    }
  };

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: '#0B0B0D',
        boxShadow: 'none'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Brightness4Icon 
            sx={{ 
              display: { xs: 'none', md: 'flex' }, 
              mr: 1,
              color: '#B4BCC8'
            }} 
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => navigate('/')}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'DM Serif Display',
              fontWeight: 400,
              letterSpacing: '.3rem',
              color: '#B4BCC8',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
            VESPERA TECHNOLOGIES
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: '#B4BCC8' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={() => handleCloseNavMenu()}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiPaper-root': {
                  backgroundColor: '#0B0B0D',
                },
                '& .MuiMenuItem-root': {
                  color: '#B4BCC8',
                }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={() => handleCloseNavMenu(page.path)}>
                  <Typography sx={{ textAlign: 'center', color: '#B4BCC8' }}>{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Brightness4Icon 
            sx={{ 
              display: { xs: 'flex', md: 'none' }, 
              mr: 1,
              color: '#B4BCC8'
            }} 
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={() => navigate('/')}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'DM Serif Display',
              fontWeight: 400,
              letterSpacing: '.3rem',
              color: '#B4BCC8',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
            VESPERA TECHNOLOGIES
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => handleCloseNavMenu(page.path)}
                sx={{ 
                  my: 2, 
                  color: '#B4BCC8', 
                  display: 'block',
                  fontFamily: 'DM Serif Text',
                  '&:hover': {
                    color: '#898BA7'
                  }
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;