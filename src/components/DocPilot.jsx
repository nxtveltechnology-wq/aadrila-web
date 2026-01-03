import React from 'react';
import ProductCard from './ProductCard';
import DocPilotImg from '../assets/DocPilot.jpg';

const DocPilot = () => {
    const product = {
        name: 'DocPilot',
        title: 'Streamline Document Workflows with Automation',
        image: DocPilotImg,
        badgeGradient: 'bg-gradient-to-r from-[#a05a2c] to-orange-600',
        buttonColor: 'bg-[#3b5998] hover:bg-[#2d4373]',
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
