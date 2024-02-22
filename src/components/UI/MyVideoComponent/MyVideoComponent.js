import React, {useState} from "react";
import { Suspense } from "react";
const LazyReactPlayer = React.lazy(() => import("react-player"));

const MyVideoComponent = ({ videoSrc, width, height }) => {
    const [showControls, setShowControls] = useState(false);

  return (
    <div
    onMouseEnter={() => setShowControls(true)}
    onMouseLeave={() => setShowControls(false)}
    >
      <Suspense fallback={<div>Loading...</div>}>
      <LazyReactPlayer
        url={videoSrc}
        width={width}
        height={height}
        playing
        muted={true}
        loop
        controls={showControls}
        config={{
            youtube: {
              playerVars: { 'vq': 'hd1080' } 
            }
          }}
      />
      </Suspense>
    
    </div>
  );
};
export default MyVideoComponent;
