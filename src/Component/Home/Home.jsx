import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import AboutMe from '../AboutMe/AboutMe';
import SkillsSection from '../SkillsSection/SkillsSection';
import EducationSection from '../EducationSection/EducationSection';
import ProjectsSection from '../ProjectsSection/ProjectsSection';
import ContactSection from '../ContactSection/ContactSection';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }} >
            <HeroSection></HeroSection>
            <AboutMe></AboutMe>
            <SkillsSection></SkillsSection>
            <ProjectsSection></ProjectsSection>
            <EducationSection></EducationSection>
            <ContactSection></ContactSection>
        </motion.div>
    );
};

export default Home;