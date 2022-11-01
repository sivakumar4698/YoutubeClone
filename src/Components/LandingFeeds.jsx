
import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import SideBar from "./SideBar";
import Videos from "./Videos";
import {FetchAPI} from '../Utilities/RapidAPICalls'

const LandingFeeds = () => {


 const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);


  useEffect(()=> {
    FetchAPI(`search?part=snippet&q=${selectedCategory}`).then((data)=> setVideos(data.items))
  }, [selectedCategory])


  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <SideBar  selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}  />
        
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#000", }}>
          Copyright © 2022 Siva
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "black" }}>
        {selectedCategory} <span style={{ color: "#1febee" }}>videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default LandingFeeds