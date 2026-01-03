import React from 'react';
import DocPilot from './DocPilot';
import Doxtract from './Doxtract';
import DocSim from './DocSim';

const Products = () => {
    return (
        <section id="products" className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <span className="text-[#a05a2c] font-semibold tracking-wider uppercase text-sm bg-[#a05a2c]/10 px-4 py-1.5 rounded-full">
                        Our Products
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 leading-tight">
                         Intelligent Solutions for Your <span className="text-[#a05a2c]">Needs</span>
                    </h2>
                </div>

                <DocPilot />
                <Doxtract />
                <DocSim />
            </div>
        </section>
    );
};

export default Products;
