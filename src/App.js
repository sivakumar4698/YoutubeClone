import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Box} from '@mui/material'
import {Navigation,
LandingFeeds ,
VideoInformation, 
ChannelInformation,
Search } from './Components'

const App = () => {
  return (
    <BrowserRouter>
    <Box>
      <Navigation />
      <Routes>
        <Route path = '/' exact element={<LandingFeeds />} />
        <Route path = '/video/:id' exact element={<VideoInformation />} />
        <Route path = '/channel/:id' exact element={<ChannelInformation />} />
        <Route path = '/search/:searchText' exact element={<Search />} />
      </Routes>
    </Box>
    </BrowserRouter>
  )
}

export default App