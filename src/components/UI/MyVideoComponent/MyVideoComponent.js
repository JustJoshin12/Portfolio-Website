import React, { useState } from "react";
import { Suspense } from "react";
const LazyReactPlayer = React.lazy(() => import("react-player"));

const MyVideoComponent = ({ videoSrc, width, height }) => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyReactPlayer
          url={videoSrc}
          width={width}
          height={height}
          playing
          muted={true}
          loop
          config={{
            youtube: {
              playerVars: { vq: "hd1080" },
            },
          }}
        />
      </Suspense>
    </div>
  );
};
export default MyVideoComponent;
