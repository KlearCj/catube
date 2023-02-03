import { Videos } from '@/types'
import { Card, Text } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

const VideoCard = ({video}:{video: Videos}) => {
  return (
   <Link
   href={`/watch/${video.videoId}`}
   passHref>
    <Card shadow='sm' p='xl' component='a' href={`/watch/${video.videoId}`}>
        <Text weight={500} size='lg'>
{video.title}
        </Text>
        <Text size='sm'>
            {video.description}
        </Text>
    </Card>
   </Link>
  )
}

export default VideoCard