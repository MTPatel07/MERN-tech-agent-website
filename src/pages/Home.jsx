import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import ServicesSection from '../components/ServicesSection';
import TechStack from '../components/TechStack';
import ProjectsSection from '../components/ProjectsSection';
import ProcessSection from '../components/ProcessSection';
import InternshipSection from '../components/InternshipSection';
import ReviewsSection from '../components/ReviewsSection';
import CTASection from '../components/CTASection';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const Home = () => {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <TechStack />
      <ProjectsSection />
      <ProcessSection />
      <InternshipSection />
      <ReviewsSection />
      <CTASection />
    </motion.div>
  );
};

export default Home;
