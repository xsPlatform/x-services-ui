import React, { useState, useEffect } from 'react';
import { bool, func, arrayOf, shape } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { Assignment, Dashboard } from '@material-ui/icons';
import { ImageBox } from './ImageBox';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const DrawerMenu = ({ open, closeMenu, clickItemMenu, sideMenuItens }) => {
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

  const getIcon = (icon) => {
    switch (icon) {
      case 'dashboard':
        return <Dashboard />;
      case 'category':
        return <Assignment />;
      default:
        return null;
    }
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
        {sideMenuItens.map((item) => (
          <ListItem key={item.icon} button onClick={() => clickItemMenu(item.path)}>
            <ListItemIcon>{getIcon(item.icon)}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
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
  sideMenuItens: arrayOf(shape({})),
};

DrawerMenu.defaultProps = {
  sideMenuItens: [
    {
      path: '/',
      label: 'Dashboard',
      icon: 'dashboard',
    },
  ],
};

export default DrawerMenu;
