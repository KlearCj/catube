import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { ReactElement } from 'react'
import HomeLayout from '@/layout/Home'
import { NextPage } from 'next'
import { useVideo } from '@/context/videos'
import VideoCard from '@/components/VideoCard'
import { SimpleGrid } from '@mantine/core'


const Home = () => {

  const { videos } = useVideo();

  return (
    <div className={styles.container}>
      <SimpleGrid cols={3}>
        {
          (videos || []).map((video) => {
            return <VideoCard key={video.videoId} video={video} />


          })
        }
      </SimpleGrid>
    </div>
  )
}

export default Home;

Home.getLayout = (page: ReactElement) => {
  return <HomeLayout>
    {page}
  </HomeLayout>
}
