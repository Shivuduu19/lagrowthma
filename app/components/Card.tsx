import React, { useEffect, useState } from 'react'
import single from '@/public/lagrow/single-star.svg'
import Image from 'next/image'
import { motion, useMotionValueEvent } from 'framer-motion'
import weblomm from '@/public/lagrow/logo-sansmarge-webloom.svg'
import shapr from '@/public/lagrow/logo-client-shapr.svg'
import doublestar from '@/public/lagrow/white-reversed-stars.svg'
import microdn from '@/public/lagrow/logo-microdon-1.png'

const Card = ({ scroll }: any) => {
    const [scrollPos, setScrollPos] = useState(0)
    useMotionValueEvent(scroll, "change", (latest: number) => {
        // console.log("Page scroll: ", latest)
        setScrollPos(latest)
    })


    const scrollvariants = {
        initial: {
            x: '-50px',
            y: '-30px',
            rotate: '-10deg'

        },
        animate: {
            x: '100px',
            y: '-100vh',
            rotate: '30deg'
        }
    }

    const reverseScollVariants = {
        initial: {
            x: '100px',
            y: '-100vh',

            rotate: '30deg'
        },
        animate: {
            x: '-50px',
            y: '-30px',

            rotate: '-10deg'

        },

    }
    const scrollvariants1 = {
        initial: {
            x: '-25px',
            y: '-15px',
            rotate: '-5deg'

        },
        animate: {
            x: '100px',
            y: '-100vh',
            rotate: '30deg'
        }
    }
    const reverseScollVariants1 = {
        initial: {
            x: '100px',
            y: '-100vh',

            rotate: '30deg'
        },
        animate: {
            x: '-25px',
            y: '-15px',

            rotate: '-5deg'

        },

    }
    const scrollvariants2 = {
        initial: {
            x: '0px',
            y: '0px',
            rotate: '0deg'

        },
        animate: {
            x: '100px',
            y: '-100vh',
            rotate: '30deg'
        }
    }
    const reverseScollVariants2 = {
        initial: {
            x: '100px',
            y: '-100vh',

            rotate: '30deg'
        },
        animate: {
            x: '0px',
            y: '0px',

            rotate: '0deg'

        },

    }

    return (
        <>
            <motion.div style={{ transition: 'all 0.5s ease-in' }} initial='initial' animate='animate'
                variants={scroll.get() > 0.75 ? scrollvariants : reverseScollVariants} className="w-[450px] h-[450px] flex flex-col absolute top-[25%] p-[10px] self-center m-auto rounded-[40px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)] bg-[#287DFF] rotate-[-10deg] translate-x-[-50px] translate-y-[-30px]">
                <div className=' h-full relative '>
                    <Image src={single} alt="" className='absolute top-[15px] right-[15px] w-[50px]  block' />
                    <div className='text-[45px] text-[#fff] mt-[90px] text-center font-normal leading-normal'>
                        <p className='text-[130px] text-[#fff] text-center font-extrabold leading-[130px] '>21K</p>
                        <p className='m-0 leading-[1]'>signed deals in {''}
                            <strong className=''>3 weeks</strong>
                            !</p>
                    </div>
                </div>
                <div className='py-[25px] px-[50px] bg-[#fff] rounded-[30px]  '>
                    <Image src={weblomm} alt='' className='max-w-[236px] m-auto' />
                </div>
            </motion.div >

            <motion.div style={{ transition: 'all 0.5s ease-in' }} initial='initial' animate='animate'
                variants={scroll.get() > 0.45 ? scrollvariants1 : reverseScollVariants1} className="w-[450px] h-[450px] flex flex-col absolute top-[25%] p-[10px] self-center m-auto rounded-[40px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)] bg-[#231932] ">
                <div className=' h-full relative '>
                    <Image src={single} alt="" className='absolute top-[15px] right-[15px] w-[50px]  block' />
                    <div className='text-[45px] text-[#ffb4b4] mt-[90px] text-center font-normal leading-normal'>
                        <p className='text-[130px] text-[#fff] text-center font-extrabold leading-[130px] '>76,9%</p>

                        <strong className=''>Reply</strong>
                        {""} rate
                    </div>
                </div>
                <div className='py-[25px] px-[50px] bg-[#fff] rounded-[30px]  '>
                    <Image src={shapr} alt='' className='max-w-[236px] m-auto' />
                </div>
            </motion.div>

            <motion.div style={{ transition: 'all 0.5s ease-in' }} initial='initial' animate='animate'
                variants={scroll.get() > 0.15 ? scrollvariants2 : reverseScollVariants2} className="w-[450px] h-[450px] flex flex-col absolute top-[25%] p-[10px] self-center m-auto rounded-[40px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)] bg-[#ffb4b4] ">
                <div className=' h-full relative '>
                    <Image src={doublestar} alt="" className='absolute top-[30px] right-[30px] w-[75px]  block' />
                    <div className='text-[40px] text-[#231932] mt-[90px] text-center font-normal leading-normal'>
                        <p className='text-[130px] text-[#231932] text-center font-extrabold leading-[130px] '>46%</p>
                        <strong className=''>Activated</strong>
                        {''} leads
                    </div>
                </div>
                <div className='py-[25px] px-[50px] bg-[#fff] rounded-[30px]  '>
                    <Image src={microdn} alt='' className='max-w-[236px] m-auto' />
                </div>
            </motion.div>

        </>
    )
}

export default Card