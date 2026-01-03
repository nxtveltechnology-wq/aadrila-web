import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Landmark, Heart, ChevronRight } from "lucide-react";

// Brand color constant for reference (Tailwind arbitrary value used in code: #a05a2c)

const industries = [
  {
    id: 1,
    title: "Insurance",
    icon: ShieldCheck,
    desc: "Automate claims processing with accurate document validation and fraud checks.",
  },
  {
    id: 2,
    title: "Lending",
    icon: Landmark,
    desc: "Ensure faster loan approvals with real-time fraud detection and instant verification.",
  },
  {
    id: 3,
    title: "Healthcare",
    icon: Heart,
    desc: "Streamline patient record management and ensure total compliance with HIPAA standards.",
  },
];

const Industries = () => {
  return (
    <div className="relative w-full py-20 px-4 md:px-8 overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#a05a2c]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl px-6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div>

            <div className="absolute top-[-50px] left-0 z-[-1]">
                <img src="../assets/reference/circle.png" className="w-[520px] " alt="" />
            </div>

             <span className="text-[#a05a2c] font-semibold tracking-wider uppercase text-sm bg-[#a05a2c]/10 px-3 py-1 rounded-full">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
              AI-Driven innovation for <span className="text-[#a05a2c]">growth.</span>
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-600 font-medium">
            Industries We Empower
          </p>
          
          <p className="text-gray-500 leading-relaxed text-lg max-w-lg">
            We deliver tailored AI solutions that revolutionize operations across key sectors. From securing financial data to streamlining patient care, our technology builds trust and efficiency.
          </p>

          <div className="flex gap-4 pt-4">
             <button className="flex items-center gap-2 text-[#a05a2c] font-semibold hover:gap-3 transition-all duration-300 group">
                Explore Solutions
                <ChevronRight className="w-5 h-5 group-hover:text-[#a05a2c]" />
             </button>
          </div>
        </motion.div>

        {/* Right Column: Cards */}
        <div className="relative flex flex-col gap-6 ">
           {/* Decorative dots pattern simulated with CSS grid of dots if needed, or simple absolute div */}
           <div className="absolute -top-10 -right-10 w-32 h-32 opacity-20 bg-[radial-gradient(#a05a2c_2px,transparent_2px)] [background-size:16px_16px] pointer-events-none" />

          {industries.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`p-6 md:p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl hover:border-[#a05a2c]/30 transition-all duration-300 md:w-[90%] ${
                index === 1 ? "md:ml-auto" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#a05a2c]/10 text-[#a05a2c] shrink-0">
                  <item.icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Industries;
