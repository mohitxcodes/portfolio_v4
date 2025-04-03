import ContentWrapper from "@/components/common/content-wrapper";
import HeroSection from "@/components/landing/hero-section"
import GithubContribution from "@/components/landing/github-contribution";
export default function LandingPage() {
    return (
        <div className="">
            <ContentWrapper>
                <div className="flex flex-col gap-4">
                    <HeroSection />
                    <GithubContribution />
                </div>
            </ContentWrapper>
        </div>
    );
}