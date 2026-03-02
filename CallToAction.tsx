import { motion } from "motion/react";
import { Phone, Mail, ArrowRight } from "lucide-react";

export function CallToAction() {
  return (
    <section id="contact" className="py-20 sm:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Let's Build Your Online Store
            </h2>
            <p className="text-lg sm:text-xl text-blue-50 mb-12">
              Ready to transform your business with a powerful e-commerce platform? Get in touch with our team today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="tel:+1234567890"
                className="flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>+1 (234) 567-890</span>
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="mailto:contact@techstore.com"
                className="flex items-center gap-3 bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all border-2 border-white/30"
              >
                <Mail className="w-5 h-5" />
                <span>contact@techstore.com</span>
              </motion.a>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <span>Schedule a Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
