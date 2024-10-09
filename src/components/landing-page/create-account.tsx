"use client";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const CreateAccount = () => {
  return (
    <section className="py-20 bg-sky-50">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold mb-8 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to Start Bidding?
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Join thousands of satisfied users and experience the thrill of online
          auctions today!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white">
            Create Your Free Account
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CreateAccount;
