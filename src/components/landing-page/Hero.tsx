"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

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
            className="text-5xl font-bold leading-tight mb-6 text-gray-900"
            variants={fadeIn}
          >
            Bid, Win, and Thrill with{" "}
            <span className="text-sky-600">BidBlitz</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 mb-8 max-w-2xl"
            variants={fadeIn}
          >
            Experience the excitement of live auctions from the comfort of your
            home. BidBlitz brings the auction house to your fingertips.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            variants={fadeIn}
          >
            <Link href="/auctions">
              <Button className="bg-sky-600 hover:bg-sky-700 text-white">
                Start Bidding Now
              </Button>
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
