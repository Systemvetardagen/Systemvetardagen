import React from 'react';
import { Link } from 'react-router-dom';

interface CompanyCardProps {
    name: string;
    slug: string;
    logoUrl?: string;
    className?: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({
    name,
    slug,
    logoUrl,
    className,
}) => {
    return (
        <div className="bg-white rounded-3xl hover:scale-105 transition-transform duration-100 shadow-xl p-4">
            <Link className="" to={`/companies/${slug}`}>
                {logoUrl ? (
                    <img
                        src={logoUrl}
                        className={`object-contain ${className}`}
                        alt={`${slug} logo`}
                    />
                ) : (
                    <div
                        className={`flex items-center justify-center text-black text-2xl font-semibold${className}`}
                    >
                        {name}
                    </div>
                )}
            </Link>
        </div>
    );
};

export default CompanyCard;
