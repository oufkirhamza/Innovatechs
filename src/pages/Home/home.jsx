
import { FirstSection } from './components/firstSection';
import { PortfolioSection } from './components/portfolio';
import { ServiceSection } from './components/serviceSection';
import { TestimonialsSection } from './components/tetstimonials';
export const HomePage = () => {
    return (
        <>
            <FirstSection/>
            <ServiceSection/>
            <PortfolioSection/>
            <TestimonialsSection/>
        </>
    );
}
