'use client';

import { motion } from 'framer-motion';
import { FiArrowRight, FiCode, FiSmartphone, FiLayers, FiSettings } from 'react-icons/fi';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating blobs */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 2,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 4,
            ease: 'easeInOut',
          }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Animated gradient overlay that follows mouse */}
        <motion.div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 40%)`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Animated SVG Graphic */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-8"
          >
            <motion.svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <motion.stop
                    offset="0%"
                    stopColor="#3b82f6"
                    animate={{
                      stopColor: ['#3b82f6', '#8b5cf6', '#ec4899', '#3b82f6'],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  <motion.stop
                    offset="100%"
                    stopColor="#8b5cf6"
                    animate={{
                      stopColor: ['#8b5cf6', '#ec4899', '#3b82f6', '#8b5cf6'],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <motion.stop
                    offset="0%"
                    stopColor="#ec4899"
                    animate={{
                      stopColor: ['#ec4899', '#3b82f6', '#8b5cf6', '#ec4899'],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  <motion.stop
                    offset="100%"
                    stopColor="#8b5cf6"
                    animate={{
                      stopColor: ['#8b5cf6', '#3b82f6', '#ec4899', '#8b5cf6'],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </linearGradient>
              </defs>

              {/* Animated circles */}
              <motion.circle
                cx="50"
                cy="50"
                r="15"
                fill="url(#gradient1)"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.circle
                cx="150"
                cy="50"
                r="15"
                fill="url(#gradient2)"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5,
                  ease: 'easeInOut',
                }}
              />
              <motion.circle
                cx="50"
                cy="150"
                r="15"
                fill="url(#gradient2)"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1,
                  ease: 'easeInOut',
                }}
              />
              <motion.circle
                cx="150"
                cy="150"
                r="15"
                fill="url(#gradient1)"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1.5,
                  ease: 'easeInOut',
                }}
              />

              {/* Center circle */}
              <motion.circle
                cx="100"
                cy="100"
                r="20"
                fill="url(#gradient1)"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  scale: {
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                  rotate: {
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                }}
              />

              {/* Animated connecting lines */}
              <motion.line
                x1="50"
                y1="50"
                x2="100"
                y2="100"
                stroke="url(#gradient1)"
                strokeWidth="2"
                strokeLinecap="round"
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  pathLength: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.line
                x1="150"
                y1="50"
                x2="100"
                y2="100"
                stroke="url(#gradient2)"
                strokeWidth="2"
                strokeLinecap="round"
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  pathLength: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5,
                  ease: 'easeInOut',
                }}
              />
              <motion.line
                x1="50"
                y1="150"
                x2="100"
                y2="100"
                stroke="url(#gradient2)"
                strokeWidth="2"
                strokeLinecap="round"
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  pathLength: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1,
                  ease: 'easeInOut',
                }}
              />
              <motion.line
                x1="150"
                y1="150"
                x2="100"
                y2="100"
                stroke="url(#gradient1)"
                strokeWidth="2"
                strokeLinecap="round"
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  pathLength: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1.5,
                  ease: 'easeInOut',
                }}
              />

              {/* Outer connecting lines */}
              <motion.line
                x1="50"
                y1="50"
                x2="150"
                y2="50"
                stroke="url(#gradient1)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="5,5"
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  strokeDashoffset: [0, 10],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              <motion.line
                x1="50"
                y1="50"
                x2="50"
                y2="150"
                stroke="url(#gradient2)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="5,5"
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  strokeDashoffset: [0, 10],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 0.75,
                  ease: 'linear',
                }}
              />
              <motion.line
                x1="150"
                y1="50"
                x2="150"
                y2="150"
                stroke="url(#gradient1)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="5,5"
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  strokeDashoffset: [0, 10],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 1.5,
                  ease: 'linear',
                }}
              />
              <motion.line
                x1="50"
                y1="150"
                x2="150"
                y2="150"
                stroke="url(#gradient2)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="5,5"
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  strokeDashoffset: [0, 10],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 2.25,
                  ease: 'linear',
                }}
              />
            </motion.svg>
          </motion.div>

          {/* Animated Headline with gradient animation */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight"
          >
            <motion.span
              className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              We Build Websites and Apps
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mt-2"
              animate={{
                backgroundPosition: ['100% 50%', '0% 50%', '100% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              That Help Your Business Grow
            </motion.span>
          </motion.h1>

          {/* Smaller animated paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              We&apos;re a small team of creative developers and designers who love turning ideas
              into real digital products &mdash; fast, reliable, and beautifully built.
            </motion.span>
          </motion.p>

          {/* Enhanced CTA buttons with more animation */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.a
              href="#contact"
              className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium text-base flex items-center gap-2 shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, type: 'spring' }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />
              <span className="relative z-10 flex items-center gap-2">
                Get a Free Quote
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <FiArrowRight />
                </motion.span>
              </span>
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-full font-medium text-base border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, type: 'spring' }}
            >
              Let&apos;s Build Together
            </motion.a>
          </motion.div>

          {/* What We Do Section with enhanced animations */}
          <motion.div
            variants={itemVariants}
            className="mt-20"
          >
            <motion.h2
              className="text-xl md:text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.6 }}
            >
              What We Do
            </motion.h2>
            <motion.p
              className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.8 }}
            >
              Whether you need a website for your business or a mobile app for your startup,
              we&apos;ve got you covered.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { icon: FiCode, title: '💻 Website Development', desc: 'Custom, responsive, and high-performing websites made to impress and convert.' },
                { icon: FiSmartphone, title: '📱 App Development', desc: 'Android and iOS apps built for smooth performance and clean user experience.' },
                { icon: FiLayers, title: '🎨 UI/UX Design', desc: 'Modern, user-friendly designs that make your product look great and feel intuitive.' },
                { icon: FiSettings, title: '🔧 Maintenance & Branding', desc: 'We handle updates, fixes, and branding to keep your product consistent and running smoothly.' },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 2 + index * 0.1,
                    type: 'spring',
                    stiffness: 100,
                  }}
                  className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all group relative overflow-hidden"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Animated background on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  />
                  <motion.div
                    className="relative z-10"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2 + index * 0.3,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: 'easeInOut',
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-base font-medium mb-2 text-gray-800 dark:text-gray-200">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
