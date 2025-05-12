import ContentWrapper from "@/components/common/content-wrapper";
import HeroSection from "@/components/home/hero-section"
import GithubContribution from "@/components/home/github-contribution";
import SkillsSection from "@/components/home/skills/skills-section";
import ExperienceSection from "@/components/home/experince/landing/exp-section";
import CertificationsSection from "@/components/home/certifications/certifications-section";
import ProjectsSection from "@/components/home/projects/landing/projects-section";
import EducationSection from "@/components/home/education/education-section";
import ServicesSection from "@/components/home/services/services-section";
export default function LandingPage() {
    return (
        <div className="flex flex-col gap-4">
            <HeroSection />
            <GithubContribution />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <CertificationsSection />
            <EducationSection />
            <ServicesSection />
        </div>
    );
}