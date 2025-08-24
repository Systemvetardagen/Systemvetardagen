import { JSX } from 'react';
import { PartyPopper, HeartHandshake, Star } from 'lucide-react';
import Button from '../../components/Common/Button';

interface Card {
    icon: JSX.Element;
    title: string;
    subTitle: string;
}

const FairieSignup = () => {
    const SignupUrl: string = '/';
    const cards: Card[] = [
        {
            icon: <HeartHandshake height={48} width={48} color="#325fff" />,
            title: 'Help the Fair',
            subTitle:
                'Support logistics and ensure everything runs smoothly for visitors',
        },
        {
            icon: <Star height={48} width={48} color="#325fff" />,
            title: 'Experience the Fair',
            subTitle:
                'You’ll still have plenty of time to enjoy the events, booths, and activities.',
        },
        {
            icon: <PartyPopper height={48} width={48} color="#325fff" />,
            title: 'Thank You Party',
            subTitle:
                "Celebrate with all Fair'ies at our exclusive appreciation party afterwards!",
        },
    ];
    return (
        <div
            id="fairie"
            className="flex flex-col items-center text-center gap-6 p-6 rounded-md"
        >
            <h3 className="font-semibold text-2xl md:text-4xl">
                Become a <span className="text-primary">Fair&apos;ie</span>
            </h3>
            <h4 className="text-lg text-gray-600 font-light">
                Join the team that makes the fair possible! As a Fair&apos;ie
                you&apos;ll help with the main logistics while still having
                plenty of time to enjoy everything the fair ahs to offer. Plus,
                you&apos;re invited to our special{' '}
                <strong>Thank You Party</strong>
            </h4>
            <div className="flex flex-col md:flex-row gap-6 w-full mt-4 md:justify-center md:items-stretch">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center gap-2 rounded-md shadow-md px-4 py-8"
                    >
                        <div>{card.icon}</div>
                        <h5 className='font-semibold'>{card.title}</h5>
                        <p>{card.subTitle}</p>
                    </div>
                ))}
            </div>
            <a href={SignupUrl} target="_blank" rel="noopener noreferrer">
                <Button size="md">Sign Up</Button>
            </a>
        </div>
    );
};

export default FairieSignup;
