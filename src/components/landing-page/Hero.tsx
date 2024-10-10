"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import ShinyButton from "../ui/shiny-button";
import BlurIn from "../ui/blur-in";

const Hero = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <motion.div
          className="flex flex-col items-center text-center mb-12"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          <motion.h1
            className="text-[40px] font-bold leading-tight mb-6 text-gray-900"
            variants={fadeIn}
          >
            <BlurIn
              word="Bid, Win, and Thrill with"
              className="font-bold text-black"
            />
            <BlurIn word="BidBlitz" className="font-bold text-[#79A0F2]" />
          </motion.h1>
          <motion.p
            className="text-[17px] text-slate-500 mb-8 max-w-2xl"
            variants={fadeIn}
          >
            Experience the excitement of live auctions from the comfort of your
            home. <span className="text-[#79A0F2]">BidBlitz</span> brings the
            auction house to your fingertips.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            variants={fadeIn}
          >
            <Link href="/auctions">
              <ShinyButton className="bg-[#5e91ff] hover:bg-[#79A0F2]/85 text-white">
                Start Bidding Now
              </ShinyButton>
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          className="relative w-full max-w-[80vw] mx-auto aspect-[16/9] rounded-lg overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src="/placeholder.svg"
            alt="BidBlitz Auction Platform"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-sky-900 bg-opacity-40 flex items-center justify-center">
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-sky-600"
            >
              Explore Auctions
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
