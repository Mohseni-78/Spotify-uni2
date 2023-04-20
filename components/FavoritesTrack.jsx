import { favoritesTracksState, playingTrackState } from "@/atoms/playerAtom";
import React from "react";
import { useRecoilState } from "recoil";
import Track from "./Track";
import Player from "./Player";

export const FavoritesTrack = () => {
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

  const [favoriteTrack, setFavoriteTracks] =
    useRecoilState(favoritesTracksState);
  return (
    <>
      <div className="grid px-[10rem]">
        <h1 className="text-[#1DB954] text-2xl py-[2rem]">
          My Favorites Music
        </h1>
        {favoriteTrack.length !== 0 ? (
          favoriteTrack.map((track) => <Track key={track.id} track={track} />)
        ) : (
          <p className="text-white text-4xl w-[50] m-auto ">Nothing to show</p>
        )}
      </div>
      {playingTrack && (
        <div className="fixed bottom-0 z-50 ">
          <Player track={playingTrack} />
        </div>
      )}
    </>
  );
};
