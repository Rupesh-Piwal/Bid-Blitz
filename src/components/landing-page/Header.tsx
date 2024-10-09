import Link from "next/link";
import { Button } from "../ui/button";
import { Bell } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm border border-sky-100 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-sky-600">BidBlitz</span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link
            href="#live-auctions"
            className="text-gray-600 hover:text-sky-600 transition-colors"
          >
            All Auctions
          </Link>
          <Link
            href="#bidding-thrill"
            className="text-gray-600 hover:text-sky-600 transition-colors"
          >
            Create Auction
          </Link>
          <Link
            href="#testimonials"
            className="text-gray-600 hover:text-sky-600 transition-colors"
          >
            All Auctions
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Bell className="cursor-pointer hover:bg-slate-100 p-1.5 w-[35px] h-[35px] rounded-full" />
          <Button variant="outline" className="hidden md:inline-flex">
            Log In
          </Button>
          <Button className="bg-sky-600 hover:bg-sky-700">Sign Up</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
