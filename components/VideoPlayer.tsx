import { createIframeLink } from "@/lib/utils";

const VideoPlayer = ({ videoId }: VideoPlayerProps) => {
  // videoId expected to be the Bunny GUID (the value stored in videos.videoId)
  const src = createIframeLink(videoId);

  return (
    <div className="video-player">
      <iframe
        src={src}
        loading="lazy"
        title="Video Player"
        style={{ border: 0, zIndex: 50 }}
        allowFullScreen
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
      />
    </div>
  );
};

export default VideoPlayer;
