'use client'
import Image from "next/image";
import Card from "./components/Card";
import { useRef } from "react";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";

export default function Home() {

  const boxref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: boxref,
    offset: ['start start', 'end start']
  })


  return (
    <>
      <div className="h-[50vh]"></div>
      <div className="h-[400vh] max-w-full flex flex-col  mx-0 px-0 relative bg-slate-500" ref={boxref}>
        <div className=" sticky w-full my-0 top-0">
          <div className="h-full">
            <div className="w-full sticky flex flex-col top-0 text-[#231932] text-center h-[100vh] text-[150px] font-normal leading-[150px]">
              <p className=" max-w-[1000px] self-center m-auto">Get ready for game-changing results</p>
              <Card scroll={scrollYProgress} />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[50vh]"></div>
    </>
  );
}
