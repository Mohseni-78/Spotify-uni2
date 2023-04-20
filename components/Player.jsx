import { playState } from "@/atoms/playerAtom";

import { useRecoilState } from "recoil";
import ReactPlayer from "react-player";

function Player({ track }) {
  const [play, setPlay] = useRecoilState(playState);
  return (
    <ReactPlayer
      controls
      url={track.uri}
      playing={play}
      width={1350}
      height={50}
    />
  );
}

export default Player;
