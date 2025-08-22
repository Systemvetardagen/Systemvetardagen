import { NavLink } from 'react-router-dom';
import Button from './Button';

const MailListSignup = () => {
    const SignupUrl: string = '/signup';

    return (
        <div className="flex flex-col items-center text-center gap-6 p-6 rounded-md shadow-md">
            <h3 className="font-semibold text-2xl md:text-4xl">
                Join our <span className="text-secondary">Newsletter</span>
            </h3>
            <h4 className="text-lg text-gray-600 font-light">
                Stay updated with the latest news, sneak peeks, and special
                offers from our fair. By signing up, you’ll be the first to know
                what’s happening and never miss out!
            </h4>
            <NavLink to={SignupUrl}>
                <Button size="md" variant='secondary'>Sign Up</Button>
            </NavLink>
        </div>
    );
};

export default MailListSignup;
