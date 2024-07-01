import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import BottomNavigation from "@mui/material/BottomNavigation";

function Footer() {
  return (
    <BottomNavigation
      position="static"
      component="footer"
      sx={{ bottom: 0, mt: 2 }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="body1" color="inherit">
              © {new Date().getFullYear()} Hey I am Laxman Deora
            </Typography>
          </Box>
          <Box>
            <Link href="#" color="inherit" sx={{ mx: 1 }}>
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" sx={{ mx: 1 }}>
              Terms of Service
            </Link>
            <Link href="#" color="inherit" sx={{ mx: 1 }}>
              Contact Us
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </BottomNavigation>
  );
}

export default Footer;
