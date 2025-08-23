import React from 'react';

interface CompanyPageProps {
    temp: string;
}

const CompanyPage: React.FC<CompanyPageProps> = ({ temp }) => {
    //todo
    return <div>{temp}</div>;
};

export default CompanyPage;
