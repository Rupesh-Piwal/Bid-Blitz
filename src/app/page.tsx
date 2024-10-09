import AuctionSection from "@/components/landing-page/auction-section";
import CreateAccount from "@/components/landing-page/create-account";
import Hero from "@/components/landing-page/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <AuctionSection />
      <CreateAccount />
    </div>
  );
}
