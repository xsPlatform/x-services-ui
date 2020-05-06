import React, { useState } from 'react';
import { func } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Typography, MenuItem, Menu } from '@material-ui/core';
import {
  Menu as MenuIcon,
  AccountCircle,
  MoreVert as MoreIcon,
  ExitToAppOutlined,
  VpnKey,
} from '@material-ui/icons';
import Drawer from '../../molecules/MaterialDrawer';
import { ToolbarMUI } from './ToolbarMUI';
import { ImageBox } from './ImageBox';

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

const Main = ({ redirect, onExit }) => {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleChangeMenu = (menu) => {
    redirect(menu);
  };

  const handleExit = () => {
    handleMobileMenuClose();
    onExit();
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const redirectAndCloseMobile = (path) => {
    redirect(path);
    handleMobileMenuClose();
  };

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={() => redirectAndCloseMobile('/data')} datatest="btn_myaccount">
        <IconButton aria-label="minha conta" color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Minha conta</p>
      </MenuItem>
      <MenuItem
        onClick={() => redirectAndCloseMobile('/reset-password')}
        datatest="btn_reset_password"
      >
        <IconButton aria-label="reset_password" color="inherit">
          <VpnKey />
        </IconButton>
        <p>Redefinir senha</p>
      </MenuItem>
      <MenuItem onClick={handleExit} datatest="btn_exit">
        <IconButton aria-label="sair" color="inherit">
          <ExitToAppOutlined />
        </IconButton>
        <p>Sair</p>
      </MenuItem>
      <MenuItem datatest="user_name">
        <Typography variant="subtitle2" noWrap datatest="user_name">
          {/* {client.fullName && client.fullName.toUpperCase()} */}
        </Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ boxShadow: 'none', backgroundColor: '#ffffff' }}>
        <ToolbarMUI style={{ justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={() => setOpenMenu(true)}
              datatest="btn_menu"
            >
              <MenuIcon />
            </IconButton>
            <ImageBox>
              <img
                src="https://frontend-xservices-assets.s3-us-west-2.amazonaws.com/img/logoUp.png"
                alt="logo-up-service"
                style={{ cursor: 'pointer' }}
                width={80}
                height={80}
              />
            </ImageBox>
          </div>
          <div>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
              datatest="btn_options"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </ToolbarMUI>
      </AppBar>
      {renderMobileMenu}
      <Drawer
        open={openMenu}
        closeMenu={() => setOpenMenu(false)}
        clickItemMenu={handleChangeMenu}
      />
    </div>
  );
};

Main.propTypes = {
  redirect: func.isRequired,
  onExit: func.isRequired,
};

export default Main;
