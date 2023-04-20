import React from "react";
import Link from "next/link";
// Imported Icons ============>
import { AiFillHome, AiFillClockCircle } from "react-icons/ai";
import { RiCompassFill } from "react-icons/ri";
import { FaMicrophoneAlt } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";

const Left = () => {
  return (
    <section
      className="fixed top-0 z-30 flex flex-col p-4  items-center
    bg-black w-[90px] h-screen space-y-8"
    >
      <Link href="/">
        <picture>
          <img
            className="cursor-pointer"
            src="https://rb.gy/xkacau"
            width={56}
            height={56}
            alt=""
          />
        </picture>
      </Link>
      <div className="space-y-8 grid">
        <Link href="/">
          <AiFillHome className="iconStyle" />
        </Link>
        <Link href="/favorites" >
          <AiFillHeart className="iconStyle " />
        </Link>
        <Link href="/">
          <FaMicrophoneAlt className="iconStyle" />
        </Link>
        <Link href="/">
          <BsBarChartFill className="iconStyle" />
        </Link>
        <Link href="/">
          <AiFillClockCircle className="iconStyle" />
        </Link>
        <Link href="/">
          <BiDotsHorizontalRounded className="iconStyle" />
        </Link>
      </div>
    </section>
  );
};

export default Left;
