import { getVideos } from "@/api";
import { QueryKeys, Videos } from "@/types";
import { Loader } from "@mantine/core";
import { createContext, ReactNode, useContext } from "react";
import { RefetchOptions, RefetchQueryFilters, useQuery } from "react-query";

const VideoContext = createContext<{
    videos: Videos[],
    refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => any;
    //@ts-ignore
}>(null)

function VideosContextProvider({ children }: { children: ReactNode }) {
    const { data, isLoading, refetch } = useQuery(QueryKeys.videos, getVideos)

    return <VideoContext.Provider
        value={{
            videos: data, refetch
        }}
    >
        {isLoading ? <Loader /> : children}
    </VideoContext.Provider>
}

const useVideo = () => useContext(VideoContext)

export { useVideo, VideosContextProvider }