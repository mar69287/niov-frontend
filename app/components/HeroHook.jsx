'use client';
import GradientBox from "./GradientBox";
import { motion } from 'framer-motion';

const HeroHook = () => {
  return (
    <GradientBox className="bg-gradient-to-t rounded-md p-[1px] lg:p-[1.6px] w-max mb-1 cursor-pointer">
        <motion.div
            className="bg-white rounded-md p-[1px] md:px-2 lg:p-2"
        >
            <p className="text-xs md:text-sm lg:text-base">The Spotify of Consumer Data</p>
        </motion.div>
    </GradientBox>
  )
}

export default HeroHook
