import { motion } from "motion/react";
import { Lock, Zap, TrendingUp, Headphones } from "lucide-react";

const benefits = [
  {
    icon: Lock,
    title: "Secure Architecture",
    description: "Enterprise-grade security with end-to-end encryption and regular audits.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Backend",
    description: "Cloud infrastructure that grows with your business demands.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Optimized for speed with CDN delivery and caching strategies.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "24/7 expert support team ready to assist whenever you need.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by hundreds of businesses worldwide
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
              >
                <benefit.icon className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
