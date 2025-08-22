import '../../App.css';
import { NavLink } from 'react-router-dom';
import Button from '../../components/Button';
import CompanyLoop from '../../components/CompanyLoop';
import Hero from './Hero';
import Anniversary from './Anniversary';
import Statistics from './Statistics';
import FairieSignup from './FairieSignup';
import MailListSignup from './MailListSignup';

export default function TemporaryLanding() {
    return (
        <div>
            <Hero />
            <CompanyLoop className='mt-6'/>
            <div className="py-10 md:px-20 flex flex-col items-center gap-10">
                <NavLink to={'/companies'}>
                    <Button variant="outline" size="lg">
                        <span>Browse All Exhibitors</span>
                    </Button>
                </NavLink>
                <div className="w-full max-w-[90%] md:max-w-4xl lg:max-w-6xl">
                    <Anniversary />
                    <Statistics className="my-20" />
                    <FairieSignup />
                    <MailListSignup />
                </div>
            </div>
        </div>
    );
}
