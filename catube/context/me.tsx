import { getMe } from "@/api";
import { Me, QueryKeys } from "@/types";
import { Loader } from "@mantine/core";
import { createContext, ReactNode, useContext } from "react";
import { RefetchOptions, RefetchQueryFilters, useQuery } from "react-query";

const MeContext = createContext<{ user: Me, refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => any;}>(
    //@ts-ignore
    null)

const MeContextProvider = ({ children }: { children: ReactNode }) => {
    const { data, isLoading, refetch } = useQuery(QueryKeys.me, getMe)
    return (<MeContext.Provider value={{ user: data, refetch }}>
        {isLoading ? <Loader /> : children}
    </MeContext.Provider>)
}

const useMe = () => useContext(MeContext)

export { MeContextProvider, useMe }