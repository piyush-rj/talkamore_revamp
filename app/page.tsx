import FooterReveal from "@/src/components/FooterRevealEffect";
import HardThingSection from "@/src/components/landing-bubble-sections/HardThingSection";
import MemorySection from "@/src/components/landing-bubble-sections/MemorySection";
import SectionHeader from "@/src/components/SectionHeader";
import SilenceSection from "@/src/components/landing-bubble-sections/SilenceSection";
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
                <div className="flex flex-col gap-y-28 py-24">
                    <SectionHeader
                        title="built to listen"
                        description="what a real conversation actually does."
                    />
                    <HardThingSection />
                    <SilenceSection />
                    <MemorySection />
                </div>
                <LandingFaq />
            </div>
            <FooterReveal />
        </>
    );
}
