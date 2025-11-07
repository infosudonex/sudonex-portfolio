'use client';

import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiHeart, FiCheckCircle } from 'react-icons/fi';

const values = [
  {
    icon: FiEye,
    title: 'Transparency',
    description: 'We keep things clear and honest',
  },
  {
    icon: FiCheckCircle,
    title: 'Quality',
    description: "We don't settle for average",
  },
  {
    icon: FiTarget,
    title: 'Commitment',
    description: 'We respect timelines and trust',
  },
  {
    icon: FiHeart,
    title: 'Creativity',
    description: 'Every product deserves a unique touch',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Who We Are */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Who We Are
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We&apos;re a passionate team of developers and designers who love helping businesses grow
            through technology.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-4 leading-relaxed">
            Our focus is simple &mdash; create beautiful, functional, and scalable digital products that make a
            real difference.
          </p>
        </motion.div>

        {/* Our Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 text-center"
        >
          <div className="max-w-3xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
            <FiTarget className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              To empower startups and businesses with smart, affordable, and effective digital solutions.
            </p>
          </div>
        </motion.div>

        {/* Our Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16 text-center"
        >
          <div className="max-w-3xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Our Approach
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              We believe in clear communication, quality work, and building relationships that last.
              Every project we take on gets the same attention to detail &mdash; no shortcuts, no surprises.
            </p>
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-8"
        >
          <h3 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">
            Our Values
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              <div className="inline-flex p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mb-4">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                {value.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
