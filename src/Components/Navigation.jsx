import React from 'react'
import {Stack} from '@mui/material'
import {Link} from 'react-router-dom'
import { Typography, Box } from "@mui/material";
import logo from '../Utilities/LogoIcon.jpg'
import SearchBar from './SearchBar'

const Navigation = () => {
  return (
    <Stack direction="row" alignItems="center" p={2} sx={{ position:  "top", top: 0, justifyContent: "space-between" }}>
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <h1><span style={{ color: "#1febee",fontWeight:'500', paddingTop:"20px" }}>Laugh <span style={{color:"#000"}}>Factory</span></span></h1>
      <img src={logo} alt="logo" height={75} />
    </Link>
    <SearchBar />
  </Stack>
  )
}

export default Navigation