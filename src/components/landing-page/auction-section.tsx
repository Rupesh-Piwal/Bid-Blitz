"use client";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import WordPullUp from "../ui/word-pull-up";

const AuctionSection = () => {
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
    <section
      id="live-auctions"
      className="py-20 bg-gradient-to-r from-[#E0E6F8] to-[#FBF7F4]"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
<WordPullUp
      className="text-4xl font-bold tracking-[-0.02em] text-black"
      words="Live Auctions Happening Now!"
    />
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              title: "Vintage Timepiece",
              currentBid: "$1,200",
              timeLeft: "2h 15m",
              image: "/placeholder.svg",
            },
            {
              title: "Modern Art Masterpiece",
              currentBid: "$5,500",
              timeLeft: "4h 30m",
              image: "/placeholder.svg",
            },
            {
              title: "Rare Comic Collection",
              currentBid: "$800",
              timeLeft: "1h 45m",
              image: "/placeholder.svg",
            },
          ].map((auction, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              variants={fadeIn}
            >
              <div className="relative w-full aspect-square mb-4 rounded-md overflow-hidden">
                <Image
                  src={auction.image}
                  alt={auction.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{auction.title}</h3>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>Current Bid: {auction.currentBid}</span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" /> {auction.timeLeft}
                </span>
              </div>
              <Button className="w-full mt-4 bg-[#79A0F2] hover:bg-[#79A0F2]/85 text-white">
                Place Bid
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AuctionSection;
