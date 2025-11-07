'use client';

import { motion } from 'framer-motion';
import {
  FiCode,
  FiSmartphone,
  FiLayers,
  FiSettings,
  FiCheck,
} from 'react-icons/fi';

const services = [
  {
    icon: FiCode,
    title: 'Website Development',
    description: 'We design and build professional websites that look great on every device. From portfolio sites to eCommerce stores, we focus on performance, SEO, and user experience &mdash; so your visitors turn into customers.',
    color: 'from-blue-500 to-blue-600',
    included: [
      'Design & development',
      'Responsive layout',
      'Hosting setup',
      'Basic SEO optimization',
    ],
    tech: 'React, Next.js, WordPress, Node.js, AWS',
  },
  {
    icon: FiSmartphone,
    title: 'App Development',
    description: 'We develop mobile apps that work seamlessly across devices and platforms. Our goal is to create apps that are simple to use, visually appealing, and built to scale.',
    color: 'from-purple-500 to-purple-600',
    included: [
      'UI/UX design',
      'Frontend & backend development',
      'API integration',
      'Play Store / App Store launch support',
    ],
    tech: 'Flutter, React Native, Firebase, AWS',
  },
  {
    icon: FiLayers,
    title: 'UI/UX Design',
    description: "Design is not just about how it looks &mdash; it's about how it feels. We design user interfaces that are clean, simple, and built around your users' needs.",
    color: 'from-pink-500 to-pink-600',
    included: [
      'Wireframes and mockups',
      'Interactive prototypes',
      'User flow and usability testing',
      'Style guide and design system',
    ],
    tech: 'Figma, Adobe XD, Framer',
  },
  {
    icon: FiSettings,
    title: 'Branding & Maintenance',
    description: 'We help brands stay consistent and up to date. Whether you need a logo, color palette, or ongoing website support &mdash; we make sure your digital presence stays fresh and functional.',
    color: 'from-green-500 to-green-600',
    included: [
      'Logo & brand kit design',
      'Website maintenance',
      'Monthly updates & improvements',
    ],
    tech: 'Ongoing support & updates',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 bg-white dark:bg-gray-800 rounded-2xl hover:shadow-xl transition-all duration-300 overflow-hidden"
              whileHover={{ y: -5 }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    What's included:
                  </h4>
                  <ul className="space-y-2">
                    {service.included.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                        <FiCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Tech we use:</span> {service.tech}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
