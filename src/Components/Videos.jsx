import React from 'react'
import { Stack, Box } from "@mui/material";
import VideoDisplay from './VideoDisplay';
import ChannelDisplay from './ChannelDisplay';
import Loader from './Loader'
const Videos = ({videos, direction}) => {

  if(!videos?.length) return <Loader />;
  
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={0.5}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoDisplay video={item} /> }
          {item.id.channelId && <ChannelDisplay channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos