import React, { useEffect, useState } from "react";
// Imported Components ========>
import Left from "./Left";
import Right from "./Right";
import Body from "./Body";
// Imported Types ==========>
import Player from "./Player";
import { playingTrackState } from "../atoms/playerAtom";
import { useRecoilState } from "recoil";

const Dashboard = ({ user }) => {
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

  const chooseTrack = (track) => {
    setPlayingTrack(track);
  };

  return (
    <main className="flex min-h-screen items-baseline min-w-max bg-black lg:pb-24">
      <Left />
      <Body chooseTrack={chooseTrack} />
      <Right chooseTrack={chooseTrack} user={user}/>
      {playingTrack && (
        <div className="fixed bottom-0 z-50 ">
          <Player track={playingTrack} />
        </div>
      )}
    </main>
  );
};

export default Dashboard;
