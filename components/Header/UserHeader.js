import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AutoCompleteBox from '../Autocomplete/AutoCompleteBox';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
 // const [anchorEl, setAnchorEl] = React.useState(null);
  const [open,setOpen] = React.useState(false);
 // const open = Boolean(anchorEl);

  const handleChange = (event) => {
    //setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
   // setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={()=>setOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h4">
            iBarber
          </Typography>
           <Container>
           <AutoCompleteBox/>
           </Container>
           
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
                anchor='left'
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setopen(true)}

            >
               
                <h2>heldfggggggggggo</h2>
            </SwipeableDrawer>
    </div>
  );
}