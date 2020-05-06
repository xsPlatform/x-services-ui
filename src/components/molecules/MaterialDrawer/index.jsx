import React, { useState, useEffect } from 'react';
import { bool, func } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { Assignment, Dashboard, Help } from '@material-ui/icons';
import { ImageBox } from './ImageBox';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const DrawerMenu = ({ open, closeMenu, clickItemMenu }) => {
  const classes = useStyles();
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(open);
  }, [open]);

  const toggleDrawer = (openDrawer) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setShow(openDrawer);
    closeMenu();
  };

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ImageBox>
          <img
            src="https://frontend-xservices-assets.s3-us-west-2.amazonaws.com/img/logoUp.png"
            alt="logo-up-service"
            style={{ cursor: 'pointer' }}
            width={80}
            height={80}
          />
        </ImageBox>
        <ListItem button onClick={() => clickItemMenu('/')} datatest="btn_menu_dashboard">
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => clickItemMenu('/my-orders')} datatest="btn_menu_my_orders">
          <ListItemIcon>
            <Assignment />
          </ListItemIcon>
          <ListItemText primary="Meus Pedidos" />
        </ListItem>
        <ListItem button onClick={() => clickItemMenu('/help')} datatest="btn_menu_help">
          <ListItemIcon>
            <Help />
          </ListItemIcon>
          <ListItemText primary="Ajuda" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <Drawer open={show} onClose={toggleDrawer(false)}>
        {sideList()}
      </Drawer>
    </>
  );
};

DrawerMenu.propTypes = {
  open: bool.isRequired,
  closeMenu: func.isRequired,
  clickItemMenu: func.isRequired,
};

export default DrawerMenu;
