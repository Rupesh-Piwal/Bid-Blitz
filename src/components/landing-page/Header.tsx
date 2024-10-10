import Link from "next/link";
import { Button } from "../ui/button";
import { Bell, Gavel} from "lucide-react";


const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent bg-opacity-90 backdrop-blur-sm md:px-[100px] ">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
        <span>
          <Gavel className="w-[26px] h-[26px] md:w-[30px] md:h-[30px]"/>
        </span>
          <span className="text-[22px] md:text-[30px] font-bold text-[#000000] ">
            BidBlitz
          </span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link
            href="#live-auctions"
            className="text-gray-600 hover:text-[#79A0F2] transition-colors"
          >
            All Auctions
          </Link>
          <Link
            href="#bidding-thrill"
            className="text-gray-600 hover:text-[#79A0F2] transition-colors"
          >
            Create Auction
          </Link>
          <Link
            href="#testimonials"
            className="text-gray-600 hover:text-[#79A0F2] transition-colors"
          >
            All Auctions
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Bell className="cursor-pointer hover:bg-slate-100 p-1.5 w-[35px] h-[35px] rounded-full" />
          <Button
            variant="outline"
            className="hidden md:inline-flex text-[#79A0F2]"
          >
            Log In
          </Button>
          <Button className="bg-[#79A0F2] hover:bg-[#79A0F2]/85">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
