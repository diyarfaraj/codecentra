'use client'

import { motion } from 'framer-motion'
import {
  Database,
  Server,
  Globe,
  Code2,
  Layers,
  Monitor
} from 'lucide-react'

const expertise = [
  {
    title: 'Backend Development',
    description: 'Building robust, scalable APIs and server-side applications with modern frameworks and best practices.',
    icon: Server,
    skills: ['.NET', 'Node.js', 'Python'],
  },
  {
    title: 'Database Architecture',
    description: 'Designing efficient database schemas and optimizing queries for high-performance data management.',
    icon: Database,
    skills: ['MSSQL Server', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Microservices',
    description: 'Decomposing monolithic applications into scalable, maintainable microservice architectures.',
    icon: Layers,
    skills: ['Docker', 'Kubernetes', 'API Gateway'],
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Deploying and managing cloud-native solutions across major cloud providers.',
    icon: Globe,
    skills: ['AWS', 'Azure', 'GCP'],
  },
  {
    title: 'System Integration',
    description: 'Connecting disparate systems and enabling seamless data flow across your organization.',
    icon: Code2,
    skills: ['REST APIs', 'GraphQL', 'gRPC', 'Message Queues'],
  },
  {
    title: 'Monitoring & Observability',
    description: 'Implementing comprehensive monitoring, logging, and alerting for system reliability.',
    icon: Monitor,
    skills: ['Prometheus', 'Grafana', 'ELK Stack'],
  },
]

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">
            Our Expertise
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Deep technical knowledge across the full stack of modern enterprise infrastructure
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gray-50 rounded-2xl p-8 hover:bg-primary-900 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-accent-100 group-hover:bg-accent-500 flex items-center justify-center mb-6 transition-colors duration-500">
                <item.icon className="w-6 h-6 text-accent-600 group-hover:text-white transition-colors duration-500" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-primary-900 group-hover:text-white mb-3 transition-colors duration-500">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 group-hover:text-gray-300 mb-6 transition-colors duration-500">
                {item.description}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium bg-white group-hover:bg-primary-800 text-primary-700 group-hover:text-accent-400 rounded-full transition-colors duration-500"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
