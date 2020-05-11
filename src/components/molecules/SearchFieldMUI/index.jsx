import React from 'react';
import { string, func } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: 38,
    borderRadius: 200,
    background: '#ECECEC 0% 0% no-repeat padding-box',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: 11,
  },
  iconButton: {
    padding: 10,
  },
}));

const SearchFieldMUI = ({ placeholder, onChange, value, ...props }) => {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root} {...props}>
      <SearchIcon style={{ width: 26, heigth: 26, color: '#00909B', marginLeft: 7 }} />
      <InputBase
        className={classes.input}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        inputProps={{ 'aria-label': placeholder }}
      />
    </Paper>
  );
};

SearchFieldMUI.propTypes = {
  placeholder: string.isRequired,
  value: string.isRequired,
  onChange: func.isRequired,
};

export { SearchFieldMUI };
