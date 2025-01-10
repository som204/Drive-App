import React from 'react';
import { Box, Container, Typography} from '@mui/material';
import { Link } from 'react-router';

export default function Footer() {
  return (
    <div className='flex flex-col min-w-full'>
    <Box sx={{ backgroundColor: '#1E3A8A', color: '#fff', padding: '20px 0' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: { xs: 'column', md: 'row' } }}>
          <Typography variant="body1" sx={{ marginBottom: { xs: '10px', md: 0 } }}>
            &copy; {new Date().getFullYear()} UrDrive. All rights reserved.
          </Typography>

          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link to="/about" color="inherit" sx={{ textDecoration: 'none' }}>
              About
            </Link>
            <Link to="/contact" color="inherit" sx={{ textDecoration: 'none' }}>
              Contact
            </Link>
            <Link to="/" color="inherit" sx={{ textDecoration: 'none' }}>
              Privacy Policy
            </Link>
            <Link to="/" color="inherit" sx={{ textDecoration: 'none' }}>
              Terms & Conditions
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
    </div>
)};
