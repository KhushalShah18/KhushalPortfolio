import { useEffect, useRef } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { 
  Cloud, 
  Settings, 
  TrendingUp, 
  Users, 
  Lightbulb,
  Server,
  Shield,
  Zap,
  Database,
  ChevronDown,
  ExternalLink,
  MapPin,
  Briefcase,
  Heart,
  Mail,
  Menu,
  X,
  GraduationCap,
  CheckCircle,
  Award,
  Calendar
} from "lucide-react";
import { useState } from "react";
import { certifications } from "../data/certifications";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Initialize intersection observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Observe all animate-on-scroll elements
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  // Icon mapping for certifications
  const getIconComponent = (iconName: string) => {
    const icons = {
      cloud: Cloud,
      settings: Settings,
      shield: Shield,
      database: Database,
      server: Server,
      award: Award,
    };
    return icons[iconName as keyof typeof icons] || Award;
  };

  // Color mapping for certifications
  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: "bg-blue-100", icon: "bg-blue-600", badge: "bg-blue-100 text-blue-800" },
      green: { bg: "bg-green-100", icon: "bg-green-600", badge: "bg-green-100 text-green-800" },
      purple: { bg: "bg-purple-100", icon: "bg-purple-600", badge: "bg-purple-100 text-purple-800" },
      orange: { bg: "bg-orange-100", icon: "bg-orange-600", badge: "bg-orange-100 text-orange-800" },
      teal: { bg: "bg-teal-100", icon: "bg-teal-600", badge: "bg-teal-100 text-teal-800" },
      indigo: { bg: "bg-indigo-100", icon: "bg-indigo-600", badge: "bg-indigo-100 text-indigo-800" },
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const skills = [
    {
      icon: Cloud,
      title: "Microsoft Azure",
      description: "Cloud platform expertise including Azure DevOps, ARM templates, and serverless computing",
      badges: ["Solutions Architect Expert"],
      gradient: "from-blue-50 to-indigo-50",
      iconBg: "bg-blue-600",
    },
    {
      icon: Settings,
      title: "DevOps & CI/CD",
      description: "Automation pipelines, infrastructure as code, and continuous integration/deployment practices",
      badges: ["Azure DevOps", "GitHub Actions"],
      gradient: "from-green-50 to-emerald-50",
      iconBg: "bg-green-600",
    },
    {
      icon: Server,
      title: "Systems Engineering",
      description: "Performance optimization, system architecture design, and infrastructure management",
      badges: ["Performance Tuning", "Monitoring"],
      gradient: "from-purple-50 to-violet-50",
      iconBg: "bg-purple-600",
    },
    {
      icon: Database,
      title: "Infrastructure",
      description: "Cloud infrastructure design, containerization, and scalable architecture patterns",
      badges: ["Docker", "Kubernetes"],
      gradient: "from-orange-50 to-red-50",
      iconBg: "bg-orange-600",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise security practices, compliance frameworks, and secure system design",
      badges: ["Azure Security", "Compliance"],
      gradient: "from-teal-50 to-cyan-50",
      iconBg: "bg-teal-600",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "System performance tuning, cost optimization, and operational efficiency improvements",
      badges: ["Cost Optimization", "Monitoring"],
      gradient: "from-indigo-50 to-blue-50",
      iconBg: "bg-indigo-600",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl text-blue-600">Khushal Shah</div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("certifications")}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Certifications
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Contact
              </button>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 mt-4 py-4 space-y-2">
              <button
                onClick={() => scrollToSection("hero")}
                className="block w-full text-left py-2 text-gray-700 hover:text-blue-600"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left py-2 text-gray-700 hover:text-blue-600"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="block w-full text-left py-2 text-gray-700 hover:text-blue-600"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block w-full text-left py-2 text-gray-700 hover:text-blue-600"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("certifications")}
                className="block w-full text-left py-2 text-gray-700 hover:text-blue-600"
              >
                Certifications
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left py-2 text-gray-700 hover:text-blue-600"
              >
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-blue-600 font-medium">
                  <span className="text-2xl">👋</span>
                  <span>Hi, I'm</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Khushal Shah
                </h1>
                <div className="space-y-2">
                  <p className="text-xl text-blue-600 font-semibold">Systems Engineer</p>
                  <p className="text-lg text-gray-600">Azure Solutions Architect Expert | DevOps Enthusiast</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
                Specializing in cloud infrastructure, DevOps practices, and system performance optimization at Fundserv, Toronto.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-blue-600 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  Get In Touch
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
                  onClick={() => window.open("https://www.linkedin.com/in/shahkhushal/", "_blank")}
                >
                  <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/images/microsoft-speciality-badge.png" 
                alt="Professional tech workspace" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700">Available for Projects</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-400 hover:text-blue-600 transition-colors duration-300 animate-bounce"
            >
              <ChevronDown className="w-8 h-8" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="animate-on-scroll">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">🚀 About Me</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Passionate about implementing efficient solutions that drive business value and reduce operational costs
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Systems Engineering Excellence</h3>
                    <p className="text-gray-600">Focused on building robust, scalable systems that can handle enterprise-level workloads while maintaining optimal performance.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Cloud className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Infrastructure Mastery</h3>
                    <p className="text-gray-600">Azure Solutions Architect Expert with deep expertise in designing and implementing cloud-native solutions that drive business transformation.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">DevOps Enthusiasm</h3>
                    <p className="text-gray-600">Passionate about automation, CI/CD pipelines, and creating development workflows that enable teams to deliver high-quality software faster.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="animate-on-scroll">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">📚 Education</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Computer Engineering & Technology</h3>
                      <p className="text-blue-600 font-semibold text-lg">Seneca College</p>
                      <p className="text-gray-600 mt-2">Comprehensive program covering software development, systems design, and emerging technologies</p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                        <GraduationCap className="w-8 h-8 text-blue-600" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="animate-on-scroll">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
              <p className="text-xl text-gray-600">Technologies and tools I work with to build amazing solutions</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <Card 
                  key={index}
                  className={`bg-gradient-to-br ${skill.gradient} rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-0`}
                >
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 ${skill.iconBg} rounded-lg flex items-center justify-center mb-4`}>
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{skill.title}</h3>
                    <p className="text-gray-600 mb-4">{skill.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.badges.map((badge, badgeIndex) => (
                        <Badge 
                          key={badgeIndex} 
                          variant="secondary" 
                          className="bg-white/80 text-gray-700 hover:bg-white"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="animate-on-scroll">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">🏆 Certifications</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional certifications validating expertise in cloud technologies and systems engineering
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert) => {
                const IconComponent = getIconComponent(cert.icon);
                const colorClasses = getColorClasses(cert.color);
                
                return (
                  <Card 
                    key={cert.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                    onClick={() => cert.verificationUrl && window.open(cert.verificationUrl, "_blank")}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-16 h-16 ${colorClasses.bg} rounded flex items-center justify-center overflow-hidden`}>
                          {cert.imageUrl ? (
                            <img 
                              src={cert.imageUrl} 
                              alt={`${cert.title} badge`}
                              className="w-full h-full object-contain"
                              onLoad={() => {
                                console.log(`Successfully loaded: ${cert.imageUrl}`);
                              }}
                              onError={(e) => {
                                console.error(`Failed to load image: ${cert.imageUrl}`);
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  const icon = parent.querySelector('.fallback-icon');
                                  if (icon) {
                                    (icon as HTMLElement).style.display = 'block';
                                  }
                                }
                              }}
                            />
                          ) : null}
                          <IconComponent className={`fallback-icon w-8 h-8 text-${cert.color}-600 ${cert.imageUrl ? 'hidden' : ''}`} />
                        </div>
                        <Badge variant="secondary" className={colorClasses.badge}>
                          {cert.level}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-gray-600 mb-2 text-sm font-medium">
                        {cert.issuer}
                      </p>
                      <p className="text-gray-600 mb-4">
                        {cert.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{new Date(cert.dateObtained).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                        {cert.verificationUrl && (
                          <ExternalLink className="w-4 h-4 text-gray-400 hover:text-blue-600 transition-colors" />
                        )}
                      </div>
                      {cert.credentialId && (
                        <div className="mt-3 text-xs text-gray-400">
                          Credential ID: {cert.credentialId}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
              
              {certifications.length === 0 && (
                <Card className="bg-white rounded-2xl shadow-lg border-2 border-dashed border-gray-300 col-span-full">
                  <CardContent className="p-12 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-500 mb-2">
                      No Certifications Added Yet
                    </h3>
                    <p className="text-gray-400 mb-4 max-w-md mx-auto">
                      Add your professional certifications by editing the <code className="bg-gray-100 px-2 py-1 rounded text-sm">client/src/data/certifications.ts</code> file
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
            alt="Modern office setup with professional atmosphere" 
            className="w-full h-full object-cover opacity-5" 
          />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="animate-on-scroll">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Let's Connect & Collaborate</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                💼 Open to collaborating on cloud infrastructure and DevOps projects
              </p>
              <div className="w-24 h-1 bg-white mx-auto mt-6"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-white mb-6">Ready to work together?</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 text-blue-100">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Location</p>
                      <p>Toronto, Canada</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-blue-100">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Currently</p>
                      <p>Systems Engineer at Fundserv</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-blue-100">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Passionate About</p>
                      <p>Cloud Infrastructure & DevOps Innovation</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="bg-white rounded-2xl shadow-2xl">
                <CardContent className="p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Get In Touch</h4>
                  
                  <div className="space-y-4">
                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg"
                      onClick={() => window.open("https://www.linkedin.com/in/shahkhushal/", "_blank")}
                    >
                      <svg className="mr-3 w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      Connect on LinkedIn
                    </Button>
                    
                    <div className="text-center">
                      <p className="text-gray-600 text-sm">
                        Available for cloud infrastructure and DevOps consulting projects
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white">Khushal Shah</h3>
              <p className="text-gray-400">Systems Engineer | Cloud Admin</p>
            </div>
            <div className="flex justify-center space-x-6 mb-8">
              <button
                onClick={() => window.open("https://www.linkedin.com/in/shahkhushal/", "_blank")}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 Khushal Shah. Built with passion for cloud infrastructure and DevOps excellence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
