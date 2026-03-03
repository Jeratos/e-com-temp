import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column (Text & CTA) - unchanged */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Powerful E-Commerce Solutions for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Growing Businesses
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Scalable, Secure & Conversion-Focused Online Store Development
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all font-semibold"
              >
                Request Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 rounded-lg shadow-md hover:shadow-lg transition-all font-semibold border-2 border-blue-600"
              >
                Contact Us
              </motion.button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 sm:gap-8">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600 mt-1">Projects</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-gray-600 mt-1">Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600 mt-1">Support</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column (Decorative Elements) - made responsive */}
          <div className="relative h-full w-full min-h-[300px] sm:min-h-[400px] lg:min-h-0">
            {/* Vertical Bars Container */}
            <div className="absolute top-0 left-0 z-10 h-full w-full flex justify-center items-center gap-1 sm:gap-2">
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="h-[90%] w-6 sm:w-8 lg:w-10 rounded-full bg-linear-to-r from-[#70FFC1] via-[#adebd0] to-[#70FFC1] shadow-xl"
              >
                <div className="flex flex-col justify-center items-center h-full text-[10px] sm:text-xs lg:text-sm">
                  <div className="uppercase text-center text-black">c</div>
                  <div className="uppercase text-center text-black">o</div>
                  <div className="uppercase text-center text-black">l</div>
                  <div className="uppercase text-center text-black">l</div>
                  <div className="uppercase text-center text-black">a</div>
                  <div className="uppercase text-center text-black">c</div>
                  <div className="uppercase text-center text-black">t</div>
                  <div className="uppercase text-center text-black">i</div>
                  <div className="uppercase text-center text-black">o</div>
                  <div className="uppercase text-center text-black">n</div>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="h-[95%] w-6 sm:w-8 lg:w-10 rounded-full bg-linear-to-r from-[rgb(249,192,167)] via-[rgb(252,203,182)] to-[rgb(249,192,167)] shadow-xl"
              >
                <div className="flex flex-col justify-center items-center h-full text-[10px] sm:text-xs lg:text-sm">
                  <div className="uppercase text-center text-black">m</div>
                  <div className="uppercase text-center text-black">e</div>
                  <div className="uppercase text-center text-black">r</div>
                  <div className="uppercase text-center text-black">c</div>
                  <div className="uppercase text-center text-black">h</div>
                  <div className="uppercase text-center text-black">a</div>
                  <div className="uppercase text-center text-black">n</div>
                  <div className="uppercase text-center text-black">t</div>
                  <div className="uppercase text-center text-black">s</div>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="h-[100%] w-6 sm:w-8 lg:w-10 rounded-full bg-linear-to-r from-[#FF579F] via-[#e96da3] to-[#FF579F] shadow-xl"
              >
                <div className="flex flex-col justify-center items-center h-full text-[10px] sm:text-xs lg:text-sm">
                  <div className="uppercase text-center text-white">e</div>
                  <div className="uppercase text-center text-white">n</div>
                  <div className="uppercase text-center text-white">t</div>
                  <div className="uppercase text-center text-white">e</div>
                  <div className="uppercase text-center text-white">r</div>
                  <div className="uppercase text-center text-white">p</div>
                  <div className="uppercase text-center text-white">r</div>
                  <div className="uppercase text-center text-white">i</div>
                  <div className="uppercase text-center text-white">s</div>
                  <div className="uppercase text-center text-white">e</div>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="h-[95%] w-6 sm:w-8 lg:w-10 rounded-full bg-linear-to-r from-[#CD8FFE] via-[#d6a9f9] to-[#CD8FFE] shadow-xl"
              >
                <div className="flex flex-col justify-center items-center h-full text-[10px] sm:text-xs lg:text-sm">
                  <div className="uppercase text-center text-black">o</div>
                  <div className="uppercase text-center text-black">n</div>
                  <div className="uppercase text-center text-black">e</div>
                  <div className="uppercase text-center text-black">f</div>
                  <div className="uppercase text-center text-black">o</div>
                  <div className="uppercase text-center text-black">r</div>
                  <div className="uppercase text-center text-black">_</div>
                  <div className="uppercase text-center text-black">a</div>
                  <div className="uppercase text-center text-black">l</div>
                  <div className="uppercase text-center text-black">l</div>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="h-[90%] w-6 sm:w-8 lg:w-10 rounded-full bg-linear-to-r from-[#9FB5FE] via-[#adc1fc] to-[#9FB5FE] shadow-xl"
              >
                <div className="flex flex-col justify-center items-center h-full text-[10px] sm:text-xs lg:text-sm">
                  <div className="uppercase text-center text-black">e</div>
                  <div className="uppercase text-center text-black">_</div>
                  <div className="uppercase text-center text-black">c</div>
                  <div className="uppercase text-center text-black">o</div>
                  <div className="uppercase text-center text-black">m</div>
                  <div className="uppercase text-center text-black">m</div>
                  <div className="uppercase text-center text-black">e</div>
                  <div className="uppercase text-center text-black">r</div>
                  <div className="uppercase text-center text-black">c</div>
                  <div className="uppercase text-center text-black">e</div>
                </div>
              </motion.div>
            </div>

            {/* Floating Images - Responsive sizes & positions */}
            <motion.div
              animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute top-0 right-0 h-40 w-32 sm:h-60 sm:w-48 lg:h-70 lg:w-50 rounded-sm overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzcyNDM5NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt=""
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div
              animate={{ x: [-10, 10, -10] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-10 left-0 h-40 w-48 sm:h-50 sm:w-60 lg:h-50 lg:w-70 rounded-lg overflow-hidden"
            >
              <img
                src="https://futuresoftindia.com/blogs/images/The1916CompanyforWatches.png"
                alt=""
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div
              animate={{ scale: [1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="absolute bottom-10 right-0 h-40 w-48 sm:h-50 sm:w-60 lg:h-50 lg:w-70 rounded-full overflow-hidden"
            >
              <img
                src="https://yourstore.io/readymade-ecommerce-website/assets/img/readymade-banner/Ready-Ecommerce-Design.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div
              animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute z-20 bottom-20 left-10 h-40 w-32 sm:h-50 sm:w-40 lg:h-60 lg:w-50 rounded-[50px] overflow-hidden"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRafat2kcowpHQ50VOXQa4h5r9eOkoA2n8njA&s"
                alt=""
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}