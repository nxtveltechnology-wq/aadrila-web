import React from 'react';
import ProductCard from './ProductCard';
import DocSimImg from '../assets/Insurance.png';

const DocSim = () => {
    const product = {
        name: 'DocSim',
        title: 'AI-Powered Document Similarity Engine',
        image: DocSimImg,
        badgeGradient: 'bg-gradient-to-r from-[#a05a2c] to-orange-600',
        buttonColor: 'bg-[#3b5998] hover:bg-[#2d4373]',
        features: [
            'Detects near-duplicates and tampered documents.',
            'Identifies fraudulent patterns across large repositories.',
            'Multi-language support for global adaptability.'
        ],
        benefits: [
            'Save 30% time on manual checks.',
            'Reduce document fraud by up to 40%.'
        ]
    };

    return (
        <ProductCard product={product} imagePosition="left" />
    );
};

export default DocSim;
