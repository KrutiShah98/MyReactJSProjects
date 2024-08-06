import React, { useEffect, useState } from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PeopleIcon from '@mui/icons-material/People';
import FeedIcon from '@mui/icons-material/Feed';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import Sheet from '@mui/joy/Sheet';
import { Button, Table } from '@mui/material';
import { collection, deleteDoc, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import {
   TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from '@mui/material';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('1', 159, 6.0, 24, 4.0),
  createData('2', 237, 9.0, 37, 4.3),
  createData('3', 262, 16.0, 24, 6.0),
  createData('4', 305, 3.7, 67, 4.3),
];


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function AdminDashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [usersdata, setUsersdata] = useState(false);

  const [allUsers, setAllusers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchAllusers();
}, [])

const fetchAllusers = async () => {
    const querySnapshots = await getDocs(collection(db, "Student"))
    console.log("---------->QuerySnapshot", querySnapshots);


    const users = [];

    querySnapshots.forEach((doc) => {
        users.push({ uid: doc.id, ...doc.data() })

    })

    setAllusers(users);
    console.log("...>users", users);
}

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleAllUsers = () => {
    // console.log("hello");
    setUsersdata(!usersdata)

  }
  const deleteUser=async(userid)=>{
    console.log("--->delete User",userid);
    const selectedUser = getDoc(doc(db,"Student",userid))
    await deleteDoc(doc(db,"Student",userid)); // it will remove from firestore 

    selectedUser.deleteUser;
    // remove from array 
    const newArray =allUsers.filter(user => user.uid !== userid)
    setAllusers(newArray);
    console.log(newArray);
}
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} sx={{ backgroundColor: "#EBCED0", color: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              ADMIN DASHBOARD
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />

          <List>
            <ListItem onClick={handleAllUsers} className='listitem'>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              ALL USERS
            </ListItem>
          </List>

          <List>
            <ListItem className='listitem'>
              <ListItemIcon>
                <FeedIcon />
              </ListItemIcon>
              ALL POSTS
            </ListItem>
          </List>

          <List>
            <ListItem className='listitem'  onClick={() => navigate(`/adminlogin`)}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              SIGN OUT
            </ListItem>
          </List>

        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <Typography paragraph>

          </Typography>
          <Typography paragraph>

          </Typography>
        </Main>
      </Box>



      {/*======================== DASHBOARD=========================  */}
      {usersdata ?
        <Box sx={{ width: '60%', margin: '0 auto' ,paddingLeft:'10px'}}>
          <Sheet
            variant="outlined"
            sx={{
              '--TableCell-height': '40px',
              '--TableHeader-height': 'calc(1 * var(--TableCell-height))',
              '--Table-firstColumnWidth': '80px',
              '--Table-lastColumnWidth': '144px',
              '--TableRow-stripeBackground': 'rgba(0 0 0 / 0.04)',
              '--TableRow-hoverBackground': 'rgba(0 0 0 / 0.08)',
              overflow: 'auto',
              background: (theme) => `
       linear-gradient(to right, ${theme.vars.palette.background.surface} 30%, rgba(255, 255, 255, 0)),
       linear-gradient(to right, rgba(255, 255, 255, 0), ${theme.vars.palette.background.surface} 70%) 0 100%,
       radial-gradient(farthest-side at 0 50%, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0)),
       radial-gradient(farthest-side at 100% 50%, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0)) 0 100%`,
              backgroundSize: `
       40px calc(100% - var(--TableCell-height)), 
       40px calc(100% - var(--TableCell-height)), 
       14px calc(100% - var(--TableCell-height)), 
       14px calc(100% - var(--TableCell-height))`,
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'local, local, scroll, scroll',
              backgroundPosition: `
       var(--Table-firstColumnWidth) var(--TableCell-height), 
       calc(100% - var(--Table-lastColumnWidth)) var(--TableCell-height), 
       var(--Table-firstColumnWidth) var(--TableCell-height), 
       calc(100% - var(--Table-lastColumnWidth)) var(--TableCell-height)`,
              backgroundColor: 'background.surface',
            }}
          >
           

<TableContainer component={Paper} sx={{ maxHeight: 440 }}>
      <Table
        sx={{
          minWidth: 650,
          border: '1px solid black',
          boxShadow: '1px 0 var(--TableCell-borderColor)',
          backgroundColor: 'rgb(219, 207, 207)',
          textAlign: 'center',
          fontFamily:'fantasy'
        }}
        stickyHeader
        aria-label="sticky table"
      >
        <TableHead>
          <TableRow>
            <TableCell>SR.NO</TableCell>
            <TableCell>IMAGE</TableCell>
            <TableCell>NAME&nbsp;</TableCell>
            <TableCell>EMAIL&nbsp;</TableCell>
            <TableCell colSpan={2}>ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allUsers ? (
            allUsers.map((user, index) => (
              <TableRow key={index} hover>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  {user.Profilepic ? (
                    <img src={user.Profilepic} height={50} width={50} alt="" />
                  ) : (
                    <img
                      src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1718496000&semt=ais_user"
                      height={50}
                      width={50}
                      alt=""
                    />
                  )}
                </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => navigate(`/edit`)}
                  >
                    Edit
                  </Button>
                </TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary" onClick={()=>deleteUser(user.uid)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} align="center">
                NO USERS FOUND
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
          </Sheet>
        </Box>


        // ======
        :
        <h2 style={{margin:'0 auto',textAlign:'center'}}>Welcome to Admin Dashboard</h2>
      }



    </div>
  )
}






