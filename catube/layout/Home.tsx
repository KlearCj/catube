import { AppShell, Box, Header, Navbar } from "@mantine/core"
import React from "react"

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <AppShell padding='md' navbar={<Navbar width={{ base: 300 }} height={500} p='xs'>Side Items</Navbar>}
            header={<Header height={60} p='xs' >
                <Box>
                    <Box>
                        Logo
                    </Box>
                </Box>
            </Header>}
        >
            {children}
        </AppShell>
    )
}

export default HomeLayout