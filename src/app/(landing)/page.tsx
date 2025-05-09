import ContentWrapper from "@/components/common/content-wrapper";
import HeroSection from "@/components/landing/hero-section"
import GithubContribution from "@/components/landing/github-contribution";
import SkillsSection from "@/components/landing/skills/skills-section";
import ExperienceSection from "@/components/landing/experince/exp-section";
import CertificationsSection from "@/components/landing/certifications/certifications-section";
import ProjectsSection from "@/components/landing/projects/projects-section";
import Footer from "@/components/layouts/footer/footer";
export default function LandingPage() {
    return (
        <div className="">
            <ContentWrapper>
                <div className="flex flex-col gap-4">
                    <HeroSection />
                    <GithubContribution />
                    <SkillsSection />
                    <ProjectsSection />
                    <ExperienceSection />
                    <CertificationsSection />
                    <Footer />
                </div>
            </ContentWrapper>
        </div>
    );
}