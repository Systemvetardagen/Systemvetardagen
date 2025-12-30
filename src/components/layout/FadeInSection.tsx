import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

type Direction = 'fadeUp' | 'fadeDown' | 'fadeRight' | 'fadeLeft';

interface FadeInSectionProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    direction: Direction;
    triggerOnce?: boolean;
    duration?: number; // Duration in milliseconds
    delay?: number; // Delay in milliseconds
    immediate?: boolean;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
    children,
    direction,
    className,
    triggerOnce = true,
    duration = 500,
    delay = 0,
    immediate = false,
    ...props
}) => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: triggerOnce,
    });

    const shouldAnimate: boolean = immediate || inView;

    return (
        <div
            ref={ref}
            className={`opacity-0 ${className || ''} ${
                shouldAnimate ? `opacity-100 ${direction}` : ''
            }`}
            style={{
                '--animation-duration': `${duration}ms`,
                '--animation-delay': `${delay}ms`,
                ...props.style
            } as React.CSSProperties}
            {...props}
        >
            {children}
        </div>
    );
};

export default FadeInSection;
