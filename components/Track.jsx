import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { useRecoilState } from "recoil";
import {
  favoritesTracksState,
  playingTrackState,
  playState,
} from "../atoms/playerAtom";
import { ImHeadphones } from "react-icons/im";
import { toast } from "react-hot-toast";

function Track({ track }) {
  const [play, setPlay] = useRecoilState(playState);
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);
  const [favoriteTrack, setFavoriteTrack] =
    useRecoilState(favoritesTracksState);

  const likedHandler = () => {
    setFavoriteTrack((prev) => {
      if (favoriteTrack.find((item) => item.id === track.id)) {
        toast.error(`${track.title} remove from favorites`);
        return favoriteTrack.filter((item) => item.id !== track.id);
      } else {
        toast.success(`${track.title} add to favorites`);
        return [...prev, track];
      }
    });
  };
  const handlePlay = () => {
    setPlayingTrack(track);
    if (track.uri === playingTrack.uri) {
      setPlay((prev) => !prev);
    } else {
      setPlay(true);
    }
  };

  return (
    <div className="flex items-center justify-between space-x-15 cursor-default hover:bg-white/10 py-2 px-4 rounded-lg group transition ease-out">
      <div className="flex items-center">
        <picture>
          <img
            src={track.albumUrl}
            alt=""
            className="rounded-full w-10 h-10 object-cover mr-[10px]"
          />
        </picture>
        <div>
          <h4 className="text-white text-sm font-semibold truncate w-[450px]">
            {track.title}
          </h4>
          <p className="text-[rgb(179,179,179)] text-[13px] font-semibold group-hover:text-white">
            {track.artist}
          </p>
        </div>
      </div>

      <div className="md:ml-auto flex items-center space-x-2.5">
        <div className="text-white flex space-x-1 text-sm font-semibold">
          <ImHeadphones className="text-lg" />
          {/* <h4 className="font-sans">{track.popularity}</h4> */}
        </div>
        <div className="flex items-center rounded-full border-2 border-[#262626] w-[85px] h-10 relative cursor-pointer group-hover:border-white/40">
          <AiFillHeart
            className={`text-xl ml-3 icon ${
              favoriteTrack.includes(track)
                ? "text-[#1ED760]"
                : "text-[#868686]"
            }`}
            onClick={likedHandler}
          />
          {track.uri === playingTrack.uri && play ? (
            <>
              <div
                className="h-10 w-10 rounded-full border border-[#15883e] flex items-center justify-center absolute -right-0.5 bg-[#15883e] icon hover:scale-110"
                onClick={handlePlay}
              >
                <BsFillPauseFill className="text-white text-xl" />
              </div>
            </>
          ) : (
            <>
              <div
                className="h-10 w-10 rounded-full border border-white/60 flex items-center justify-center absolute -right-0.5 hover:bg-[#15883e] hover:border-[#15883e] icon hover:scale-110"
                onClick={handlePlay}
              >
                <BsFillPlayFill className="text-white text-xl ml-[1px]" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Track;
