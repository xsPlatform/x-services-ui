import React from 'react';
import { node, string, bool, func } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
  Typography,
  IconButton,
  Collapse,
  CardActions,
  CardContent,
  Card,
  Checkbox,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    borderLeft: '6px solid #00909B',
    marginBottom: '20px',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const CardSubCategoryMUI = ({ children, title, handleChangeCheckBox, id, checked }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardActions disableSpacing>
        <Checkbox
          style={{ color: '#00909B' }}
          checked={checked}
          onChange={(e) => handleChangeCheckBox(id, e)}
          name="checkedB"
          color="primary"
        />
        <Typography style={{ marginLeft: 15, color: '#00909B' }} variant="body2">
          {title}
        </Typography>
        <IconButton
          size="small"
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon style={{ color: '#00909B' }} />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>{children}</CardContent>
      </Collapse>
    </Card>
  );
};

CardSubCategoryMUI.propTypes = {
  children: node.isRequired,
  title: string.isRequired,
  handleChangeCheckBox: func.isRequired,
  checked: bool.isRequired,
  id: string.isRequired,
};

export { CardSubCategoryMUI };
