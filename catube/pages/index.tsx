import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { ReactElement } from 'react'
import HomeLayout from '@/layout/Home'
import { NextPage } from 'next'


const Home=()=>{
  return (
    <div>

    </div>
  )
}

export default Home;

Home.getLayout=(page: ReactElement)=>{
  return <HomeLayout>
    {page}
  </HomeLayout>
}
