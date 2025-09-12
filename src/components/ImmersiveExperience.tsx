import React from 'react';
import { Camera, Bot, MapPin, Archive, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const ImmersiveExperience = () => {
  const features = [
    {
      id: 1,
      title: "360° Virtual Tours",
      description: "Explore monastery interiors with immersive panoramic views and guided narration.",
      status: "45 Tours Available",
      icon: Camera,
      gradient: "from-red-500 to-pink-500",
      statusColor: "text-orange-500",
      link: "/virtual-tours"
    },
    {
      id: 2,
      title: "AI Smart Guide",
      description: "Intelligent chatbot providing personalized monastery recommendations and cultural insights.",
      status: "24/7 Available",
      icon: Bot,
      gradient: "from-blue-500 to-cyan-500",
      statusColor: "text-orange-400",
      link: "#"
    },
    {
      id: 3,
      title: "Interactive Mapping",
      description: "Geo-tagged monastery locations with routes, transport, and nearby attractions.",
      status: "Real-time Data",
      icon: MapPin,
      gradient: "from-green-500 to-emerald-500",
      statusColor: "text-green-500",
      link: "/#map"
    },
    {
      id: 4,
      title: "Digital Archives",
      description: "Preserved manuscripts, murals, and artifacts with AI-powered search capabilities.",
      status: "5000+ Items",
      icon: Archive,
      gradient: "from-orange-500 to-yellow-500",
      statusColor: "text-orange-500",
      link: "/digital-archives"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50" />
      
      {/* Decorative Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Floating Circles */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-200/30 to-amber-200/30 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-yellow-200/30 to-orange-200/30 rounded-full blur-lg"
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-amber-200/20 to-yellow-200/20 rounded-full blur-2xl"
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
        
        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-32 right-1/3 w-16 h-16 bg-gradient-to-br from-orange-300/20 to-amber-300/20 rotate-45"
          animate={{
            rotate: [45, 405, 45],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-32 right-10 w-12 h-12 bg-gradient-to-br from-yellow-300/20 to-orange-300/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Immersive Digital Experience
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Cutting-edge technology meets ancient wisdom in our comprehensive digital heritage platform.
          </motion.p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Link to={feature.link || "#"} key={feature.id}>
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8 + (index * 0.1), 
                  ease: "easeOut" 
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                >
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  status={feature.status}
                  statusColor={feature.statusColor}
                  gradient={feature.gradient}
                  icon={IconComponent}
                />
              </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
  status: string;
  statusColor: string;
  gradient: string;
  icon: React.ComponentType<{ className?: string }>;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  status,
  statusColor,
  gradient,
  icon: IconComponent
}) => {
  const getGradientClass = (gradient: string) => {
    switch (gradient) {
      case 'from-red-500 to-pink-500':
        return 'bg-gradient-red-pink';
      case 'from-blue-500 to-cyan-500':
        return 'bg-gradient-blue-cyan';
      case 'from-green-500 to-emerald-500':
        return 'bg-gradient-green-emerald';
      case 'from-orange-500 to-yellow-500':
        return 'bg-gradient-orange-yellow';
      default:
        return 'bg-gradient-to-br from-purple-500 to-pink-500';
    }
  };

  return (
    <div className="group h-full">
      <div className="relative w-full h-80 transition-all duration-500 ease-in-out group-hover:scale-105">
        {/* Main Card */}
        <div className={`h-full rounded-3xl ${getGradientClass(gradient)} transition-all duration-500 ease-in-out shadow-xl group-hover:shadow-2xl group-hover:shadow-orange-500/20 relative overflow-hidden`}>
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />
            <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          </div>
          
          {/* Glass Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm" />
          
          {/* Content */}
          <div className="relative z-10 p-8 h-full flex flex-col">
            {/* Icon */}
            <motion.div 
              className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/30"
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.2 }
              }}
            >
              <IconComponent className="h-8 w-8 text-white" />
            </motion.div>
            
            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-white/95 transition-colors">
              {title}
            </h3>
            
            {/* Description */}
            <p className="text-white/85 text-sm leading-relaxed mb-6 flex-grow group-hover:text-white/90 transition-colors">
              {description}
            </p>
            
            {/* Status */}
            <motion.div 
              className="flex items-center justify-between mt-auto"
              whileHover={{ x: 5 }}
            >
              <span className={`text-sm font-semibold text-black-500 bg-white/10 px-3 py-1 rounded-full`}>
                {status}
              </span>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImmersiveExperience;
