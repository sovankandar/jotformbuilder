"use client"

import Link from "next/link"
import { ArrowRight, Layout, Palette, Laptop } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const featureCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hover: {
      y: -10,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  }

  const templateCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#5b2a86]">JotformBuilder</h1>
          <nav className="flex items-center gap-6">
            <Link href="#features" className="text-gray-600 hover:text-[#7209b7] transition-colors">
              Features
            </Link>
            <Link href="#templates" className="text-gray-600 hover:text-[#7209b7] transition-colors">
              Templates
            </Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/builder"
                className="bg-[#7209b7] text-white px-4 py-2 rounded-md hover:bg-[#5b2a86] transition-colors"
              >
                Get Started
              </Link>
            </motion.div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#522888]/5 to-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div className="text-center space-y-8" initial="hidden" animate="visible" variants={fadeIn}>
            <motion.h2
              className="text-6xl font-bold text-[#5b2a86] leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Create Professional Forms
              <br />
              Without Code
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Build beautiful, responsive forms in minutes with our intuitive drag-and-drop builder. Perfect for
              surveys, contact forms, and more.
            </motion.p>
            <motion.div
              className="flex justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/builder"
                  className="inline-flex items-center gap-2 bg-[#7209b7] text-white px-8 py-4 rounded-md hover:bg-[#5b2a86] transition-colors text-lg font-medium"
                >
                  Start Building <ArrowRight size={20} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#templates"
                  className="inline-flex items-center gap-2 bg-white text-[#5b2a86] px-8 py-4 rounded-md hover:bg-gray-50 transition-colors text-lg font-medium border border-[#5b2a86]/20"
                >
                  View Templates
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-[#5b2a86] mb-4">Everything You Need to Build Great Forms</h2>
            <p className="text-xl text-gray-600">Powerful features that make form building a breeze</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition-all"
              variants={featureCardVariants}
              whileHover="hover"
            >
              <div className="w-12 h-12 bg-[#7209b7]/10 rounded-lg flex items-center justify-center mb-4">
                <Layout className="text-[#7209b7]" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#5b2a86]">Drag & Drop Builder</h3>
              <p className="text-gray-600">Intuitive drag-and-drop interface makes form building quick and easy</p>
            </motion.div>
            <motion.div
              className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition-all"
              variants={featureCardVariants}
              whileHover="hover"
            >
              <div className="w-12 h-12 bg-[#7209b7]/10 rounded-lg flex items-center justify-center mb-4">
                <Palette className="text-[#7209b7]" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#5b2a86]">Custom Themes</h3>
              <p className="text-gray-600">Customize colors, fonts, and layouts to match your brand perfectly</p>
            </motion.div>
            <motion.div
              className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition-all"
              variants={featureCardVariants}
              whileHover="hover"
            >
              <div className="w-12 h-12 bg-[#7209b7]/10 rounded-lg flex items-center justify-center mb-4">
                <Laptop className="text-[#7209b7]" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#5b2a86]">Responsive Design</h3>
              <p className="text-gray-600">Forms look great on all devices, from desktop to mobile</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-20 bg-[#522888]/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-[#5b2a86] mb-4">Start with a Template</h2>
            <p className="text-xl text-gray-600">Choose from our pre-built templates or start from scratch</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {["Contact Form", "Survey", "Event Registration", "Job Application"].map((template, index) => (
              <motion.div
                key={template}
                className="bg-white rounded-xl shadow-sm border overflow-hidden"
                variants={templateCardVariants}
                whileHover="hover"
              >
                <div className="h-48 bg-gradient-to-br from-[#5b2a86] to-[#04724d] opacity-80"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#5b2a86]">{template}</h3>
                  <p className="text-gray-600 mb-4">Ready-to-use {template.toLowerCase()} template</p>
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link
                      href="/builder"
                      className="text-[#7209b7] hover:text-[#5b2a86] font-medium inline-flex items-center gap-2"
                    >
                      Use Template <ArrowRight size={16} />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-gradient-to-r from-[#5b2a86] to-[#04724d]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.h2
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to Create Your First Form?
          </motion.h2>
          <motion.p
            className="text-xl text-white/80 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join thousands of users who build beautiful forms with JotformBuilder
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/builder"
              className="inline-flex items-center gap-2 bg-white text-[#5b2a86] px-8 py-4 rounded-md hover:bg-gray-100 transition-colors text-lg font-medium"
            >
              Start Building Now <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-[#522888] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">JotformBuilder</h3>
              <p className="text-gray-300">Create beautiful forms with ease</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#features" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#templates" className="hover:text-white transition-colors">
                    Templates
                  </Link>
                </li>
                <li>
                  <Link href="/builder" className="hover:text-white transition-colors">
                    Form Builder
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#5b2a86] mt-8 pt-8 text-center text-gray-300">
            <p>© {new Date().getFullYear()} JotformBuilder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
