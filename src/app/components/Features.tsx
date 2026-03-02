import { motion } from "motion/react";
import { CreditCard, Package, ShieldCheck, LayoutDashboard, Smartphone, Search } from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "Payment Gateway Integration",
    description: "Seamless integration with major payment providers for secure transactions.",
  },
  {
    icon: Package,
    title: "Inventory Management",
    description: "Real-time tracking and automated stock updates across all channels.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Checkout",
    description: "PCI-compliant checkout with SSL encryption and fraud protection.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboard",
    description: "Powerful analytics and insights to drive business decisions.",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive Design",
    description: "Optimized experience across all devices and screen sizes.",
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description: "Built-in SEO best practices to maximize organic visibility.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Features
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to build and scale your e-commerce business
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
