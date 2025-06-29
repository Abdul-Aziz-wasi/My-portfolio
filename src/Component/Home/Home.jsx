import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import AboutMe from '../AboutMe/AboutMe';
import SkillsSection from '../SkillsSection/SkillsSection';
import EducationSection from '../EducationSection/EducationSection';
import ProjectsSection from '../ProjectsSection/ProjectsSection';
import ContactSection from '../ContactSection/ContactSection';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <AboutMe></AboutMe>
            <SkillsSection></SkillsSection>
            <ProjectsSection></ProjectsSection>
            <EducationSection></EducationSection>
            <ContactSection></ContactSection>
        </div>
    );
};

export default Home;