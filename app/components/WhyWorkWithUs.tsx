'use client';

import { motion } from 'framer-motion';
import { FiCheckCircle, FiDollarSign, FiMessageCircle, FiClock, FiUsers, FiHeart } from 'react-icons/fi';

const benefits = [
  {
    icon: FiDollarSign,
    title: 'Transparent pricing and clear communication',
  },
  {
    icon: FiMessageCircle,
    title: 'Fast responses and regular updates',
  },
  {
    icon: FiClock,
    title: 'On-time delivery, every time',
  },
  {
    icon: FiUsers,
    title: 'Experienced and reliable team',
  },
  {
    icon: FiHeart,
    title: 'Long-term client partnerships',
  },
];

export default function WhyWorkWithUs() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Why Work With Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-lg transition-all"
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <div className="flex-shrink-0 p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                {benefit.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

