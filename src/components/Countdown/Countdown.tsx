import React, { useState, useEffect } from 'react';
import Timeunit from './Timeunit';
import '../../App.css';
import { useTranslation } from 'react-i18next';

interface CountdownProps {
    targetDate: Date;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
    const [t] = useTranslation('landing');


    function calculateTimeLeft(currentTimeMillis?: number): TimeLeft | null {
        const now = currentTimeMillis ?? new Date().getTime();
        const difference = targetDate.getTime() - now;
        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return null;
    }

    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft());

    useEffect(() => {
        const tickInterval = 25;
        const timer = setInterval(() => {
            const now = new Date().getTime();
            setTimeLeft(calculateTimeLeft(now));
        }, tickInterval);
        return () => clearInterval(timer);
    }, [targetDate]);

    if (!timeLeft) {
        return <div>See you there 😉</div>;
    }

    return (
        <div
            className="grid gap-4 lg:flex lg:gap-20 grid-cols-2 fadeUp"
        >
            <Timeunit value={timeLeft.days} label={t('days')} />
            <Timeunit value={timeLeft.hours} label={t('hours')} />
            <Timeunit value={timeLeft.minutes} label={t('minutes')} />
            <Timeunit value={timeLeft.seconds} label={t('seconds')} />
        </div>
    );
};

export default Countdown;
