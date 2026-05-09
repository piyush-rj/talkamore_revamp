import FooterReveal from "@/src/components/FooterRevealEffect";
import LandingFaq from "@/src/components/LandingFaq";
import LandingHeroSection from "@/src/components/LandingHeroSection";
import LandingVoicesSection from "@/src/components/LandingVoicesSection";

export default function Home() {
    return (
        <>
            <div className="w-screen min-h-screen bg-white relative z-100">
                <LandingHeroSection />
                <LandingVoicesSection />
                <LandingFaq />
            </div>
            <FooterReveal />
        </>
    );
}
