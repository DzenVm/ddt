import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SearchForm from '@/components/SearchForm';
import Benefits from '@/components/Benefits/Benefits';
import FAQ  from '@/components/FAQ'; 
import CTA from '@/components/CTA';
import Stats from '@/components/Stats';



/** Strona główna — HotelFinder Polska */
const HomePage: React.FC = () => (
  <>
    <Header />
    <Hero />
     <FAQ />
    <SearchForm />
     <Stats />
    <Benefits />
    <CTA />  
  </>
);

export default HomePage;
