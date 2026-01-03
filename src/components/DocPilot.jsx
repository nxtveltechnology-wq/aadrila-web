import React from 'react';
import ProductCard from './ProductCard';
import DocPilotImg from '../assets/DocPilot.jpg';

const DocPilot = () => {
    const product = {
        name: 'DocPilot',
        title: 'Streamline Document Workflows with Automation',
        image: DocPilotImg,
        badgeGradient: 'bg-gradient-to-r from-orange-500 to-blue-600',
        buttonColor: 'bg-blue-600 hover:bg-blue-700',
        features: [
            'Automates document collection, routing, and task assignments.',
            'Real-time tracking with advanced dashboards.',
            'Seamless integration with enterprise systems via APIs.'
        ],
        benefits: [
            'Reduce turnaround times by 50%.',
            'Improve operational efficiency with minimal manual effort.'
        ]
    };

    return (
        <div className="mb-32">
            <ProductCard product={product} imagePosition="left" />
        </div>
    );
};

export default DocPilot;
