import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import CssBaseline from "@mui/material/CssBaseline"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import List from "@mui/material/List"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import MailIcon from "@mui/icons-material/Mail"
import DirectionsCarFilledRoundedIcon from '@mui/icons-material/DirectionsCarFilledRounded';
import EvStationRoundedIcon from '@mui/icons-material/EvStationRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import RecentActorsIcon from "@mui/icons-material/RecentActors"
import AirportShuttleRoundedIcon from '@mui/icons-material/AirportShuttleRounded';
import GroupIcon from "@mui/icons-material/Group"
import TheatersIcon from "@mui/icons-material/Theaters"
import { createTheme, ThemeProvider } from "@mui/material"
import { Link } from "react-router-dom"
import LoginIcon from "@mui/icons-material/Login"
import GroupAddIcon from "@mui/icons-material/GroupAdd"
import { useContext } from "react"
import CarsContext from "../utils/CarsContext"

const drawerWidth = 240

export default function PermanentDrawerLeft() {
  const { logout } = useContext(CarsContext)
  return (
    <ThemeProvider
      theme={createTheme({
        components: {
          MuiListItemButton: {
            defaultProps: {
              disableTouchRipple: true,
            },
          },
        },
        palette: {
          mode: "dark",
          primary: { main: "rgb(102, 157, 246)" },
          background: { paper: "rgb(5, 30, 52)" },
        },
      })}
    >
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <DirectionsCarFilledRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="CARLA dashboard" />
          </ListItem>
        </List>
  
        <List>
          <Link to="/cars">
            <ListItem button>
              <ListItemIcon>
              <EvStationRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="cars" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
          <Link to="/makes">
            <ListItem button>
              <ListItemIcon>
              <LocalShippingRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="makes" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
          <Link to="/types">
            <ListItem button>
              <ListItemIcon>
                <AirportShuttleRoundedIcon  />
              </ListItemIcon>
              <ListItemText primary="types" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List style={{ marginTop: "auto" }}>
          {localStorage.tokenDashboardFilms ? (
            <Link to="/login">
              <ListItem button>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="logout" sx={{ color: "white", textDecoration: "none" }} onClick={logout} />
              </ListItem>
            </Link>
          ) : (
            <Link to="/login">
              <ListItem button>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="login" sx={{ color: "white", textDecoration: "none" }} />
              </ListItem>
            </Link>
          )}
        </List>
      </Drawer>
    </ThemeProvider>
  )
}
