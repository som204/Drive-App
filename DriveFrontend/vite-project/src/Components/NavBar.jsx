import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { AccountCircle, ExitToApp, Login } from "@mui/icons-material";
import { useCookies } from "react-cookie";

export default function NavBar() {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false); 
  const [user, setuser] = useState();

  useEffect(() => {
    if (cookies.token) {
      setIsLoggedIn(true);
    }
  }, [cookies]);

  const handleLogoutClick = () => {
    removeCookie("token"); // Remove the token from cookies
    setIsLoggedIn(false); // Update state to reflect the logout
    navigate("/login");
    setProfileMenuOpen(false);
  };

  const handleProfileClick = () => {
    setProfileMenuOpen(!profileMenuOpen); // Toggle profile menu visibility
  };

  const navigateToPage = (page) => {
    navigate(`/${page}`);
    setProfileMenuOpen(false);
  };

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("http://localhost:3000/user/userData", {
          credentials: "include",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const userData = await res.json(); // Parse the response as JSON
        setuser(userData);
      } catch (err) {
        //console.error("Error fetching files:", err);
      }
    }
    fetchUser();
  }, [user]);
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#1E3A8A", // Dark grey background color
        }}
      >
        <Toolbar>
          <Typography
            onClick={() => navigateToPage("")}
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              cursor: "pointer",
              color: "#ffffff", // White text for the title
            }}
          >
            UrDrive
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/* Navigation buttons */}
            <Button
              onClick={() => navigateToPage("about")}
              color="inherit"
              sx={{ color: "#ffffff" }} // White text for buttons
            >
              About
            </Button>
            <Button
              onClick={() => navigateToPage("contact")}
              color="inherit"
              sx={{ color: "#ffffff" }}
            >
              Contact
            </Button>
            <Button
              onClick={() => navigateToPage("files")}
              color="inherit"
              sx={{ color: "#ffffff" }}
            >
              Files
            </Button>

            {/* Conditionally render login or logout button */}

            {!isLoggedIn ? (
              <Button
                onClick={() => navigateToPage("login")}
                color="inherit"
                startIcon={<Login />}
                sx={{ color: "#ffffff" }}
              >
                Login
              </Button>
            ) : (
              <>
                <IconButton
                  onClick={handleProfileClick}
                  color="inherit"
                  size="large"
                  sx={{
                    fontSize: 60,
                    color: "#c4c4c4", // Light grey for profile icon
                    marginLeft: 2,
                  }}
                >
                  <AccountCircle />
                </IconButton>
                {profileMenuOpen && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 70,
                      right: 10,
                      padding: 2,
                      backgroundColor: "white",
                      boxShadow: 2,
                      borderRadius: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography variant="h6" color="black">
                      Username: {user.username}
                    </Typography>
                    <Typography variant="h6" color="black">
                      Email: {user.email}
                    </Typography>
                    <Button
                      onClick={handleLogoutClick}
                      variant="contained"
                      size="small"
                      color="error"
                      startIcon={<ExitToApp />}
                      sx={{ marginTop: 2 }}
                    >
                      Logout
                    </Button>
                  </Box>
                )}
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
