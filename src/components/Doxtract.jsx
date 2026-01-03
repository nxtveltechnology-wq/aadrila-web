import React from 'react';
import ProductCard from './ProductCard';
import DocumentScanImg from '../assets/OIP.jpg';

const Doxtract = () => {
    const product = {
        name: 'Doxtract',
        title: 'Extract, Validate, and Process Documents with Ease',
        image: DocumentScanImg,
        badgeGradient: 'bg-gradient-to-r from-[#a05a2c] to-orange-600',
        buttonColor: 'bg-[#3b5998] hover:bg-[#2d4373]',
        features: [
            'OCR and NLP-based data extraction.',
            'Handles unstructured documents across industries.',
            'Validates fields using external data sources.'
        ],
        benefits: [
            'Process 10,000+ documents in minutes.',
            'Achieve 99% data accuracy with AI-driven validation.'
        ]
    };

    return (
        <div className="mb-32">
            <ProductCard product={product} imagePosition="right" />
        </div>
    );
};

export default Doxtract;
