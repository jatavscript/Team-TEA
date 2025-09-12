import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      tour: "Losar Festival Experience",
      image: "/api/placeholder/80/80",
      quote: "Experiencing Losar Festival in Sikkim was absolutely magical! The traditional dances, monastery visits, and warm hospitality of the local people made it an unforgettable spiritual journey. The organization was flawless and our guide was incredibly knowledgeable about Buddhist traditions.",
      highlight: "Life-changing spiritual experience"
    },
    {
      id: 2,
      name: "Marcus Schmidt",
      location: "Berlin, Germany", 
      rating: 5,
      tour: "Saga Dawa Pilgrimage",
      image: "/api/placeholder/80/80",
      quote: "The Saga Dawa festival exceeded all my expectations. Witnessing thousands of butter lamps being lit at Tashiding Monastery while surrounded by the Himalayan peaks was deeply moving. This tour perfectly balanced cultural immersion with comfortable accommodations.",
      highlight: "Exceeded all expectations"
    },
    {
      id: 3,
      name: "Priya Sharma",
      location: "Mumbai, India",
      rating: 5,
      tour: "Bumchu Festival Tour",
      image: "/api/placeholder/80/80",
      quote: "As someone interested in Buddhist philosophy, this tour was perfect. The sacred water ceremony at Bumchu Festival was fascinating, and I learned so much about Sikkimese culture. The small group size made the experience intimate and personal.",
      highlight: "Perfect cultural immersion"
    },
    {
      id: 4,
      name: "James Wilson",
      location: "London, UK",
      rating: 5,
      tour: "Multi-Festival Journey",
      image: "/api/placeholder/80/80",
      quote: "I participated in three different festivals during my month-long stay in Sikkim. Each celebration offered unique insights into the rich cultural tapestry of this beautiful state. The photography opportunities were endless, and the memories will last a lifetime.",
      highlight: "Memories that last a lifetime"
    },
    {
      id: 5,
      name: "Elena Kovač",
      location: "Zagreb, Croatia",
      rating: 5,
      tour: "Traditional Arts & Festivals",
      image: "/api/placeholder/80/80",
      quote: "The combination of festival celebrations and traditional arts workshops was brilliant. I learned thangka painting and participated in butter lamp making. The local artisans were patient teachers, and the festival atmosphere made everything more special.",
      highlight: "Brilliant cultural workshops"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-festival-gold fill-festival-gold' : 'text-muted-foreground'}`} 
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-purple text-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Traveler Testimonials
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Hear from fellow travelers who have experienced the magic of Sikkim's sacred celebrations. 
            Their stories inspire our commitment to authentic cultural experiences.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="p-8 md:p-12 bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-elegant">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <Quote className="w-12 h-12 opacity-30 mb-4 mx-auto md:mx-0" />
                <blockquote className="text-xl md:text-2xl leading-relaxed mb-6">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                
                <div className="space-y-2">
                  <div className="flex justify-center md:justify-start space-x-1 mb-4">
                    {renderStars(testimonials[currentTestimonial].rating)}
                  </div>
                  
                  <div className="font-bold text-lg">{testimonials[currentTestimonial].name}</div>
                  <div className="opacity-80">{testimonials[currentTestimonial].location}</div>
                  <div className="text-festival-gold font-medium">
                    {testimonials[currentTestimonial].tour}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={prevTestimonial}
                className="text-white hover:bg-white/20"
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                Previous
              </Button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-festival-gold' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
              
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={nextTestimonial}
                className="text-white hover:bg-white/20"
              >
                Next
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-festival-gold mb-2">1000+</div>
            <div className="opacity-90">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-festival-gold mb-2">4.9</div>
            <div className="opacity-90">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-festival-gold mb-2">25+</div>
            <div className="opacity-90">Festivals Covered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-festival-gold mb-2">100%</div>
            <div className="opacity-90">Satisfaction Rate</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Create Your Own Story?</h3>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of travelers who have discovered the magic of Sikkim's festivals
          </p>
          <Button size="lg" variant="secondary" className="shadow-glow">
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;