import { AboutSection } from "./AboutSection";
import ContactForm from "./ContactForm";
import FeatureCards from "./FeatureCard";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { TopNavBar } from "./TopNavBar";
import { useEffect } from 'react';

export const HomePage = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-12');
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe elements with animation class
    const animatedElements = document.querySelectorAll('.animate-slide-up');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <TopNavBar />

      <div className="min-h-screen">
        {/* Hero Section */}
        <div id="home" className="text-center pt-12 md:pt-20 px-4 opacity-0 translate-y-12 transition-all duration-700 ease-out animate-slide-up">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold text-transparent bg-clip-text leading-tight md:leading-snug bg-[radial-gradient(closest-side_at_center,_#003091_0%,_#042256_90%)]">
            Автоматизируйте<br />
            работу с помощью <span className="font-bold">ИИ</span>
          </h1>
        </div>

        {/* Illustration Section */}
        <section className="relative py-10 md:py-20 lg:py-24 bg-white overflow-hidden opacity-0 translate-y-12 transition-all duration-700 ease-out delay-200 animate-slide-up">
          <div className="container mx-auto px-4">
            {/* Left Image - Digital tools */}
            <div className="hidden md:block absolute left-4 md:left-10 top-10 md:top-20 lg:top-0 z-10 opacity-0 translate-y-12 transition-all duration-700 ease-out delay-300 animate-slide-up">
              <img 
                src="1.svg" 
                alt="Digital tools illustration" 
                className="w-44 h-44 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-128 xl:h-128 object-contain" 
              />
            </div>
            
            {/* Center Lottie Animation */}
            <div className="hidden md:flex justify-center items-center relative z-20 opacity-0 translate-y-12 transition-all duration-700 ease-out delay-500 animate-slide-up">
              <DotLottieReact
                src="https://lottie.host/43c46aec-5d04-421a-ac3c-8cfada59d0a9/PmZMiJaqgx.lottie"
                loop
                autoplay
                className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
              />
            </div>
            
            {/* Right Image - AI Robot */}
            <div className="hidden md:block absolute right-4 md:right-10 md:top-20 lg:top-0 z-10 opacity-0 translate-y-12 transition-all duration-700 ease-out delay-700 animate-slide-up">
              <img 
                src="ai.png" 
                alt="AI Robot illustration" 
                className="w-44 h-44 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-128 xl:h-128 object-contain" 
              />
            </div>
            
            {/* Spacer to ensure proper section height */}
            <div className="h-0 sm:h-0 md:h-0 lg:h-0 xl:h-0"></div>
          </div>
        </section>

        {/* Why AI Section */}
        <div className="text-center pt-16 md:pt-24 px-4 opacity-0 translate-y-12 transition-all duration-700 ease-out animate-slide-up">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold text-transparent bg-clip-text leading-tight md:leading-snug bg-[radial-gradient(closest-side_at_center,_#003091_0%,_#042256_90%)]">
            Почему ИИ?
          </h1>
        </div>

        {/* Benefits Cards */}
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 opacity-0 translate-y-12 ease-out delay-100 animate-slide-up">
              <div className="mb-4 flex justify-center">
                <img 
                  src="3.svg" 
                  alt="Efficiency Illustration" 
                  className="w-16 h-16 md:w-20 md:h-20 lg:w-64 lg:h-64 object-contain" 
                />
              </div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                Повышение эффективности
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Автоматизируйте рутинные задачи и повышайте продуктивность
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 opacity-0 translate-y-12 ease-out delay-200 animate-slide-up">
              <div className="mb-4 flex justify-center">
                <img 
                  src="4.svg" 
                  alt="Time Saving Illustration" 
                  className="w-16 h-16 md:w-20 md:h-20 lg:w-64 lg:h-64 object-contain" 
                />
              </div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                Экономия времени
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Сократите время выполнения задач с помощью ИИ-решений
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 md:col-span-2 lg:col-span-1 md:mx-auto md:max-w-sm lg:max-w-none opacity-0 translate-y-12 ease-out delay-300 animate-slide-up">
              <div className="mb-4 flex justify-center">
                <img 
                  src="2.svg" 
                  alt="Quality Illustration" 
                  className="w-16 h-16 md:w-20 md:h-20 lg:w-64 lg:h-64 object-contain" 
                />
              </div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                Высокое качество
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Обеспечьте гибкость и стабильность бизнес-процессов
              </p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="text-center pt-12 md:pt-16 px-4 opacity-0 translate-y-12 transition-all duration-700 ease-out animate-slide-up">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold text-transparent bg-clip-text leading-tight md:leading-snug bg-[radial-gradient(closest-side_at_center,_#003091_0%,_#042256_90%)]">
            Наши услуги
          </h1>
        </div>
        
        <div id="feature" className="container mx-auto px-4 py-12 opacity-0 translate-y-12 transition-all duration-700 ease-out delay-200 animate-slide-up">
          <FeatureCards />
        </div>
              
        {/* About us */}
        <div id="about-us" className="text-center pt-12 md:pt-16 px-4 opacity-0 translate-y-12 transition-all duration-700 ease-out animate-slide-up">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold text-transparent bg-clip-text leading-tight md:leading-snug bg-[radial-gradient(closest-side_at_center,_#003091_0%,_#042256_90%)]">
            О нас
          </h1>
        </div>
        <div className="opacity-0 translate-y-12 transition-all duration-700 ease-out delay-200 animate-slide-up">
          <AboutSection />
        </div>

        {/* Contact */}
        <div id="contacts" className="opacity-0 translate-y-12 transition-all duration-700 ease-out animate-slide-up">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};