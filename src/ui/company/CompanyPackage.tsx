import React from 'react';

interface CompanyPackageProps {
    temp: string;
}

const CompanyPackage: React.FC<CompanyPackageProps> = ({ temp }) => {
    //todo
    return <div>{temp}</div>;
};

export default CompanyPackage;
