import React from 'react'
import { Outlet } from 'react-router-dom'
import Channel from './Channel'
import ChannelNavigate from './ChannelNavigate'
import { useParams } from "react-router-dom";


const ChannelLayout = () => {
  const { username } = useParams();

  return (
    <>
    <Channel/>
    <ChannelNavigate username={username}/>
    <Outlet />
    </>
    
  )
}

export default ChannelLayout