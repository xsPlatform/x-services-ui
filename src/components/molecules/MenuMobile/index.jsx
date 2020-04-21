import React from 'react';
import { func } from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Work from '@material-ui/icons/Work';
import ExitToApp from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import Help from '@material-ui/icons/Help';
import GroupIcon from '@material-ui/icons/Group';
import VerifiedUser from '@material-ui/icons/VerifiedUser';

export const MenuMobile = ({ onClickIcon }) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
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
      <MenuItem onClick={() => onClickIcon('/about')}>
        <IconButton color="inherit">
          <GroupIcon />
        </IconButton>
        <p>Sobre nós</p>
      </MenuItem>
      <MenuItem onClick={() => onClickIcon('/work')}>
        <IconButton color="inherit">
          <Work />
        </IconButton>
        <p>Trabalhe no app</p>
      </MenuItem>
      <MenuItem onClick={() => onClickIcon('/signin')}>
        <IconButton color="inherit">
          <ExitToApp />
        </IconButton>
        <p>Entrar</p>
      </MenuItem>
      <MenuItem onClick={() => onClickIcon('/help')}>
        <IconButton color="inherit">
          <Help />
        </IconButton>
        <p>Ajuda</p>
      </MenuItem>
      <MenuItem onClick={() => onClickIcon('/privacy-statement')}>
        <IconButton color="inherit">
          <VerifiedUser />
        </IconButton>
        <p>Política de privacidade</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <IconButton
        aria-label="show menu"
        aria-controls={mobileMenuId}
        aria-haspopup="true"
        onClick={handleMobileMenuOpen}
        color="inherit"
      >
        <MenuIcon style={{ color: '#fff' }} />
      </IconButton>
      {renderMobileMenu}
    </>
  );
};

MenuMobile.propTypes = {
  onClickIcon: func.isRequired,
};
