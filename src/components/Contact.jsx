import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-[#a05a2c] font-semibold tracking-wider uppercase text-sm bg-[#a05a2c]/10 px-3 py-1 rounded-full">
                            Contact Us
                        </span>
                        <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mt-6 mb-6 leading-tight">
                            Let's Build Something <span className="text-[#a05a2c]">Great</span> Together
                        </h3>
                        <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                            Have questions about our products or want to schedule a demo? Reach out to our team and we'll get back to you shortly.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-5 group cursor-pointer">
                                <div className="w-14 h-14 bg-[#a05a2c]/10 rounded-2xl flex items-center justify-center text-[#a05a2c] flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <Mail size={28} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-1">Email Us</h4>
                                    <p className="text-gray-600 group-hover:text-[#a05a2c] transition-colors">hello@aadrila.com</p>
                                    <p className="text-gray-600 group-hover:text-[#a05a2c] transition-colors">support@aadrila.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-5 group cursor-pointer">
                                <div className="w-14 h-14 bg-[#a05a2c]/10 rounded-2xl flex items-center justify-center text-[#a05a2c] flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <Phone size={28} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-1">Call Us</h4>
                                    <p className="text-gray-600 group-hover:text-[#a05a2c] transition-colors">+1 (555) 123-4567</p>
                                    <p className="text-gray-600">Mon-Fri from 9am to 6pm</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-5 group cursor-pointer">
                                <div className="w-14 h-14 bg-[#a05a2c]/10 rounded-2xl flex items-center justify-center text-[#a05a2c] flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-1">Visit Us</h4>
                                    <p className="text-gray-600">123 Tech Park Avenue</p>
                                    <p className="text-gray-600">San Francisco, CA 94105</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
                    >
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#a05a2c] focus:ring-4 focus:ring-[#a05a2c]/10 outline-none transition-all" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#a05a2c] focus:ring-4 focus:ring-[#a05a2c]/10 outline-none transition-all" placeholder="Doe" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#a05a2c] focus:ring-4 focus:ring-[#a05a2c]/10 outline-none transition-all" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#a05a2c] focus:ring-4 focus:ring-[#a05a2c]/10 outline-none transition-all bg-white cursor-pointer">
                                    <option>Request a Demo</option>
                                    <option>Product Support</option>
                                    <option>General Inquiry</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#a05a2c] focus:ring-4 focus:ring-[#a05a2c]/10 outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                            </div>
                            <button className="w-full bg-[#a05a2c] hover:bg-[#8c4f26] text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 text-lg">
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
