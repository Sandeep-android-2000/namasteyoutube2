import React, { useContext, useEffect } from "react";

import { Context } from "../context/ContextAPI";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";
import Shimmer from "./Shimmer";
// import {Shimmer } from 'react-shimmer'
const Feed = () => {
    const { loading, searchResults } = useContext(Context);

    useEffect(() => {
        document.getElementById("root").classList.remove("custom-h");
    }, []);

    return (
        <div className="flex flex-row h-[calc(100%-56px)]">
            <LeftNav />
            <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
            {loading && <Shimmer />}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
                    {!loading &&
                        searchResults.map((item) => {
                            if (item.type !== "video") return false;
                            else
                            return (
                                <VideoCard
                                    key={item?.video?.videoId}
                                    video={item?.video}
                                />
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default Feed;
