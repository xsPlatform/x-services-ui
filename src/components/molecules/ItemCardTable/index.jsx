import React, { useState } from 'react';
import { IconButton, MenuItem, Menu } from '@material-ui/core';
import { MoreVert, Edit, Delete } from '@material-ui/icons';
import { Container } from './Container';

// eslint-disable-next-line react/prop-types
const ItemCardTable = ({ onClickItem }) => {
  const [moreAnchorEl, setMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(moreAnchorEl);

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const handleMenuOpen = (event) => {
    setMoreAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMoreAnchorEl(null);
  };

  const redirectAndCloseMobile = (menuItemName) => {
    onClickItem(menuItemName);
    handleMenuClose();
  };

  const renderMenu = (
    <Menu
      anchorEl={moreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => redirectAndCloseMobile('edit')}>
        <IconButton style={{ padding: '0 10' }} aria-label="Editar" color="inherit">
          <Edit style={{ width: 18 }} />
        </IconButton>
        <p style={{ fontSize: 12 }}>Editar</p>
      </MenuItem>
      <MenuItem onClick={() => redirectAndCloseMobile('remove')}>
        <IconButton style={{ padding: '0 10' }} aria-label="Remover" color="inherit">
          <Delete style={{ width: 18 }} />
        </IconButton>
        <p style={{ fontSize: 12 }}>Remover</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Container>
      <span>Serviços domésticos</span>
      <IconButton
        aria-label="show more"
        aria-controls={mobileMenuId}
        aria-haspopup="true"
        onClick={handleMenuOpen}
        color="inherit"
      >
        <MoreVert style={{ color: '#00909B' }} />
      </IconButton>
      {renderMenu}
    </Container>
  );
};
export { ItemCardTable };
