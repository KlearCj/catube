import UploadVideos from "@/components/UploadVideos"
import { useMe } from "@/context/me"
import { Anchor, AppShell, Box, Header, Navbar } from "@mantine/core"
import Link from "next/link"
import React from "react"

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  
  const {user, refetch}=useMe()
    return (
        <AppShell padding='md' navbar={<Navbar width={{ base: 300 }} height={500} p='xs'>Side Items</Navbar>}
            header={<Header height={60} p='xs' >
                <Box>
                    <Box>
                        Logo
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
                    {user && <UploadVideos/>}
                </Box>
            </Header>}
        >
            {children}
        </AppShell>
    )
}

export default HomeLayout