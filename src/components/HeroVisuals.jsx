import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Kept for other parts, but using plain CSS/JS for this as requested
import Element1 from '../assets/Driving-License.png';
import Element2 from '../assets/Document-Scan.png';
import Element3 from '../assets/Identity-Card.png';
import Element4 from '../assets/Legal-Docs.png';
// Using the same images to populate the carousel
import HeroBg from '../assets/hero-bg.png'; // Just as a placeholder if needed, but we have 3 elements.

const CARDS = [
    { id: 1, image: Element1, title: 'Driving License' },
    { id: 2, image: Element2, title: 'Document Scan' },
    // { id: 3, image: Element3, title: 'Data Analysis' },
    { id: 3, image: Element3, title: 'Identity Card' }, // Duplicate for demo
    { id: 4, image: Element4, title: 'Legal Docs' },       // Duplicate for demo
];

const HeroVisuals = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => prev + 1);
        }, 5000); // Increased duration to allow scanning effect
        return () => clearInterval(interval);
    }, []);

    const getCardStyle = (offset) => {
        // offset = index - currentIndex
        // 0 = center, -1 = left, 1 = right

        const isActive = offset === 0;
        // Base transform for centering: translate(-50%, -50%)
        // Plus carousel offset: translateX(offset * 120%) 
        // We use 120% to give a bit more gap than 110%
        // Plus scale

        let xOffset = offset * 120; // %

        const style = {
            transform: `translate(-50%, -50%) translateX(${xOffset}%) scale(${isActive ? 1.15 : 0.85})`,
            zIndex: isActive ? 10 : 5,
            opacity: Math.abs(offset) > 1 ? 0 : 1, // Hide items beyond neighbors
            filter: isActive ? 'blur(0px)' : 'blur(3px)', // Blur side cards
            transition: 'transform 0.6s ease-in-out, opacity 0.6s ease-in-out, filter 0.6s ease-in-out',
            position: 'absolute',
            top: '50%',
            left: '50%',
        };

        // Edge case: scale down far items even more? No, requirement says scale 0.85 for left/right.
        if (Math.abs(offset) > 1) {
            style.zIndex = 1;
        }

        return style;
    };

    // We render a window of items to allow infinite scrolling effect
    // We render range [currentIndex - 1, currentIndex + 1] plus edges for smooth transition
    // Actually we strictly need to see -1, 0, 1. 
    // But when 0 -> -1, we need 1 -> 0. And 2 -> 1.
    // So we need to render 2 to make it appear from right.
    const visibleRange = [-2, -1, 0, 1, 2];

    return (
        <div className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center">

            {/* Carousel Container */}
            <div className="relative w-full h-full perspective-1000">
                {visibleRange.map(offset => {
                    const index = currentIndex + offset;
                    // Modulo logic to loop through CARDS array indefinitely
                    const cardIndex = ((index % CARDS.length) + CARDS.length) % CARDS.length;
                    const card = CARDS[cardIndex];

                    // We calculate style based on the OFFset from current center
                    const style = getCardStyle(offset);
                    const isActive = offset === 0;

                    return (
                        <div
                            key={index} // Key must be unique for the position in the sliding window to trigger transition? 
                            // No, key must be associated with the "slot" or the "item"?
                            // If key is `index` (e.g. 5, 6, 7), then when we move to 6, 7, 8:
                            // The component 6 stays 6. Its offset changes from 1 to 0. Style updates. CSS transitions.
                            // This is CORRECT.
                            className={`w-48 md:w-60 aspect-[3/4] rounded-xl flex flex-col overflow-hidden relative ${isActive ? 'shadow-[0_0_30px_rgba(59,130,246,0.5)] border-2 border-blue-400/30' : ''}`}
                            style={style}
                        >
                            <div className="h-full w-full relative">
                                <img src={card.image} alt={card.title} className="w-full h-full object-cover" />

                                {/* Scanning Effect Overlay - Only for active card */}
                                {isActive && (
                                    <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden rounded-lg">
                                        <div
                                            className="absolute w-full h-12 bg-gradient-to-b from-blue-400/0 via-blue-500/20 to-blue-500/0 border-b-2 border-blue-400"
                                            style={{
                                                animation: 'scan 2.5s linear infinite',
                                                left: 0,
                                                right: 0
                                            }}
                                        ></div>
                                    </div>
                                )}

                                {/* Name label - Only for active card */}
                                {isActive && (
                                    <div className="absolute bottom-0 inset-x-0 bg-white/90 backdrop-blur-sm p-3 text-center border-t border-gray-100 z-30">
                                        <p className="text-xs font-bold text-gray-800 uppercase tracking-wider">{card.title}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Decoration */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10">
                <div className="w-[150%] h-[150%] bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
            </div>
        </div>
    );
};

export default HeroVisuals;
