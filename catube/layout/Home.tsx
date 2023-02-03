import UploadVideos from "@/components/UploadVideos"
import { useMe } from "@/context/me"
import { VideosContextProvider } from "@/context/videos"
import { Anchor, AppShell, Box, Header, Navbar } from "@mantine/core"
import Image from "next/image"
import Link from "next/link"
import React from "react"


const HomeLayout = ({ children }: { children: React.ReactNode }) => {

    const { user, refetch } = useMe()
    return (
        <VideosContextProvider>
            <AppShell padding='md' navbar={<Navbar width={{ base: 10 }} height={500} p='xs'>Side Items</Navbar>}
                header={<Header height={60} p='xs' >
                    <Box sx={() => ({ display: "flex" })}>
                        <Box sx={() => ({ flex: "1" })}>
                        <Image src='/logo.png' alt="logo" width={100} height={40} />
                        </Box>
                        {!user && (<>
                            <Link href='/auth/login' passHref>
                                <Anchor>
                                    Login
                                </Anchor>
                            </Link>
                            <Link href='/auth/register' passHref>
                                <Anchor>
                                    Register
                                </Anchor>
                            </Link>
                        </>)}
                        {user && <UploadVideos />}
                    </Box>
                </Header>}
            >

                {children}
            </AppShell>
        </VideosContextProvider>
    )
}

export default HomeLayout