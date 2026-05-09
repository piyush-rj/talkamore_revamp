import FooterReveal from "@/src/components/FooterRevealEffect";
import LandingFaq from "@/src/components/LandingFaq";
import LandingHeroSection from "@/src/components/LandingHeroSection";
import LandingIphoneSection from "@/src/components/LandingIphoneSection";
import LandingNavbar from "@/src/components/LandingNavbar";
import LandingVoicesSection from "@/src/components/LandingVoicesSection";

export default function Home() {
    return (
        <>
            <div className="w-screen min-h-screen bg-white relative z-100">
                <LandingNavbar />
                <LandingHeroSection />
                <LandingIphoneSection />
                <LandingVoicesSection />
                <LandingFaq />
            </div>
            <FooterReveal />
        </>
    );
}
