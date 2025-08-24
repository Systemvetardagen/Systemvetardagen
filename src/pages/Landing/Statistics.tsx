import React from 'react';
import CountUp from '../../components/ReactBits/CountUp';

interface StatisticItem {
    value: number | string;
    label: string;
    isCountUp?: boolean;
    showPlus?: boolean;
    duration?: number;
    separator?: string;
}

interface StatisticsProps {
    statistics?: StatisticItem[];
    className?: string;
}

const defaultStatistics: StatisticItem[] = [
    {
        value: 1000,
        label: 'Visitors',
        isCountUp: true,
        showPlus: true,
        duration: 1,
        separator: ',',
    },
    {
        value: 50,
        label: 'Exhibitors',
        isCountUp: true,
        showPlus: true,
        duration: 1,
        separator: ',',
    },
    {
        value: 30,
        label: 'Years!',
        isCountUp: true,
        showPlus: false,
        duration: 1,
        separator: ',',
    },
    {
        value: 'Unlimited',
        label: 'Opportunities',
        isCountUp: false,
        showPlus: false,
    },
];

const Statistics: React.FC<StatisticsProps> = ({
    statistics = defaultStatistics,
    className = '',
}) => {
    return (
        <div className={`grid grid-cols-2 grid-rows-2 md:flex w-full md:justify-center ${className}`}>
            {statistics.map((stat, index) => (
                <div
                    key={index}
                    className="p-10 rounded-md flex flex-col items-center"
                >
                    <div>
                        {stat.isCountUp && typeof stat.value === 'number' ? (
                            <CountUp
                                from={0}
                                to={stat.value}
                                separator={stat.separator || ','}
                                direction="up"
                                duration={stat.duration || 1}
                                className="text-3xl md:text-5xl font-semibold"
                            />
                        ) : (
                            <span className="text-3xl md:text-5xl font-semibold">
                                {stat.value}
                            </span>
                        )}
                        {stat.showPlus && (
                            <span className="text-3xl md:text-5xl font-semibold">+</span>
                        )}
                    </div>
                    <span className="text-3xl">{stat.label}</span>
                </div>
            ))}
        </div>
    );
};

export default Statistics;
