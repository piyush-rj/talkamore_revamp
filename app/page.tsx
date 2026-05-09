import LandingIphoneSection from "@/src/components/LandingIphoneSection";
import LandingNavbar from "@/src/components/LandingNavbar";
import LandingVoicesSection from "@/src/components/LandingVoicesSection";

export default function Home() {
    return (
        <div className="w-screen min-h-screen bg-white flex flex-col">
            <LandingNavbar />
            <LandingIphoneSection />
            <LandingVoicesSection />
        </div>
    );
}
