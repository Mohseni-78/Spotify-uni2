import React, { useEffect, useState } from 'react'
import Link from 'next/link'
// Imported Icons ============>
import { HiOutlineViewGridAdd, HiOutlineShieldCheck } from 'react-icons/hi'
import { AiOutlineLogin } from 'react-icons/ai'
import { BiBell } from 'react-icons/bi'
// Imported Components ============>
import DropDown from './DropDown'
// Imported Types ==========>
import RecentlyPlayed from './RecentlyPlayed'
import { topArtist } from '@/Data/Music'



const Right = ({ user,chooseTrack }) => {
  const [topArtists, setTopArtists] = useState([]);
  useEffect(()=>{
    setTopArtists(topArtist)
  },[])

  return (
    <section className="p-4 space-y-8 " >
      <div className="flex space-x-2 items-baseline justify-between  ">
        {/* Icons */}
        {
          user ?
            (
                <div className='flex gap-[15px]'>
                  <div className="flex items-center border-2 border-[#262626] rounded-full h-12 py-1 px-1">
                    <HiOutlineShieldCheck className=" iconStyle" />
                    <DropDown user={user} />
                    <BiBell className="iconStyle" />
                  </div>
                  <div className='rounded-full w-10 h-10 text-white uppercase flex justify-center items-center text-lg bg-[#1DB954] cursor-pointer'>{user.name.slice(0, 1)}</div>
                  </div>
                ) :
                (
                <>
                  Login Btn
                  <Link href="/login" className='w-full'> <button className='px-[30px] bg-gray-200 uppercase text-lg btn rounded-full py-1.5 flex items-center justify-center'>
                    <AiOutlineLogin className='mr-1' />
                    Login
                  </button></Link>
                </>
                )
        }

              </div>
        <div className="bg-[#0D0D0D] border-2 border-[#262626] p-4 rounded-xl space-y-4">
          <div className="flex items-center justify-between gap-2">
            <h4 className="text-white font-semibold text-sm">Top Artists</h4>
            <HiOutlineViewGridAdd className="text-[#686868] h-6 w-6 cursor-pointer" />
          </div>

          <div className="space-y-4 overflow-y-scroll overflow-x-hidden h-[250px] md:h-[400px] scrollbar-hide">
            {
        topArtists.map((artist, index) => (
        <RecentlyPlayed
          key={index}
          artist={artist}
        />
      ))} 
          </div>
          <button className="text-[#CECECE] btn">
            View All
          </button>
        </div>
    </section>
  );
}

export default Right