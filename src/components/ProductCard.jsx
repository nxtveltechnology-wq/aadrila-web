import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ 
    product, 
    imagePosition = 'left' // 'left' or 'right'
}) => {
    const isImageLeft = imagePosition === 'left';
    
    return (
        <div className={`relative flex flex-col ${isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
            <div className={`absolute top-[-50px] ${isImageLeft ? 'left-[-150px]' : 'right-[-150px]'}  `}>
            <img src="../assets/reference/circle.png" className='w-[600px]' alt="" />
        </div>

        <div className={`absolute -top-10 ${isImageLeft ? 'left-10' : 'right-10'} w-32 h-32 opacity-20 bg-[radial-gradient(#a05a2c_2px,transparent_2px)] [background-size:16px_16px] pointer-events-none`}>
        </div>
            {/* Image */}
            <motion.div
                initial={{ opacity: 0, x: isImageLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 w-full"
            >
                
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                    
                    <img src={product.image} alt={`${product.name} Interface`} className="w-full h-auto object-cover" />
                </div>
            </motion.div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, x: isImageLeft ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1"
            >
                
                
                <div className={`inline-block px-4 py-1.5 rounded-full ${product.badgeGradient} text-white font-semibold text-sm mb-6 shadow-md`}>
                    {product.name}
                </div>
                
                <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {product.title}
                </h4>

                <div className="mb-6">
                    <h5 className="text-lg font-semibold text-gray-700 mb-3">Features:</h5>
                    <ul className="space-y-2 text-gray-600">
                        {product.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <span className="text-gray-400 mt-1.5">•</span>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mb-8">
                    <h5 className="text-lg font-semibold text-gray-700 mb-3">Benefits:</h5>
                    <ul className="space-y-2 text-gray-600">
                        {product.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <span className="text-gray-400 mt-1.5">•</span>
                                <span>{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-wrap gap-4">
                    <button className={`px-6 py-3 rounded-full ${product.buttonColor} text-white font-semibold hover:opacity-90 transition-all shadow-lg shadow-blue-200`}>
                        Learn More
                    </button>
                    <button className={`px-6 py-3 rounded-full ${product.buttonColor} text-white font-semibold hover:opacity-90 transition-all shadow-lg shadow-blue-200`}>
                        Schedule a Demo
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default ProductCard;
