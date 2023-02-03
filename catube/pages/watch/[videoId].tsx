import { useRouter } from 'next/router'
import React from 'react'

const WatchVideo= () => {
    const {query}= useRouter()
  return (
    <div>
<video
src={` http://localhost:3001/api/videos/${query.videoId}`}
width='800px'
height='auto'
controls
autoPlay
id='video-player'
/>
    </div>
  )
}

export default WatchVideo