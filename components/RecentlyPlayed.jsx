import { useRecoilState } from "recoil";
import { playingTrackState, playState } from "../atoms/playerAtom";

function RecentlyPlayed({ artist }) {


    return (
        <div className="flex items-center space-x-3">
            <picture>
                <img
                    src={artist.image}
                    alt=""
                    className="rounded-full w-[52px] h-[52px] object-cover"
                />
            </picture>
            <div>
                <h4 className="text-white text-[13px] mb-0.5 font-semibold hover:underline cursor-pointer truncate max-w-[150px]">
                    {artist.name}
                </h4>
                {/* <p className="text-xs text-[#686868] font-semibold cursor-pointer hover:underline">
                    {track.artist}
                </p> */}
            </div>
        </div>
    );
}

export default RecentlyPlayed;