import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { FetchAPI } from "../Utilities/RapidAPICalls";
import  Videos  from "./Videos";

const Search = () => {
  const [videos, setVideos] = useState(null);
  const { searchText } = useParams();

  useEffect(() => {
    FetchAPI(`search?part=snippet&q=${searchText}`)
      .then((data) => setVideos(data.items))
  }, [searchText]);

  return (
    <Box p={2} minHeight="95vh">
      <Typography variant="h4" fontWeight={900}  color="000" mb={3} ml={{ sm: "100px"}}>
        Search Results for <span style={{ color: "#1febee" }}>{searchText}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Videos videos={videos} />}
      </Box>
    </Box>
  );
};

export default Search;